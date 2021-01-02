<template class="ntfs">
  <div class="ntfs-menu">
    <nav>
      <div class="nav nav-tabs mt-4" id="nav-tab" role="tablist">
        <a style="color:black;" class="nav-item nav-link active" id="nav-my-nft-tab" data-toggle="tab" href="#nav-my-nft"
          role="tab" aria-controls="nav-my-nft" aria-selected="false">My NFT</a>
        <a style="color:black;" class="nav-item nav-link" id="nav-help-tab" data-toggle="tab" href="#nav-help"
          role="tab" aria-controls="nav-help" aria-selected="false">Help</a>
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">


      <div class="tab-pane fade show active" id="nav-my-nft" role="tabpanel" aria-labelledby="nav-my-nft-tab">
        <div class="row mt-4">
          <div class="col-md-3">
            <div class="card" style="width: 15rem;">
              <img style="background-color:black;" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Random NFT</h5>
                <p class="card-text">Total power : ? <br/>
                Level : ?</p>
                <button class="btn btn-primary btn-block">Buy</button>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card" style="width: 15rem;">
              <img style="background-color:black;" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Bronze</h5>
                <p class="card-text">Total power : 0<br/>
                Durability: 0 </p>
                <button class="btn btn-primary btn-block">Stake</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="nav-help" role="tabpanel" aria-labelledby="nav-help-tab">
        <div class="row mt-4">
          <div class="col-md-12">          <center><h5>NFT HELP</h5></center>
          </div>
          <div class="col-md-4">
              <div class="card" style="width: 15rem;">
                <img src="@/assets/bronze.png" style="background-color:black;" class="card-img-top" alt="Bronze">
                <div class="card-body">
                  <h5 class="card-title">Bronze</h5>
                  <p class="card-text">Power: 100-200 <br/></p>
                </div>
              </div>
          </div>
          <div class="col-md-4">
              <div class="card" style="width: 15rem;">
                <img src="@/assets/gold.png" style="background-color:black;" class="card-img-top" alt="Bronze">
                <div class="card-body">
                  <h5 class="card-title">Gold</h5>
                  <p class="card-text">Power: 200-300 <br/></p>
                </div>
              </div>
          </div>
          <div class="col-md-4">
              <div class="card" style="width: 15rem;">
                <img src="@/assets/diamond.png" style="background-color:black;" class="card-img-top" alt="Bronze">
                <div class="card-body">
                  <h5 class="card-title">Diamond</h5>
                  <p class="card-text">Power: 300-400 <br/></p>
                </div>
              </div>
          </div>
          <div class="col-md-4">
              <div class="card">
                  <div class="card-body">
                      <h5 class="card-title">Durability</h5>
                      <p class="card-text">
                        > Everytime you transfer / stake / unstake it will decrease 1% durability <br/> 
                        > To upgrade / restore your durability you need fliper token <br/>
                        > Durability start from 100% when you open box <br/>
                        > EVerytime you upgrade your durability it will increate by 5% if is greater than 100% then it will set to 100% <br/>
                        Power : Raw Power * Durability / 100 <br/></p>
                  </div>
              </div>
           </div>
           <div class="col-md-4">
              <div class="card">
                  <div class="card-body">
                      <h5 class="card-title">Level</h5>
                      <p class="card-text">
                        > Level Randomly Bronze-Gold-Diamond (1,2,3) <br/> 
                        >  <br/>
                        > Durability start from 100% when you open box <br/>
                        Raw Power = (100 * level) + random(0 - 100)<br/></p>
                  </div>
              </div>
           </div>
           <div class="col-md-4">
              <div class="card">
                  <div class="card-body">
                      <h5 class="card-title">Info</h5>
                      <p class="card-text">
                        > All Fliper token From Buy,Upgrade Durability,Upgrade Level NFT will burn and set to address(0)<br/> 
                      </p>
                  </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .nav-tabs {
    border-color: black;
  }

  @media (max-width: 768px) { 
   .ntfs-menu {
     overflow: hidden;
   }
   .tab-content{
      margin-bottom:150px ;
    }
   }

</style>