let alter = document.querySelector(".alter");
let save = document.querySelector(".save");
let name1 = document.querySelector("#change1");
let nikename = document.querySelector("#change2");
let period = document.querySelector("#change3");
let email = document.querySelector("#change4");
let position = document.querySelector("#change5");
var newAlter = [];
for (let i = 1; i < 5; i++){
    newAlter[i] = document.querySelector("#change" + i);
}
let change1 = document.querySelector("#change1");
change1.onclick = function () {
    for (let i = 1; i < 5; i++){
        newAlter[i].disabled = false;
    }
}
save.onclick = function () {
    name1.disabled = "disabled"
    nikename.disabled = "disabled"
    period.disabled = "disabled"
    email.disabled = "disabled"
    position.disabled = "disabled"
    
    axios.post("https://9bc9-2409-890e-258-7442-5c3c-e5a-e63a-b7ac.ngrok-free.app/GeneralServletDemo_war_exploded/selectPersonInformationServlet", {
        account: name1.value,
        name: nikename.value,
        stage: period.value,
        email: email.value,
        jobId: position.value,
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
    .finally(function(){})
}
// function gain() {
//     var group = {
//         username: account,
//         password: pwd
//     }
//     const re = new XMLHttpRequest();
//     re.open('post', 'http://43.143.169.168:9090/user/register');
//     re.setRequestHeader("Content-type", "application/json");
//     re.send(JSON.stringify(group));
//     re.onreadystatechange = function () {
//         if (re.readyState === 4 && re.status === 200) {
//             console.log(JSON.parse(re.responseText));
//         }
//     }
// }
// save.onclick = function () {
//     location.href = "  ";
// }
// alter.onclick = function () {
//     location.href = "   ";
// }

//document.getElementById('modifyButton').addEventListener('click', function () {
//    var inputElement = document.getElementById('name');
//    inputElement.readonly = !inputElement.readonly;
//    inputElement.focus();
//});
//$(document).ready(function () {
//    $('#modifyButton').click(function () {
//        $('#name').prop('readonly', false); // 移除 readonly 属性
//        $('#name').focus(); // 设置焦点到 input 上
//    });
//});
//axios({
//    url: 'https://7bae-2409-8a0c-245-6160-2d87-87c9-f1f3-6c17.ngrok-free.app//////GeneralServletDemo_war_exploded/selectPersonInformationServlet',
//    method: 'post',
//    data: {
//        // 学生更新的数据
  //      name: '新的学生名字',
//     age: 20,
    //   // ... 其他字段
   // }
//})
 //   .then(response => {
        // 处理成功的响应  
  //  })
  //  .catch(error => {
  //      // 处理错误  
    //});