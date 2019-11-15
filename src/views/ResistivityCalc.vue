<template>
    <div>
        <p>
            Resistivity &rho; expresses the base resistance of a conducting material at a certain temperature,
            set at a static shape and dimensional parameters. Knowing the conductivity of the material and the 
            final length of a conductor, we can calculate the conductor's concrete resistance value R.
        </p>

        <from-temperature></from-temperature>
        <hr />
        <from-material></from-material>
    </div>
</template>

<script>
import FromTemperature from './Resistivity/FromTemperature'
import FromMaterial from './Resistivity/FromMaterial'

export default {
    components: { FromTemperature, FromMaterial },
}
</script>
