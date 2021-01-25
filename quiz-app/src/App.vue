<template>
  <div id="app">
    <div id="nav">
      <div class="container-xl">
        <router-link class="custom-router-link" to="/">Główna</router-link>
        <router-link class="custom-router-link" to="/quizList"
          >Quizy</router-link
        >
      </div>
    </div>
    <transition name="router-view-transition-slide-down" mode="out-in">
      <router-view :key="$route.fullPath" />
    </transition>
  </div>
</template>

<style lang="scss">
$mainBlue: rgb(94, 242, 255);
$mainPurple: rgb(130, 61, 173);
$mainGreen: rgb(63, 212, 155);

#app {
  background: $mainPurple;
  background: linear-gradient(135deg, $mainPurple 0%, $mainBlue 100%);
  min-height: 100vh;
  font-family: "Work Sans", sans-serif;
}
#app .row,
#app p {
  margin: 0;
}
#nav {
  padding: 25px 0px;
  background: $mainPurple;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);

  a {
    font-weight: bold;
    font-size: 24px;
    color: $mainBlue;
    padding: 35px 10px;
    margin-right: 6px;
    border-radius: 0px 0px 6px 6px;
    position: relative;
    transition: all 0.2s ease-out;

    &.router-link-exact-active {
      color: $mainPurple;
      background: $mainBlue;
      box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.4);
    }
    &:hover {
      color: $mainPurple;
      background: $mainBlue;
      box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.4);
    }
  }
}
.router-view-transition-slide-down {
  &-enter {
    opacity: 0;
  }
  &-leave-to {
    opacity: 0;
  }
  &-enter-active {
    transition: all 0.2s ease-in-out;
  }
  &-leave-active {
    transition: all 0.2s ease-in-out;
  }
}

.custom-router-link {
  color: black;

  &:hover {
    color: black;
    text-decoration: none;
  }
}

.text-overflow-ellipsis-1 {
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.text-overflow-ellipsis-2 {
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.text-overflow-ellipsis-3 {
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
