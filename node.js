// function hienthi(name, age){
//     console.log("Ten: " +name + ", tuoi: " + age);
// }
// // goi ham
// hienthi("Pham Huu Binh", 20);

// Hàm tính tuổi từ năm sinh
function calcAge(yearOfBirth) {
    const now = new Date().getFullYear();
    return now - yearOfBirth;
}

// Hàm hiển thị thông tin
function showInfo(name, yearOfBirth) {
    const age = calcAge(yearOfBirth);
    console.log(`Xin chào, tôi là ${name}, năm nay ${age} tuổi.`);
}

// Gọi hàm
showInfo("Pham Huu Binh", 2005);
