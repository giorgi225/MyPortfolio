<template>
    <div>
        <div class="cursor"></div>
        <div class="cursor2"></div>
    </div>
</template>

<script>
    export default {
        mounted() {
            var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');


document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`

  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});
document.addEventListener('mouseleave', function(){
  cursor.classList.remove('active')
  cursorinner.classList.remove('active')
})
document.addEventListener('mouseenter', function(){
  cursor.classList.add('active')
  cursorinner.classList.add('active')
})

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})
        }
    }
</script>

<style scoped>
    .cursor {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        border: 4px solid #2c2d32;
        transition: all 200ms ease-out;
        position: fixed;
        pointer-events: none;
        left: 0;
        top: 0;
        opacity: 0;
        z-index: 9999999999 !important;

}
.cursor.active {
  opacity: 1;
}


    @keyframes scale {
        0% {
            width: 30px;
            height: 30px;
        }

        50% {
            width: 34px;
            height: 34px;
        }

        100% {
            width: 30px;
            height: 30px;
        }
    }

    .cursor2 {
        width: 10px;
        height: 10px;
        border-radius: 100%;
        background-color: #2c2d3296;
        position: fixed;
        transform: translate(-50%, -50%);
        pointer-events: none;
        transition: width .3s, height .3s;
        opacity: 0;
                z-index: 9999999999 !important;
    }
    .cursor2.active {
      opacity: 1;
    }
    .hover {
        background-color: #2c2d3296;
        /* background: red; */
        opacity: 0.4;
}

    .cursorinnerhover {
        width: 50px;
        height: 50px;
        opacity: .5;
    }
</style>