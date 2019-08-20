// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


// get the list of articles from the heroku backend
const getArticles = () => {
	axios.get('https://lambda-times-backend.herokuapp.com/articles')
		.then( response => {
			// get the DOM attachment point
			const cards = document.querySelector('.cards-container');
			// get the list of articles within topics
			// note: the response is an object with topic: articleArray entries
			const articlesByTopic = Object.entries(response.data.articles);

			articlesByTopic.forEach(([topic, articleList]) => {
				articleList.forEach(article => cards.appendChild(makeArticle(article)));
			});
	})
	.catch( err => {
		console.log('An error occurred!');
		console.log(err);
	});
};


// generate an article div element given an article
const makeArticle = (article) => {
	const divCard = document.createElement('div');
	divCard.className = 'card';

	const divHeadline = document.createElement('div');
	divHeadline.className = 'headline';
	divHeadline.textContent = article.headline;
	divCard.appendChild(divHeadline);

	const divAuthor = document.createElement('div');
	divAuthor.className = 'author';
	const divImg = document.createElement('div');
	divImg.className = 'img-container';
	const img = document.createElement('img');
	img.src = article.authorPhoto;
	divImg.appendChild(img);
	divAuthor.appendChild(divImg);
	const span = document.createElement('span');
	span.textContent = `By ${article.authorName}`;
	divAuthor.appendChild(span);

	divCard.appendChild(divAuthor);

	return divCard;
};


// generate the topics tab list
getArticles();
