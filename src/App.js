/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React from "react";
import "./App.css";
import "./components/PostsContainer/PostsPage";
import "./components/SearchBar/SearchBarContainer";
import "./dummy-data"
import dummyData from "./dummy-data";
import PostsPage from "./components/PostsContainer/PostsPage";
// import the PostsPage and SearchBar and add them to the App
// import dummydata

const App = () => {
  // set up state for the dummy data and pass to your PostsPage
  const [data] = useState(dummyData);
  return (
    <div className="App">
      {/* Add components here  and pass props where appropriate */
      <PostsPage postData = {data} />
      }
    </div>
  );
};

export default App;
