const {body} = document;

function changeBackground(number){
    let previousBackground;
    if(body.className){
        previousBackground = body.className;
    }
    body.className ='';
    switch(number){
        case 1:
            return (previousBackground === 'toggle-background-1' ? console.log(body.className) : body.classList.add('toggle-background-1'));
        case 2:
            return (previousBackground === 'toggle-background-2' ? false : body.classList.add('toggle-background-2'));
        case 3:
            return (previousBackground === 'toggle-background-3' ? false : body.classList.add('toggle-background-3'));
        default:
            break;
    }

}