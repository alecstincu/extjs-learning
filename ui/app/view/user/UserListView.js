Ext.define('GoalTracker.view.user.UserListView', {
    extend: 'Ext.grid.Panel',
    xtype: 'userList',

    controller: 'user',

    title: 'User list',

    requires: [
        'GoalTracker.store.UserListStore'
    ],

    store: {
        type: 'user-list'
    },

    columns: [
        { text: 'Id',  dataIndex: 'id' },
        { text: 'Name',  dataIndex: 'name' }
    ],

    // this is then implemented in UserController
    listeners: {
        select: 'onItemSelected'
    }
});
