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
                this.$emit("deleted")
            }
        }
    }
}
</script>

<style scoped>
    button {
        border: 1px solid black;
        color: white;
        padding: 10px;
    }
    .delete {
        background-color: rgb(253, 45, 45);
    }
    .add {
        background-color: rgb(250, 115, 250);
    }
</style>