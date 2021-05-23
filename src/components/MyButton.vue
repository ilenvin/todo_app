<template>
    <button :class="state" v-on:click="clickButton()">
        <span v-if="state == 'delete'">Delete</span>
        <span v-else>Add</span>
    </button>
</template>

<script>
export default {
    name: "Mybutton",
    props: ['state',"id"],
    emits: ["added", "deleted"],
    data() {
        return {
            //state: 'delete' //delete or add
        }
    },
    methods: {
        clickButton() {
            if(this.state == "add") {
                this.$emit("added", this.id);
            } else {
                this.$emit("deleted", this.id)
            }
        }
    }
}
</script>

<style scoped>
    button {
        border: 2px solid black;
        color: white;
        height: 2em;
    }
    .delete {
        background-color: rgb(253, 45, 45);
    }
    .add {
        background-color: rgb(185, 53, 247);
    }
</style>