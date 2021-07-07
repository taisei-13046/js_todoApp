import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除する
const deleteFromIncompleteList = (target) => {
  document.getElementById("imcomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //li生成
  const li = document.createElement("li");
  li.innerHTML = text;

  //button（完了）
  const completeButton = document.createElement("button");
  completeButton.innerHTML = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode);
    //　完了リストに追加
    const addTarget = completeButton.parentNode;
    //内容を取得
    const text = addTarget.firstElementChild.innerHTML;
    //div以下を初期化
    addTarget.innerHTML = null;
    // liタグを生成
    const li = document.createElement("li");
    li.innerHTML = text;
    // buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerHTML = "戻す";
    backButton.addEventListener("click", () => {
      //押されたら戻すボタンの親タグ (div))を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      //テキスト取得
      const text = backButton.parentNode.firstElementChild.innerHTML;
      createIncompleteList(text);
    });

    //divに各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    console.log(addTarget);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "削除";
  deleteButton.addEventListener("click", () => {
    //　押された削除ボタンの親タグ（div）を削除する
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divの中にliを設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加する
  document.getElementById("imcomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
