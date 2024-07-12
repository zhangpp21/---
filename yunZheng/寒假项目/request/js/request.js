// const { error } = require("console");

// const { log } = require("console");

var currentPage = 1
var pages = document.querySelectorAll('.page')
document.querySelector('#forward').addEventListener('click', function () {
    if (currentPage < pages.length) {
    currentPage++; // 前进一步
    updatePages();
    }
})
document.querySelector('#back').addEventListener('click', function () {
    if (currentPage > 1) {
      currentPage--; // 后退一步
    updatePages();
    }

})
function updatePages() {
    // 隐藏所有菜单
    pages.forEach(function(page) {
    page.classList.remove('active');
    });

    // 显示当前菜单
    pages[currentPage - 1].classList.add('active');
}

// 初始时显示第一个菜单
updatePages();
let save = document.querySelector('#save')
let saveSuccess=document.querySelector('.saveSuccess')
save.addEventListener('click', function () {
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
document.querySelector("#assess").addEventListener(
    'click',
    function () {
        location.href="../assess/assess.html"
    }
)
let approveStatus = -1
axios({
    url: "https://9bc9-2409-890e-258-7442-5c3c-e5a-e63a-b7ac.ngrok-free.app/GeneralServletDemo_war_exploded/selectAllLeaveRequestServlet",
    method: "Post",
    headers: { "Content-Type":"application/json"}
})
            .then(respond=>{
                var lines = document.getElementsByClassName('line')
                console.log(lines);
                // lines = [...lines];
                var rows = document.getElementsByClassName('row')
                console.log(rows);
                // rows=[...rows]
                var approve = document.querySelector(".approve")
                var message = respond.data.data;
                console.log(message[0]);
                const arr1= [message[0].applicantId, message[0].leaveRequestMeeting, message[0].leaveRequestReason]
                const arr2 = [message[1].applicantId, message[1].leaveRequestMeeting, message[1].leaveRequestReason]
                const all = [...arr1,... arr2]
                console.log(all);

                // console.log(arr,'arr');
                // let a = lines.map(x => rows.map(y => [x, y]));
                console.log(lines.length,'lines.length');
                for (i = 0; i < all.length; i++){   
                    
                rows[i].innerHTML = all[i]
                        approve.addEventListener('click', function () {
                            if (approve.textContent==="未批准"){
                                approve.textContent= "已批准"
                                approveStatus=1 
                            }
                            if (approve.textContent ==="已批准") {
                                approve.textContent="未批准"
                                approveStatus = 0
                            }
                            })                 
                    
                }
                // console.log(respond.data.data)
            })
    var buttons=[...document.querySelectorAll(".approve")]
console.log(buttons, 'buttons');

function getRowNumber() {
    console.log(1);
    addEventListener('click', (e) => {
        console.log(e.target);
        let current = e.target
        let res = buttons.findIndex(element => element === current)
        console.log(res,'res');
    })

    // var button = event.target;
    // var rowNumber = parseInt(button.id.split('-')[1]);
    var ids= document.getElementsByClassName('id')
    let status = {
        leaveRequestId: ids[res].textContent,
        approveStatus: approveStatus
    }
    axios.post("https://9bc9-2409-890e-258-7442-5c3c-e5a-e63a-b7ac.ngrok-free.app/GeneralServletDemo_war_exploded/approveLeaveRequestServlet",status )
        .then(respond => { console.log("审批情况成功返回", respond.data) })
    
        .catch(error => {
            console.error("批准情况返回失败",error)
        })
    
}            

