// Loop untuk mencetak pola
for (let i = 1; i <= 5; i++) {
    let bintang = '';
    
    // Loop untuk menambahkan '*' ke baris saat ini
    for (let j = 1; j <= i; j++) {
        bintang += '*';
    }

    // Mencetak baris
    console.log(bintang);
}