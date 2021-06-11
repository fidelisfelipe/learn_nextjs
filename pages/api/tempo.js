function tempo(request, response){
    const dynamecDate = new Date();
    response.json({date: dynamicDate.toGMTString()});
}

export default tempo;
