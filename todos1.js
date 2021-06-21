const tr = document.querySelector("table");
const deletetodos = (id) => {
  const todo = document.querySelectorAll("tr");
  todo.forEach((i) => {
    if (i.getAttribute("id") === id) {
      $(i).slideUp(500, function () {
        i.remove();
      });
    }
  });
};

tr.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON" || e.target.tagName === "I") {
    const id =
      e.target.parentElement.parentElement.getAttribute("id") ||
      e.target.parentElement.parentElement.parentElement.getAttribute("id");
    db.collection("Todos")
      .doc(id)
      .delete()
      .then(() => {
        console.log("succesfully deleted the document");
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
// const del = () => {
//   $(".desbtn").on("click", function () {
//     var row = $(this).closest("tr");
//     row.slideUp(500, function () {
//       row.remove();
//     });
//   });
// };
const addTodos = (todo, id) => {
  const title = todo.title;
  $("table").append(
    $(
      "<tr id =" +
        id +
        '><td class="cols1">' +
        title +
        '</td><td><button class="desbtn"><i class="fas fa-trash-alt"></i></button></td></tr>'
    )
  );
  $("tr:last-child").slideDown(500);
};
db.collection("Todos").onSnapshot((snapshot) => {
  snapshot.docChanges().forEach((change) => {
    const doc = change.doc;

    if (change.type === "added") {
      addTodos(doc.data(), doc.id);
    } else if (change.type === "removed") {
      deletetodos(doc.id);
    }
  });
});
$(function () {
  $("#btn").on("click", addValue);
  $("#addtext").on("keypress", function (e) {
    if (e.keyCode == 13) {
      addValue();
    }
  });
});
function addValue() {
  var value = $("#addtext").val();
  if (value.length != 0) {
    const now = new Date();
    const todo = {
      title: value,
      addedAt: firebase.firestore.Timestamp.fromDate(now),
    };
    db.collection("Todos")
      .add(todo)
      .then(() => {
        console.log("succesfully added");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  $("#addtext").val("");
}
