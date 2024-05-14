import drawCanvas from './modules/canvas.js'

function getQueryVariable(variable)
{
       let query = window.location.search.substring(1)
       let vars = query.split("&")
       for (var i=0;i<vars.length;i++) {
               let pair = vars[i].split("=")
               if(pair[0] == variable) {return pair[1]}
       }
       return(NaN);
}

function setBarValue(name, value) {

    console.log("hi")
    console.log(name)
    console.log(value)
    console.log("\n")


    var innerel = document.getElementById(name)
    var outerel = document.getElementById("bar-" + name)
    outerel.style.width = (value + "%")
    innerel.innerHTML = (value + "%")
    if (innerel.offsetWidth + 20 > outerel.offsetWidth) {
        innerel.style.visibility = "hidden"
    }
}
function setLabel(val,ary) {
    if (val > 100) { return "" } else
    if (val >  90) { return ary[0] } else
    if (val >  75) { return ary[1] } else
    if (val >  60) { return ary[2] } else
    if (val >= 40) { return ary[3] } else
    if (val >= 25) { return ary[4] } else
    if (val >= 10) { return ary[5] } else
    if (val >=  0) { return ary[6] } else
    {return ""}
}

fetch("JSON/ideologies.json")
    .then(response => response.json())
    .then(data => parse_ideology(data))

function parse_ideology(ideologies){
    var solid       = getQueryVariable("con")
    var pellets      = getQueryVariable("siz")
    var faint    = getQueryVariable("sme")
    var speedy       = getQueryVariable("spe")
    var conventionalist = getQueryVariable("c")
    var liquid        = (100 - solid       ).toFixed(1)
    var logs       = (100 - pellets      ).toFixed(1)
    var biohazard  = (100 - faint    ).toFixed(1)
    var slow      = (100 - speedy       ).toFixed(1)
    // var conspiratorialist    = (100 - conventionalist ).toFixed(1)
    
    setBarValue("solid", solid)
    setBarValue("liquid", liquid)
    setBarValue("pellets", pellets)
    setBarValue("logs", logs)
    setBarValue("faint", faint)
    setBarValue("biohazard", biohazard)
    setBarValue("speedy", speedy)
    setBarValue("slow", slow)
    // setBarValue("conventionalist", conventionalist)
    // setBarValue("conspiratorialist", conspiratorialist)

    const consArray = ["Diamond-hard","Fossilised","Pretty hard","Balanced texture","Soft","Mushy","Diarrhea"]
    const sizeArray = ["Rabbit pellets","Miniscule turds","Petite poop","Medium-sized poop","Big turds","Bricks","Guaranteed clog"]
    const smellArray = ["Perfume","Pleasant","Faint","Tolerable","Disagreeable"," Nauseating","Category A bioweapon"]
    const speedArray = ["Ninja","Frantic","Rushed","Average speed","Constipated","Patient","Zen master"]
    // const convArray = ["Establishment-Aligned","Conventionalist","Mainstream","Distrustful","Unconventional","Conspiratorialist","Idiosyncratic"]

    document.getElementById("consistency-label").innerHTML = setLabel(solid, consArray)
    document.getElementById("size-label").innerHTML = setLabel(pellets, sizeArray)
    document.getElementById("smell-label").innerHTML = setLabel(faint, smellArray)
    document.getElementById("speed-label").innerHTML = setLabel(speedy, speedArray)
    // document.getElementById("conventionalism-label").innerHTML = setLabel(conventionalist, convArray)

    var ideology = ""
    var ideodist = Infinity
    for (var i = 0; i < ideologies.length; i++) {
        var dist = 0
        dist += Math.pow(Math.abs(ideologies[i].stats.cons - solid), 2)
        dist += Math.pow(Math.abs(ideologies[i].stats.size - pellets), 1.5)
        dist += Math.pow(Math.abs(ideologies[i].stats.smell - faint), 1.75)
        dist += Math.pow(Math.abs(ideologies[i].stats.speed - speedy), 1.75)
        // dist += Math.pow(Math.abs(ideologies[i].stats.conv - conventionalist), 1.25)
        if (dist < ideodist) {
            ideology = ideologies[i].name
            ideodist = dist
        }
    }
    document.getElementById("ideology-label").innerHTML = ideology

    drawCanvas(ideology, solid, liquid, pellets, logs, faint, biohazard, speedy, slow) //, conventionalist, conspiratorialist) 
} 
