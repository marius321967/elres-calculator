<template>
    <div>
        <p>
            Resistivity &rho; expresses the base resistance of a conducting material at a certain temperature,
            set at a static shape and dimensional parameters. Knowing the conductivity of the material and the 
            final length of a conductor, we can calculate the conductor's concrete resistance value R.
        </p>

        <h5>From base temperature</h5>
        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label for="resistance_input">Reference temperature T<sub>0</sub>, (K, &deg;C)</label>
                    <input type="text" class="form-control form-control-sm" v-model="t0" />
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="resistance_input">Resistivity &rho; of material at T<sub>0</sub>, &ohm;</label>
                    <input type="text" class="form-control form-control-sm" v-model="r0" />
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label for="resistance_input">Target temperature T<sub>1</sub>, (K, &deg;C)</label>
                    <input type="text" class="form-control form-control-sm" v-model="t1" />
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="resistance_input">Temperature coefficient &alpha;</label>
                    <input type="text" class="form-control form-control-sm" v-model="alpha" />
                </div>
            </div>
        </div>

        <hr />

        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label>Result: resistivity &rho; at temperature T<sub>1</sub>, &ohm;</label>
                    <input type="text" disabled class="form-control form-control-sm" :value="r1" />
                </div>
            </div>
        </div>

        <hr />
        <from-material></from-material>
    </div>
</template>

<script>
import FromMaterial from './Resistivity/FromMaterial'

export default {
    components: { FromMaterial },

    data: () => ({
        t0: '', r0: '', t1: '', alpha: ''
    }),

    computed: {
        r1() {
            if (this.t0 && this.r0 && this.t1 && this.alpha) {
                const temp_diff = this.t1 - this.t0;
                return this.r0 * (1 + this.alpha * temp_diff);
            }
        }
    }
}
</script>
