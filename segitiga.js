function segitiga(tinggi_segitiga) {
    for(let i = 1; i <= tinggi_segitiga; i++){
        let r = ""
        for(let x = 1; x <= i; x++) {
            r += " " + x
        }
        console.log(r)
    }
}

segitiga(5)