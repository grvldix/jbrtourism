function lanjutkan(){
    var a = document.forms['pesanan']['firstname'].value;
    var b = document.forms['pesanan']['lastname'].value;
    var c = document.forms['pesanan']['hotel'].value;
    var d = document.forms['pesanan']['checkIn'].value;
    var e = document.forms['pesanan']['checkOut'].value;
    var f = document.forms['pesanan']['jenisBed'].value;
    var g = document.forms['pesanan']['noHP'].value;
    var h = document.forms['pesanan']['email'].value;

    var tabel = document.getElementById("tabelPesanan");
    var row = tabel.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);

    patternNumber =  /[0-9]/g;
    patternAlphanum = /\w/g;
    patternAlpha = /[a-z]/gi;
    // patternEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    patternEmail = /\S+@\S+\.\S+/;

    if (patternAlpha.test(a) && patternAlpha.test(b) && patternNumber.test(g) && patternEmail.test(h)) {
        cell1.innerHTML = a;
        cell2.innerHTML = b;
        cell3.innerHTML = c;
        cell4.innerHTML = d;
        cell5.innerHTML = e;
        cell6.innerHTML = f;
        cell7.innerHTML = g;
        cell8.innerHTML = h;
    
        alert ("Selamat, Anda berhasil meng-entry")
    } else {
        alert("masukkan data dengan benar");
    }

}