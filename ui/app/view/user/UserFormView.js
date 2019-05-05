Ext.define('GoalTracker.view.user.UserFormView', {
    extend: 'Ext.form.Panel',

    xtype: 'userForm',
    title: 'User Entry Form',

    controller: 'user',

    items: [{
        xtype: 'fieldcontainer',
        layout: 'hbox',
        width: '100%',
        fieldDefaults:
        {
            labelAlign: 'top',
            labelStyle: 'font-weight:bold'
        },
        items: [{
            fieldLabel: 'Id',
            xtype: 'numberfield',
            name: 'id'
        },
        {
            fieldLabel: 'Name',
            xtype: 'textfield',
            name: 'name'
        }]
    }],

    buttons: [{
        text: 'Create',
        itemId: 'btnCreate',
        formBind: true,
        handler: 'onCreateClick'
    }]

});