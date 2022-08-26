<template>
    <div class="template">
        <div class="nav-side" v-if="!size">
            <navComponent @sendData="getData" />
        </div>
        <div class="nav-side" v-if="size">
            <navComponent @sendScrollData="getScroll" />
        </div>
        <div class="main-side">
            <indexComponent @sendData="getData" />
        </div>
        <div id="portolio-content" v-if="!size">
            <aboutComponent v-if="changed=='about'  " />
            <resumeComponent v-if="changed=='resume'" />
            <ProjectsComponent v-if="changed=='project'" />
            <ContactComponent v-if="changed=='contact' || changed=='contact2'" />
        </div>
        <div id="portfolio-content" v-else-if="size">
            <aboutComponent />
            <resumeComponent />
            <ProjectsComponent />
            <ContactComponent />
        </div>
    </div>
</template>

<script>
    import navComponent from "@/components/navComponent.vue"
    import indexComponent from "./indexComponent.vue";
    import aboutComponent from "./aboutComponent.vue";
    import resumeComponent from "./resumeComponent.vue"
    import ProjectsComponent from "./projectsComponent.vue";
    import ContactComponent from "./contactComponent.vue";


    export default {
        components: {
            navComponent,
            indexComponent,
            aboutComponent,
            resumeComponent,
            ProjectsComponent,
            ContactComponent
        },
        data() {
            return {
                changed: 'about',
                size: false,
            }
        },
        methods: {
            getData(val) {
                this.changed = val
            },
            getScroll(val) {
                let currentTarget = document.getElementById(val+'Cont')
                window.scrollBy(0, currentTarget.offsetTop)
            }
        },
        mounted() {
            if (window.innerWidth <= 1090) {
                this.size = true;
            } else {
                this.size = false;
            }
            window.addEventListener('resize', () => {
                if (window.innerWidth <= 1090) {
                    this.size = true;
                } else {
                    this.size = false;
                }
            })
        }
    }
</script>

<style scoped>
    .template {
        position: relative;
        display: flex;
        width: 100%;
        max-width: 1200px;
        min-height: 500px;
        max-height: 700px;
        height: calc(100vh - 100px);
    }

    .nav-side {
        position: relative;
        width: 100px;
        height: 100%;
        padding: 10px;
    }

    .main-side {
        position: relative;
        width: 100%;
        max-width: 40%;
        height: 100%;
        background: #FFF;
        z-index: 99999;
        box-shadow: -10px -10px 11px #ff7e365e;
        border: 1px solid #ece6e6;
    }

    #portolio-content {
        position: relative;
        width: 100%;
        height: 100%;
        padding: 20px 0px 20px 0px;
        overflow: hidden;
    }

    @media screen and (max-width:1090px) {
        .template {
            flex-direction: column;
        }

        .nav-side {
            width: 100%;
        }

        .main-side {
            max-width: 100%;
            height: 100%;
            margin: 0 auto;
        }
    }
</style>