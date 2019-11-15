<template>
    <div>
        <h5>Instantaneous temperature of conductor from known electrical properties</h5>

        <p>Here you may determine the temperature of a conductor at a certain point in time.</p>

        <p>
            Material properties were sourced from the laboratory work for this course.
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
                    <label for="">Resistivity &rho; of conductor at reference temperature T<sub>0</sub>, n&ohm;&sdot;m</label>
                    <input type="text" class="form-control form-control-sm" :value="resistivity" disabled />
                </div>
            </div>

            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Temperature coefficient &alpha;</label>
                    <input type="text" class="form-control form-control-sm" :value="temperature_coeff" disabled />
                </div>
            </div>
        </div>

        <hr />

        <div class="row">
            
            <div class="col-md-4">
                <div class="form-group">
                    <label for="length_input">Conductor length, m</label>
                    <input type="text" class="form-control form-control-sm" id="length_input" v-model="length" />
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="form-group">
                    <label for="area_input">Conductor cross-cut area a, m<sup>2</sup> </label>
                    <input type="text" class="form-control form-control-sm" id="area_input" v-model="area" />
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="form-group">
                    <label for="r1_input">Measured resistance R, &ohm;</label>
                    <input type="text" class="form-control form-control-sm" id="r1_input" v-model="r1" />
                </div>
            </div>
        </div>

        <hr />

        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Result: momentary temperature T<sub>1</sub> at the conductor, &deg;C</label>
                    <input type="text" class="form-control form-control-sm" disabled :value="t1" />
                    <small class="text-danger" v-if="t1_comment">{{ t1_comment }}</small>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import mathjs from 'mathjs'

export default {
    data: () => ({
        t0: 20, // reference temperature
        length: '',
        area: '',
        r1: '', // measured,

        materials: {
            'cu':  { name: 'Copper',    resistivity: 17.08 * (10 ** -9), temperature_coeff: 0.003472 },
            'mnn': { name: 'Manganin',  resistivity: 543.0 * (10 ** -9),  temperature_coeff: 0 },
            'ge':  { name: 'Germanium', resistivity: 3.01 * (10 ** 5),   temperature_coeff: -0.01427 }
        },
        selected_material: null
    }),

    computed: {
        t1() {
            if (this.r0 && this.r1 && this.t0 && this.temperature_coeff) // temperature_coeff must be not null and not zero
                return this.r1 / (this.temperature_coeff * this.r0) - 1/this.temperature_coeff + (this.r1 * this.t0) / this.r0;
        },
        r0() {
            if (this.resistivity && this.length && this.area) 
                return this.resistivity * this.length / this.area;
        },
        resistivity() {
            if (this.selected_material !== null)
                return this.materials[ this.selected_material ].resistivity;
        },
        temperature_coeff() {
            if (this.selected_material !== null)
                return this.materials[ this.selected_material ].temperature_coeff;
        },

        // Display an comment if calculations failed.
        t1_comment() {
            if (this.r0 && this.r1 && this.t0 && this.temperature_coeff == 0) { 
                return 'We were unable to measure a precise temperature coefficient of resistivity for the selected material, therefore we cannot pinpoint a realiable temperature value that your conductor was at';
            }
        }
    }
}
</script>
