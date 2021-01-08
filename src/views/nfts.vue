<template class="ntfs">
  <div>
    <div v-if="!loaded">
      <center class="mt-5">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      </center>
    </div>
    <div v-if="loaded">
      <div class="ntfs-menu">
        <nav>
          <div class="nav nav-tabs mt-4" id="nav-tab" role="tablist">
            <a style="color:black;" class="nav-item nav-link active" id="nav-my-nft-tab" data-toggle="tab"
              href="#nav-my-nft" role="tab" aria-controls="nav-my-nft" aria-selected="false">My NFT</a>
            <a style="color:black;" class="nav-item nav-link" id="nav-help-tab" data-toggle="tab" href="#nav-help"
              role="tab" aria-controls="nav-help" aria-selected="false">Help</a>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">


          <div style="margin-bottom:100px" class="tab-pane fade show active" id="nav-my-nft" role="tabpanel"
            aria-labelledby="nav-my-nft-tab">
            <div class="row">
              <div class="col-md-4">
                <div class="card">
                  <img src="@/assets/gacha.jpg" class="card-img-top" alt="...">
                  <div class="card-body">
                    <p class="card-title font-medium"><strong>Random NFT</strong></p>
                    <p class="card-text font-small">Total power : ? <br />
                      Level : ? <br />
                      Token : </p>
                    <v-button class="btn btn-primary btn-block" @click="buyChest()" v-if="approved > 0">Buy</v-button>
                    <v-button class="btn btn-primary btn-block" @click="approve()" v-if="approved == 0">Approve
                    </v-button>
                  </div>
                </div>

              </div>
                      <div class="col-md-4" v-for="(item,index) in items" :key="`${index }`">
                <div class="card">
                  <img :src="getImgUrl(`${item.levelName.toLowerCase()}.png`)" class="card-img-top" alt="...">
                  <div class="card-body">
                    <p class="card-title font-medium"><strong>{{ item.levelName }}</strong></p>
                    <p class="card-text font-small">Raw power : <b>{{ item.rawPower }}</b> <br />
                      Durability: {{ item.durability }}% </p>
                    <a class="btn btn-primary btn-block" :href="`/nft/${item.tokenId}`" @click="detail(item.tokenId)">Detail</a>
                  </div>
                </div>
              </div>
  
            </div>
            <div class="row">
                  
            </div>
          </div>


          <div class="tab-pane fade" id="nav-help" role="tabpanel" aria-labelledby="nav-help-tab">
            <div class="row mt-4">
              <div class="col-md-12">
                <center>
                  <h5>NFT HELP</h5>
                </center>
              </div>
              <div class="col-md-4">
                <div class="card" style="width: 15rem;">
                  <img src="@/assets/bronze.png" class="card-img-top" alt="Bronze">
                  <div class="card-body">
                    <h5 class="card-title">Bronze</h5>
                    <p class="card-text">Power: 100-200 <br /></p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card" style="width: 15rem;">
                  <img src="@/assets/gold.png" class="card-img-top" alt="Bronze">
                  <div class="card-body">
                    <h5 class="card-title">Gold</h5>
                    <p class="card-text">Power: 200-300 <br /></p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card" style="width: 15rem;">
                  <img src="@/assets/diamond.png" class="card-img-top" alt="Bronze">
                  <div class="card-body">
                    <h5 class="card-title">Diamond</h5>
                    <p class="card-text">Power: 300-400 <br /></p>
                  </div>
                </div>
              </div>
              <div class="col" style="margin-left:0">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Durability</h5>
                    <p class="card-text">
                      > Everytime you transfer / stake / unstake it will decrease 1% durability <br />
                      > To upgrade / restore your durability you need fliper token <br />
                      > Durability start from 100% when you open box <br />
                      > Everytime you upgrade your durability it will increate by 5% if is greater than 100% then it
                      will set to 100% <br />
                      Power : Raw Power * Durability / 100 <br /></p>
                  </div>
                </div>

                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Level</h5>
                    <p class="card-text">
                      > Level Randomly Bronze-Gold-Diamond (1,2,3) <br />
                      > <br />
                      > Durability start from 100% when you open box <br />
                      Raw Power = (100 * level) + random(0 - 100)<br /></p>
                  </div>
                </div>


                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Info</h5>
                    <p class="card-text">
                      > All Fliper token From Buy,Upgrade Durability,Upgrade Level NFT will burn and set to
                      address(0)<br />
                    </p>
                  </div>
                </div>
              </div>
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
      approved: 0,
      items: [],
      loaded: false,
    }),
    methods: {
      approve: function () {
        this.$parent.FLIPER.methods.approve(this.$parent.mineitem._address, this.$parent.client.utils.toWei(
          '9999999')).send({
          from: this.$parent.address
        });
      },
      buyChest: function () {
        this.$parent.mineitem.methods.buy().send({
          from: this.$parent.address
        }).then(() => {
          
        });
      },
      getImgUrl(pic) {
          return require('../assets/'+pic)
      },
      getData: function () {
        let that = this;
        that.items = []
        if (this.$parent.client == null) return setTimeout(this.getData, 1000)

        let FLIPER = this.$parent.FLIPER
        // let client = this.$parent.client
        let item = this.$parent.item

        let mineitem = this.$parent.mineitem


        FLIPER.methods.allowance(this.$parent.address, this.$parent.mineitem._address).call().then(data => {

          that.approved = data
        })
        item.methods.tokensOfOwner(this.$parent.address).call().then(data => {
          data.forEach((tokenId) => {
            mineitem.methods.getTokenData(tokenId).call().then((itemDetail) => {
              let levelName = '';
              if(itemDetail.level == 1) levelName = 'Bronze'
              if(itemDetail.level == 2) levelName = 'Gold'
              if(itemDetail.level == 3) levelName = 'Diamond'
              that.items.push({...itemDetail, tokenId, levelName })
              that.$forceUpdate()
            })
          })

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
<style scoped>
  .nav-tabs {
    border-color: black;
  }

  .card-link {
    text-decoration: none
  }

  .font-small {
    font-size: 12px;
  }

  .font-medium {
    font-size: 16px;
  }

  .tab-content {
    margin-bottom: 150px;
  }

  @media (max-width: 768px) {
    .ntfs-menu {
      overflow: hidden;
    }

    .tab-content {
      margin-bottom: 150px;
    }
  }
</style>