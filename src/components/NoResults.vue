<template>
    <div>
        <img src="../../public/Frontend_Internship_Test_Slices/img_empty_houses@3x.png" />
        <div class="details">
            <span>No results found</span>
            <span>Please try another keyword</span>
        </div>

    </div>
</template>

<script>
export default {
    name: 'noResults'
}
</script>

<style scoped>
div {
    /* height: 100vh; */
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
}

img {
    width: 40%;
    height: 40%;
    object-fit: contain;
}

.details {
    margin-top: 1rem;
}

span {
    display: block;
}
</style>