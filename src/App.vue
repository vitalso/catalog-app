<template lang="pug">
  #app
    
    header
      nav.navbar
        .container-fluid
          router-link(to="/" , v-bind:class=" { 'is-visible': $route.path != '/' } ").back: i.fas.fa-chevron-left

          a(href='index.html').navbar-brand.logo.mr-auto {{ navTitle }}

          button(v-on:click='isHidden = !isHidden' , v-bind:class='{nav_open: isHidden}' , type='button').navbar-toggler
            span.line
            span.line
            span.line

          .side-navbar-nav(v-bind:class="{ navbar_open: isHidden }")
            .side-navbar-title
              span MENÜ
            
            ul.side-nav
              li
                router-link(to="/" , v-on:click.native='isHidden = !isHidden')
                  span.nav-icon
                    img(src="src/assets/icon-1.png")
                  | Übersicht

            .side-chapter
              span Bussgeldkataloge 2018

            ul.side-nav
              li
                router-link(to="/page_2" , v-on:click.native='isHidden = !isHidden')
                  span.nav-icon
                    img(src="src/assets/icon-1.png")
                  | Geschwindigkeitsverstoß
              li
                router-link(to="/page_3" , v-on:click.native='isHidden = !isHidden')
                  span.nav-icon
                    img(src="src/assets/icon-2.png")
                  | Abstandsverstoß
              li
                router-link(to="/page_4" , v-on:click.native='isHidden = !isHidden')
                  span.nav-icon
                    img(src="src/assets/icon-3.png")
                  | Rotlichtverstoß
              li
                router-link(to="/wahlen" , v-on:click.native='isHidden = !isHidden')
                  span.nav-icon
                    img(src="src/assets/icon-4.png")
                  | Bußgeldrechner

            .side-chapter
              span Diverses

            ul.side-nav
              li
                router-link(to="/page_6" , v-on:click.native='isHidden = !isHidden') Impressum
              li
                router-link(to="/page7" , v-on:click.native='isHidden = !isHidden') Test Toast

    app-title
    
    transition(name="page" , mode="out-in")
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
        isHidden: false
      }
    },

    watch: {
        '$route' (to, from) {
          this.navTitle = to.meta.navTitle
        }
    }

  }

</script>

<style lang="scss">

.page-enter-active, .page-leave-active {
  transition: opacity .3s, transform .3s;
}
.page-enter, .page-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}


$red-color: #C92339;

header {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 2;
}

// Navbar
.navbar {
  height: 60px;
  padding: 15px 5px;
  background: $red-color;
  
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
    position: fixed;
    width: 90%;
    height: 100%;
    right: 0;
    top: 0;
    background: #fff;
    transform: translateX(150%);
    transition: all .3s ease-in-out;
      &.navbar_open {
        transform: translateX(0);
      }
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
        height: 60px;
        padding: 15px 25px;
        background: $red-color;
        line-height: 30px;
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
        text-align: center;
        line-height: 30px;
        margin-right: 15px;
        background: #f0f0f0;
        -webkit-border-radius: 50%;
                border-radius: 50%;
          img {
            max-width: 25px;
            max-height: 17px;
          }
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
    width: 25px;
    height: 25px;
    padding: 0;
    line-height: .5;
    font-size: 12px;
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
    width: 25px;
    height: 2px;
    background: #fff;
    display: inline-block;
  }

  .side-navbar-nav {}

</style>
