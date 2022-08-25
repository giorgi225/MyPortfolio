<template>
    <div class="index">
        <div class="background rv">
            <div class="profile">
                <img src="@/assets/imgs/pr.png" alt="">
            </div>
        </div>
        <div class="profile-info">
            <h3 class="title s-f-400">Giorgi Shalamberidze</h3>
            <p class="proffesion m-f-400">Front-end Developer</p>
        </div>
        <div class="social-platforms">
            <a href="#">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M29.5312 15C29.5312 6.97266 23.0273 0.46875 15 0.46875C6.97266 0.46875 0.46875 6.97266 0.46875 15C0.46875 22.2527 5.78262 28.2645 12.7295 29.3555V19.2006H9.03809V15H12.7295V11.7984C12.7295 8.15684 14.8975 6.14531 18.218 6.14531C19.8082 6.14531 21.4711 6.42891 21.4711 6.42891V10.0031H19.6383C17.8336 10.0031 17.2705 11.1234 17.2705 12.2725V15H21.3006L20.6561 19.2006H17.2705V29.3555C24.2174 28.2645 29.5312 22.2527 29.5312 15Z"
                        fill="black" />
                </svg>

            </a>
            <a href="#">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15.0001 0.6C7.0471 0.6 0.600098 7.047 0.600098 15C0.600098 22.953 7.0471 29.4 15.0001 29.4C22.9531 29.4 29.4001 22.953 29.4001 15C29.4001 7.047 22.9531 0.6 15.0001 0.6ZM11.4751 20.9685H8.5591V11.5845H11.4751V20.9685ZM9.9991 10.4325C9.0781 10.4325 8.4826 9.78 8.4826 8.973C8.4826 8.1495 9.0961 7.5165 10.0366 7.5165C10.9771 7.5165 11.5531 8.1495 11.5711 8.973C11.5711 9.78 10.9771 10.4325 9.9991 10.4325ZM22.1251 20.9685H19.2091V15.768C19.2091 14.5575 18.7861 13.7355 17.7316 13.7355C16.9261 13.7355 16.4476 14.292 16.2361 14.8275C16.1581 15.018 16.1386 15.288 16.1386 15.5565V20.967H13.2211V14.577C13.2211 13.4055 13.1836 12.426 13.1446 11.583H15.6781L15.8116 12.8865H15.8701C16.2541 12.2745 17.1946 11.3715 18.7681 11.3715C20.6866 11.3715 22.1251 12.657 22.1251 15.42V20.9685V20.9685Z"
                        fill="black" />
                </svg>

            </a>
            <a href="#">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2438 10.2562 29.2313C11.0062 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9812 11.2688 25.725C7.5 26.4187 6.525 24.8063 6.225 23.9625C6.05625 23.5313 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8688 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3437 23.625C11.475 22.65 11.8688 21.9938 12.3 21.6188C8.9625 21.2438 5.475 19.95 5.475 14.2125C5.475 12.5812 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9687 21.0938 21.2438 17.7562 21.6188C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C22.759 28.2259 25.3465 26.3121 27.1796 23.7592C29.0127 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z"
                        fill="black" />
                </svg>

            </a>
        </div>
        <div class="actions">
            <a href="#" @click.prevent="downloadFile" class="action">
                <p class="text m-f-400">Download CV</p>
            </a>
        </div>
    </div>
</template>

<script>
    // import axios from 'axios'

    export default {
        methods: {
            async downloadFile() {
                fetch(location.origin+'/cv.pdf')
                    .then(resp => resp.blob())
                    .then(blob => {
                        const url = window.URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.style.display = 'none';
                        a.href = url;
                        // the filename you want
                        
                        a.download = 'cv.pdf';
                        document.body.appendChild(a);
                        a.click();
                        window.URL.revokeObjectURL(url);

                    })
            },
        },
    }
</script>


<style scoped>
    .index {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .background {
        position: relative;
        width: 100%;
        filter: brightness(0.9);
        max-height: 50%;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: 1;
        overflow: visible;
        background-image: url("@/assets/imgs/abstract.jpg");
    }

    .profile {
        position: absolute;
        bottom: -77px;
        left: 50%;
        height: 50px;
        transform: translateX(-50%);
        height: 150px;
        width: 150px;
        border-radius: 50%;
        border: 5px solid #5a5961;
        overflow: hidden;
        box-shadow: -9px 9px 6px rgb(25 23 22 / 20%);
    }

    .profile img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .social-platforms {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .social-platforms a {
        position: relative;
        display: flex;
    }

    .social-platforms a:not(:last-of-type) {
        margin-right: 20px;
    }

    .social-platforms a svg path {
        fill: #484959;
        transition: 0.3s;
    }

    .social-platforms a:hover svg path {
        fill: rgb(255, 137, 97);
        transition: 0.3s;
    }

    .profile-info {
        position: relative;
        margin: 85px 0px 10px 0px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .title {
        font-size: 1.6rem;
        color: #373642;
        text-transform: uppercase;
    }

    .proffesion {
        color: #373642;
        margin-top: 5px;
    }

    .actions {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .actions .action {
        padding: 15px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #FFF;
        border-top: 1px solid #f2e5e5;
        text-decoration: none;
        transition: all 0.3s ease-in-out;
    }

    .actions .action:hover {
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease-in-out;
    }

    .actions .action:not(:last-of-type) {
        border-right: 1px solid #f2e5e5;
    }
</style>