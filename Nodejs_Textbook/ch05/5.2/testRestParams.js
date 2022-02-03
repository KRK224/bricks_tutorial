
module.exports.checkPayload = (payload, rest) => {
  rest.forEach(payloadData => {
    if (!payload[payloadData]) {
      InvalidRequestError(new Error(`${paloadData} is required`));
    }
  });
  return payload;
};

try {

  const payload = {
    chatId : 123,
    customerId: 111,
    
  };
  
  const {chatId, customerId, channelId} = checkPayload(payload, ['chatId', 'customerId', 'channelId']);
  console.log('testing is end!');

} catch (err){
  console.log(err.message);
}
