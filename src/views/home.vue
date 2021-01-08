<template>
  <div class="home">
  <div class="row">
    <div class="col-md-6">
      <div class="card mb-2">
        <div class="card-body text-center">
          10$ <br>
          <small>Price</small>
        </div>
      </div>
      <div class="card mb-2">
        <div class="card-body text-center">
          8500/10000 <br>
          <small>Supply</small>
        </div>
      </div>
      <div class="card mb-2">
        <div class="card-body text-center">
          250 <br>
          <small>ETH Locked</small>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card card-buy">
                        <div class="card-body">
                                <h5 class="card-tile text-center">Buy Fliper</h5>
                                <hr/>
                        
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
                                                        <input type="checkbox" class="form-control-checkbox mt-3"> Auto Stake
                                                </div>
                                        </div>
                                </center>
                        </div>
                </div>
    </div>
    

  </div>
  </div>
</template>
<style>
  .card{
   margin: auto;
   margin-top:40px;
   width: 50%;
   background-color: white;
   color:black;
   border-color: black;
   border-width: 3px;
}
.html{
  overflow: hidden;
}
</style>


<script>
export default {
        mounted: function () {
                this.$router.push('/liquidity')
        }
}
</script>