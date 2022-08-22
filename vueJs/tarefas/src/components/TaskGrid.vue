<template>
    <div class="task-grid">
        <template v-if="tasks.length" >
            <task v-for="task in tasks" :key="task.name"
            v-bind:task="task"></task>
        </template>
        <p class="no-task" v-else>Sua vida está em dia :-)</p>
    </div>
</template>

<script>
import Task from './TaskComp.vue'
export default {
    components:{Task},
    props: {
        tasks:{ type: Array, require: true }
    }    
}
</script>

<style>

    .task-grid{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .task-grid .task{
        margin: 10px;
    }

    .no-task{
        color: #aaa;
        font-size: 1.7rem;
    }

</style>