export default {
    inserted(el,binding){
        document.title = el.dataset.title;
    }
}
