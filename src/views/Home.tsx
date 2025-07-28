import styled from "styled-components";
// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: #bf4f74;
//   background-color: red;
// `;

// // Create a Wrapper component that'll render a <section> tag with some styles
// const Wrapper = styled.div`
//   padding: 4em;
//   background: blue;
// `;

// Use Title and Wrapper like any other React component – except they're styled!
// render(

// );

// 案例二
const Button = styled.button<{ primary?: boolean }>`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "#BF4F74" : "white")};
  color: ${(props) => (props.primary ? "white" : "#BF4F74")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;
import {Link} from 'react-router-dom'
function Home() {
  return (
    <>
      {/* <Wrapper>
        <Title>Hello World!

          <h2>
            222
          </h2>
        </Title>
      </Wrapper> */}

      {/*  */}

      <div>
        <Link to='/about'>Normal</Link>
        
        <Button>Primary</Button>
      </div>
    </>
  );
}

export default Home;
