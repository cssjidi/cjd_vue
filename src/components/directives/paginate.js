

bind(el,binding,vnode){
    select(){
        bind(el,binding,vnode){
            el.addEventListener('click',function(){
                binding.value.call(this,binding.modifiers);
            });
            el.addEventListener('touchmove',function(){
                binding.value.call(this,binding.modifiers);
            });
            el.addEventListener('touchend',function(){
                binding.value.call(this,binding.modifiers);
            });
        }
    }
}

const install = function(Vue) {
    Vue.directive('Paginate', Paginate);
};

if (window.Vue) {
    window.paginate = Paginate;
    Vue.use(install); // eslint-disable-line
}

InfiniteScroll.install = install;
export default Paginate;