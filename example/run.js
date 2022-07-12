global.XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const grpcWeb = require('grpc-web')
const EchoClient = require('./echo_grpc_web_pb').EchoClient;
const EchoRequest = require('./echo_pb').EchoRequest;

const echoService = new EchoClient('http://localhost:8080', null, null);

const request = new EchoRequest();
request.setValue('Hello World!');
request.setExtraTimes(2);

var metadata = {'custom-header-1' : 'value1'};
echoService.echo(request, metadata, function(err, response) {
  console.log(err);
  if (err) {
    console.log(err.code);
    console.log(err.message);
  } else {
    console.log(response.getMessage());
  }
});
