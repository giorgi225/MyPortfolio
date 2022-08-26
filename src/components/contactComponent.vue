<template>
    <div class="content" id="contactCont">
        <div class="ct">
            <div class="content-title-d">
                <h3 class="m-f-500">Contact</h3>
            </div>
            <div class="grid-2 gap-30">
                <p class="text m-f-500">Email .... <a href="mailto:gigishalamberidze9@gmail.com"
                        class="gmail m-f-400">gigishalamberidze9@gmail.com</a> </p>
                <p class="text m-f-500">Freelance .... <span class="green m-f-400">Available</span> </p>
                <p class="text m-f-500">Linkedin .... <a
                        href="https://www.linkedin.com/in/giorgi-shalamberidze-3b163520b/" target="_blank"
                        class="m-f-400 gmail">Giorgi Shalamberidze</a> </p>
                <p class="text m-f-500">Phone .... <a class="gmail m-f-400" href="tel:574175188">574-17-51-88</a></p>
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
        },

        data() {
            return {
                changed: 'about',
            }
        },

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


    .content.active {
        transform: translateX(0);
        z-index: 9999;
        transition: 0.4s;
        opacity: 1;
    }

    .grid-2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 0px 20px;
        margin: 30px 0px;
        grid-gap: 25px;
    }

    .grid-2 .text {
        font-size: 13px;
        text-transform: capitalize;
        color: #201d23;
    }

    .gmail {
        color: #da8c45;
    }

    .green {
        color: #47b841;
    }

    @media screen and (max-width:1090px) {
        .content {
            position: relative;
            width: 100%;
            height: auto !important;
            background: #fff;
            padding: 5px 10px;
            margin: 15px 0px;
            transform: translateX(0);
            opacity: 1;
            transition: 0.5s;
            z-index: 999;
        }
    }
</style>