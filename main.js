const cols = document.querySelectorAll('.col');

function gerenerateRandomColor() {
    const hexCodes = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++){
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color
}
function setRandomColors() {
    cols.forEach((col) => {
        const text = col.querySelector('h2')
        const color = gerenerateRandomColor()
        text.textContent = color
        col.style.background = color
    })
}

const copyContent = async () => {
    let text = document.getElementById('myText').innerHTML;
    try {
        await navigator.clipboard.writeText(text);
        alert('copied')
    } catch (err) {
        console.error('Failed to copy: ', err)
    }
}
setRandomColors()