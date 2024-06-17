function call(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(name);
            resolve(name);
        }, 1000);
    })
}

function back() {
    return new Promise((resolve, reject) => {
    setTimeout(function() {
        console.log('back');
        resolve('back');
    }, 1000);
})
}


function hell() {
    return new Promise((resolve, reject) =>{
    setTimeout(function() {
        resolve('callback hell');
    }, 1000);
})
}

async function exec() {
    let name = await call('kim')
    console.log(name + '반가워');
    let back = await back('back')
    console.log(back + '을 실행했구나');
    let hell = await hell('callback hell')
    console.log('여기는' + hell);
}

exec();

// ------------------------------
function delay(ms) {
    return new Promise(resolve => 
        setTimeout(resolve, ms))
}

async function changeBackgroundColors() {
    await delay(1000)
    document.body.style.backgroundColor = 'red'

    await delay(1000)
    document.body.style.backgroundColor = 'orange'

    await delay(1000)
    document.body.style.backgroundColor = 'yellow'

    await delay(1000)
    document.body.style.backgroundColor = 'green'

    await delay(1000)
    document.body.style.backgroundColor = 'blue'
}

changeBackgroundColors();
