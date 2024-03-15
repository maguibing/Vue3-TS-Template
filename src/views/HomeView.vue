<script setup lang="ts">
type NameList = Array<{ id: number, name: string }>
const message = ref<NameList>([{ id: 1, name: '张三' }, { id: 2, name: '李四' }])
</script>

<template template>
  <div>
    <ul>
      <li v-for="item in message" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
