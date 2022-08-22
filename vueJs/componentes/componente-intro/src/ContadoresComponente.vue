<template>
    <div class="contadores">
        <app-contador/>
        <app-contador/>
        <app-contador/>
        <app-contador/>
        <app-contador/>
    </div>
</template>

<script>
import ContadorComponente from './ContadorComponente.vue'

export default {
    components:{'app-contador': ContadorComponente}
    
}
</script>

<style>

</style>