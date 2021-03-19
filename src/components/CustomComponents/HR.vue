<template>
    <div class="outer-most mb-3 mb-md-4">
        <div class="outer mx-auto mb-2"></div>
        <div class="inner"></div>
    </div>
</template>

<script>
export default {
    name: 'Chr'
}
</script>

<style scoped>
.outer-most{
    width: 100%;
    height: 0.5rem;
    position: relative;
}
.outer{
    width: 100%;
    height: 0.115rem;
    position: absolute;
    top: 0.08rem;
    background: rgb(211, 211, 211);
}
.inner{
    width: 10%;
    height: 0.15rem;
    position: absolute;
    border-radius: 5px;
    background: green;
    animation: animation infinite ease-in-out;
    animation-duration: 2s;
}

@keyframes animation {
    0%{
        width: 10%;
    }
    50%{
        width: calc(10% + 5px);
    }
    100%{
        width: 10%;
    }
}
</style>