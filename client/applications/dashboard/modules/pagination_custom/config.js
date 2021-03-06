import __ from 'client/locale/dashboard.lang.json';
import React from 'react';

export default {
  banner: {
    description: <span>{__.pagination_custom_des}<br />{__.source_code}<a href="https://github.com/unitedstack/ufec.pro/tree/master/client/applications/dashboard/modules/pagination_custom">https://github.com/unitedstack/ufec.pro/tree/master/client/applications/dashboard/modules/pagination_custom</a></span>
  },
  tabs: [{
    name: ['default_pagination'],
    key: 'pagination'
  }, {
    name: ['pagination_custom'],
    key: 'pagination_custom',
    default: true
  }],
  btns: [{
    value: ['create'],
    key: 'create',
    type: 'create',
    icon: 'plus-circle-o',
    disabled: false
  }, {
    value: ['refresh'],
    key: 'refresh',
    type: 'primary',
    icon: 'reload',
    disabled: false
  }],
  search: {
    placeholder: ['pls_enter', 'id']
  },
  table: {
    rowKey: 'id',
    dataKey: 'id',
    limit: 8,
    pagination: {
      simple: true,
      showSizeChanger: true,
      defaultCurrent: 2,
      showQuickJumper: false
    },
    loading: false,
    columns: [{
      title: ['name'],
      key: 'name',
      dataIndex: 'name'
    }, {
      title: ['email'],
      key: 'email',
      dataIndex: 'email'
    }, {
      title: ['sex'],
      key: 'sex',
      dataIndex: 'sex'
    }, {
      title: ['id'],
      key: 'id',
      dataIndex: 'id'
    }],
    data: []
  }
};
