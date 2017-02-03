/**
 * BizDash.store.Users
 */
Ext.define('BizDash.store.Users', {

	extend: 'Ext.data.Store',

	model: 'BizDash.model.User',

	/*proxy: {
	 type: 'localstorage',
	 id  : 'users'
	 }*/

	autoLoad: true,

	proxy: {
		//type  : 'rest',
		//url   : 'users/index.jsp',
		type: 'ajax',
		url: 'data/users.json',
		// api   : {
		// 	create : 'user-add.jsp',
		// 	read   : 'data/users.jsp',
		// 	update : 'user-update.jsp',
		// 	destroy: 'user-delete.jsp'
		// },
		reader: {
			type: 'json',
			rootProperty: 'rows'
		},
		writer: {
			type: 'json',
			writeAllFields: true,
			transform: {
				fn: function (data, request) {
					data.Email = data.Email.toLowerCase();
					return data;
				}
			}
		}
	}

});