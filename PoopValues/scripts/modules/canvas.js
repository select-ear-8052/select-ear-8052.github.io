export default drawCanvas
function drawCanvas(ideology, solid, liquid, pellets, logs, faint, biohazard, speedy, slow, toilet_paper, bidet) {
    var version = "Test Edition #3.1"
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        var bg = "#141414"
        var fg = "#EEEEEE"
    } else {
        var bg = "#EEEEEE"
        var fg = "#141414" 
    }
        var c = document.createElement("canvas")
        var ctx = c.getContext("2d")
        c.width = 800;
        c.height = 800;
        ctx.fillStyle = bg
        ctx.fillRect(0,0,800,800);

        var img = document.getElementById("img-solid")
        ctx.drawImage(img, 20, 170, 100, 100);
        var img = document.getElementById("img-liquid")
        ctx.drawImage(img, 680, 170, 100, 100)
        var img = document.getElementById("img-pellets")
        ctx.drawImage(img, 20, 290, 100, 100)
        var img = document.getElementById("img-logs")
        ctx.drawImage(img, 680, 290, 100, 100)
        var img = document.getElementById("img-faint")
        ctx.drawImage(img, 20, 410, 100, 100)
        var img = document.getElementById("img-biohazard")
        ctx.drawImage(img, 680, 410, 100, 100)
        var img = document.getElementById("img-speedy")
        ctx.drawImage(img, 20, 530, 100, 100)
        var img = document.getElementById("img-slow")
        ctx.drawImage(img, 680, 530, 100, 100)
        // var img = document.getElementById("img-toilet_paper")
        // ctx.drawImage(img, 20, 650, 100, 100)
        // var img = document.getElementById("img-bidet")
        // ctx.drawImage(img, 680, 650, 100, 100)

        ctx.fillStyle= "#222222"
        ctx.fillRect(120, 180, 560, 80)
        ctx.fillRect(120, 300, 560, 80)
        ctx.fillRect(120, 420, 560, 80)
        ctx.fillRect(120, 540, 560, 80)
        ctx.fillRect(120, 660, 560, 80)
        ctx.fillStyle="#00B0EF"
        ctx.fillRect(120, 184, 5.6*solid-2, 72)
        ctx.fillStyle="#32315a"
        ctx.fillRect(682-5.6*liquid, 184, 5.6*liquid-2, 72)
        ctx.fillStyle="#cd0000"
        ctx.fillRect(120, 304, 5.6*pellets-2, 72)
        ctx.fillStyle="#ffe000"
        ctx.fillRect(682-5.6*logs, 304, 5.6*logs-2, 72)
        ctx.fillStyle="#aa00aa"
        ctx.fillRect(120, 424, 5.6*faint-2, 72)
        ctx.fillStyle="#BD5BE5"
        ctx.fillRect(682-5.6*biohazard, 424, 5.6*biohazard-2, 72)
        ctx.fillStyle="#ff9800"
        ctx.fillRect(120, 544, 5.6*speedy-2, 72)
        ctx.fillStyle="#03a9f4"
        ctx.fillRect(682-5.6*slow, 544, 5.6*slow-2, 72)
        ctx.fillStyle="#2331BC"
        ctx.fillRect(120, 664, 5.6*toilet_paper-2, 72)
        ctx.fillStyle="#6c9569"
        ctx.fillRect(682-5.6*bidet, 664, 5.6*bidet-2, 72)
        ctx.fillStyle=fg
        ctx.font="700 60px Montserrat"
        ctx.textAlign="left"
        ctx.fillText("ConservaValues", 20, 90)
        ctx.font="50px Montserrat"
        ctx.fillText(ideology, 20, 140)
        ctx.fillStyle= "#222222"
        ctx.textAlign="left"
        if (solid       > 30) {ctx.fillText(solid + "%", 130, 237.5)}
        if (pellets      > 30) {ctx.fillText(pellets + "%", 130, 357.5)}
        if (faint    > 30) {ctx.fillText(faint + "%", 130, 477.5)}
        if (speedy       > 30) {ctx.fillText(speedy + "%", 130, 597.5)}
        if (toilet_paper > 30) {ctx.fillText(toilet_paper + "%", 130, 717.5)}
        ctx.textAlign="right"
        if (liquid        > 30) {ctx.fillText(liquid + "%", 670, 237.5)}
        if (logs       > 30) {ctx.fillText(logs + "%", 670, 357.5)}
        if (biohazard  > 30) {ctx.fillText(biohazard + "%", 670, 477.5)}
        if (slow      > 30) {ctx.fillText(slow + "%", 670, 597.5)}
        if (bidet    > 30) {ctx.fillText(bidet + "%", 670, 717.5)}
        ctx.fillStyle=fg
        ctx.font="300 25px Montserrat"
        ctx.fillText("afunhumaninter.github.io/conservavalues", 780, 40)
        ctx.fillText(version, 780, 70)
        ctx.textAlign="center"
        ctx.fillText("liquidity Axis: " + document.getElementById("liquidity-label").innerHTML, 400, 175)
        ctx.fillText("Economic Axis: " + document.getElementById("economics-label").innerHTML, 400, 295)
        ctx.fillText("Civic Axis: " + document.getElementById("statism-label").innerHTML, 400, 415)
        ctx.fillText("Nation Axis: " + document.getElementById("nation-label").innerHTML, 400, 535)
        ctx.fillText("Conventionalism Axis: " + document.getElementById("conventionalism-label").innerHTML, 400, 655)

        document.getElementById("banner").src = c.toDataURL();
}