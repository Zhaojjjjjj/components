export default function notice(val, type, duration) {
	if (!duration || duration == '') {
		duration = '3000';
	}
	if (!type || type == '') {
		type = 'success';
	}
	let div = document.createElement('div');
	div.classList.add('notice', 'fade-in');
	div.classList.add('notice-' + type);
	div.textContent = val;
	document.body.append(div);
	div.addEventListener(
		'animationend',
		function (event) {
			if (event.animationName === 'fade-out') {
				document.body.removeChild(div);
			}
		},
		false,
	);

	setTimeout(() => {
		div.classList.add('fade-out');
	}, duration);
}
