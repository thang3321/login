const check = () => {
    let name = document.getElementById("account");
    if (name == 'Admin'){
        alert("Welcome");
    } else if (name == null){
        alert("Tên đăng nhập không được để trống");
    } else {
        alert("Tên đăng nhập không tồn tại");
    }

    let pass = document.getElementById("password");

    if (pass == "TheMaster"){
        document.write("Welcome")
    } else if (pass == null){
        alert("Canceled");
    } else {
        alert("Wrong password");
    }
    
}