<template>
  <div class="stake" v-if="this.$parent.address != null">
    <div class="card mt-5" style="border:none">
      <div class="row mx-auto mrow">
        <span style="mr-2">Total Value Locked (USD) <br>
          $214147812741 </span>
        <span class="border-right mx-3">
        </span>
        <span> Fliper Token <br>
          $214147812741 </span>
      </div>
    </div>
    <div class="card mt-5 card-cardm">
      <div class="card-body ">
        <span style="font-size:3rem;">FARM</span><span style="float:right;">APY : {{ est_apy }}%</span> <br>
        USING Fliper-ETH UNI-V2 LP
        <div class="row">
          <div class="col-md-6">
            Total
          </div>
          <div class="col-md-6 float-right">
            0.0
          </div>
        </div>
        <div class="row  mt-1">
          <div class="col-md-6">
            Wallet
          </div>
          <div class="col-md-6 float-right">
            {{ myLP() }}
            <button class="btn btn-success btn-sm" @click="stakeall" v-if="allowed > 0">Stake All</button>
            <button class="btn btn-secondary btn-sm ml-1" @click="approveall" v-if="lpBalance > 0">Approve all</button>
          </div>
        </div>
        <div class="row mt-1">
          <div class="col-md-6">
            Staked
          </div>
          <div class="col-md-6 float-right">
            {{ this.$parent.client.utils.fromWei(staked).substr(0,5) }}
            <button class="btn btn-danger btn-sm float-right" @click="withdrawall">Unstake</button>
          </div>
        </div>
        <div class="row mt-1">
          <div class="col-md-6">
            Claimable
          </div>
          <div class="col-md-6 float-right">
            {{ this.$parent.client.utils.fromWei(claimable) }}
            <button class="btn btn-success btn-sm float-right" @click="claim">Claim</button>
          </div>
        </div>
      </div>

    </div>
    <br />
    <center>
      <h5>More Farm Will Carefully Pick in the future</h5>
    </center>


  </div>
</template>
<style scoped>
  .stake {
    margin-bottom: 200px;
  }
</style>
<script>
  export default {
    data: () => ({
      lpBalance: 0,
      staked: 0,
      claimable: 0,
      allowed: 0,
      ethinPool: 0,
      supplyPool: 0,
      tokenPool: 0,
      averageFeesPerBlockEpoch: 0,
      lpBalanceOnVault: 0,
      est_apy: 0
    }),
    methods: {
      getData: function () {
        let LP_VALUE = this.ethinPool / this.supplyPool
        console.log('LP VALUE', LP_VALUE)
        let valueETHGeneratedPerYear = this.averageFeesPerBlockEpoch / 1e18 * 31557600 / 13 * (this.ethinPool / this
          .tokenPool)
        // console.log('valueETHGeneratedPerYear', valueETHGeneratedPerYear)
        let valueOfPool = this.lpBalanceOnVault / 1e18 * LP_VALUE
        // console.log('VALUE OF POOL', valueOfPool)
        // console.log('APY ', valueETHGeneratedPerYear / valueOfPool * 100)
        let est_apy = valueETHGeneratedPerYear / valueOfPool * 10000
        if (est_apy > 0) {
          this.est_apy = (valueETHGeneratedPerYear / valueOfPool * 100).toFixed(2)

        }
        if (this.$parent.lp == null) return;
        let lp = this.$parent.lp;
        let that = this
        let vault = this.$parent.vault;
        lp.methods.balanceOf(this.$parent.address).call().then((data) => {
          that.lpBalance = data
        })
        lp.methods.allowance(this.$parent.address, this.$parent.vault._address).call().then((data) => {
          that.allowed = data
        })
        vault.methods.userInfo(0, this.$parent.address).call().then((data) => {
          that.staked = data.amount
        })
        vault.methods.pendingCustody(0, this.$parent.address).call().then((data) => {
          that.claimable = data
        })
        lp.methods.getReserves().call().then((data) => {
          that.ethinPool = parseFloat(data[1])
          that.tokenPool = parseFloat(data[0])
        })
        lp.methods.totalSupply().call().then((data) => {
          that.supplyPool = parseFloat(data)
        })
        lp.methods.balanceOf(this.$parent.vault._address).call().then((data) => {
          that.lpBalanceOnVault = parseFloat(data)
        })
        vault.methods.averageFeesPerBlockEpoch().call().then((data) => {
          that.averageFeesPerBlockEpoch = parseFloat(data)``
        })

      },
      claim: function () {
        let vault = this.$parent.vault;
        vault.methods.deposit(0, 0).send({
          from: this.$parent.address
        })
      },
      approveall: function () {
        let lp = this.$parent.lp
        console.log(this.$parent.vault, this.$parent.vault._address)
        lp.methods.approve(this.$parent.vault._address, this.lpBalance).send({
          from: this.$parent.address
        })
      },
      withdrawall: function () {
        let vault = this.$parent.vault;
        vault.methods.userInfo(0, this.$parent.address).call().then((data) => {
          vault.methods.withdraw(0, data.amount).send({
            from: this.$parent.address
          })
        })
      },
      stakeall: function () {
        let vault = this.$parent.vault;
        let lp = this.$parent.lp
        lp.methods.allowance(this.$parent.address, this.$parent.vault._address).call().then((data) => {
          vault.methods.deposit(0, data).send({
            from: this.$parent.address
          })
        })
      },
      myLP: function () {
        return (this.lpBalance == 0 ? 0 : this.$parent.client.utils.fromWei(this.lpBalance).substr(0, 5))
      }
    },
    mounted: function () {
      setInterval(this.getData, 3000)
    }
  }
</script>
<style >
.mrow{
    font-size:24px;
  }
@media (max-width: 768px) { 
.card-cardm{
width:90%;
font-size: small;
}
.mrow{
  font-size: medium;
  margin-left:-15px;
  flex-wrap: initial;
  font-size:14px;
  margin-top:-30px;
  margin-bottom:-30px;
}

}
</style>