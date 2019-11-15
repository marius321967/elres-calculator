<template>
    <div>
        <h5>From material at reference temperature</h5>

        <p>
            <small>
                Sources: 
                <a target="_blank" href="http://hyperphysics.phy-astr.gsu.edu/hbase/Tables/rstiv.html">HyperPhysics at Georgia State University</a>,
                <a target="_blank" href="https://www.thoughtco.com/table-of-electrical-resistivity-conductivity-608499">ToughtCo.</a>
            </small>
        </p>
        
        <div class="row">
            <div class="col-md-4">
                <label>Material</label>
                <div class="form-check" v-for="(material, id) in materials" v-bind:key="id">
                    <input class="form-check-input" type="radio" :value="id" v-model="selected_material" :id="'material_' + id" />

                    <label class="form-check-label" :for="'material_' + id">
                        {{ material.name }}
                    </label>
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="form-group">
                    <label>Temperature T, &deg;C</label>
                    <input type="text" class="form-control form-control-sm" :value="temperature" disabled />
                </div>
            </div>
        </div>

        <hr />

        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label>Result: resistivity &rho; at temperature T, &ohm;&sdot;m</label>
                    <input type="text" class="form-control form-control-sm" :value="resistivity" disabled />
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="form-group">
                    <label>Result: resistivity &rho; at temperature T, n&ohm;&sdot;m</label>
                    <input type="text" class="form-control form-control-sm" :value="resistivityNormalized" disabled />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        materials: {
            'ag': { name: 'Silver',    rho: 15.9 * (10 ** -9) },
            'cu': { name: 'Copper',    rho: 16.8 * (10 ** -9) },
            'au': { name: 'Gold',      rho: 24.4 * (10 ** -9) },
            'al': { name: 'Aluminum',  rho: 26.5 * (10 ** -9) },
            'w':  { name: 'Tungsten',  rho: 56.0 * (10 ** -9) },
            'fe': { name: 'Iron',      rho: 97.1 * (10 ** -9) },
        },
        temperature: 20,
        selected_material: null,
    }),

    computed: {
        resistivity() {
            if (this.selected_material) return this.materials[ this.selected_material ].rho;
        },
        resistivityNormalized() {
            if (this.resistivity) return this.resistivity * 10 ** 9;
        }
    }
}
</script>

<style>

</style>