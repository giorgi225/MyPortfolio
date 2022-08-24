<template>
    <div class="template">
        <div class="nav-side">
            <navComponent @sendData="getData" />
        </div>
        <div class="main-side">
            <indexComponent @sendData="getData" />
        </div>
        <div id="portolio-content">
            <aboutComponent v-if="changed=='about' " />
            <resumeComponent v-if="changed=='resume'" />
            <ProjectsComponent v-if="changed=='project'" />
            <ContactComponent v-if="changed=='contact' || changed=='contact2'" />
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
            }
        },
        methods: {
            getData(val) {
                this.changed = val
                console.log(this.changed)
            }
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
</style>