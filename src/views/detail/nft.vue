<template>
    <div>
    <div v-if="!loaded">
      <center class="mt-5">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      </center>
    </div>
    <div v-if="loaded">
        <div class="card " style="margin-bottom:100px;">
            <div class="card-body">
                <div class="row">
                <div class="col-4">
                 <img style="width:200px;border-width:3px !important;" src="@/assets/bronze.png" class="border border-dark"  alt="...">
                </div>
                   <div class="col-8">
                       <div style="border-width:3px !important;" class="border border-dark p-3">
                      <h4>Hammer Bronze</h4>
                      <p>Hammer Brone By Modern Technology To Pump The Price</p>
                  </div>
                  <div class="border border-dark mt-2 pl-3 pt-3">
                  <div class="row">
                <div class="col-md-4">
                 <p>Id : <br/>
                    Level : <br/>
                    Raw Power : <br/>
                    Durability : <br/>
                    Miner : <br/>
                    Owner : <br/>
                 </p>
                 </div>
                <div class="col-md-8">
                     <p>
                    {{ this.$router.currentRoute.params.tokenId }} <br/>
                    {{ getLevel() }} <br/>
                    {{ itemDetail.rawPower }} <br/>
                    {{ itemDetail.durability }}<br/>
                    {{ itemDetail.miner }}</p>
                </div> 
                   </div> 
                     </div>
                  <center>
                  </center>
                 </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                 
                    </div>
                     <div class="col">
                       <br/>
                       <br/>
                  <center>
                      <h5>Upgrade</h5>
                  <img src="@/assets/bronze.png"  class="border border-dark" style="width:100px;border-width:3px !important" alt="...">
                  <img src="@/assets/arrow-right.gif"  style="margin-left:2px;width:60px" alt="...">
                  <img src="@/assets/gold.png"  class="border border-dark" style="width:100px;border-width:3px !important"   alt="...">
                  <br/>
                  <button class="btn btn-primary mt-4">Upgrade Level</button>
                <p class="mt-3"> Cost: 100 Fliper Token</p>

                <!-- <img src="@/assets/maxlvl.png" class="border border-dark" style="margin-left:2px;width:100px;border-width:3px !important" alt="...">
                   <p class="mt-3">Fully Upgraded !!!</p> -->
                </center>
                  </div>
                  </div>
                </div>
            </div>
        
    </div>
    </div>
</template>
<script>
  export default {
    data: () => ({
      loaded: false,
      itemDetail: {}
    }),
    methods: {
      getLevel: function () {
       let level = this.itemDetail.level
       if(level == 1) return "Bronze"
       if(level == 2) return "Gold"
       return "Diamond"
      },
      getData: function () {
        let that = this;
        if (this.$parent.client == null) return setTimeout(this.getData, 1000)
        this.$parent.mineitem.methods.getTokenData(this.$router.currentRoute.params.tokenId).call().then((data) => {
          that.itemDetail = data
        })
        setTimeout(() => {
          that.loaded = true
        }, 500)
        setTimeout(this.getData, 10000)

      }

    },
    mounted: function () {
      this.getData()
    }
  }
</script>