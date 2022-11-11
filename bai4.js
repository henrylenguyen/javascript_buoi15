function addStyle(name, string) {
  document.querySelector(name).value = string[0];
  document.querySelector(name).style.border = string[1];
  document.querySelector(name).style.color = string[2];
}



let selectList = document.getElementById("selectList");

function result(){
   let string = selectList.value;
   if (string === "Doanh nghiệp"){
    document.getElementById('cable').style.display = 'block';
  } else if (string === "Nhà dân"){
    document.getElementById('cable').style.display = 'none';
  }
  else{
       document.getElementById('cable').style.display = 'block';
  }
 }

 function resultBill() {
  let arr = [];
  let cable = document.querySelectorAll(".cable");
  let sum = 0;
  let bill = 0,
    service = 0;
  //chuyển mảng thành số nguyên
  cable.forEach(element => {
    //nếu tìm thấy số thì chuyển đổi
    if (!isNaN(element.value)) {
      arr.push(parseInt(element.value));
    } else {
      arr.push(element.value)
    }
  });

  if (selectList.value === "Chọn loại khách hàng"){
    addStyle('#resultBill', ["Vui lòng chọn loại khách hàng", "1px solid red","red"]);
  }
  else{
        if (selectList.value === "Nhà dân") {
          bill = 4.5;
          service = 20.5;
          sum += (arr[1] * 7.5);
          console.log(sum);
        }
        else{
          bill = 15;
          if(arr[2]>10){
            service = (5*(arr[2]-10)) + 75;
          }
          else{
              service = 75;
          }
          sum += (arr[1] *50);
        }
    let a = (sum + bill + service);
    a = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(a);
    addStyle('#resultBill', [`Mã khách hàng ${arr[0]}, Tiền cáp: ${a}`, "1px solid transparent", "#000"]);

  }
}