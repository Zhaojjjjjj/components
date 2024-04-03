export function showLoading(val, shape = 'spinner') {
	let loadingDiv = document.querySelector('.customLoading');
	if (!loadingDiv) {
		let mask = document.createElement('div');
		let box = document.createElement('div');
		if (shape === 'spinner') {
			let spinner = document.createElement('div');
			let valBox = document.createElement('div');
			let spinnerBox = document.createElement('div');
			spinner.classList.add('loader-spinner');
			box.appendChild(spinnerBox);
			box.appendChild(valBox);
			spinnerBox.appendChild(spinner);
			valBox.classList.add('centered');
			spinnerBox.classList.add('centered');
			let p = document.createElement('p');
			p.innerText = val;
			valBox.appendChild(p);
		} else if (shape === 'dots') {
			let span1 = document.createElement('span');
			box.appendChild(span1);
			let span2 = document.createElement('span');
			box.appendChild(span2);
			let span3 = document.createElement('span');
			box.appendChild(span3);
			box.classList.add('loader-primary');
			let p = document.createElement('p');
			p.innerText = val;
			box.appendChild(p);
		}
		mask.classList.add('loadingStyle-primary');
		mask.appendChild(box);
		mask.classList.add('customLoading');
		document.body.append(mask);
	}
}

export function hideLoading() {
	let loadingDiv = document.querySelector('.customLoading');
	if (loadingDiv) {
		loadingDiv.remove();
	}
}
