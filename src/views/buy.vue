<template>
        <div>
                <div class="card card-buy">
                        <div class="card-body">
                                <div class="border border-dark p-3" style="margin-top:0; border-width:3px !important;">
                                        <div class="row">
                                                <div class="col">
                                                        <h5>ETH</h5>
                                                </div>
                                                <div class="col">
                                                        <p style="float:right;color:grey;">Balance : 0</p>
                                                </div>
                                        </div>
                                        <div class="input-group mb-3">
                                                <input type="text" placeholder="0.0" class="form-control">
                                                <div class="input-group-append">
                                                        <button class="btn btn-outline-success" type="button"
                                                                id="">Max</button>
                                                </div>
                                        </div>
                                </div>
                                <center>
                                        <img width="30px" class="mt-2" src="@/assets/arrow-down-outline.svg">
                                </center>
                                <div class="border border-dark p-3"
                                        style="margin-top:10px;border-width:3px !important;">
                                        <div class="row">
                                                <div class="col">
                                                        <h5>Fliper</h5>
                                                </div>
                                                <div class="col">
                                                        <p style="float:right;color:grey;">Balance : 0</p>
                                                </div>
                                        </div>
                                        <input class="form-control" placeholder="0.0">
                                </div>

                                <center style="margin-top:10px">
                                        <div class="row">
                                                <div class="col">
                                                        <button style="float:left;width:100%;"
                                                                class="btn btn-outline-dark btn-lg ">Buy</button>
                                                </div>
                                                <div class="col">
                                                        <input type="checkbox" class="form-control-checkbox"> Auto Stake
                                                </div>
                                        </div>
                                </center>
                        </div>
                </div>
        </div>
</template>

<style scoped>
        .card-buy {
                width: 30%;
        }
</style>