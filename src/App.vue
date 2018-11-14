<template lang="pug">
  #app
    
    header
      nav.navbar
        .container-fluid
          a(href='index.html' , v-bind:class=" { 'is-visible': $route.path != '/' } ").back: i.fas.fa-chevron-left

          a(href='index.html').navbar-brand.logo.mr-auto {{ navTitle }}

          button(v-on:click='isHidden = !isHidden' , v-bind:class='{nav_open: isHidden}' , type='button').navbar-toggler
            span.line
            span.line
            span.line

          .side-navbar-nav(v-show="isHidden")
            .side-navbar-title
              span MENÜ
            
            ul.side-nav
              li
                router-link(to="/")
                  span.nav-icon
                  | Übersicht

            .side-chapter
              span Bussgeldkataloge 2018

            ul.side-nav
              li
                router-link(to="/page_2")
                  span.nav-icon
                  | Geschwindigkeitsverstoß
              li
                router-link(to="/page_3")
                  span.nav-icon
                  | Abstandsverstoß
              li
                router-link(to="/page_4")
                  span.nav-icon
                  | Rotlichtverstoß
              li
                router-link(to="/wahlen")
                  span.nav-icon
                  | Bußgeldrechner

            .side-chapter
              span Diverses

            ul.side-nav
              li
                router-link(to="/page_6") Impressum
              li
                router-link(to="/page7") Test Toast

    app-title

    router-view

</template>

<script>

  import Title from './components/Title.vue'

  export default {

    components: {
      'app-title': Title
    },

    data: function() {
      return {
        navTitle: 'BUSSGELDKATALOG-2018',
        //pageTitle: 'Was wird ihnen vorgeworfen?',
        isHidden: false
      }
    },

    watch: {
        '$route' (to, from) {
          this.navTitle = to.meta.navTitle
          console.log(to.meta.navTitle)
        }
    }

  }

</script>

<style lang="scss">

$red-color: #C92339;

// Navbar
.navbar {
  padding: 15px 5px;
  background: $red-color;
  position: inherit;
  
  .back {
    display: none;
    margin-right: 20px;
    font-size: 20px;
    color: #FFF;
      &:hover , &:focus , &:active {
        color: #FFF;
      }
      &.is-visible {
        display: inline-block;
      }
  }
  
  .side-navbar-nav {
    position: absolute;
    width: 90%;
    height: 100%;
    right: 0;
    top: 0;
    background: #fff;
      &:after {
        content: "";
        position: absolute;
        width: 20%;
        height: 100%;
        left: -20%;
        top: 0;
        background: rgba(0, 0, 0, 0.5);
      }
      .side-navbar-title {
        padding: 15px 25px;
        background: $red-color;
        text-transform: uppercase;
        font-size: 18px;
        font-weight: 700;
        color: #FFF;
      }
  }

  .side-nav {
    margin: 0;
    padding: 15px 25px;
      li {
        padding: 10px 0;
      }
      a {
        font-size: 18px;
        font-weight: 500;
        color: #000;
      }
      .nav-icon {
        display: inline-block;
        vertical-align: middle;
        width: 34px;
        height: 34px;
        margin-right: 15px;
        background: #f0f0f0;
        -webkit-border-radius: 50%;
                border-radius: 50%;
      }
  }

  .side-chapter {
    margin: 0 25px;
    padding: 10px 0;
    font-size: 16px;
    font-weight: 500;
    border-top: 2px solid #f2f2f2;
    border-bottom: 2px solid #f2f2f2;
  }

}

  .logo {
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-weight: 700;
    color: #FFF;
      &:hover , &:focus , &:active {
        color: #FFF;
      }
  }

  .navbar-toggler {
    width: 30px;
    height: 30px;
    padding: 0;
    line-height: .5;
    font-size: 14px;
    z-index: 2;
    border: none;
    -webkit-border-radius: 0;
            border-radius: 0;
    -webkit-transition: all .3s ease-in-out;
       -moz-transition: all .3s ease-in-out;
        -ms-transition: all .3s ease-in-out;
         -o-transition: all .3s ease-in-out;
            transition: all .3s ease-in-out;
      &:hover {
          .line {
            background: #FFF;
          }
      }
      &:focus , &:active , &:visited {
        outline: none;
      }
      &.nav_open {
        position: absolute;
        right: 30px;
        .line:nth-child(1) {
          position: absolute;
          -webkit-transform: rotate(45deg);
             -moz-transform: rotate(45deg);
              -ms-transform: rotate(45deg);
               -o-transform: rotate(45deg);
                  transform: rotate(45deg);
        }
        .line:nth-child(2) {
          position: absolute;
          -webkit-transform: rotate(-45deg);
             -moz-transform: rotate(-45deg);
              -ms-transform: rotate(-45deg);
               -o-transform: rotate(-45deg);
                  transform: rotate(-45deg);
        }
        .line:last-child {
          display: none;
        }
      }
  }

  .line {
    width: 30px;
    height: 3px;
    background: #fff;
    display: inline-block;
  }

  .side-navbar-nav {}

</style>
