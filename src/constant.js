module.exports = {
  // DEVURL: 'http://localhost:3000/api-auth/admin',
  // PRODURL: '/api-auth/admin',
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
  }, {
    key: '3',
    value: '950',
  }, {
    key: '4',
    value: '990',
  }],
  GOLDTYPEPURITY: [{
    label: '白金',
    value: 'W',
    children: [{
      label: '18K',
      value: '0',
    }, {
      label: '24K',
      value: '1',
    }],
  }, {
    label: '黄金',
    value: 'Y',
    children: [{
      label: '18K',
      value: '0',
    }, {
      label: '24K',
      value: '1',
    }],
  }, {
    label: '玫瑰金',
    value: 'R',
  }, {
    label: '铂金',
    value: 'pt',
    children: [{
      label: '900',
      value: '2',
    }, {
      label: '950',
      value: '3',
    }, {
      label: '990',
      value: '4',
    }],
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
    value: '无',
  }, {
    key: '1',
    value: 'IGI证书',
  }, {
    key: '2',
    value: 'GIA证书',
  }, {
    key: '3',
    value: 'HRD证书',
  }, {
    key: '4',
    value: 'AGS证书',
  }, {
    key: '5',
    value: 'EGL证书',
  }, {
    key: '6',
    value: 'NGTC证书',
  }, {
    key: '7',
    value: 'GemEx®兼美证书',
  }],
  SERVICETYPE: [{
    key: '0',
    value: '租赁服务',
  }, {
    key: '1',
    value: '套餐服务',
  }],
  SERVICESTATUS: [{
    key: '0',
    value: '已创建',
  }, {
    key: '1',
    value: '待支付',
  }, {
    key: '2',
    value: '待取货',
  }, {
    key: '3',
    value: '租赁中',
  }, {
    key: '4',
    value: '租赁完成',
  }, {
    key: '5',
    value: '租转售完成',
  }],
  // BUSINESSSTATUS: [{
  //   key: '0',
  //   value: '已创建',
  // }, {
  //   key: '1',
  //   value: '待支付',
  // }, {
  //   key: '2',
  //   value: '待取货',
  // }, {
  //   key: '3',
  //   value: '租赁中',
  // }, {
  //   key: '4',
  //   value: '已完成',
  // }],
  LEASEHOLDSTATUS: [{
    key: '0',
    value: '正常',
  }, {
    key: '1',
    value: '损坏',
  }],
  CREDITSTATUS: [{
    key: '0',
    value: '正常',
  }, {
    key: '1',
    value: '逾期',
  }, {
    key: '2',
    value: '超限',
  }],
  DELIVERYMODE: [{
    key: '0',
    value: '邮寄',
  }, {
    key: '1',
    value: '自提',
  }],
  // COMPLETEMODE: [{
  //   key: '0',
  //   value: '租赁完成',
  // }, {
  //   key: '1',
  //   value: '租转售完成',
  // }],
  ORDERTYPE: [{
    key: '0',
    value: '租赁订单',
  }, {
    key: '1',
    value: '套餐订单',
  }, {
    key: '2',
    value: '补差订单',
  }, {
    key: '3',
    value: '赔偿订单',
  }, {
    key: '4',
    value: '补押订单',
  }, {
    key: '5',
    value: '补贴订单',
  }],
  PAYMENTTYPE: [{
    key: '0',
    value: '微信',
  }, {
    key: '1',
    value: '线下POS',
  }],
  ORDERSTATUS: [{
    key: '0',
    value: '待支付',
  }, {
    key: '1',
    value: '已支付',
  }, {
    key: '2',
    value: '退款中',
  }, {
    key: '3',
    value: '已退款',
  }, {
    key: '4',
    value: '订单关闭',
  }],
}
