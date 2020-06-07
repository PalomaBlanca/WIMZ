<template>
    <div>
        <Header/>
        <Navigation
            @wantsToGiveInfo="handleClick('give-info')"
            @wantsToGetInfo="handleClick('get-info')"
            @wantsToKnowAboutUs="handleClick('about-us')"
        />
        <div class="text-wrapper">
            <p>
               In diesem Formular kannst du deinen Zug und die Richtung angeben. Daraufhin wertet unser System die Daten aus und zeigt dir dies auf der Karte an. 
            </p>
        </div>    
        <form-get-info/>
        <div class="form-item">
            <div class="row">
                <label class="col-8 label-toggle-button">Kartenansicht?</label>
                <div class="col text-right">
                    <label class="switch">
                        <input name="comment" type="checkbox" v-model="mapIsOpen">
                        <span class="slider"></span>
                    </label>
                </div>
            </div>
        </div>
        <Map v-if="mapIsOpen"/>
        <info-list v-else class="info-list"/>
        <Footer/>
    </div>
</template>

<script>
import Navigation from '@/components/organisms/Navigation';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import FormGetInfo from '@/components/organisms/FormGetInfo';
import InfoList from '@/components/organisms/InfoList';
import Map from '@/components/organisms/Map';


export default {
    name: 'GetInfo',

    components:  {
        Navigation,
        Header,
        Footer,
        FormGetInfo,
        InfoList,
        Map,
    },

    data() {
        return {
            mapIsOpen: false,
        }
    },

    methods: {
        handleClick(way) {
            this.$router.push({name: way});
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/sass/utils.scss';
.form-item{
    margin-top: 30px;
    margin-right: 15px;
    margin-left: 15px;
} 
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 28px;
  margin-bottom: 30px;
  border-radius: 5px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #C82333;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 5px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 3px;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  transform: translateX(12px);
}
</style>
