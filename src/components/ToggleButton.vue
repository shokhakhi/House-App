<template>
    <div class="container">
        <a :class="[priceSelected ? 'selected' : 'not-selected']" class="entity price" @click="setPrice">Price</a>
        <a :class="[sizeSelected ? 'selected' : 'not-selected']" class="entity size" @click="setSize">Size</a>
    </div>
</template>

<script>
export default {
    name: 'ToggleButton',
    data() {
        return {
            priceSelected: true,
            sizeSelected: false
        }
    },
    methods: {
        setPrice() {
            this.priceSelected = true;
            this.sizeSelected = false;
            this.$emit('priceClicked', this.priceSelected)
        },
        setSize() {
            this.priceSelected = false;
            this.sizeSelected = true;
            this.$emit('sizeClicked', this.sizeSelected)
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    padding: unset;
    border-radius: 10px;
}

.entity {
    height: 100%;
    width: 100%;
    padding: 0 50px;
    cursor: pointer;
    color: var(--background-1);
    display: flex;
    align-items: center;
}

.price {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

.size {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}

.selected {
    background-color: var(--primary);
}

.not-selected {
    background-color: var(--tertiary-2);
}
</style>