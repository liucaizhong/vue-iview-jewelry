module.exports = {
  DEVURL: 'http://localhost:3000/api-auth/admin',
  PRODURL: '/api-auth/admin',
  IDTYPE: [{
    key: '0',
    value: '身份证',
  }, {
    key: '1',
    value: '护照',
  }, {
    key: '2',
    value: '其他证件',
  }],
  GENDER: [{
    value: '男',
    key: '0',
  }, {
    value: '女',
    key: '1',
  }],
  ADDRESSMAXNUM: 5,
  MAINIMAGENUM: 6,
  MAINIMAGEMAXSIZE: 1024,
  CSVFILEMAXSIZE: 1024,
  ZIPFILEMAXSIZE: 5120,
  SIDEBARMENUS: [{
    name: '会员管理',
    icon: 'ios-people',
    items: [{
      name: '信息管理',
      icon: 'search',
      url: '/dashboard/member'
    }, {
      name: '预约管理',
      icon: 'ios-list',
      url: '/dashboard/booking'
    }]
  }, {
    name: '商品管理',
    icon: 'ios-box',
    items: [{
      name: '商品查询',
      icon: 'search',
      url: '/dashboard/goods',
    }, {
      name: '新增商品',
      icon: 'ios-plus',
      url: '/dashboard/new-goods',
    }, {
      name: '批量导入',
      icon: 'social-buffer',
      url: '/dashboard/batch-import-goods',
    }],
  }, {
    name: '服务管理',
    icon: 'ios-filing',
    items: [{
      name: '租赁服务',
      icon: 'ios-paperplane',
      url: '/dashboard/rent-service',
    }, {
      name: '套餐服务',
      icon: 'ios-paper',
      url: '/dashboard/package-service',
    }, {
      name: '销售服务',
      icon: 'android-send',
      url: '/dashboard/sale-service',
    }],
  }],
  SIDEBARSUBMENUS: {
    '/dashboard/member': '0-0',
    '/dashboard/booking': '0-1',
    '/dashboard/goods': '1-0',
    '/dashboard/new-goods': '1-1',
    '/dashboard/batch-import-goods': '1-2',
    '/dashboard/rent-service': '2-0',
    '/dashboard/package-service': '2-1',
    '/dashboard/sale-service': '2-2',
  },
  CATEGORYOFGOOD: [{
    key: '0',
    value: '项链',
  }, {
    key: '1',
    value: '戒指',
  }, {
    key: '2',
    value: '手镯',
  }, {
    key: '3',
    value: '耳饰',
  }, {
    key: '4',
    value: '手链',
  }, {
    key: '5',
    value: '脚饰',
  }, {
    key: '6',
    value: '胸针&领针',
  }, {
    key: '7',
    value: '摆件',
  }],
  GOLDTYPE: [{
    value: '白金',
    key: 'W',
  }, {
    value: '黄金',
    key: 'Y',
  }, {
    value: '玫瑰金',
    key: 'R',
  }, {
    value: '铂金',
    key: 'pt',
  }],
  GOLDPURITY: [{
    key: '0',
    value: '18K',
  }, {
    key: '1',
    value: '24K',
  }, {
    key: '2',
    value: '900',
  }],
  MEMBERSOURCE: [{
    key: '0',
    value: '管理端',
  }, {
    key: '1',
    value: '公众号',
  }],
  BRANDOPTIONS: ['THEIA', '通灵', 'I do'],
  SERIESOPTIONS: ['经典系列', '奢华系列'],
  RELEASESTATUS: [{
    key: '0',
    value: '未发布',
    label: '否',
  }, {
    key: '1',
    value: '已发布',
    label: '是',
  }],
  CERTIFICATES: [{
    key: '0',
    value: 'IGI证书',
  }, {
    key: '1',
    value: 'GIA证书',
  }, {
    key: '2',
    value: 'HRD证书',
  }, {
    key: '3',
    value: 'AGS证书',
  }, {
    key: '4',
    value: 'EGL证书',
  }, {
    key: '5',
    value: 'NGTC证书',
  }, {
    key: '6',
    value: 'GemEx®兼美证书',
  }],
}
