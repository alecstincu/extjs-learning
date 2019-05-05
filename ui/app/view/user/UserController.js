Ext.define('GoalTracker.view.user.UserController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.user',

    id: '',

    onItemSelected: function (sender, record) {
        id = sender.getSelection()[0].getId();
        Ext.Msg.confirm('Confirm', 'Are you sure you want to delete this?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            Ext.Ajax.request({
                url: 'http://localhost:8080/user/' + id,
                method: 'DELETE',
                timeout: 60000,
                cors: true,
                // fara asta nu merge
                async: false,
                obj: [],
                headers:{'Content-Type': 'application/json'},
                success: function (response) {
                   Ext.Msg.alert('Success', 'Record Deleted.');
                   window.location.reload();
                },
                failure: function (response) {
                    Ext.Msg.alert('Status', 'Request Failed.');
                }
            })
        }
    },

    onCreateClick: function (sender, record) {
        var userForm = this.getView().getForm();

        console.log(Ext.JSON.encode(userForm.getValues()))

        Ext.Ajax.request({
            url: 'http://localhost:8080/user',
            method: 'POST',
            jsonData: Ext.JSON.encode(userForm.getValues()),
            waitMsg: 'Saving..',
            headers:
            {
                'Content-Type': 'application/json'
            },
            success: function (form, action) {
                Ext.Msg.alert('Status', 'Saved successfully.');
            },

            failure: function (form, action) {
            }
        });
    }
});
