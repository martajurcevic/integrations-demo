import React from "react";
import { Container } from "rsuite";
import Categories from "../categories/Categories";

const Home = () => {
  const [expand, setExpand] = React.useState(true);
  return (
    <div className="show-fake-browser sidebar-page">
      <Container>
        <Container className='show-container'>

          <h3>Home page</h3>

        </Container>
      </Container>
    </div>
  );
};

export default Home;