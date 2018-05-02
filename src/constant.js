module.exports = {
  IDTYPE: [{
    key: 0,
    value: '证件号',
  }, {
    key: 1,
    value: '护照',
  }, {
    key: 2,
    value: '其他证件',
  }],
  ADDRESSMAXNUM: 5,
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
      url: '/dashboard/add-good'
    }]
  }],
  SIDEBARSUBMENUS: {
    '/dashboard/member': '0-0',
    '/dashboard/booking': '0-1',
    '/dashboard/goods': '1-0',
    '/dashboard/add-good': '1-1',
  },
  CATEGORYOFGOOD: [{
    key: 0,
    value: '项链',
  }, {
    key: 1,
    value: '戒指',
  }, {
    key: 2,
    value: '手镯',
  }, {
    key: 3,
    value: '耳饰',
  }, {
    key: 4,
    value: '手链',
  }, {
    key: 5,
    value: '脚饰',
  }, {
    key: 6,
    value: '胸针&领针',
  }, {
    key: 7,
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
    key: 0,
    value: '18K',
  }, {
    key: 1,
    value: '24K',
  }, {
    key: 1,
    value: '900',
  }],
}
