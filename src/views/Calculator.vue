<template>
    <div>
        <h5>Calculator</h5>

        <div class="calculator-tabs">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <router-link class="nav-link" to="temperature-coefficient">
                        <strong>&alpha;</strong>
                        Temperature coefficient calculator
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="resistivity">
                        <strong>&rho;</strong>
                        Resistivity calculator
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="resistance">
                        <strong>R</strong>
                        Resistance calculator
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="temperature">
                        <strong>&Tau;</strong>
                        Temperature calculator
                    </router-link>
                </li>
            </ul>
        </div>

        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<style>
.calculator-tabs {
    margin-bottom: 1rem;
}
</style>