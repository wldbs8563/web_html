const n_point_wrap = document.querySelector('.n_point_wrap')
const user_point =  document.querySelector('#user_point')
const use_point =  document.querySelector('#use_point')
const point_reset = document.querySelector('#point_reset')
const point_all_btn = document.querySelector('#point_all_btn')
console.log(n_point_wrap, user_point, use_point, point_reset, point_all_btn)
let point = 1000
user_point.value = point.toLocaleString('ko-kr')
point_all_btn.addEventListener('click',function(){
    user_point.value = 0
    use_point.value = point.toLocaleString('ko-kr')
    point_reset.style.display = 'inline-block'
})
point_reset.addEventListener('click',function(){
    user_point.value = point.toLocaleString('ko-kr')
    use_point.value = 0
})
if(use_point.value ===  '0'){
    point_reset.style.display = 'none'
}

