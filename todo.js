  // ulタグの取得
  const todoUl = document.getElementById("todo-ul");
  
  // ボタン要素の取得
  const enterButton = document.getElementById("enter-button");

  enterButton.addEventListener("click", clickEnter);

function clickEnter() {
  // li要素をJSで生成する
  const create_li = document.createElement("li");
  
  // inputタグに入力されたタグvalueをliタグに入れる
  create_li.innerText = document.getElementById("todo-input").value;

  todoUl.appendChild(create_li);

  console.log(todoUl);
  
}

