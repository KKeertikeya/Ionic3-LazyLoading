/* 
  Type of data that we're expecting:
    1. sender: the name of the message sender/activity generator (someone who likes, comments or generates any kind of activity related to user's post/activity)
    2. senderType: can be 'user' or 'page'
    3. messageDate: date on which the message (or activity) took place
    4. image: the profile picture of the sender
    5. text: the text content of the message (or activity)
    6. attachment: image/video attached in the post's content                                                             -------------- to be implemented
    7. color: the background color of the platform on which the activity took place                                       -------------- probably not required
    8. messageType: the type of message, can be 'direct message', 'like', 'comment', 'mention', etc.
    9. conversationID: this ID will be used to reference particular conversations for 'view latest conversation' feature
    10. actionButtons: contains the boolean values for which action buttons to show based on profile and ebent types
*/

export default [
    {
      sender: 'Dumbledore',
      senderID: 'sender007',
      messageID: 'message007',
      receiver: 'Harry Potter',
      senderType: 'HM',
      messageDate: new Date(1880, 1-1, 1),
      image: 'https://i.ytimg.com/vi/R6LkIcMB3oY/maxresdefault.jpg',
      text: 'Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real? <a href="http://ionicframework.com/docs/v2">docs</a>',
      color: '#3b5998',
      platform: 'facebook',
      messageType: 'direct message',
      conversationID: 'ad001',
      completed: false,
      tags: [
        "important",
      ],
      actionButtons: {
        completeItem: true,
        TWSendDirectMessage: false,
        FBSendDirectMessage: false,
        TWReply: false,
        FBReply: true,
        YTReply: false,
        INReply: false,
        TWFollowBack: false,
        viewLatestConversation: true,
        INViewPostsAnfComments: false,
        FBViewPostsAnfComments: false,
        retweet: false,
        TWLike: false,
        FBLike: true,
        showInFacebook: false,
        FBShowMore: false,
        FBViewComments: false,
        YTViewComments: false,
      }
    },
    {
      sender: 'Voldy',
      senderID: 'sender007',
      messageID: 'message007',
      receiver: 'Harry Potter',
      senderType: 'DL',
      messageDate: new Date(1960, 12-1, 31),
      image: 'https://s1.favim.com/orig/21/boss-dumbledore-funny-harry-potter-like-a-boss-Favim.com-206937.jpg',
      text: 'Surely you didn’t think I Twitter was going to keep my filthy Muggle father’s name? No. I fashioned myself a new name, a name I knew wizards everywhere would one day fear to speak, when I became the greatest sorcerer in the world!',
      color: '#cd486b',
      platform: 'instagram',
      messageType: 'comment',
      conversationID: 'tmr008',
      completed: false,
      tags: [
        
      ],
      actionButtons: {
        completeItem: true,
        TWSendDirectMessage: false,
        FBSendDirectMessage: false,
        TWReply: false,
        FBReply: false,
        YTReply: false,
        INReply: false,
        TWFollowBack: false,
        viewLatestConversation: false,
        INViewPostsAnfComments: false,
        FBViewPostsAnfComments: false,
        retweet: false,
        TWLike: false,
        FBLike: false,
        showInFacebook: false,
        FBShowMore: false,
        FBViewComments: false,
        YTViewComments: false,
      }
    },
    {
      sender: 'Snape',
      senderID: 'sender007',
      messageID: 'message007',
      receiver: 'Harry Potter',
      senderType: 'Prof',
      messageDate: new Date(1991, 10-1, 1),
      image: 'https://lovelace-media.imgix.net/uploads/140/61fc4b50-99a4-0132-44da-0ebc4eccb42f.jpg?',
      text: 'Yes, it is easy to see that nearly six years of magical education have not been wasted on you, Potter. Ghosts are transparent.',
      color: '#d34836',
      platform: 'googleplus',
      messageType: 'page comment',
      conversationID: 'ss007',
      completed: false,
      tags: [
        
      ],
      actionButtons: {
        completeItem: true,
        TWSendDirectMessage: false,
        FBSendDirectMessage: false,
        TWReply: false,
        FBReply: false,
        YTReply: false,
        INReply: false,
        TWFollowBack: false,
        viewLatestConversation: false,
        INViewPostsAnfComments: false,
        FBViewPostsAnfComments: false,
        retweet: false,
        TWLike: false,
        FBLike: false,
        showInFacebook: false,
        FBShowMore: false,
        FBViewComments: false,
        YTViewComments: false,
      }
    },
    {
      sender: 'Hermione Granger',
      senderID: 'sender007',
      messageID: 'message007',
      receiver: 'Harry Potter',
      senderType: 'Friend',
      messageDate: new Date(1991, 9-1, 1),
      image: 'https://thebrotherhoodofevilgeeks.files.wordpress.com/2014/03/hermione-granger-hermione-granger-20053436-936-1197.jpg',
      text: 'Oh, you’re so naive sometimes, Harry, you really think Umbridge will wait for proof?',
      color: '#1dcaff',
      platform: 'twitter',
      messageType: 'direct message',
      conversationID: 'hg002',
      completed: false,
      tags: [
        
      ],
      actionButtons: {
        completeItem: true,
        TWSendDirectMessage: false,
        FBSendDirectMessage: false,
        TWReply: false,
        FBReply: false,
        YTReply: false,
        INReply: false,
        TWFollowBack: false,
        viewLatestConversation: false,
        INViewPostsAnfComments: false,
        FBViewPostsAnfComments: false,
        retweet: false,
        TWLike: false,
        FBLike: false,
        showInFacebook: false,
        FBShowMore: false,
        FBViewComments: false,
        YTViewComments: false,
      }
    },
    {
      sender: 'Ron Weasley',
      senderID: 'sender007',
      messageID: 'message007',
      receiver: 'Harry Potter',
      senderType: 'Friend',
      messageDate: new Date(),
      image: 'https://pbs.twimg.com/profile_images/2553924396/image.jpg',
      text: '@HarryPotter There\'s no need to call me sir, Professor! Ahahahaha',
      color: '#1dcaff',
      platform: 'twitter',
      messageType: 'retweet',
      conversationID: 'rw001',
      completed: false,
      tags: [
        
      ],
      actionButtons: {
        completeItem: true,
        TWSendDirectMessage: false,
        FBSendDirectMessage: false,
        TWReply: false,
        FBReply: false,
        YTReply: false,
        INReply: false,
        TWFollowBack: false,
        viewLatestConversation: false,
        INViewPostsAnfComments: false,
        FBViewPostsAnfComments: false,
        retweet: true,
        TWLike: false,
        FBLike: false,
        showInFacebook: false,
        FBShowMore: false,
        FBViewComments: false,
        YTViewComments: false,
      }
    }
  ];