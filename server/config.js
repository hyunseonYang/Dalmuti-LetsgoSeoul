/*
 * 설정
 */
module.exports = {
	server_port: 3000,
	db_url: 'mongodb://localhost:27017/nodeDB',
	db_schemas: [
	    {file:'./user_schema', collection:'users', schemaName:'UserSchema', modelName:'UserModel'},
	    {file:'./fb_schema', collection:'facebook', schemaName:'FacebookSchema', modelName:'FacebookModel'}
	],
	route_info: [
	    //===== Default page =====//
	    {file:'./index', path:'/', method:'index', type:'get'},						// index
	    //===== user =====//
	    {file:'./user', path:'/process/login', method:'login', type:'post'},		// user.login
	    {file:'./user', path:'/process/adduser', method:'adduser', type:'post'},	// user.adduser
	    {file:'./user', path:'/process/listuser', method:'listuser', type:'post'},	// user.listuser
	    //===== facebook =====//
	    {file:'./facebook', path:'/facebook/listlocation', method:'listlocation', type:'post'},	// facebook.listlocation
		//===== tour api =====//
		{file:'./tour', path:'/tourapi/foodlist', method:'foodlist', type:'get'},	// tour.foodlist
		{file:'./tour', path:'/tourapi/placelist', method:'placelist', type:'get'},	// tour.placelist
		{file:'./tour', path:'/tourapi/detail', method:'printDetail', type:'get'}	// tour.printDetail
	    ]
}
