// let get_ul = document.getElementById("todo-ul");

// console.log(create_li);

  
  // const add_child = document.appendChild(create_li);

  

  // document.getElementById("enter-button").onclick = function () {
  //   console.log(add_child);
  // };

  // ulタグの取得
  const todoul = document.getElementById("todo-ul");
  
  // ボタン要素の取得
  const enterButton = document.getElementById("enter-button");

  enterButton.addEventListener("click", clickEnter);

function clickEnter() {
    const create_li = document.createElement("li");
    console.log("クリックされました");
}

// // ul要素の取得
// const todoUl = document.getElementById("todo-ul");

// // button要素の取得
// const enterButton = document.getElementById("enter-button");

// // button要素へのイベント割り付け
// enterButton.addEventListener("click", clickEnter);

// // クリック時に実行される関数
// function clickEnter() {
//   // li要素をJSで生成する
//   const todoLi = document.createElement("li");

//   // li要素に入れるテキストをinputに入力された値にする
//   todoLi.innerText = document.getElementById("todo-input").value;

//   // ul要素の中にliを入れる
//   todoUl.appendChild(todoLi);
// }

// // クリック時に実行される関数
// function clickEnter() {
//   // li要素をJSで生成する
//   const todoLi = document.createElement("li");
//   // li要素に入れるテキストをinputに入力された値にする
//   todoLi.innerText = document.getElementById("todo-input").value;
//   console.log(todoLi);
//   // ul要素の中にliを入れる
//   todoUl.appendChild(todoLi);
//   // inputの中身を空にする
//   document.getElementById("todo-input").value = "";
// }
