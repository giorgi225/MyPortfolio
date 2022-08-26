<template>
    <div class="loader">
        <div class="spinner">
            <div class="circle">
            </div>
        </div>
    </div>
</template>

<script>
    
</script>

<style scoped>
    .loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #ffa878;
        z-index: 999999999 !important;
    }

    .spinner {
        width: 120px;
        height: 120px;
        border-top: 11px solid #f6fff6;
        border-right: 8px solid transparent;
        border-radius: 50%;
        animation-name: spinner;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    .circle {
        width: 9px;
        height: 9px;
        background-color: #ffffff;
        border-radius: 59%;
        margin-left: 96px;
        margin-top: 6px;
    }

    @keyframes spinner {
        100% {
            transform: rotate(360deg);
        }
    }

    .loader-circle svg path {
        fill: #FFFFFF;
    }
</style>