var form = document.getElementById('theForm');

new stepsForm(theForm, {
    onSubmit: function() {
       
        distance().then((d) => {
            dist = d;
            stats();
        });
    }
});

function stats() {

    const gas = 2.324;
    let mpg = document.getElementById("q1").value;
    let cost = Math.round((dist / mpg) * gas);

    // hide form
    form.querySelector('.form-inner').classList.add('hide');

    var final_message = form.querySelector('.final-message');
    if (cost == 0) {
        final_message.innerHTML = `Good luck`;
    } else if (cost == 1) {
        final_message.innerHTML = `Good luck`;
    } else {
        final_message.innerHTML = `Good luck`;
    }

    final_message.classList.add('show');
    form.querySelector('.again').classList.add('show');
}