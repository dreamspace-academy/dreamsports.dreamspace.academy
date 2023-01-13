function show_hide() {
    var click = document.getElementsByClassName("nav-links");
    if (click.style.display === "none") {
        click.style.display = "block";
    } else {
        click.style.display = "none";
    }
}