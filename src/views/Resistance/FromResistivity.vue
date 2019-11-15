<template>
    <div>
        <h5>From resistivity and conductor properties</h5>

        <div class="row">
            <div class="col-md-4">
                <label for="resistivity_input">Resistivity &rho;, n&ohm;&sdot;m</label>
                <input type="text" class="form-control form-control-sm" id="resistivity_input" v-model="resistivity" />
            </div>
            
            <div class="col-md-4">
                <label for="length_input">Conductor length, m</label>
                <input type="text" class="form-control form-control-sm" id="length_input" v-model="length" />
            </div>
        </div>

        <div class="row">
            <div class="col-md-4">
                <label for="area_input_meters">Conductor cross-section area, m<sup>2</sup> </label>
                <input type="text" class="form-control form-control-sm" id="area_input_meters"
                    @input="updateAreaMeters"
                    :value="area_meters" />
            </div>
            
            <div class="col-md-4">
                <label for="area_input_millimeters">Conductor cross-section area, mm<sup>2</sup> </label>
                <input type="text" class="form-control form-control-sm" id="area_input_millimeters"
                    @input="updateAreaMillimeters"
                    :value="area_millimeters" />
            </div>
        </div>

        <hr />

        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label>Result: total resistance R across conductor, &ohm;</label>
                    <input type="text" class="form-control form-control-sm" disabled :value="resistance" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        resistivity: '',
        area_meters: '',
        area_millimeters: '',
        length: ''
    }),

    computed: {
        resistance() {
            if (this.resistivity && this.area_meters && this.length) {
                return this.resistivity * this.length / this.area_meters;
            }
        }
    },
    methods: {
        updateAreaMeters(event) {
            this.area_meters = event.target.value;
            this.area_millimeters = this.area_meters * (10 ** 6);
        },
        updateAreaMillimeters() {
            this.area_millimeters = event.target.value;
            this.area_meters = this.area_millimeters * (10 ** -6);
        }
    }
}
</script>

<style>

</style>