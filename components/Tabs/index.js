// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


// get the list of topics from the heroku backend
const getTopicList = () => {
	axios.get('https://lambda-times-backend.herokuapp.com/topics')
		.then( response => {
			const tabs = document.querySelector('.tabs .topics');
			const topics = response.data.topics;
			topics.forEach(topic => tabs.appendChild(makeTab(topic)));
	})
	.catch( err => {
		console.log('An error occurred!');
		console.log(err);
	});
};


// generate a tab div element given a topic
const makeTab = (topic) => {
	const div = document.createElement('div');
	div.className = 'tab';
	div.textContent = topic;
	return div;
};


// generate the topics tab list
getTopicList();
