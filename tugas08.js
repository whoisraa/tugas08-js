function callObject() {
    var motor = {
        type: "honda",
        toko: "motoholic",
        harga: 2000000,
        tahun: 2020
    };

    console.log(motor);

    motor.type = "yamaha";
    console.log(motor);
}

callObject();