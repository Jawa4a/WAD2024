import { createStore } from 'vuex'

export default createStore({
strict: true,
  state: {
    posts: [
      {
          "postId": 1,
          "uid": 1,
          "username": "Chinchilla",
          "createdTime": "2022-10-23T10:00:00Z",
          "body": "Anyone knows if this is the homework for tomorrow?",
          "attachments": [
              {
                  "type": "file",
                  "url": "./res/docs/homework.pdf",
                  "description": "Download PDF"
              }
          ]
      },
      {
          "postId": 2,
          "uid": 2,
          "username": "Tiger",
          "createdTime": "2022-10-22T10:00:00Z",
          "body": "Cool gif",
          "attachments": [
              {
                  "type": "image",
                  "url": "./res/img/gif.gif",
                  "description": "Tartu 2022"
              }
          ]
      },
      {
          "postId": 3,
          "uid": 3,
          "username": "Wombat",
          "createdTime": "2022-10-22T10:00:00Z",
          "body": "Tartu 2022",
          "attachments": [
              {
                  "type": "image",
                  "url": "./res/img/tartu2024.jpg",
                  "description": "Tartu 2022"
              }
          ]
      },
      {
          "postId": 4,
          "uid": 4,
          "username": "Koala",
          "createdTime": "2022-10-02T10:00:00Z",
          "body": "Anyone knows in which room is the lab today?",
          "attachments": []
      },
      {
          "postId": 5,
          "uid": 5,
          "username": "Skunk",
          "createdTime": "2022-10-01T10:00:00Z",
          "body": "Yep, it's one of those days! 😅 That face says it all—when the day’s been long, the coffee’s run out, and you just can't handle another bug in the code. Hang in there, buddy, we’ve all been there!",
          "attachments": [
              {
                  "type": "image",
                  "url": "./res/img/monday.png",
                  "description": "Tartu 2022"
              }
          ]
      },
      {
          "postId": 6,
          "uid": 1,
          "username": "Chinchilla",
          "createdTime": "2022-09-28T15:30:00Z",
          "body": "Anyone here for the study group later today?",
          "attachments": []
      },
      {
          "postId": 7,
          "uid": 3,
          "username": "Wombat",
          "createdTime": "2022-09-26T09:00:00Z",
          "body": "The lab was really insightful this week. The coolest!",
          "attachments": []
      },
      {
          "postId": 8,
          "uid": 6,
          "username": "Owl",
          "createdTime": "2022-09-25T20:45:00Z",
          "body": "Anyone else struggling with the project deadline?",
          "attachments": []
      },
      {
          "postId": 9,
          "uid": 7,
          "username": "Lynx",
          "createdTime": "2022-09-24T12:15:00Z",
          "body": "Found a cool trick for organizing code in VS Code!",
          "attachments": []
      },
      {
          "postId": 10,
          "uid": 2,
          "username": "Tiger",
          "createdTime": "2022-09-23T08:00:00Z",
          "body": "Good luck to everyone on the upcoming exam!",
          "attachments": []
      }
  ]  
  },
  getters: {
    posts(state) {
        return state.posts;
      },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
