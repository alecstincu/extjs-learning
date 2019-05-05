Ext.Ajax.request({
    url: 'http://localhost:8080/users',
    method: 'GET',
    timeout: 60000,
    cors: true,
    // fara asta nu merge
    async: false,
    obj: [],
    headers:{'Content-Type': 'application/json'},
    success: function (response) {
       obj = Ext.decode(response.responseText)
    },
    failure: function (response) {
        Ext.Msg.alert('Status', 'Request Failed.');
    }
})

Ext.define('GoalTracker.store.UserListStore', {
    extend: 'Ext.data.Store',

    // atentie trebuie sa fie la fel ca store-type din List.js (locul unde il folosesc)
    alias: 'store.user-list',

    fields: [
        'id',
        'name'
    ],

    data: this.obj,

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
