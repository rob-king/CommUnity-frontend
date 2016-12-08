#CommUnity (Pasakhom) - ReadMe Document

**Description:** Community is a application that contains a listing of user submitted product ideas that contribute to the social good of others. There are similar applications out there but, they strictly cater to for-profit entities.

##Tasks
1. Adrienne Dao (Back-end scaffolding and CSS)
2. Robert King (Back-end scaffolding, database, and all around jack-of-all trades)
3. Angel Valant (Front-end and CSS)

##User Stories:
1. I want to see a listing of products.
2. I want to see product details.
3. I want to post feedback to products.
4. I want to tag products.

##MVP Features:
1. Comments Section (Model - CRD) (Done)
2. Product Page (Listing and Individual) (Model - CRUD) (Done)

##Silver Features:
1. Up-voting (Done)
2. Tags/Categories (Done - Hacky)
3. Front-end validation (Done)
4. Back-end validation (Done)


##Gold Features:
1. Listing of Similar Products
2. Rspec Testing (Done)
3. Markdown Form Submission
4. Carousel of featured/related products

##Technologies Used:
1. Angular - (Front-end)
    - UI Router
    - ngResource
    - ngAnimate
    - ngTouch
    - jQuery
    - Font Awesome
    - Angular Truncate
    - ngTagsInput
    - Google Fonts
    - Bootstrap
2. Rails (Back-end)
    - Ruby
    - PostgreSql- Postman
    - RSpec
    - Faker
    - CORS
    - API (JSON)


##Project Notes:
1. Card format for product display on the index.html page.
- Contents of Card:
- Logo of product.
- Title of product.
- Up-voting count.
- Number of comments contributed to the feedback section of product.
- Brief product description.
- Display of product tags.
2. Individual product page will display detailed information of a product.
- Contents of Individual Product Page:
- Logo of product.
- Title of product.
- Up-voting count.
- Listing of author(s) of product idea.
- Photo(s) and video(s) showcasing product idea.
- Detailed description of the product presented.
- Full listing of feedback section (Idea: Do we want to up-vote on comments?).

##Unresolved Issues
- Mobile responsive menu stopped working.
- Implementation of formal tagging system using directive ngTagsInput.

##Future
- Add more test cases.
- Front-end testing.
- Adding Users
