var router = require('express').Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');
router.use(bodyParser.json())

const anjay = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'makanbakso',
    database: 'tokoo'
})

anjay.connect(()=>{
    console.log("Database terhubung ke MySQL❤!")
});


router.post('/karyawan', (req, res) => {
    var tanggal = new Date();
    var tahun = tanggal.getFullYear();

    var anjaylah = {
        nama: req.body.nama,
        tglLahir: req.body.tglLahir
    };

    var name = anjaylah.nama;
    var tanggaltanggalan = anjaylah.tglLahir.split("-");


var  Zodiak =(hari, bulan)=> {

    if ((bulan == 3 && hari >= 21) || (bulan == 4 && hari <= 20)) {
        var Zodiac = "Aries"
        return Zodiac;}
    else if ((bulan == 4 && hari >= 21) || (bulan == 5 && hari <= 20)) {
        var Zodiac = "Taurus"
        return Zodiac;
    }
    else if ((bulan == 5 && hari >= 21) || (bulan == 6 && hari <= 20)) {
        var Zodiac = "Gemini"
        return Zodiac;
    }
    else if ((bulan == 6 && hari >= 22) || (bulan == 7 && hari <= 22)) {
        var Zodiac = "Cancer"
        return Zodiac;
    }
    else if ((bulan == 7 && hari >= 23) || (bulan == 8 && hari <= 23)) {
        var Zodiac = "Leo"
        return Zodiac;
    }
    else if ((bulan == 8 && hari >= 24) || (bulan == 9 && hari <= 23)) {
        var Zodiac = "Virgo"
        return Zodiac;
    }
    else if ((bulan == 9 && hari >= 24) || (bulan == 10 && hari <= 23)) {
        var Zodiac = "Libra"
        return Zodiac;
    }
    else if ((bulan == 10 && hari >= 24) || (bulan == 11 && hari <= 22)) {
        var Zodiac = "Scorpio"
        return Zodiac;
    }
    else if ((bulan == 11 && hari >= 23) || (bulan == 12 && hari <= 21)) {
        var Zodiac = "Sagittarius"
        return Zodiac;
    }
    else if ((bulan == 1 && hari <= 20) || (bulan == 12 && hari >= 22)) {
        var Zodiac = "Capricorn"
        return Zodiac;
    }
    else if ((bulan == 1 && hari >= 21) || (bulan == 2 && hari <= 18)) {
        var Zodiac = "Aquarius"
        return Zodiac;
    }
    else if ((bulan == 2 && hari >= 19) || (bulan == 3 && hari <= 20)) {
        var Zodiac = "Pisces"
        return Zodiac;
    }
}


    var usiaSekarang = tahun - tanggaltanggalan[2];
    var dataKaryawan = {
        nama: name,
        hari: tanggaltanggalan[0],
        bulan: tanggaltanggalan[1],
        tahun: tanggaltanggalan[2],
        zodiak: Zodiak(tanggaltanggalan[0], tanggaltanggalan[1]),
        usia: usiaSekarang
    };
    
    var sql = 'INSERT INTO karyawan SET ?';
    anjay.query(sql, dataKaryawan, (err, result) => {
        if (err) throw err;
        console.log(dataKaryawan);
        res.send({
            status: 'Data Posted'
        })
    });
});

router.get('/karyawan', (req, res) => {
    var sql = 'SELECT * FROM karyawan';
    anjay.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result)
        res.send(result)
    });
})

module.exports = router;