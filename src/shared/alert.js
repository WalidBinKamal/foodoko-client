import Swal from "sweetalert2";

export const errorAlert = (message = "Something went wrong!", title = "Oops...") => Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
});