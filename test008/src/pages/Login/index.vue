<template>
  <div class="login">
    <!-- <h1>hello</h1> -->

    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <div>
            <h1>内容管理系统管理后台</h1>
          </div>
          <!-- <el-button class="button">Operation button</el-button> -->
        </div>
      </template>

      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" autocomplete="off">

        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>

        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" placeholder="确认密码"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="success" @click="Login('ruleForm')">登录</el-button>
          <el-button type="primary" @click="Register('ruleForm')">注册</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>

    </el-card>
  </div>
</template>

<script>
//在使用的组建中载入
// banner 自定义接口的名字
import { login, register } from "@/service/http/api.js";

// import { useRouter } from 'vue-router'


import qs from 'qs';
export default {
  data () {
    var validateUserName = (rule, value, callback) => {
      const reg = /^[\w-]{1,10}$/
      if (value === '') {
        return callback(new Error('用户名不能为空'));
      } else if (!reg.test(value)) {
        return callback(new Error('用户名不能含有中文'));
      }
      else {
        callback()
      }

    };
    var validatePass = (rule, value, callback) => {
      const pas = /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
      if (value === '') {
        callback(new Error('请输入密码'));
      } else if (!pas.test(value)) {
        return callback(new Error('密码应为6-12位字母或数字组成'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      const pas = /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (!pas.test(value)) {
        return callback(new Error('密码应为6-12位字母或数字组成'));
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: '',
        password: '',
        checkPass: ''
      },
      rules: {
        username: [
          { validator: validateUserName, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],

      }
    };
  },
  methods: {
    //路由跳转
    Routerlink () {
      this.$router.push({ path: '/' })
    },
    // 消息提示
    err (text) {
      this.$notify.error({
        title: '提示',
        message: text,
        duration: 2000
      });
    },
    //登录
    Login (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const data = {
            username: this.ruleForm.username,
            password: this.ruleForm.password
          }

          login(qs.stringify(data)).then(res => {
            if (res.code === 200) {
              let token = res.token
              this.$store.commit('LOGIN_IN', token)
              this.Routerlink()
            } else {
              const text = "登录失败！"
              this.err(text)
            }
          })

        } else {
          const text = "登录失败！请确认用户信息是否正确"
          this.err(text)
          return false;
        }
      });
    },

    //注册
    Register (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const params = {
            username: this.ruleForm.username,
            password: this.ruleForm.password
          }
          register(qs.stringify(params)).then(res => {
            // console.log(res);
            if (res.code === 200) {
              this.Routerlink()
            } else {
              const text = "注册失败！"
              this.err(text)
            }
          })

        } else {
          const text = "注册失败！请确认注册信息是否正确"
          this.err(text)
          return false;
        }
      });
    },

    resetForm (formName) {
      this.$refs[formName].resetFields();
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang='less' scoped>
.login {
  background: url("@/assets/风景003.jpg") center no-repeat;
  // background: url('');
  width: 100vw;
  height: 100vh;
  position: relative;
}

.box-card {
  width: 480px;
  position: absolute;
  top: 25%;
  left: 35%;
  background-color: #65768557;

  ::v-deep .el-form-item__label {
    color: #fff;
  }
  .card-header {
    h1 {
      color: #fff;
    }

    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
