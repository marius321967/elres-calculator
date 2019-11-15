<template>
    <div>
        <h5>At temperature</h5>
        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label for="t0_input">Reference temperature T<sub>0</sub>, (K, &deg;C)</label>
                    <input type="text" class="form-control form-control-sm" v-model="t0" id="t0_input" />
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="r0_input">Resistivity &rho; of material at T<sub>0</sub>, &ohm;</label>
                    <input type="text" class="form-control form-control-sm" v-model="r0" id="r0_input" />
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label for="t1_input">Target temperature T<sub>1</sub>, (K, &deg;C)</label>
                    <input type="text" class="form-control form-control-sm" v-model="t1" id="t1_input" />
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="alpha_input">Temperature coefficient &alpha;</label>
                    <input type="text" class="form-control form-control-sm" v-model="alpha" id="alpha_input" />
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
    </div>
</template>

<script>
export default {
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
