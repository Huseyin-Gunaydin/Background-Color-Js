const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = [
  "black",
  "yellow",
  "blue",
  "green",
  "orange",
  "coral",
  "cyan",
  "hotpink",
];

button.addEventListener("click", arkaplanrengiDegistir);

let i = 0;

function arkaplanrengiDegistir() {
  //     // Sirayla arka plan rengi sec

  //     if(i == colors.length) i=0;
  //     const secilenRenk = colors[i];
  //     body.style.backgroundColor=secilenRenk;
  //     i++;

  // }

  //     // Rastgele bir renk

  const rastgeleSayi = Math.floor(Math.random() * colors.length);
  const secilenRenk = colors[rastgeleSayi];
  body.style.backgroundColor = secilenRenk;
}

// otomatik olarak arka plan rengi degistirme

// let i = 0;
// setInterval(function(){
//     if (i == colors.length) i = 0;
//     body.style.background = colors[i];
//     i++;

// }, 600);
