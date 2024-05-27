var p, hasil, repeat = true;

while ( repeat ){

var level = prompt('Pilih level :\n1. Easy\n2. Medium\n3. Hard\n4. Very Hard\n5. IMPOSSIBLE');

switch ( level ){
    case '5' :
        var x = Math.floor(Math.random() * 1000), inGame = 1, nyawa = 10;
        alert('Tebak angka 1 - 1000\nKesempatan : ' + nyawa);
        break;
    case '4' :
        var x = Math.floor(Math.random() * 500), inGame = 1, nyawa = 10;
        alert('Tebak angka 1 - 500\nKesempatan : ' + nyawa);
        break;
    case '3' :
        var x = Math.floor(Math.random() * 100), inGame = 1, nyawa = 10;
        alert('Tebak angka 1 - 100\nKesempatan : ' + nyawa);
        break;
    case '2' : 
        var x = Math.floor(Math.random() * 50), inGame = 1, nyawa = 10;
        alert('Tebak angka 1 - 50\nKesempatan : ' + nyawa);
        break;
    case '1' :
        var x = Math.floor(Math.random() * 10), inGame = 1, nyawa = 4;
        alert('Tebak angka 1 - 10\nKesempatan : ' + nyawa);
        break;
    default : 
        alert('Inputan salah!')
}

while ( nyawa > 0 && inGame == 1) {
    p = prompt('Masukkan angka!\nKesempatan : ' + nyawa + '\nketik "n" jika menyerah');
        if ( p == x ) {
            hasil = 'Angka yang di cari = ' + x + '\nKamu Benar!';
            inGame = 0;
        } else if ( p < x ) {
            hasil = 'Terlalu Rendah!';
            nyawa -= 1;
        } else if ( p > x ) {
            hasil = 'Terlalu tinggi!';
            nyawa -= 1;
        } else if ( p == 'n' || p == 'N' ){
            hasil = 'Cupuuu..';
            inGame = 0;
        } else {
            alert('Yang anda masukkan salah!')
        }
        alert(hasil);
        if ( nyawa == 0 ){
            alert('Kesempatan anda habis!');
            inGame = 0;
        }
    }

repeat = confirm('Mau main lagi?')
}
alert('Terimakasih telah bermain!')