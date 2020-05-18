<template>
    <div>
        <Heador/>
        <Novice/>
        <Borrow/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import Novice from "./novice.vue"
import Borrow from "./borrow.vue"

export default {
    components: {
        Heador,
        Novice,
        Borrow,
    },
}
</script>
