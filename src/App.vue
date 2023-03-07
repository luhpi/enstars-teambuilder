<template>
  <nav class="d-none d-lg-block">
    <h1>enstars team builder</h1>
    <router-link to="/">home</router-link>
    <router-link to="/cards">cards</router-link>
    <router-link to="/about">about</router-link>
  </nav>
  <nav class="d-lg-none mobile-nav">
    <h1>enstars team builder</h1>
    
    <div class="dropdown">
      <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
        <span class="bi bi-list"></span>
      </button>
      <ul class="dropdown-menu border-0 rounded-0">
        <router-link to="/" class="dropdown-item">home</router-link>
        <router-link to="/cards" class="dropdown-item">cards</router-link>
        <router-link to="/about" class="dropdown-item">about</router-link>
      </ul>
    </div>
    
  </nav>

  <router-view class="app d-inline d-lg-block"/>
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
  height: auto;
  color: black;
  border: solid 1px black;
  margin: 10px;
  text-decoration: none;
  font-size: 22px;
  padding: 5px 15px;
  font-weight: 400;
}

nav a:hover, .mobile-nav a:hover {
  background-color: #4444dd;
  color: white!important;
}

nav a.router-link-exact-active, .mobile-nav a.router-link-exact-active {
  color: #4444dd;
  border: solid 1px #4444dd;
}

span:hover{
  color: #4444dd;
}

.mobile-nav{
  display: flex;
  justify-content: space-between;
  width: -webkit-fill-available;
  height: auto;
  position: initial;
  margin-bottom: -40px;
}

.dropdown{
  margin: auto 0;
}

.mobile-nav button{
  color: black;
  background-color: transparent;
  border: none;
  font-size: 3vh;
}
.mobile-nav h1{
  font-size: 3vh;
  margin: auto 0;
}

.mobile-nav ul{
  width: 98vw;
  padding: 15px;
}

.mobile-nav a{
  padding: 0;
  width: 100%;
  padding: 5px 15px;
  margin: 10px 0;
}

.app{
  margin-left: 305px;
  overflow-y: scroll;
  max-height: 100vh;
  overflow-y: hidden;
}
footer{
  float: left;
  position: absolute;
  bottom: 15px;
  left: 20px;
}
</style>
