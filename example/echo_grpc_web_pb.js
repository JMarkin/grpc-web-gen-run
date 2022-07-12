/**
 * @fileoverview gRPC-Web generated client stub for echo
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.echo = require('./echo_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.echo.EchoClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.echo.EchoPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.echo.EchoRequest,
 *   !proto.echo.EchoResponse>}
 */
const methodDescriptor_Echo_Echo = new grpc.web.MethodDescriptor(
  '/echo.Echo/Echo',
  grpc.web.MethodType.UNARY,
  proto.echo.EchoRequest,
  proto.echo.EchoResponse,
  /**
   * @param {!proto.echo.EchoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.echo.EchoResponse.deserializeBinary
);


/**
 * @param {!proto.echo.EchoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.echo.EchoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.echo.EchoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.echo.EchoClient.prototype.echo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/echo.Echo/Echo',
      request,
      metadata || {},
      methodDescriptor_Echo_Echo,
      callback);
};


/**
 * @param {!proto.echo.EchoRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.echo.EchoResponse>}
 *     Promise that resolves to the response
 */
proto.echo.EchoPromiseClient.prototype.echo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/echo.Echo/Echo',
      request,
      metadata || {},
      methodDescriptor_Echo_Echo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.echo.EchoRequest,
 *   !proto.echo.EchoStreamResponse>}
 */
const methodDescriptor_Echo_EchoStream = new grpc.web.MethodDescriptor(
  '/echo.Echo/EchoStream',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.echo.EchoRequest,
  proto.echo.EchoStreamResponse,
  /**
   * @param {!proto.echo.EchoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.echo.EchoStreamResponse.deserializeBinary
);


/**
 * @param {!proto.echo.EchoRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.echo.EchoStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.echo.EchoClient.prototype.echoStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/echo.Echo/EchoStream',
      request,
      metadata || {},
      methodDescriptor_Echo_EchoStream);
};


/**
 * @param {!proto.echo.EchoRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.echo.EchoStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.echo.EchoPromiseClient.prototype.echoStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/echo.Echo/EchoStream',
      request,
      metadata || {},
      methodDescriptor_Echo_EchoStream);
};


module.exports = proto.echo;

