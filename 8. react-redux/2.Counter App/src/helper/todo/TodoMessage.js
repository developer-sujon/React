import Swal from "sweetalert2";
import { Edittodo, Removetodo } from "../../redux/features/todoSlice";
import store from "../../redux/store/store";

export const RemoveTodoItem = (index) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      store.dispatch(Removetodo({ index }));
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
    }
  });
};

export const EditTodoItem = (index, title, state) => {
  let checkekStatus = null;

  if (state) {
    checkekStatus = "checked";
  } else {
    checkekStatus = null;
  }

  Swal.fire({
    title: "Todo Update?",
    html:
      `<input id="todoTitle" class="form-control" value=${title}>` +
      `<input id="todoStatus" type="checkbox" ${checkekStatus} /> Active Todo`,
    preConfirm: (value) => {
      const todoTitle = document.getElementById("todoTitle").value;
      const todoStatus = document.getElementById("todoStatus").checked;

      if (todoTitle) {
        store.dispatch(
          Edittodo({
            index,
            title: todoTitle,
            status: todoStatus,
          }),
        );
      }

      console.log(todoStatus);
    },
  });
};
