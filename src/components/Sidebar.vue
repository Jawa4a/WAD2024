<template>
<div class="sidebar"></div>
</template>

<script>
export default {
name: 'Sidebar',
};
</script>

<style scoped>
.sidebar {
    display: flex;
    flex-direction: column;
    background-color: #333;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    width: calc(40% - 20px);
    min-height: calc(100vh - 60px);
}
</style>
