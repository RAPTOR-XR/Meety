document.addEventListener('DOMContentLoaded', function() {
    imageValidate();
});
function imageValidate() {
    let file = document.querySelector("form input[type=file]");
    let fileLabel = document.querySelector(".custom-file-label");
    file.addEventListener("change", (event) => {
        let filess = event.target.files[0];
        let sizess = filess.size / 1024 / 1024;
        let typess = filess.type;
        let namess = filess.name;
        if (typeof typess == "undefined" || typess.indexOf("img") === -1) {
            document.getElementById("file-type-error").classList.remove("hidden");
            file.value = null;
            fileLabel.innerHTML = fileLabel.dataset.default;
        } else if (sizess > 7) {
            document.getElementById("file-size-error").classList.remove("hidden");
            file.value = null;
            fileLabel.innerHTML = fileLabel.dataset.default;
        } else {
            fileLabel.innerHTML = namess;
        }
    });
}