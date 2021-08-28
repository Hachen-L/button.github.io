"use stick"

function magic() {
	// до вызова функции
	let key = confirm('Вы Илья?');
	if (!key) {
		do {
			let user = {
				name: prompt('Введите имя пользователя:', ''),
				age: prompt('Сколько вам лет?', ''),
			}
			alert(`Вас зовут ${user.name} и вам ${user.age} лет`);
			value = confirm('Всё верно?')
		} while (!value)
	} else alert('Вход закрыт');
}
