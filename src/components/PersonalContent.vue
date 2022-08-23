<template>
    <div class="main">
        <div class="img-content">
            <!-- <img src="@/assets/imgs/297868175_462879539182270_2414015806359729176_n.jpg" alt=""> -->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PersonalComponent'
    }
</script>

<style scoped>
    .main {
        padding: 25px;
    }

    .img-content {
        position: relative;
        max-width: 100%;
        width: 100%;
        background: url('@//assets/imgs/297868175_462879539182270_2414015806359729176_n.jpg');
        background-attachment: fixed;
        /* background-position: center; */
        background-size: cover;
        background-repeat: no-repeat;
        height: 500px;
        padding: 15px;
        border-radius: 12px;
        border: 13px solid white;
        box-shadow: 0px 0px 3px rgb(0 0 0 / 30%);
    }
</style>