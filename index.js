kaomojis = ["╰(*°▽°*)╯", "(*/ω＼*)", "(✿◡‿◡)", "(*^▽^*)", "/(ㄒoㄒ)/~~", "（；´д｀）ゞ", "(≧﹏ ≦)", "(┬┬﹏┬┬)"];

function MostrarKaomoji() {
    let randIndex = Math.floor(Math.random() * kaomojis.length);
    console.log(kaomojis[randIndex]);
}

module.exports.MostrarKaomoji = MostrarKaomoji;