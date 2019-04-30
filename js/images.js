function readURL(input, image_id) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $(image_id).attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#imgInp1").change(function () {
    readURL(this, '#image1');
});

$("#imgInp2").change(function () {
    readURL(this, '#image2');
});

$("#imgInp3").change(function () {
    readURL(this, '#image3');
});

$("#imgInp4").change(function () {
    readURL(this, '#image4');
});