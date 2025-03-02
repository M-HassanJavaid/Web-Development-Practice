const text = 'Hassan!';

for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) === '!') {
        console.log('Exclamation Mark has Found');
        break;
    }

    else{
        if (text.length - 1 === i) {
            console.log('Exclamation Mark not found!')
        }
    }
    
}