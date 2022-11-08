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
    if (isNaN(arrValue[i]) || arrValue[i] == "") {
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

function check(arr) {
  let sum = 0;
  let arrParse = new Array();
  arr.forEach(element => {
    arrParse.push(parseFloat(element));
  })
  for (let i = 0; i < arrParse.length; i++) {
    if (arrParse[i] < 0) {
      return 1;
    } else if (arrParse[i] == 0) {
      return 0;
    } else {
      sum += arrParse[i];
    }
  }
  return sum;
}

function addPoint() {
  let pointA, pointB;
  let selectPointArea = document.getElementById("selectPointArea");
  let selectPointSub = document.getElementById("selectPointSub");
  let PointA = selectPointArea.options[selectPointArea.selectedIndex].text;
  let PointB = selectPointSub.options[selectPointSub.selectedIndex].text;
  switch (PointA) {
    case 'A':
      pointA = 2;
      break;
    case 'B':
      pointA = 1;
      break;
    case 'C':
      pointA = 0.5;
      break;
    default:
      pointA = 0;
  }
  switch (PointB) {
    case '1':
      pointB = 2.5;
      break;
    case '2':
      pointB = 1.5;
      break;
    case '3':
      pointB = 1;
      break;
    default:
      pointB = 0;
  }
  return pointA + pointB;
}



function resultPoint() {
  let result = 0;
  let inputBenchmarks = parseFloat(document.querySelector('.inputBenchmarks').value);
  if (!checkNull(".inputPoint")) {
    if(isNaN(inputBenchmarks)==false){

      let arr = getValue(".inputPoint");
      if(check(arr)==0){
        addStyle("#resultPoint", ['Rớt do có một môn 0 điểm', ' 1px solid red', 'red']);
      }
      else if(check(arr)==1){
        addStyle("#resultPoint", ['Dữ liệu không hợp lệ!!!', ' 1px solid red', 'red']);
  
      }
      else{

        result = check(arr) + addPoint();
        if(result<inputBenchmarks){
          addStyle("#resultPoint", [`Bạn nên đi bán vé số rồi => điểm: ${result}`, ' 1px solid red', 'red']);
        }
        else{
          addStyle("#resultPoint", [`Chúc mừng, bạn đã đậu => điểm: ${result}`, ' 1px solid transparent', '#000']);
  
        }
      }
    }
    else{
    addStyle("#resultPoint", ['Làm ơn nhập đầy đủ dữ liệu!!!', ' 1px solid red', 'red']);
    }
  } else {
    addStyle("#resultPoint", ['Làm ơn nhập đầy đủ dữ liệu!!!', ' 1px solid red', 'red']);
  }
}
