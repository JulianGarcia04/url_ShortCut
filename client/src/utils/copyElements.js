import copy from 'copy-to-clipboard';
import Swal from 'sweetalert2';

export const copyElement = (text) => {
    copy(text);
    Swal.fire({
      title: "Text Copied",
      icon: "success",
      position: "bottom",
      toast: true,
      timerProgressBar: true,
      timer: 1500,
      showConfirmButton: false,
    });
  };