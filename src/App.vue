<template>
  <nav>
    <h1>enstars team builder</h1>
    <router-link to="/">home</router-link>
    <router-link to="/cards">cards</router-link>
    <router-link to="/about">about</router-link>
  </nav>
  <router-view class="app"/>
  <footer>
    made by <a href='https://twitter.com/justpiness' target="_blank">@justpiness</a>
  </footer>
</template>

<style>
* {
  font-family: "adrianna", sans-serif;
}
body{
  margin: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  float: left;
  width: 275px;
  padding: 15px;
  display: block;
  text-align: left;
  position: absolute;
  height: -webkit-fill-available;
}

nav h1 {
  color: black;
  margin: 15px;
  margin-bottom: 30px;
  font-weight: 400;
  font-stretch: expanded;
  font-size: 33px;
}

nav a {
  display: flex;
  height: 30px;
  color: black;
  border: solid 1px black;
  margin: 10px;
  text-decoration: none;
  font-size: 22px;
  padding: 5px 15px;
  font-weight: 400;
}

nav a:hover {
  background-color: #4444dd;
  color: white!important;
  border: solid 1px #4444dd;
}

nav a.router-link-exact-active {
  color: #4444dd;
  border: solid 1px #4444dd;
}

.app{
  margin-left: 305px;
  overflow-y: scroll;
  max-height: 100vh;
}
footer{
  float: left;
  position: absolute;
  bottom: 15px;
  left: 20px;
}
</style>
