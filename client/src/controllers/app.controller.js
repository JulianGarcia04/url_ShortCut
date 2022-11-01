import copy from "copy-to-clipboard";
import { createUrlLarge } from "../services/url.services.js";
import Swal from "sweetalert2";
import { v4 } from "uuid";

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

export const createUrlController = async (data, token) => {
  try {
    const response = await createUrlLarge(data, token);
    return response;
  } catch (error) {
    Swal.fire({
      title: `Error ${error.stack.statusCode}`,
      text: `${error.message}`,
      icon: "error",
      showConfirmButton: false,
      showCloseButton: true,
    });
  }
};

export const createUrlClient = (data) => {
  let urlData = { _id: v4(), ...data };

  let urlShort = `${window.location.protocol}//${
    window.location.host
  }/${urlData._id.substring(urlData._id.length - 7, urlData._id.length)}`;

  urlData.urlShort = urlShort;

  let dataParser = JSON.stringify([urlData]);

  let urlsSession = sessionStorage.getItem("temporalsUrls");

  if (!urlsSession) {
    sessionStorage.setItem("temporalsUrls", dataParser);
    return;
  }
  let urlSessionParse = JSON.parse(urlsSession);

  urlSessionParse.push(urlData);

  sessionStorage.setItem("temporalsUrls", JSON.stringify(urlSessionParse));
  
  return;
};
