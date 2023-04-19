<template>
    <router-link class="link" to="/">
        <div>
        <img src="../../public/Frontend_Internship_Test_Slices/ic_back_grey@3x.png" />
        <span>Back To Overview</span>
    </div>
    </router-link>
</template>

<script>
    export default {
        name: 'BackButton'
    }
</script>

<style scoped>
.link {
    text-decoration: none;
    color: var(--secondary);
}
div {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
}

img {
    width: 25px;
    height: 25px;
    object-fit: contain;
    margin-right: 20px;
}
</style>