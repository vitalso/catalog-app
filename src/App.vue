<template lang="pug">
  #app
    
    header
      nav.navbar
        .container-fluid
          router-link(to="/" , v-bind:class=" { 'is-visible': $route.path != '/' } ").back: i.fas.fa-chevron-left

          a(href='index.html').navbar-brand.logo.mr-auto
            span
            | {{ navTitle }}

          button(v-on:click='isHidden = !isHidden' , v-bind:class='{nav_open: isHidden}' , type='button').navbar-toggler
            span.line
            span.line
            span.line

          <!--.side-navbar-nav(v-bind:class="{ navbar_open: isHidden }")-->
          .side-navbar-nav.navbar_open(v-show="isHidden")
            .side-navbar-title
              span MENÜ
            
            ul.side-nav
              li
                router-link(to="/" , v-on:click.native='isHidden = !isHidden')
                  span.nav-icon
                    img(src="src/assets/icon-1.png")
                  i.fas.fa-arrow-right
                  | Übersicht

            .side-chapter
              span Bussgeldkataloge 2018

            ul.side-nav
              li
                router-link(to="/page_2" , v-on:click.native='isHidden = !isHidden')
                  span.nav-icon
                    img(src="src/assets/icon-1.png")
                  i.fas.fa-arrow-right
                  | Geschwindigkeitsverstoß
              li
                router-link(to="/page_3" , v-on:click.native='isHidden = !isHidden')
                  span.nav-icon
                    img(src="src/assets/icon-2.png")
                  i.fas.fa-arrow-right
                  | Abstandsverstoß
              li
                router-link(to="/page_4" , v-on:click.native='isHidden = !isHidden')
                  span.nav-icon
                    img(src="src/assets/icon-3.png")
                  i.fas.fa-arrow-right
                  | Rotlichtverstoß
              li
                router-link(to="/wahlen" , v-on:click.native='isHidden = !isHidden')
                  span.nav-icon
                    img(src="src/assets/icon-4.png")
                  i.fas.fa-arrow-right
                  | Bußgeldrechner

            .side-chapter
              span Diverses

            ul.side-nav
              li
                router-link(to="/page_6" , v-on:click.native='isHidden = !isHidden')
                  i.fas.fa-arrow-right
                  |Impressum
              <!--li
                router-link(to="/page7" , v-on:click.native='isHidden = !isHidden') Test Toast-->

    .header__img(v-bind:class=" { 'is-hidden': $route.path != '/' } ")

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
      i {
        display: none;
        margin-right: 10px;
        font-size: 12px;
        color: $red-color;
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
      span {
        width: 29px;
        height: 29px;
        display: none;
        vertical-align: middle;
        background: url(/src/assets/logo.png) no-repeat;
        background-size: cover;
        margin-top: -1px;
        margin-right: 10px;
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

  .header__img {
    height: 130px;
    background: url(/src/assets/pageheader.jpg) center 64% no-repeat;
    background-size: cover;
    margin-top: 60px;
    margin-left: 278px;
    display: none;
      &.is-hidden {
        display: none;
          & + .title__section {
            margin-top: 0px;
          }
      }
  }

// Media query

@media screen and (min-width: 992px) {
  
  .logo span {
    display: inline-block;
  }

  .navbar-toggler {
    display: none;
  }

  .navbar {
    
    .side-navbar-nav {
      width: 278px;
      right: auto;
      top: 60px;
      left: 0;
      display: block !important;
      background: #f2f2f2;
      -webkit-transform: translate(0);
         -moz-transform: translate(0);
          -ms-transform: translate(0);
           -o-transform: translate(0);
              transform: translate(0);
      
        .side-navbar-title {
          display: none;
        }

    }

    .side-nav {
      
      a {
        font-size: 16px;
      }

      .nav-icon {
        display: none;
      }

      i {
        display: inline-block;
      }

      /*&:last-child {
        li:last-child {
          display: none;
        }
      }*/

    }

    .side-chapter {
      border-color: #cecece;
    }

  }

  .item {
    padding-left: 308px;
    padding-top: 40px;
  }

  .item__box {
    max-width: 840px;
    padding: 30px;
    -webkit-justify-content: space-between;
            justify-content: space-between;
    -webkit-flex-direction: row-reverse;
        -ms-flex-direction: row-reverse;
            flex-direction: row-reverse;
    
    &__title {
      font-size: 20px;
    }

    &__icon {
      width: 94px;
      height: 94px;
      line-height: 94px;
      float: none;
    }

  }

  .list__title {
    font-size: 28px;
    border: none;
  }

  .header__img {
    display: block;
  }

  .header__img.is-hidden + .title__section {
    margin-top: 60px;
  }

}

</style>
