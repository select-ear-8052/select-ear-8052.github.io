var max_cons, max_size, max_smell, max_speed,  // Max possible scores
max_cons = max_size = max_smell = max_speed = 0;
var cons, size, smell, speed, conv // User's scores
cons = size = smell = speed = 0;
var qn = 0; // Question number
var prev_answer = null;
fetch("JSON/questions.json")
    .then(response => response.json())
    .then(data => load_questions(data))

function load_questions(data) {
    questions = data
    for (var i = 0; i < questions.length; i++) {
        max_cons += Math.abs(questions[i].effect.cons)
        max_size += Math.abs(questions[i].effect.size)
        max_smell += Math.abs(questions[i].effect.smell)
        max_speed += Math.abs(questions[i].effect.speed)
    
    }
    init_question();
}

function init_question() {
    document.getElementById("question-text").innerHTML = questions[qn].question;
    document.getElementById("question-number").innerHTML = "Question " + (qn + 1) + " of " + (questions.length);
    if (prev_answer == null) {
        document.getElementById("back_button").style.display = 'none';
        document.getElementById("back_button_off").style.display = 'block';
    } else {
        document.getElementById("back_button").style.display = 'block';
        document.getElementById("back_button_off").style.display = 'none';
    }

}

function next_question(mult) {
    cons += mult*questions[qn].effect.cons
    size += mult*questions[qn].effect.size
    smell += mult*questions[qn].effect.smell
    speed += mult*questions[qn].effect.speed
    
    qn++;
    prev_answer = mult;
    if (qn < questions.length) {
        init_question();
    } else {
        results();
    }
}
function prev_question() {
    if (prev_answer == null) {
        return;
    }
    qn--;
    cons -= prev_answer * questions[qn].effect.cons;
    size -= prev_answer * questions[qn].effect.size;
    smell -= prev_answer * questions[qn].effect.smell;
    speed -= prev_answer * questions[qn].effect.speed;
   
    prev_answer = null;
    init_question();

}
function calc_score(score,max) {
    return (100*(max+score)/(2*max)).toFixed(1)
}
function results() {
    location.href = `results.html`
        + `?con=${calc_score(cons,max_cons)}`
        + `&siz=${calc_score(size,max_size)}`
        + `&sme=${calc_score(smell,max_smell)}`
        + `&spe=${calc_score(speed,max_speed)}`
        
}