
var forum = location.origin + location.pathname;

window.cryogen.controller('PostsController', ['$http', function($http) {
	var that = this;
	this.posts = [{
		title: 'Loading News...',
		excerpt: 'Give it a sec!',
		link: '#/'
	}]
  $http.get(forum + '/c/announcements.json')
  	.success(function (data) {
  		var topics = data.topic_list.topics;
  		for (var i = topics.length - 1; i >= 0; i--) {
  			topics[i].link = forum + '/t/' + topics[i].slug + '/' + topics[i].id
  		};
  		topics = topics.slice(0, 4);
  		that.posts = topics;
  	})
  	.error(function (err) {
  		that.posts = [{
  		title: 'Oh noes!',
		excerpt: 'There was an error getting the news!\nPlease try again later.',
		link: '#/'
  		}]
  	});
}]);
