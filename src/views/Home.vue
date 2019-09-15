<template>
    <div class="container">
        <h5>Electrical wiring temperature/resistance calculator</h5>
        <p>
            The tool is used to calculate the following desired properties for different electrical wiring materials:
        </p>

        <ul>
            <li>electrical resistance</li>
            <li>wire length</li>
            <li>wire diameter</li>
            <li>operating temperature</li>
        </ul>

        <div>
            <calculator></calculator>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Calculator from './Calculator'

export default {
    name: 'Home',
    components: { Calculator }
}
</script>
