export const getCookie = (name) => {
  var cookieArr = document.cookie.split(";");
  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");
    if (name === cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return null;
};

export const getParents = (elem) => {
  var parents = [];
  while (elem.parentNode && elem.parentNode.nodeName.toLowerCase() !== "body") {
    elem = elem.parentNode;
    parents.push(elem);
  }
  return parents;
};

export const addZeroBeforeNumber = (number) => {
  return number > 9 ? number : `0${number}`;
};

export const InputField = (value) => {
  document.querySelectorAll(".quantity").forEach((item) => {
    let num = value ? value : 0,
      el = item.querySelector(".qty-text"),
      plusBtn = item.querySelector(".qty-plus"),
      minusBtn = item.querySelector(".qty-minus");

    plusBtn.addEventListener("click", () => {
      num = num + 1;
      el.setAttribute("value", num);
    });

    minusBtn.addEventListener("click", () => {
      num = num > 0 ? num - 1 : 0;
      el.setAttribute("value", num);
    });

    el.setAttribute("value", num);
  });
};

export const sendEmail = async (data) => {
  const req = await fetch(`${import.meta.env.VITE_API_URL || ''}/send`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => data);
  return await req;
};

export const resetForm = (actions, recaptcha) => {
  if (actions) {
    actions.resetForm();
    actions.setStatus(true);
    actions.setSubmitting(false);
    setTimeout(() => actions.setStatus(false), 5000);
  }

  if (recaptcha) {
    recaptcha.current.reset();
    recaptcha.current.captcha.classList.remove("error");
  }
};

export const setDocumentFullHeight = () => {
  const documentHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--viewport-height", `${window.innerHeight}px`);
  };

  window.addEventListener("resize", documentHeight);
  documentHeight();
};
