import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: ${(props) => props.theme.clrGrey10};
  color: ${(props) => props.theme.clrGrey1};
  line-height: 1.5;
  font-size: 0.875rem;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
h1,
h2,
h3,
h4 {
  letter-spacing: ${(props) => props.theme.spacing};
  letter-spacing: ${(props) => props.theme.spacing};
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}
p {
  margin-bottom: 1.25rem;
  color: ${(props) => props.theme.clrGrey5};
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}
/*  global classes */

/* section */
.section {
  width: 90vw;
  margin: 0 auto;
  max-width: ${(props) => props.theme.maxWidth};
}

@media screen and (min-width: 992px) {
  .section {
    width: 95vw;
  }
}

/*
===============
Reviews
===============
*/
main {
  min-height: 100vh;
  display: grid;
  place-items: center;
}
.title {
  text-align: center;
  margin-bottom: 4rem;
}
.underline {
  height: 0.25rem;
  width: 5rem;
  background: ${(props) => props.theme.clrPrimary5};
  margin-left: auto;
  margin-right: auto;
}
.container {
  width: 80vw;
  max-width: ${(props) => props.theme.fixedWidth};
}
.review {
  background: ${(props) => props.theme.clrWhite};
  padding: 1.5rem 2rem;
  border-radius: ${(props) => props.theme.radius};
  box-shadow: ${(props) => props.theme.lightShadow};
  transition: ${(props) => props.theme.transition};
  text-align: center;
}
.review:hover {
  box-shadow: ${(props) => props.theme.darkShadow};
}
.img-container {
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 1.5rem;
}
.person-img {
  width: 100%;
  display: block;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
}
.quote-icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 2.5rem;
  height: 2.5rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  transform: translateY(25%);
  background: ${(props) => props.theme.clrPrimary5};
  color: ${(props) => props.theme.clrWhite};
}
.img-container::before {
  content: '';
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.clrPrimary5};
  position: absolute;
  top: -0.25rem;
  right: -0.5rem;
  border-radius: 50%;
}
.author {
  margin-bottom: 0.25rem;
}
.job {
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.clrPrimary5};
  font-size: 0.85rem;
}
.info {
  margin-bottom: 0.75rem;
}
.prev-btn,
.next-btn {
  color: ${(props) => props.theme.clrPrimary7};
  font-size: 1.25rem;
  background: transparent;
  border-color: transparent;
  margin: 0 0.5rem;
  transition: ${(props) => props.theme.transition};
  cursor: pointer;
}
.prev-btn:hover,
.next-btn:hover {
  color: ${(props) => props.theme.clrPrimary5};
}
.random-btn {
  margin-top: 0.5rem;
  background: ${(props) => props.theme.clrPrimary10};
  color: ${(props) => props.theme.clrPrimary5};
  padding: 0.25rem 0.5rem;
  text-transform: capitalize;
  border-radius: ${(props) => props.theme.radius};
  transition: ${(props) => props.theme.transition};
  border-color: transparent;
  cursor: pointer;
}
.random-btn:hover {
  background: ${(props) => props.theme.clrPrimary5};
  color: ${(props) => props.theme.clrPrimary1};
}


`;
