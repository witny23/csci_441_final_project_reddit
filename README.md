# csci_441_final_project

csci 441 final project - convert class components, implement routes, authenticate users 

Please reference blackboard for the most current assignment instructons/requirements/points.

Overview:

- Convert class components to functional components. Implement useState() as needed
    - AddTopics
    - App
    - RenderPost
    - TitleBar
    - TopicList
- Require users to login in order to view posts and post themselves
    - create a login.js
    - if users are logged in, redirect to posts page (App)
    - provide an error if login is incorrect
- Provide a means to signup
    - create a signup.js
    - if users are logged in, redirect to posts page
    - provide an error if signup is incorrect
- Provide a means to logout as implemented on the posts page
    - create a logout.js
- Implement routes (including a 404 page with a link to login)
    - update client/main.js as needed
- Create a RouteDecisions.js
    - used to assess public and private component access
    - import and implement in client/main.js as needed
- Create a NotFound.js
    - used when a url is not found
    - using Link, create a link to the login page
