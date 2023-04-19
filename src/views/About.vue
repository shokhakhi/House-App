<template>
    <div class="container">
        <div class="about-header">
            <h1>About DTT Real Estate</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati itaque corporis beatae minus quas ullam
                numquam molestiae deserunt repellendus qui aut,
                recusandae distinctio natus quia dolores exercitationem quaerat modi doloremque laborum. Laudantium, itaque
                veritatis. Blanditiis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime sapiente iste exercitationem temporibus
                quisquam.</p>
        </div>
        <div class="about-container">
            <h1>Design and Development</h1>
            <div class="info">
                <img class="logo-img" src="../../public/Frontend_Internship_Test_Slices/img_logo_dtt@3x.png" />
                <div class="dtt-details">
                    <span class="dtt-details-heading">By DTT</span>
                    <a class="dtt-details-link" href="https://www.d-tt.nl">www.d-tt.nl</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'About',
}
</script>

<style scoped>
.container {
    padding: 3rem 3rem
}

.about-header h1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.about-header p {
    font-size: Montserrat mid;
}

.info {
    display: flex;
    justify-content: space-between;
    width: 350px;
    align-items: center;
}

.about-container {
    margin-top: 50px;
}

.logo-img {
    width: 200px;
    height: 100px;
    object-fit: contain;
}

.dtt-details {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.dtt-details-heading {
    font-weight: 500;
    font-size: 22px;
}

.dtt-details-link {
    text-decoration: none;
    color: var(--hyperlink);
    margin-top: 5px;
}
</style>
