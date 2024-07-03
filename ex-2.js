// ให้สร้าง Function printStar Function นี้จะรับตัวเลขเข้ามา 1 ตัว 
// แล้วแสดงผลลัพธ์ตามตัวเลขที่ได้รับมา เช่น ถ้าตัวเลขที่รับมาคือ 5 จะได้ผลลัพธ์ดังนี้
// เริ่มเขียนโค้ดตรงนี้ 
function printStar(n) {
    let finalResult = "";
    for (let i = 1; i <= n; i++) {
      let rowResult = ""; // รวบค่าจากการวน Loop ภายใน
      for (let j = 1; j <= i; j++) {
        rowResult += "*" + "\t"; // เพิ่มเครื่องหมาย * แทนตัวเลข
      }
      finalResult += rowResult + "\n";
    }
    return finalResult;
}

console.log(printStar(5));