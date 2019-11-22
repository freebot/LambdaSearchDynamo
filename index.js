// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

exports.handler = function(e, ctx, callback) {

	let  params = {
   		TableName: 'facturas',
   		FilterExpression: 'serie = :sl and folio = :fn',
   		ExpressionAttributeValues: {':sl' : e.serie, ':fn': e.folio}
	}

	docClient.scan(params, function(err, data) {
		if(err) {
			callback(err, null);
		} else {
			callback(null, data);
		}
	}); 
}
