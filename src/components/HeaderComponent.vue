<template>
    <div>
        <a href="#">
            <h1 class="s-f-400">G<span>I</span>G<span>I</span></h1>
        </a>
        <ul :class="{active: isActive}">
            <li>
                <a class="m-f-500 active" href="#">Home</a>
            </li>
            <li>
                <a class="m-f-500" href="#">About</a>
            </li>
            <li>
                <a class="m-f-500" href="#">Projects</a>
            </li>
            <li>
                <a class="m-f-500" href="#">Contact</a>
            </li>
        </ul>
        <svg @click="toggler" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" :class="{active: isActive}">
            <path d="M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z"></path>
            <path d="M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z"></path>
            <path d="M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z"></path>
            <path d="M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z"></path>
        </svg>
    </div>
</template>

<script>
    export default {
        name: 'HeaderComponent',

        data() {
            return {
                isActive: false,
            }
        },
        methods: {
            toggler: function () {
                this.isActive = !this.isActive
            }
        },
    }
</script>

<style scoped>
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 25px;
        background: white;
        box-shadow: 0px 0px 3px rgb(85 80 80 / 30%);
    }

    a {
        text-decoration: none;
    }

    ul {
        display: flex;
        align-items: center;
    }

    button {
        display: flex;
        align-content: center;
    }

    svg {
        width: 30px;
        height: 25px;
        cursor: pointer;
        display: none;
    }

    ul li {
        list-style-type: none;
    }

    ul li:not(:last-of-type) {
        margin: 0px 20px;
    }

    a h1 span {
        color: #3d3d40;
    }

    a h1 {
        color: #ff4646;
        letter-spacing: 0.6px;
    }

    @media screen and (max-width:1200px) {
        svg {
            display: flex;
        }

        ul {
            position: fixed;
            top: 58px;
            width: 100%;
            left: 0px;
            flex-direction: column;
            align-items: flex-start;
            z-index: 9999 !important;
            background: #3d3d40;
            box-shadow: 0px 0px 5px rgb(0 0 0 / 30%);
            padding-left: 16px;
            height: 0px;
            border-top-left-radius: 0px;
            overflow: hidden;
            transition: 0.3s;
            z-index: -999 !important;
        }

        ul.active {
            height: 233px;
            transition: .3s;
        }

        ul li {
            margin: 20px 0px !important;
        }

        ul li a {
            padding: 5px 10px;
            color: rgb(255 255 255) !important;
            border-radius: 4px;
            transition: 0.3s;
            font-size: 14px;
        }

        ul li a.active {
            color: #ff4646 !important;
        }

        ul li a:hover {
            color: #ff4646 !important;
        }
    }

    ul li a {
        padding: 5px 10px;
        color: rgb(88 88 98);
        border-radius: 4px;
        transition: 0.3s;
        font-size: 14px;
    }

    svg.active path{
        fill:#ff4646;
    }

    ul li a.active {
        color: #ff4646;
    }

    ul li a:hover {
        color: #ff4646;
        transition: 0.3s;
    }
</style>