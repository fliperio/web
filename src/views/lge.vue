<template>
    <div>
        <center class="mt-5">
            <h3 v-if="liquidityGenerationOngoing">Join Our Liquidity Event Now !</h3>
            <h3 v-if="!liquidityGenerationOngoing">Our Liquidity Event is END Claim Your LP</h3>
        </center>
        
        <div class="card card-liqiud" id="mid">
            <div class="card-body">
                <div class="row">
                     <div class="col-md-6 mt-2">
                        <h5>Your LP : {{ myLp() }}</h5>
                    </div>
                    <div class="col-md-6">
                        <button class="btn btn-primary float-right" @click="claimLP" :disabled="liquidityGenerationOngoing">Claim LP</button>
                    </div>
                </div>
                <hr/>
                <div class="row">
                    <div class="col-md-6">
                        <div class="card mcard">
                            <div class="card-body">
                                <span class="mtext">
                                <h4 class="mtext">{{this.myContribution}} ETH</h4>
                                <small>My Contribution</small>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card mcard">
                            <div class="card-body">
                                <h4>{{ this.totalContribution }} ETH</h4>
                                <small>Total Raised</small>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <br/>

                <h6 class="float-left mt-2">Enter Your ETH</h6>
                <div class="float-right">
                    <button class="btn btn-outline-secondary ml-1" @click="amount = 0.1">0.1 ETH</button>
                    <button class="btn btn-outline-secondary ml-1" @click="amount = 1">1 ETH</button>
                    <button class="btn btn-outline-secondary ml-1" @click="amount = 10">10 ETH</button>
                </div>
                <br/>
                <br/>
             
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">ETH</span>
                    </div>
                   <input type="text" class="form-control" v-model="amount">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="addLiq">Join</button>
                    </div>
                </div>
              
                                <small>> By Join Our Liquidity Event You Know The RISK</small>


                                
                

                <hr />
                <center>
                    > All 100% ETH Collected Will Go To Fund Uniswap Pool <br />
                    > After Liquidity Event Done You Can Get Your LP Token <br />
                    > Staking Will Work After LGE <br />
                </center>
            </div>
        </div>


    </div>
</template>
<style>
    #mid {
        margin: auto;
        margin-top: 40px;
        width: 50%;
        background-color: white;
        color: black;
        border-color: black;
        border-width: 3px;
    }
</style>
<script>

export default {
    data: () => ({
        amount: 0,
        myContribution: 0,
        totalContribution: 0,
        FLIPER: null,
        liquidityGenerationOngoing: false,
        lpperethunit: 0
    }),
    methods: {
        getData: function () {
            let that = this;
            if(this.$parent.client == null) return;
            let FLIPER = this.$parent.FLIPER
            let client = this.$parent.client
            FLIPER.methods.totalETHContributed().call().then((data) => {
                that.totalContribution = client.utils.fromWei(data)
            })
            FLIPER.methods.liquidityGenerationOngoing().call().then((data) => {
                that.liquidityGenerationOngoing = data
            })
            FLIPER.methods.ethContributed(this.$parent.address).call().then((data) => {
                that.myContribution = client.utils.fromWei(data)
            })
            FLIPER.methods.LPperETHUnit().call().then((data) => {
                that.lpperethunit = data
            })
        },
        claimLP: function () {
            let FLIPER = this.$parent.FLIPER
            if(FLIPER == null) return;
            FLIPER.methods.claimLPTokens().send({from: this.$parent.address});
        },
        addLiq: function () {
            let FLIPER = this.$parent.FLIPER
            if(FLIPER == null || this.$parent.client == null) return;
            FLIPER.methods.addLiquidity(true).send({from: this.$parent.address, value: this.$parent.client.utils.toWei(this.amount.toString())});
        },
        myLp: function () {
            if(this.myContribution == 0) return 0;
            return (this.myContribution * this.$parent.client.utils.fromWei(this.lpperethunit)).toFixed(5);
        }
        
    },
    mounted: function () {
        setInterval(this.getData, 3000);
    }
}
</script>
<style>
#mid{
    margin-bottom:210px;
}
.input-group{
    z-index: 1;
}
@media (max-width: 768px) { 
#mid{
    width: 85%;
}
.mcard{
  width: 80%;
  height: 70%;
}

}
</style>