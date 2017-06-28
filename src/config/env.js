export default{
    baseUrl : process.env.NODE_ENV == 'development' ? localBase():(location.protocol + '//' + location.host + '/'),
    //baseUrl : (location.protocol + '// + location.port + '/' +location.host + '/')

}
function localBase() {
    return location.origin+'/web/'
    //return location.origin+'/api/'
}