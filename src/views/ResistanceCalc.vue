<template>
    <div>
        <p>
            Electrical resistance is used to express the resistance of a conductor to electrical current.
            In material engineering, resistance is usually calculated from the resistivity of the conducting material
            and the known dimensional properties of the conductor.
        </p>

        <from-basic></from-basic>
        <hr />
        <from-resistivity></from-resistivity>
    </div>
</template>

<script>
import FromBasic from './Resistance/FromBasic'
import FromResistivity from './Resistance/FromResistivity'

export default {
    components: { FromBasic, FromResistivity }
}
</script>
