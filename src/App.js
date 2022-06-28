import "antd/dist/antd.min.css";
import { createBrowserHistory } from "history";


import Login from "./components/Login";
import StudentDefaultLayout from "./Layout/StudentDefaultLayout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StudentProfile from "./pages/Profile/Student/StudentProfile";


import CreateBlog from "./pages/Blog/CreateBlog";
import EditBlog from "./pages/Blog/EditBlog";
import PostedBlog from "./pages/Blog/PostedBlog";
import BlogHomePage from "./pages/Blog/BlogHomePage";
import View from "./pages/Blog/View";
function App() {
  const history = createBrowserHistory();
  

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          {/* anyone one can access */}
          <Route path="/" exact component={StudentProfile} />
          <Route path="/login" exact component={Login} />
          {/* students only aceess  */}
          <Route path="/student" exact component={StudentDefaultLayout} />
          
          <Route path="/bloghomepage" exact component={BlogHomePage} />
          <Route path="/postedBlog" exact component={PostedBlog} />
          <Route path="/createblog" exact component={CreateBlog} />
          <Route path="/editblog/:id" exact component={EditBlog} />
          <Route path="/view/:id" exact component={View} />
         
       
         
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
