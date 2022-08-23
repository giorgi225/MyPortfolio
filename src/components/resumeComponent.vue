<template>
   <div class="content"  id="resumeCont">
     <div class="ct">
        <div class="content-title-d">
            <h3 class="m-f-500">RESUMe</h3>
        </div>
        <div class="row">
            <div class="col">
                <div class="resume-title">

                    <h4 class="name m-f-500 fx-center">
                        <svg class="mr-11" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5 26.25C4.3125 26.25 3.72417 26.0054 3.235 25.5163C2.745 25.0263 2.5 24.4375 2.5 23.75V10C2.5 9.3125 2.745 8.72417 3.235 8.235C3.72417 7.745 4.3125 7.5 5 7.5H10V5C10 4.3125 10.245 3.72375 10.735 3.23375C11.2242 2.74458 11.8125 2.5 12.5 2.5H17.5C18.1875 2.5 18.7763 2.74458 19.2663 3.23375C19.7554 3.72375 20 4.3125 20 5V7.5H25C25.6875 7.5 26.2763 7.745 26.7663 8.235C27.2554 8.72417 27.5 9.3125 27.5 10V23.75C27.5 24.4375 27.2554 25.0263 26.7663 25.5163C26.2763 26.0054 25.6875 26.25 25 26.25H5ZM12.5 7.5H17.5V5H12.5V7.5Z"
                                fill="#373642" />
                        </svg>
                        Experience</h4>
                </div>
            </div>
            <div class="resume-items">
                <div class="resume-item border-line-h active">
                    <div class="date">Mar 2022 - Present</div>
                    <div class="name m-f-500">Front-end developer</div>
                    <div class="company m-f-400">ToBeBroker · Full-time · Remote</div>
                    <p class="m-f-400">
                        I work as Front-end Developer in ToBeBroker Company since 2022.
                    </p>
                </div>
            </div>
        </div>
        <div class="rowa">
            <div class="col">
                <div class="resume-title">

                    <h4 class="name m-f-500 fx-center">
                        <svg class="mr-11" width="30" height="30" viewBox="0 0 30 30" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.5312 2.65594C12.7908 2.65594 11.1216 3.34735 9.89086 4.57806C8.66015 5.80876 7.96875 7.47796 7.96875 9.21844C7.96875 12.8372 11.6672 13.8469 11.9278 18.1247H17.1337C17.3944 13.8469 21.0938 12.8372 21.0938 9.21844C21.0938 7.47796 20.4023 5.80876 19.1716 4.57806C17.9409 3.34735 16.2717 2.65594 14.5312 2.65594V2.65594ZM14.5312 26.4056C16.3069 26.4056 16.8591 25.4428 17.0316 24.8438H12.0309C12.2034 25.4438 12.7556 26.4056 14.5312 26.4056V26.4056ZM11.9531 23.9044H17.1094V19.0631H11.9531V23.9044Z"
                                fill="#373642" />
                        </svg>

                        Skills</h4>
                </div>
                <div class="skill-set">
                    <div class="skill-row">
                        <p class="name m-f-500">Html</p>
                        <p class="name m-f-400">90%</p>
                    </div>
                    <div class="skill-row">
                        <p class="name m-f-500">Css</p>
                        <p class="name m-f-400">90%</p>
                    </div>
                       <div class="skill-row">
                        <p class="name m-f-500">Bootstrap</p>
                        <p class="name m-f-400">90%</p>
                    </div>
                    <div class="skill-row">
                        <p class="name m-f-500">Javascript</p>
                        <p class="name m-f-400">90%</p>
                    </div>
                       <div class="skill-row">
                        <p class="name m-f-500">Jquery</p>
                        <p class="name m-f-400">90%</p>
                    </div>
                    <div class="skill-row">
                        <p class="name m-f-500">Vue.js</p>
                        <p class="name m-f-400">70%</p>
                    </div>
                    <div class="skill-row">
                        <p class="name m-f-500">Php</p>
                        <p class="name m-f-400">70%</p>
                    </div>
                    <div class="skill-row">
                        <p class="name m-f-500">Laravel</p>
                        <p class="name m-f-400">70%</p>                      
                    </div>
                </div>
            </div>
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
    .skill-set {
        padding: 10px 25px;
        display:grid;
        grid-template-columns:1fr 1fr 1fr;
        grid-gap: 25px;
    }
    .skill-row {
    position: relative;
    width: 100%;
    display: flex;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    align-items: center;
    justify-content: center;
    border: 8px solid #d6d6d7;
    flex-direction: column;
}
    .skill-row .name {
        margin-bottom:10px;
    }
    .skill-row .progress {
        position:relative;
        width:100%;
        height: 6px;
        background: rgb(198, 190, 190);
        border-radius: 4px;
        overflow: hidden;
    }
    .skill-row .progress::before {
        position:absolute;
        content: "";
        left:0;
        width:90%;
        height: 100%;
        background:#f5824e;
    }
    .skill-row .progress.p70::before {
        position:absolute;
        content: "";
        left:0;
        width:70%;
        height: 100%;
        background:#f5824e;
    }
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

    .resume-title,
    .skill-title {
        padding: 0 0 20px 0;
        position: relative;
    }

    .resume-title:after,
    .skill-title:after {
        left: -20px;
    }

    .resume-title .icon,
    .skill-title .icon {
        position: relative;
        top: -15px;
        float: left;
        width: 40px;
        height: 40px;
        font-size: 32px;
        color: #78cc6d;
        background: #ffffff;
    }

    .resume-title .icon .ion,
    .skill-title .icon .ion,
    .resume-title .icon .fab,
    .skill-title .icon .fab,
    .resume-title .icon .fas,
    .skill-title .icon .fas {
        display: block;
        line-height: 40px;
    }

    .resume-title .name,
    .skill-title .name {
        position: relative;
        margin: 0 0 0 20px;
        padding-top: 20px;
        font-size: 13px;
        line-height: 13px;
        color: #171717;
        padding-bottom: 13px;
        font-weight: 500;
        text-transform: uppercase;
    }

    .resume-title .name::before {
        position: absolute;
        content: "";
        left: -14px;
        bottom: 0px;
        height: 1px;
        width: 90%;
        background: linear-gradient(45deg, #5b5b64c4, #ffffff12);
    }

    /* 5.1 Resume */
    .resume-items {
        position: relative;
        padding: 10px 27px;
    }

    .row {
        position: relative;
    }

    .row::before {
        position: absolute;
        content: "";
        left: 6px;
        width: 1px;
        height: 100%;
        background: linear-gradient(205deg, black, transparent);
    }

    .resume-items .resume-item {
        position: relative;
        padding: 20px 0 20px 0;
    }

    .resume-items .resume-item:after {
        left: -20px;
    }

    .resume-items .resume-item.active .date {
        color: #f5824e;
    }

    .resume-items .resume-item.active .date:before {
        background: #f5824e;
    }

    .resume-items .resume-item .date {
        margin: 0 0 10px 0;
        padding: 0;
        position: relative;
        display: inline-block;
        font-size: 11px;
        line-height: 18px;
        color: #d8dbe2;
        font-weight: 500;
        text-transform: uppercase;
        border-radius: 4px;
        -moz-border-radius: 4px;
        -webkit-border-radius: 4px;
        -khtml-border-radius: 4px;
    }

    .resume-items .resume-item .date:before {
        content: '';
        position: absolute;
        left: -25px;
        top: 4px;
        width: 9px;
        height: 9px;
        background: #d8dbe2;
        border-radius: 9px;
        -moz-border-radius: 9px;
        -webkit-border-radius: 9px;
        -khtml-border-radius: 9px;
    }

    .resume-items .resume-item .name {
        margin: 0;
        font-size: 13px;
        color: #171717;
        font-weight: 500;
        text-transform: uppercase;
    }

    .resume-items .resume-item .company {
        margin: 0 0 10px 0;
        font-size: 11px;
        color: #999999;
        font-weight: 300;
        text-transform: uppercase;
    }

    .resume-items .resume-item p {
        margin: 0;
    }
</style>