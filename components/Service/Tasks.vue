<template>
  <section v-if="tasks.length > 0" class="tasks">
    <div class="container">
      <div class="tasks-holder">
        <h2 class="title tasks-title">
          Задачи, которые решает система
        </h2>
        <div v-for="task,i in tasks" :key="i" class="task">
          <div class="task-number">
            {{ i+1 }}
          </div>
          <h5 class="task-header">
            {{ task.name }}
          </h5>
          <p class="task-description">
            {{ task.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    tasks: Array
  }
}
</script>

<style>
.tasks-holder{
    display: flex;
    flex-wrap: wrap;
    padding: 30px 0;
}
.tasks {
    padding: 50px 0;
}

.tasks .container {
    background: rgb(250, 250, 250);

}

.task {
    flex: 1 1 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
}

.task-number {
    background: #E3C64A;
    height: 50px;
    width: 50px;
    font-weight: 800;
    font-size: 25px;
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}

.task-header {
    font-size: 20px;
    color: #333;
    text-align: center;
    min-height: 50px;
}

.task-description {
    text-align: center;
    color: #686868;
}

.tasks-title {
    flex: 1 1 150px;
    padding: 20px;
    margin-bottom: 0!important;
}

@media (max-width: 320px) {
    .tasks-title {
        text-align: center;
    }

}
</style>
