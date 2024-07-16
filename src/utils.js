export default function getRandomColor() {
    const randomColor = []
    for(let i = 0; i < 3; i++) {
        randomColor.push(Math.round(Math.random() * 255))
    }
    return randomColor.join(', ')
}