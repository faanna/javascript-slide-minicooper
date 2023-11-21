//변수 설정

const panel = document.querySelector('.panel');
const btns = document.querySelectorAll('.btns li');
const ring = document.querySelector('#ring');

for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', (e) => {
		e.preventDefault();

		panel.style.marginLeft = '-100' * i + '%';

		for (let el of btns) {
			el.classList.remove('on');
		}
		btns[i].classList.add('on');

		ring.className = '';
		ring.classList.add('rot' + i);
	});
}

btns.forEach((el, index) => {
	el.addEventListener('click', (e) => {
		panel.style.marginLeft = '-100' * index + '%';

		for (let el of btns) {
			el.classList.remove('on');
		}
		btns[index].classList.add('on');

		ring.className = '';
		ring.classList.add('rot' + index);
	});
});
