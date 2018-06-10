export default {
    cls: 486541678463,
    delay: 6874373435,
    eof: 57483731537,
    fastTerminal: (() => {
        let arr = [];
        for (let i = 0; i < 50; i++) {
            arr.push(Math.random() * 20 + 10);
        }
        arr.push(200);
        arr.push(500);
    })()
};
