<template>
    <div class="nav-ct">
        <ul>
            <li>
                <a @click="display"  id="about" :class="changed == 'about' ?'active':''" href="#">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.875 5.95834C6.875 8.23259 8.72575 10.0833 11 10.0833C13.2743 10.0833 15.125 8.23259 15.125 5.95834C15.125 3.68409 13.2743 1.83334 11 1.83334C8.72575 1.83334 6.875 3.68409 6.875 5.95834ZM18.3333 19.25H19.25V18.3333C19.25 14.7959 16.3708 11.9167 12.8333 11.9167H9.16667C5.62833 11.9167 2.75 14.7959 2.75 18.3333V19.25H18.3333Z"
                            fill="black" />
                    </svg>
                    <p class="text m-f-600">About</p>
                </a>
            </li>
            <li>
                <a @click="display" id="resume" :class="changed == 'resume' ?'active':''" href="#">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.40001 5.49999H0.858007C0.451007 5.49999 0.0440069 5.85199 0.0990069 6.42399L1.81501 17.413C1.81501 17.413 3.85001 9.31699 4.24601 7.36999C4.36701 6.78699 4.91701 6.59999 5.32401 6.59999H11C11 6.59999 10.23 4.31199 10.153 4.05899C10.021 3.57499 9.77901 3.29999 9.29501 3.29999H5.65401C5.25801 3.29999 4.88401 3.55299 4.77401 4.00399C4.67501 4.44399 4.40001 5.49999 4.40001 5.49999ZM9.76801 5.49999H5.36801C5.36801 5.49999 5.83001 4.39999 6.32501 4.39999H8.66801C9.19601 4.39999 9.76801 5.49999 9.76801 5.49999ZM2.93701 17.875C2.59601 18.392 2.10101 18.7 1.55101 18.7H18.854C19.448 18.7 19.866 18.359 19.987 17.787C20.471 15.378 21.835 8.50299 21.835 8.50299C21.912 7.95299 21.505 7.69999 21.153 7.69999H17.6V6.08299C17.6 5.90699 17.314 5.49999 16.874 5.49999H12.738C12.166 5.49999 11.781 6.13799 11.781 6.13799L11 7.69999H6.14901C5.79701 7.69999 5.45601 7.90899 5.39001 8.24999C5.39001 8.24999 3.64101 15.62 3.49801 16.313C3.42101 16.72 3.25601 17.402 2.93701 17.875V17.875ZM16.918 7.69999H12.1C12.1 7.69999 12.738 6.59999 13.343 6.59999H15.862C16.643 6.59999 16.918 7.69999 16.918 7.69999V7.69999Z"
                            fill="black" />
                    </svg>

                    <p class="text  m-f-600">Resume</p>
                </a>
            </li>
            <li>
                <a @click="display" id="project" :class="changed == 'project' ?'active':''" href="#">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.4554 14.421L7.6697 11.6352C8.16745 10.7589 8.89345 9.89083 9.84678 9.03375C11.076 7.92641 13.2458 6.05458 16.3551 3.41825C16.6701 3.15103 17.0741 3.01208 17.4869 3.029C17.8996 3.04592 18.2909 3.21746 18.583 3.50955C18.8751 3.80165 19.0466 4.19292 19.0635 4.60566C19.0804 5.01839 18.9415 5.4224 18.6743 5.73741C16.0343 8.85225 14.1634 11.022 13.0597 12.2457C12.2026 13.1963 11.3345 13.9214 10.4554 14.421V14.421ZM6.40745 12.9672L9.12536 15.6842L7.8732 17.4313L3.03687 19.0767L4.66028 14.2184L6.40745 12.9672V12.9672Z"
                            fill="black" />
                    </svg>

                    <p class="text m-f-600">Projects</p>
                </a>
            </li>
            <li>
                <a @click="display" id="contact" :class="changed == 'contact' ?'active':''" href="#">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18.3333 3.66669H3.66659C2.65825 3.66669 1.84242 4.49169 1.84242 5.50002L1.83325 16.5C1.83325 17.5084 2.65825 18.3334 3.66659 18.3334H18.3333C19.3416 18.3334 20.1666 17.5084 20.1666 16.5V5.50002C20.1666 4.49169 19.3416 3.66669 18.3333 3.66669ZM18.3333 7.33335L10.9999 11.9167L3.66659 7.33335V5.50002L10.9999 10.0834L18.3333 5.50002V7.33335Z"
                            fill="black" />
                    </svg>
                    <p class="text m-f-400">Contact</p>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                changed:'about',
            }
        },
        methods: {
            display(e) {
                this.changed = e.target.closest('a').id
                document.querySelectorAll('.content').forEach(item => {
                    if(item.classList.contains('active') && item !== document.getElementById(this.changed + 'Cont')) {
                         item.classList.remove('active')
                    }
                })
                setTimeout(()=> {
                    this.$emit('sendData', this.changed)
                },250)
            },

        }
    }
</script>

<style>
    .nav-ct{
    width: 100%;
    padding: 0px 5px;
    height: max-content;
    background: rgb(255, 255, 255);
    border-radius: 4px;
    border: 1px solid #ffaa7b;
    box-shadow: 0px 0px 3px rgb(0 0 0 / 30%);
}

    .nav-ct ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding:6px 0px 6px 0px;
    }

    .nav-ct ul li {
        list-style-type: none;
        width:100%;
        height: 100%;
    }

    .nav-ct ul li:not(:last-of-type){
        margin-bottom: 12px;
    }

    .nav-ct ul li a {
        display: flex;
        position:relative;
        flex-direction: column;
        align-items: center;
        width:100%;
        height: 100%;
        text-decoration: none;
        padding: 8px;
        border-radius: 4px;
        transition: 0.3s all;
    }

    .nav-ct ul li a:hover {
        background: #ffaa7b;
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
        transition: 0.3s all;
    }

    .nav-ct ul li a:hover .text {
        color:#fff;
        transition: 0.3s all;
    }

    .nav-ct ul li a:hover svg path {
        fill:#fff;
        transition: 0.3s all;
    }

    .nav-ct ul li a.active {
         background: #ffaa7b;
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
    }

    .nav-ct ul li a.active svg path {
        fill: #fff;
    }

 .nav-ct ul li a.active .text {
        color: #fff;
    }

svg {
    transition: 0.3s all;
}
    .text {
        font-size: 12px;
        color: black;
        margin-top: 6px;
        text-transform: uppercase;
                transition: 0.3s all;

    }
</style>