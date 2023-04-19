<template>
    <router-link class="link" :to="`${recommendedHouse.id}`">
        <div class="container">
            <img :src="recommendedHouse.image" alt="recommended" class="recom-img">
            <div class="details-container">
                <span class="title">{{ recommendedHouse.location.street }}</span>
                <span class="text price">€ {{ recommendedHouse.price }}</span>
                <span class="text address">{{ recommendedHouse.location.zip }} {{ recommendedHouse.location.city }}</span>
                <div class="rooms-container">
                    <div class="details-others">
                        <img src="../../public/Frontend_Internship_Test_Slices/ic_bed@3x.png" alt="price"
                            class="currency-icon">
                        <span class="details-text">{{ recommendedHouse.rooms.bedrooms }}</span>
                    </div>
                    <div class="details-others">
                        <img src="../../public/Frontend_Internship_Test_Slices/ic_bath@3x.png" alt="size"
                            class="currency-icon">
                        <span class="details-text">{{ recommendedHouse.rooms.bathrooms }}</span>
                    </div>
                    <div class="details-others">
                        <img src="../../public/Frontend_Internship_Test_Slices/ic_size@3x.png" alt="construction"
                            class="currency-icon">
                        <span class="details-text">{{ recommendedHouse.size }}</span>
                    </div>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'RecommendedHouse',
    props: ['recommendedHouse'],
    methods: {
        async fetchHouses() {
            const res = await fetch('https://api.intern.d-tt.nl/api/houses', {
                method: 'GET',
                headers: {
                    'X-Api-Key': '-Ip20SdRhJZQ46BxtEM_7HLXTgDCnKql'
                }
            })
            const data = res.json()
            return data
        },
    },

}
</script>

<style scoped>
.container {
    background-color: var(--background-2);
    margin-bottom: 2rem;
    display: flex;
    padding: 1rem;
    align-items: center;
}

img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
    margin-right: 2rem;
}

.rooms-container {
    display: flex;
    margin-top: 1.5rem;
    align-items: center;

    width: 50%;
}

.details-container {
    display: flex;
    flex-direction: column;
}
.currency-icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    object-fit: contain;
}

.details-others {
    display: flex;
    align-items: center;
    margin-right: 2rem;
}

.link {
    text-decoration: none;
    color: var(--text-secondary);
}

.text {
    font-size: 13px;
    margin-top: 8px;
}

.address {
    color: var(--tertiary-2);
}
</style>