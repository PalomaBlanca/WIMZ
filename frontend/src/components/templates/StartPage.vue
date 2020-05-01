<template>
    <div class="start-page-wrapper">
        <Header/>
        <Navigation
            @wantsToGiveInfo="handleClick('give-info')"
            @wantsToGetInfo="handleClick('get-info')"
            @wantsToKnowAboutUs="handleClick('about-us')"
        />
        <div class="text-wrapper">
            <p>
                <b>W</b>o <b>i</b>st <b>m</b>ein <b>Z</b>ug? Das fragen sich Pendler und Reisende jeden Tag zu oft.  Die Planung wann man nochmal einen Kaffee trinken gehen, noch Erledigungen und Einkäufe tätigen kann oder sich lieber beeilen sollte, ist fast unmöglich. Wir hoffe sehr, dass wir dies mit <img class="" width="55px" src="https://wimz.de.cool/wp-content/uploads/2020/05/logo-2-e1588342746322.png" alt="Wimz?"/> gemeinsam wenigstens ein wenig eindämmen können und du deinen Tag schöner, effizienter und einfach besser gestalten kannst.
            </p>
            <p>
                Das wichtigste in diesem Projekt seid ihr, die Community 
                <svg class="bi bi-heart-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" clip-rule="evenodd"/>
                </svg>.
                Ihr helft anderen Reisenden, die wiederum euch helfen, sodass man gemeinsam das ungewisse Warten am Bahnsteig zunichte macht.
            </p>
        </div>
        <Footer/>        
    </div>
</template>

<script>
import Navigation from '@/components/organisms/Navigation';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';

export default {
    name: 'StartPage',

    components:  {
        Navigation,
        Header,
        Footer,
    },

    methods: {
        handleClick(way) {
            this.$router.push({name: way});
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/css/utils.scss';
</style>