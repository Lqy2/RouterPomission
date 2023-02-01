module.exports = [
  //一级路由
  //   栏目管理
  //   内容管理
  //   系统管理
  //   其他操作
  {
    //id为1是home
    id: 2,
    pid: 0,//pid为父级路由的id 0则是自己
    name: 'Column',
    path: '/Column',
    component: 'Column/index',
    title: '栏目管理',
    icon: 'Operation'
  },
  {
    id: 3,
    pid: 0,
    name: 'Content',
    path: '/Content',
    component: 'Content/index',
    title: '内容管理',
    icon: 'Document'
  },
  {
    id: 4,
    pid: 3,
    name: 'InformationDelivery',
    path: 'InformationDelivery',
    component: 'Content/InformationDelivery/index',
    link: '/Content/InformationDelivery',
    title: '新增信息',
    icon: 'Tickets'
  },
  {
    id: 5,
    pid: 3,
    name: 'Commentmanagement',
    path: 'Commentmanagement',
    component: 'Content/Commentmanagement/index',
    link: '/Content/Commentmanagement',
    title: '评论管理',
    icon: 'Comment'
  },
  {
    id: 6,
    pid: 0,
    name: 'SystemManagement',
    path: '/SystemManagement',
    component: 'SystemManagement/index',
    link: '',
    title: '系统管理',
    icon: 'Setting'
  },
  {
    id: 7,
    pid: 6,
    name: 'PermissionManagement',
    path: 'PermissionManagement',
    component: 'SystemManagement/PermissionManagement/index',
    link: '',
    title: '权限管理',
    icon: 'Operation'
  },
  {
    id: 8,
    pid: 6,
    name: 'SiteDataStatistics',
    path: 'SiteDataStatistics',
    component: 'SystemManagement/SiteDataStatistics/index',
    link: '',
    title: '站点数据统计',
    icon: 'Histogram'
  },
  {
    id: 9,
    pid: 6,
    name: 'AnnouncementManagement',
    path: 'AnnouncementManagement',
    component: 'SystemManagement/AnnouncementManagement/index',
    link: '',
    title: '公告管理',
    icon: 'DataAnalysis'
  },
  {
    id: 10,
    pid: 6,
    name: 'TrafficStatistics',
    path: 'TrafficStatistics',
    component: 'SystemManagement/TrafficStatistics/index',
    link: '',
    title: '流量统计',
    icon: 'PieChart'

  },
  {
    id: 11,
    pid: 0,
    name: 'OtherOperations',
    path: '/OtherOperations',
    component: '',
    link: '',
    title: '其他操作',
    icon: 'Tools'
  },
  {
    id: 12,
    pid: 11,
    name: 'SourceManagement',
    path: 'SourceManagement',
    component: 'OtherOperations/SourceManagement/index',
    link: '',
    title: '来源管理',
    icon: 'MapLocation'
  },
  {
    id: 13,
    pid: 11,
    name: 'AuthorManagement',
    path: 'AuthorManagement',
    component: 'OtherOperations/AuthorManagement/index',
    link: '',
    title: '作者管理',
    icon: "Avatar"
  },
  {
    id: 14,
    pid: 11,
    name: 'VotingManagement',
    path: 'VotingManagement',
    component: 'OtherOperations/VotingManagement/index',
    link: '',
    title: '投票管理',
    icon: 'Grid'
  },

]
