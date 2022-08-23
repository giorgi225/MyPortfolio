<template>
    <div class="ct content" id="projectCont">
        <div>
            <div class="content-title-d">
                <h3 class="m-f-500">Projects</h3>
            </div>
            <div class="gr-2">
                <a href="#" class="project-section">
                    <div class="project-item">
                        <div class="project-img">
                            <img src="@/assets/imgs/pr-1.png" alt="">
                        </div>
                    </div>
                    <div class="project-desc">
                        <h4 class="m-f-500 mt-11 mb-6">Slider Plugin vanilla js</h4>
                        <p class="m-f-400">vanilla js(no jQuery!) Plugin that lets you create a beautiful responsive
                            slider</p>
                    </div>
                </a>
                <a href="#" class="project-section">
                    <div class="project-item">
                        <div class="project-img">
                            <img src="@/assets/imgs/pr-2.png" alt="">
                        </div>
                    </div>
                    <div class="project-desc">
                        <h4 class="m-f-500 mt-11 mb-6">Tour Agency Landing Page</h4>
                        <p class="m-f-400">Html, Css, Javascript</p>
                    </div>
                </a>
                 <a href="#" class="project-section">
                    <div class="project-item">
                        <div class="project-img">
                            <img src="@/assets/imgs/pr-3.png" alt="">
                        </div>
                    </div>
                    <div class="project-desc">
                        <h4 class="m-f-500 mt-11 mb-6">Facebook Clone</h4>
                        <p class="m-f-400">Html, Css, Javascript, Bootstrap, Jquery</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        created() {
            setTimeout(() => {
                document.querySelector('.content').classList.add('active')
            }, 150)
        }
    }
</script>

<style scoped>
    .content {
        position: relative;
        width: 100%;
        height: 100%;
        background: #fff;
        padding: 5px 10px;
        transform: translateX(-120%);
        opacity: 0;
        transition: 0.5s;
        z-index: -999;
    }

    .mb-6 {
        margin-bottom: 6px;
    }

    .mt-11 {
        margin-top: 11px;
    }

    .gr-2 {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 30px;
        padding:22px;
    }

    .content.active {
        transform: translateX(0);
        z-index: 9999;
        transition: 0.4s;
        opacity: 1;
    }

    .project-section {
        padding: 18px 20px;
        box-shadow: 0px 0px 3px rgb(0 0 0 / 30%);
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        margin-top: 15px;
                transition:0.3s;
                text-decoration:none;
    }

    .project-section:hover {
        box-shadow: 0px 0px 10px rgb(0 0 0 / 30%);
        transition:0.3s;
    }

    .project-item {
        position: relative;
        width: 100%;
    }

    .project-item .project-img {
        position: relative;
        width: 100%;
        height:100%;
        max-height: 300px;
    }

    .project-desc h4 {
        color:#373642;
    }

    .project-desc p {
        color:#373642;
    }

    .project-item .project-img img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    box-shadow: 0px 0px 3px rgb(0 0 0 / 30%);
    border-radius: 2px;
}
</style>