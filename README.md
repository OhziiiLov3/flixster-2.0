## Unit Assignment: Flixster

Submitted by: **Keith Baskerville**

Estimated time spent: **#** hours spent in total

Deployed Application (optional): [Flixster Deployed Site](ADD_LINK_HERE)

### Application Features

#### REQUIRED FEATURES

- [ ] **Display Movies**
  - [x] Users can view a list of current movies from The Movie Database API in a grid view.
    - [x] Movie tiles should be reasonably sized (at least 6 playlists on your laptop when full screen; large enough that the playlist components detailed in the next feature are legible).
  - [x] For each movie displayed, users can see the movie's:
    - [x] Title
    - [x] Poster image
    - [x] Votes
  - [x] Users can load more current movies by clicking a button at the bottom of the list, which automatically updates page with new movies (no reloading by clicking the browser's refresh button).
- [x] **Search Functionality**
  - [x] Users can use a search bar to search for movies by title.
  - [x] The search bar should include:
    - [x] Text input field
    - [x] Submit/Search button
    - [x] Clear button
  - [x] Movies with a title containing the search query in the text input field are displayed in a grid view when the user either:
    - [ ] Presses the Enter key
    - [ ] Clicks the Submit/Search button
  - [ ] Users can click the Clear button. When clicked:
    - [ ] All text in the text input field is deleted
    - [ ] The most recent search results are cleared from the text input field and the grid view and all current movies are displayed in a grid view
- [ ] **Design Features**
  - [ ] Website implements all of the following accessibility features:
    - [ ] Semantic HTML
    - [ ] [Color contrast](https://webaim.org/resources/contrastchecker/)
    - [ ] Alt text for images 
  - [ ] Website implements responsive web design.
    - [ ] Uses CSS Flexbox or CSS Grid
    - [ ] Movie tiles and images shrink/grow in response to window size
  - [ ] Users can click on a movie tile to view more details about a movie in a pop-up modal.
    - [ ] The pop-up window is centered in the screen and does not occupy the entire screen.
    - [ ] The pop-up window has a shadow to show that it is a pop-up and appears floating on the screen.
    - [ ] The backdrop of the pop-up appears darker or in a different shade than before. including:
    - [ ] The pop-up displays additional details about the moving including:
      - [ ] Runtime in minutes
      - [ ] Backdrop poster
      - [ ] Release date
      - [ ] Genres
      - [ ] An overview
  - [ ] Users can use a drop-down menu to sort movies.
    - [ ] Drop-down allows movies to be sorted by:
      - [ ] Title (alphabetic, A-Z)
      - [ ] Release date (chronologically, most recent to oldest)
      - [ ] Rating (descending, highest to lowest)
    - [ ] When a sort option is clicked, movies display in a grid according to selected criterion.
  - [ ] Website displays:
    - [ ] Header section
    - [ ] Banner section
    - [ ] Search bar
    - [ ] Movie grid
    - [ ] About section
    - [ ] Contact section
    - [ ] Footer section
    - [ ] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS**: To ease the grading process, please use the [color contrast checker](https://webaim.org/resources/contrastchecker/) to demonstrate to the grading team that text and background colors on your website have appropriate contrast. The Contrast Ratio should be above 4.5:1 and should have a green box surrounding it. 

#### STRETCH FEATURES

- [ ] **Deployment**
  - [ ] Website is deployed via Render.
  - [ ] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS**: For ease of grading, please use the deployed version of your website when creating your walkthrough. 
- [ ] **Embedded Movie Trailers**
  - [ ] Within the pop-up modal displaying a movie's details, the movie trailer is viewable.
    - [ ] When the trailer is clicked, users can play the movie trailer.
- [ ] **Favorite Button**
  - [ ] For each movie displayed, users can favorite the movie.
  - [ ] There should be visual element (such as a heart icon) on each movie's tile to show whether or not the movie has been favorited.
  - [ ] If the movie is not favorited:
    - [ ] Clicking on the visual element should mark the movie as favorited
    - [ ] There should be visual feedback (such as the heart turning a different color) to show that the movie has been favorited by the user.
  - [ ] If the movie is already favorited:
    - [ ] Clicking on the visual element should mark the movie as *not* favorited.
    - [ ] There should be visual feedback (such as the heart turning a different color) to show that the movie has been unfavorited. 
- [ ] **Watched Checkbox**
  - [ ] For each movie displayed, users can mark the movie as watched.
  - [ ] There should be visual element (such as an eye icon) on each movie's tile to show whether or not the movie has been watched.
  - [ ] If the movie has not been watched:
    - [ ] Clicking on the visual element should mark the movie as watched
    - [ ] There should be visual feedback (such as the eye turning a different color) to show that the movie has been watched by the user.
  - [ ] If the movie is already watched:
    - [ ] Clicking on the visual element should mark the movie as *not* watched.
    - [ ] There should be visual feedback (such as the eye turning a different color) to show that the movie has not been watched.
- [ ] **Sidebar**
  - [ ] The website includes a side navigation bar.
  - [ ] The sidebar has three pages:
    - [ ] Home
    - [ ] Favorites
    - [ ] Watched
  - [ ] The Home page displays all current movies in a grid view, the search bar, and the sort movies drop-down.
  - [ ] The Favorites page displays all favorited movies in a grid view.
  - [ ] The Watched page displays all watched movies in a grid view.

