<template>
    <div>
        <h5>Calculator</h5>

        <div>
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <router-link class="nav-link" to="temperature-coefficient">
                        <strong>&alpha;</strong>
                        Temperature coefficient calculator
                    </router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <strong>&rho;</strong>
                        Resistivity calculator
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <strong>&Tau;</strong>
                        Temperature calculator
                    </a>
                </li>
            </ul>
        </div>

        <div>
            <router-view></router-view>
        </div>

        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label for="resistance_input">Resistance</label>
                    <input type="text" class="form-control form-control-sm" />
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="resistance_input">Wire length</label>
                    <input type="text" class="form-control form-control-sm" />
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="resistance_input">Wire diameter</label>
                    <input type="text" class="form-control form-control-sm" />
                </div>
            </div>
        </div>
    </div>
</template>
