const jsonServer =  require('json-server');
const server = jsonServer.create();

server.post('/api/payment', (req, res) => {
    res.jsonp({success:true});
})

server.listen(3000, () => {
    console.log('Server is running : port 3000');
});