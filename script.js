var p, hasil, repeat = true;

alert('Halooo mbuuubbb, niii bubupp bikin game gabuttt mainin dehhh...');
alert('Selamat Bermain sayangkuuuu');

while ( repeat ){

var level = prompt('Pilih level :\n1. Easy\n2. Medium\n3. Hard');

switch ( level ){
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
    p = prompt('Masukkan angka!\nKesempatan : ' + nyawa);
        if ( p == x ) {
            hasil = 'Angka yang di cari = ' + x + '\nKamu Benar!';
            inGame = 0;
        } else if ( p < x ) {
            hasil = 'Terlalu Rendah!';
            nyawa -= 1;
        } else if ( p > x ) {
            hasil = 'Terlalu tinggi!';
            nyawa -= 1;
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