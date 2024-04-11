const funkceShow = (e) => {
  const menuPolozky = document.querySelector('#menu-polozky');
  menuPolozky.classList.toggle('show');
};

document.querySelector('#menu-tlacitko').addEventListener('click', funkceShow);
