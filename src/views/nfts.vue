<template class="ntfs">
  <div class="ntfs-menu">
    <nav>
      <div class="nav nav-tabs mt-4" id="nav-tab" role="tablist">
        <a style="color:black;" class="nav-item nav-link active" id="nav-mining-tab" data-toggle="tab"
          href="#nav-mining" role="tab" aria-controls="nav-mining" aria-selected="true">Mining</a>
        <a style="color:black;" class="nav-item nav-link" id="nav-my-nft-tab" data-toggle="tab" href="#nav-my-nft"
          role="tab" aria-controls="nav-my-nft" aria-selected="false">My NFT</a>
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active " id="nav-mining" role="tabpanel" aria-labelledby="nav-mining-tab">
        <div class="row">
          <div class="col">
            <div class="card" style="width: 15rem;">
              <img style="background-color:black;" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Pool</h5>
                <p class="card-text">Total power : 0</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style="width: 15rem;">
              <img style="background-color:black;" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Pool</h5>
                <p class="card-text">Total power : 0</p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card" style="width: 15rem;">
              <img style="background-color:black;" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Pool</h5>
                <p class="card-text">Total power : 0</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="tab-pane fade" id="nav-my-nft" role="tabpanel" aria-labelledby="nav-my-nft-tab">
        <div class="row mt-4">
          <div class="col">
            <h5 class="text-center">Open Your Box And Get Random NFT To Mine !</h5>
            <div class="card" style="width: 15rem;">
              <div style="background-color:white;" class="card-img-top fa fa-box fa-4x fa-lg text-center mt-5" alt="..."></div>
              <div class="card-body">
                <a href="#" class="btn btn-primary btn-block mt-1">OPEN BOX !</a>
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