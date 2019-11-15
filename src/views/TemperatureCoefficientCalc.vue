<template>
    <div>
        <p>Temperature coefficient determines how much the resistivity &rho; changes in a conductor as its temperature increases.</p>
        
        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label for="resistance_input">Resistance R<sub>1</sub>, &ohm; </label>
                    <input type="text" class="form-control form-control-sm" v-model="r1" />
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="resistance_input">Resistance R<sub>2</sub>, &ohm;</label>
                    <input type="text" class="form-control form-control-sm" v-model="r2" />
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label for="resistance_input">Temperature &Tau;<sub>1</sub>, (K, &deg;C)</label>
                    <input type="text" class="form-control form-control-sm" v-model="t1" />
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="resistance_input">Temperature &Tau;<sub>2</sub>, (K, &deg;C)</label>
                    <input type="text" class="form-control form-control-sm" v-model="t2" />
                </div>
            </div>
        </div>

        <hr />

        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Result: temperature coefficient &alpha;</label>
                    <input type="text" disabled class="form-control form-control-sm" :value="temperature_coefficient" />
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data: () => ({
        t1: '',
        t2: '',
        r1: '',
        r2: '',
    }),

    computed: {
        temperature_coefficient() {
            if (this.r1 && this.r2 && this.t1 && this.t2)
                return (this.r2 - this.r1) / (this.r1 * this.t2 - this.r2 * this.t1);
        }
    }
}
</script>
