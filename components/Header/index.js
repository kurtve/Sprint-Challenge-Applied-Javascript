// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const Header = () => {
	const header = document.createElement('div');
	header.className = 'header';

	const span1 = document.createElement('span');
	span1.className = 'date';
	span1.textContent = 'SMARCH 28, 2019';
	header.appendChild(span1);

	const h1 = document.createElement('h1');
	h1.textContent = 'Lambda Times';
	header.appendChild(h1);

	const span2 = document.createElement('span');
	span2.className = 'temp';
	span2.textContent = '98°';
	header.appendChild(span2);

	return header;
};


document.querySelector('.header-container').appendChild(Header());

