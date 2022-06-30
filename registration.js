const toggleError = (id, error) => {
  // ф-ция принимает id и булевое знач error
  const el = document.getElementById(id);
  error ? el.classList.add('error') : el.classList.remove('error');
};
const registration = (e) => {
  e.preventDefault();

  const form = new FormData(e.target);

  const firstName = form.get('firstName');
  const lastName = form.get('lastName');
  // get вытягивает по name

  toggleError('js-registration-form-first-name', !firstName);
  toggleError('js-registration-form-last-name', !lastName);
  // true если что-то записано false если пусто
};

// const registration = (e) => {
//   // e(event) данные, которые возвращаются из формы.При сабмите передает в ивент('sumbit')
//   e.preventDefault();
//   // отмена станд поведения
//   const form = new FormData(e.target);
//   // FormData конструктор имеет свойства для(вывода всего, добавления...)
//   // target это сама форма в html из переданного в основной js (.getElementById('js-registration-form'))
//   const firstName = form.get('firstName');
//   if (firstName) {
//     document
//       .getElementById('js-registration-form-first-name')
//       .classList.remove('error');
//   } else {
//     document
//       .getElementById('js-registration-form-first-name')
//       .classList.add('error');
//     // !как работает класслист
//   }
//   const lasttName = form.get('lastName');
//   // достаем через метод гет имя

//   // console.log(firstName);
// };
export { registration };
