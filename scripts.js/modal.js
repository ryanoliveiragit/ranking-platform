var btn = document.querySelector('#show-or-hide');
var container = document.querySelector('.ocute');

btn.addEventListener('click',function(){
    if(container.style.display === 'block') {
    container.style.display = 'none';  
    } else {
        container.style.display = 'block';
    }
});