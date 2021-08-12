exports.createEmployee =(req,res)=>{
    
	console.log(req.body);
	res.send("Recibido correctamente");

};

exports.listEmployees =(req,res)=>{
    
	console.log(req.body);
	res.send("Lista");

};