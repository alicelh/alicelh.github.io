<template>
  <div class="layout">
    <header class="header">
      <div class="typewriter">
        <p class="typewriter1">The world is noisy.</p>
        <p class="typewriter2">
          Can we peek the <b>truth</b> from <strong>data</strong>?
        </p>
        <p class="typewriter3">
          Can we use <strong>visualization</strong> to help understand the
          <b>truth</b>?
        </p>
      </div>
      <!-- <nav class="nav">
        <div>
          <g-link class="nav__link" to="/"
            ><i class="fa fa-fw fa-home"></i>Home</g-link
          >
        </div>
        <div>
          <g-link class="nav__link" to="/about/">About</g-link>
        </div>
      </nav> -->
    </header>
    <div class="content">
      <slot />
    </div>
    <footer>
      <p>&copy; 2023 Linhao Meng <br /></p>
    </footer>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400&display=swap");

body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  width: 100%;
  height: 100%;
}

html {
  width: 100%;
  height: 100%;
}

.layout {
  width: 100%;
  margin: 0 auto;
  padding-left: 0;
  padding-right: 0;
}

.header {
  background: black;
  height: 200px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  text-align: left;
  margin-bottom: 10px;
}

/* On smaller resolutions, hide the text for Large screens */
@media only screen and (max-width: 1000px) {
  .header {
    display: none;
  }
}

/* On larger resolutions, hide the text for Small screens
@media only screen and (min-width: 960px) {
    .smallScreen {display: none;}
} */

.nav {
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

.nav div:hover {
  right: 0px;
}

.nav div {
  border: 2px solid #ffffff;
  background: #ffffff;
  width: 100px; /* Set a specific width */
  margin-left: 20px;
  position: relative; /* Position them relative to the browser window */
  right: -85px; /* Position them outside of the screen */
  transition: 0.3s; /* Add transition on hover */
  padding: 15px; /* 15px padding */
  text-decoration: none; /* Remove underline */
  font-size: 18px; /* Increase font size */
  color: white; /* White text color */
  border-radius: 50px 0 0 50px; /* Rounded corners on the top right and 
  bottom right side */
}

.nav__link {
  color: #000;
}

.nav__link i {
  padding-right: 10px;
}

.content {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 15px;
}

footer {
  position: relative;
  left: 0;
  bottom: 0;
  text-align: center;
  background-color: #000;
  color: white;
  width: 100%;
  padding: 2px;
}

footer p {
  margin: 10px 0;
}

.typewriter {
  margin: 40px auto;
  margin-left: 60px;
  text-align: left;
  justify-content: flex-start;
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: "Source Code Pro", monospace;
  text-align: left;
  letter-spacing: 0.08em; /* Add spacing between the characters */
  text-transform: uppercase; /* transforms text to uppercase*/
  user-select: none;
}

.typewriter1 {
  margin: 0;
  white-space: nowrap; /* keep text in one line */
  overflow: hidden; /* hide text behind the cursor */
  border-right: 0.15em solid #000;
  /* define animation types for text + cursor */
  animation: animated-text__1 2s steps(19, end) 0s 1 normal forwards,
    animated-cursor 900ms steps(10, end) 3;
}

.typewriter2 {
  margin: 0;
  white-space: nowrap; /* keep text in one line */
  overflow: hidden; /* hide text behind the cursor */
  border-right: 0.15em solid #000;
  /* define animation types for text + cursor */
  animation: animated-text__2 3s steps(33, end) 1s 1 normal both,
    animated-cursor 900ms steps(10, end) 4;
  -webkit-animation-delay: 3s;
  animation-delay: 3s;
}

.typewriter3 {
  margin: 0;
  white-space: nowrap; /* keep text in one line */
  overflow: hidden; /* hide text behind the cursor */
  border-right: 0.15em solid #000;
  /* define animation types for text + cursor */
  animation: animated-text__3 4s steps(52, end) 1s 1 normal both,
    animated-cursor 900ms steps(36, end) 10;
  -webkit-animation-delay: 7s;
  animation-delay: 7s;
}

@keyframes animated-cursor {
  from {
    border-right-color: #fff;
  }
  to {
    border-right-color: #000;
  }
}

@keyframes animated-text__1 {
  from {
    width: 0;
  }
  to {
    width: 19.5rem;
  }
}

@keyframes animated-text__2 {
  from {
    width: 0;
  }
  to {
    width: 33.5rem;
  }
}

@keyframes animated-text__3 {
  from {
    width: 0;
  }
  to {
    width: 57.4rem;
  }
}

.typewriter strong {
  text-decoration: underline overline #ff00ff;
  font-size: 1.8rem;
}

.typewriter b {
  text-decoration: cyan dotted underline;
  font-weight: 800;
}

.typewriter b:hover {
  display: inline-block;
  transform: rotateX(180deg);
  -webkit-transform: rotateX(180deg);
}
</style>
