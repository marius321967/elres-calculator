<template>
    <div>
        <navigation class="navigation-container"></navigation>

        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Navigation from './views/Navigation';

export default {
    name: 'App',
    components: { Navigation }
    
}
</script>

<style lang="scss">
@import 'bootstrap';

.navigation-container {
    margin-bottom: 1rem;
}
.router-link-active {
    @extend .active;
}
</style>