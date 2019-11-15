<template>
    <div>
        <h5>From current and voltage</h5>

        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label for="voltage_input">Volage, V</label>
                    <input type="text" class="form-control form-control-sm" id="voltage_input" v-model="voltage" />
                </div> 
            </div>
            
            <div class="col-md-4">
                <div class="form-group">
                    <label for="current_input">Current, A</label>
                    <input type="text" class="form-control form-control-sm" id="current_input" v-model="current" />
                </div> 
            </div>
            
            <div class="col-md-4">
                <div class="form-group">
                    <label for="">Result: resistance R, &ohm;</label>
                    <input type="text" class="form-control form-control-sm" :value="resistance" disabled>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        voltage: '', current: ''
    }),

    computed: {
        resistance() {
            if (this.voltage && this.current) return this.voltage / this.current
        }
    }
}
</script>

<style>

</style>