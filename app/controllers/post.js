import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		sayHello: function(){
			alert('Hello');
		},
		toggleBody: function(){
			this.toggleProperty('isShowingBody');
		},
		submitAction: function(){
			alert(this.get('name') + '    ' + this.get('comment'));

		}
	},
	title: 'My Blog Post',
	body: 'This is the body of the blog post',
	authors:['William','Allan', 'Michelle'],
	created: new Date(),
	comments: [
		{
			name: 'Mike Smith',
			comment: 'Thanks for the greate post'
		},
		{
			name: 'Allan Torres',
			comment: 'Thanks for the bad post'
		},
		{
			name: 'Jeff Williams',
			comment: 'good job'
		}
	]
});
