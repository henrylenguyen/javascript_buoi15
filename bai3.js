//hàm lấy dữ liệu
function getValue(value) {
  let number = document.querySelectorAll(value);
  let arr = new Array();
  number.forEach(element => {
    // mỗi lần lập sẽ đẩy dữ liệu vào mảng 
    arr.push(element.value);
  });
  return arr;
}

// hàm check có giá trị rỗng (người dùng không nhập) hay không
function checkNull(checked) {
  let arrValue = getValue(checked);
  for (let i = 0; i < arrValue.length; i++) {
    //nếu dữ liệu có rỗng trả về true liền (true là dữ liệu bị nhập bị thiếu);
    if (arrValue[i] == "") {
      return true;
    }
  }

  return false;
}


//  <= 60 => vat = sum * 0.05 
//    <= 120 => vat = sum * 0.1 
//     <= 210 => vat = sum * 0.15 
//     <= 384 => vat = sum * 0.2 
//     <= 624 => vat = sum * 0.25 
//     <= 960 => vat = sum * 0.3 
//    > 960 => vat = sum * 0.35 

function Vat(total,depent) {
  let money;
  let sum = total - 4000000 - depent * 1600000;
  console.log(sum)
  if (sum <= 60000000) {
    money = sum * 0.05;
  } else if (sum <= 120000000) {
    money = sum * 0.1;
  } else if (sum <= 210000000) {
    money = sum * 0.15;
  } else if (sum <= 384000000) {
    money = sum * 0.2;
  } 
  else if (sum <= 624000000000) {
    money = sum * 0.25;
  } 
  else if (sum <= 960000000) {
    money = sum * 0.3;
  } 
  else {
    money = sum * 0.35;
  }
  return money;
}

function resultVAT() {
  if (!checkNull(".vat")) {
    let arr = getValue(".vat");
    if (arr[1] <= 0 || arr[2] <= 0) {
       document.querySelector("#resultVAT").innerHTML = "Dữ liệu không hợp lệ";
        document.querySelector('#resultVAT').style.border = "1px solid red";
        document.querySelector('#resultVAT').style.color = "red";
    } else {
      let a = parseFloat(arr[1]);
      let b = parseInt(arr[2])
      let result = new Intl.NumberFormat('it-IT', {
        style: 'currency',
        currency: 'VND'
      }).format(Vat(a,b));
       document.querySelector("#resultVAT").innerHTML = `Họ tên: ${arr[0]} , mức thuế cần đóng: ${result}`;
      document.querySelector('#resultVAT').style.border = "1px solid transparent";
      document.querySelector('#resultVAT').style.color = "#000";
    }
  } else {
     document.querySelector("#resultVAT").innerHTML = 'Làm ơn nhập đầy đủ dữ liệu!!!';
     document.querySelector('#resultVAT').style.border = "1px solid red";
     document.querySelector('#resultVAT').style.color = "red";

  }
}