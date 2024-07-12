var currentPage = 1
let pages = document.querySelectorAll('.page')
document.querySelector('#forward').addEventListener('click', function () {
    if (currentPage < pages.length) {
        currentPage++
        updatePages()
    }
})
document.querySelector('#back'). addEventListener('click', function () {
    if (currentPage > 1) {
        currentPage--
        updatePages()
    }
})
function updatePages() {
    pages.forEach(function (page) {
        page.classList.remove('active')
    })
    pages[currentPage-1].classList.add('active')
}
updatePages()
let confirm= document.querySelector('#confirm')
let saveSuccess=document.querySelector('.saveSuccess')
confirm.addEventListener('click', function () {
    saveSuccess.style.display='block'
})
document.querySelector("#power").addEventListener(
    'click',
    function () {
        location.href="../power/power.html"
    }
)
document.querySelector("#register").addEventListener(
    'click',
    function () {
        location.href="../register/register.html"
    }
)
document.querySelector("#request").addEventListener(
    'click',
    function () {
        location.href="../request/request.html"
    }
)
