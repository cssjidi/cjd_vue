export default{
    required(value){
        if(typeof value == 'boolean') return value;
        return !((value == null) || (value.length == 0) || (/\s/.test(value)));
    },
    hasClass(obj, cls) {
        return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    },
    addClass(obj, cls) {
        if (!this.hasClass(obj, cls)) obj.className += " " + cls;
    },
    removeClass(obj, cls) {
        if (this.hasClass(obj, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            obj.className = obj.className.replace(reg, ' ');
        }
    },
    toggleClass(obj,cls){
        if(hasClass(obj,cls)){
            removeClass(obj, cls);
        }else{
            addClass(obj, cls);
        }
    },
    toggleClassTest(){
        var obj = document. getElementById('test');
        toggleClass(obj,"testClass");
    }
}