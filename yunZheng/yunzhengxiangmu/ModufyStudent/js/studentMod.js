let confirm = document.getElementById("confirm");
let back = document.querySelector(".return");
confirm.onclick = function () {
    
    let obj = {}
    function find() {
        let a = document.getElementById("studentName").value;
        console.log(a);
        axios.get("https://9bc9-2409-890e-258-7442-5c3c-e5a-e63a-b7ac.ngrok-free.app/GeneralServletDemo_war_exploded/selectStudentFromAccountByBigManagerServlet",
                { name: a }
            )

            .then((res) => {
                console.log(res);
                console.log(res.data);
                if (res.date.status == -1) {
                    alert("用户不存在");
                }
                else {}
            })
            .catch((error) => {
                console.log(error);
                alter("接口出现问题了");
            })

    }
    location.href = "../modPage/modPage.html"
}
//back.onclick = function () {
//    location.href = "";
//}
//const students = [
//    { id: '1001', name: '张三' },
//    { id: '1002', name: '李四' },
//    { id: '1003', name: '王五' },
    // ... 其他学生信息  
//];
//function findStudentById(id) {
//    for (const student of students) {
 //       if (student.id === id) {
 //           return student;
//        }
//    }
 //   return null; // 如果没有找到学生，返回null  
//}

//function checkStudentWithBackend(studentId) {
//    const student = findStudentById(studentId);
//    if (student) {
 //       // 找到学生后，向后端发送请求来验证学生是否存在或其他相关操作  
        // 这里我们使用fetch API发送POST请求到后端的某个URL，你可以根据需要调整请求方法和URL  
//        axios.post("https://9bc9-2409-890e-258-7442-5c3c-e5a-e63a-b7ac.ngrok-free.app/GeneralServletDemo_war_exploded/selectStudentFromAccountByBigManagerServlet", )
 //           .then(data => {
 //               console.log('后端响应:', data); // 在这里处理后端返回的数据  
                // 根据后端返回的数据，你可以更新UI或执行其他操作  
 //           })
 //           .catch(error => {
   //             console.error('请求失败:', error);
                // 在这里处理请求错误，例如显示错误消息给用户  
  //          });
 //   } else {
  //      console.log('未找到学生');
        // 处理未找到学生的情况，例如显示错误消息给用户  
 //   }
    
//}
let a = document.querySelector(".studentName").value;
console.log(a);
function find() {
    axios
        .post("https://9bc9-2409-890e-258-7442-5c3c-e5a-e63a-b7ac.ngrok-free.app/GeneralServletDemo_war_exploded/selectStudentFromAccountByBigManagerServlet",
            {name : a}
        )

    .then((res) => {
    console.log(res);
    console.log(res.data);
    if(res.date.state == -1) {
        alert("用户不存在");
        }
        else{}
})
        .catch((error) => {
            console.log(error);
            alter("接口出现问题了");
})

}

