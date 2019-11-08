// Required modules
var router = require('express').Router();
var Docker = require('dockerode');
var fs = require('fs');
// Connect to docker server
var docker = new Docker({socketPath: '/var/run/docker.sock'});
var docker = new Docker({host: '217.160.66.226', port: 9000}); //defaults to http

// Retrieve container with id
var container = docker.getContainer("75c54119840e03f581d8dff9521486836ea060ef957940c1bbc7c60e03754a25");
console.log('container : ', container);

container.stop(function(err, data){
    if(err){
        console.log('err : ', err);
    }else{
        console.log('container stop');
    }
});


router.get('/', (req,res)=>{
    res.send('hello there, i am the ecombox API');
});

module.exports = router;

