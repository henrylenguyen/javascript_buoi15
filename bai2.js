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

function addStyle(name, string) {
  document.querySelector(name).value = string[0];
  document.querySelector(name).style.border = string[1];
  document.querySelector(name).style.color = string[2];
}


function Bill(kw) {
  let money, sum;
  if (kw <= 50) {
    money = 500 * kw;
  } else if (kw <= 100) {
    money = 650 * kw;
  } else if (kw <= 200) {
    money = 850 * kw;
  } else if (kw <= 350) {
    money = 1100 * kw;
  } else {
    money = 1300 * kw;
  }
  return money;
}
function resultElectricity() {
  if (!checkNull(".electric")) {
    let arr = getValue(".electric");
    if (arr[1] == 0) {
      addStyle("#resultElectricity", ["Dữ liệu không hợp lệ", "1px solid red", "red"]);
    } else {
      let a = parseFloat(arr[1]);
      let result = new Intl.NumberFormat('it-IT', {
        style: 'currency',
        currency: 'VND'
      }).format(Bill(a));
      addStyle("#resultElectricity", [`Khách hàng ${arr[0]} cần đóng: ${result}`, "1px solid #000", "#000"]);
    }
  } else {
    addStyle("#resultElectricity", ['Làm ơn nhập đầy đủ dữ liệu!!!', ' 1px solid red', 'red']);

  }
}