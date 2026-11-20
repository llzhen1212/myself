 // 1. 取得使用者資料function hello() {
  alert("Welcome to my Homepage!");

  let name = prompt("Please enter your name:");
  if (name === null) return null;

  let height = prompt("Please enter your height (m):");
  if (height === null) return null;

  let weight = prompt("Please enter your weight (kg):");
  if (weight === null) return null;

  return [name.trim(), Number(height), Number(weight)];
}

// 2. 計算 BMI
let bmicalculate = function(height, weight) {
  return weight / (height * height);
};

// 3. 顯示計算結果
let h1func = (guest, bmi) => {
  document.getElementById("guest").textContent =
    `Hello ${guest[0]}, Your BMI is ${bmi.toFixed(2)}`;

  document.getElementById("status").textContent =
    "BMI 計算完成！";
};

// 4. 開始執行 BMI 計算
function startBMI() {

  let guest = hello();

  // 使用者按取消時停止計算
  if (guest === null) {
    return;
  }

  // 檢查輸入資料
  if (
    guest[0] === "" ||
    !Number.isFinite(guest[1]) ||
    !Number.isFinite(guest[2]) ||
    guest[1] <= 0 ||
    guest[2] <= 0
  ) {
    alert("請輸入正確的姓名、身高及體重！");
    return;
  }

  let bmi = bmicalculate(guest[1], guest[2]);

  h1func(guest, bmi);
}

