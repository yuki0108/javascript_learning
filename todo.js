  // ulタグの取得
  const todoUl = document.getElementById("todo-ul");
  
  // ボタン要素の取得
  const enterButton = document.getElementById("enter-button");

enterButton.addEventListener("click", clickEnter);
  
// 削除用のボタンを作成
const deleteButton = document.createElement("button");

// deleteと入力
deleteButton.innerHTML = "Delete";

console.log(deleteButton);

function clickEnter() {
  // li要素をJSで生成する
  const create_li = document.createElement("li");
  
  // inputタグに入力されたタグvalueをliタグに入れる
  create_li.innerText = document.getElementById("todo-input").value;

  todoUl.appendChild(create_li);
  create_li.appendChild(deleteButton);

  console.log(todoUl);
  
}

