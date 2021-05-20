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
                this.$emit("added");
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
        background-color: rgb(250, 115, 250);
    }
</style>