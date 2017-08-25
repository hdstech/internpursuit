<template>
        <div id='id' class="main-body">

                <banner-img></banner-img>
                <div class="container" id="inner-body">
                        <br>
                        <div class="content">
                                <h1 class="has-text-centered title is-2 is-info">Home</h1>
                        </div>
                        <div class="section columns hidden-md-down" id="school-logos">
                                <icon name="angle-left" scale="5" class="vert-align"></icon>
                                <div class="column img-box has-text-centered is-hidden-mobile"><img src="./assets/colleges/full sail.png" class="college-img-size" alt="Full Sail"></div>
                                <div class="column img-box has-text-centered is-hidden-mobile"><img src="./assets/colleges/Rollins.png" class="college-img-size" alt="Full Sail"></div>
                                <div class="column img-box has-text-centered is-hidden-mobile"><img src="./assets/colleges/valencia.gif" class="college-img-size" alt="Full Sail"></div>
                                <div class="column img-box has-text-centered is-hidden-mobile"><img src="./assets/colleges/ucf.png" class="college-img-size" alt="Full Sail"></div>
                                <div class="column img-box has-text-centered is-hidden-mobile"><img src="./assets/colleges/seminole.png" class="college-img-size" alt="Full Sail"></div>
                                <icon name="angle-right" scale="5" class="vert-align is-padded"></icon>
                        </div>

                        <!-- </div> -->
                        <!-- <hr> -->
                        <!-- <div class="container card"> -->
                        <div class="container text-center">
                                <h1 class="text-danger title">Here's what others are saying</h1>
                        </div>
                        <div class="section text-center" id="carousel-section">
                        <!-- <div class="content">
                                <md-boards :md-auto="true" :md-infinite="true" :md-duration="5000" :md-swipeable="true">
                                        <md-board id="slide1">
                                                <p class="has-text-centered">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum
                                                        quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste,
                                                        dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
                                                <p class="has-text-centered"><small><em>Rolling Stones</em></small></p>
                                        </md-board>

                                        <md-board id="slide2">
                                                <p class="has-text-centered">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum
                                                        quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste,
                                                        dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
                                                <p class="has-text-centered"><small><em>Rolling Stones</em></small></p>
                                        </md-board>

                                        <md-board id="slide3">
                                                <p class="has-text-centered">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum
                                                        quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste,
                                                        dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
                                                <p class="has-text-centered"><small><em>Rolling Stones</em></small></p>

                                        </md-board>
                                </md-boards> -->
                       


                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                <!-- <ol class="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol> -->
                                <div class="carousel-inner" role="listbox">
                                        <div class="carousel-item active">
                                                <span>
                                                        <p class="text-center">"Isabella has repeatedly shown keen insight and pragmatic knowledge of our business realm. She and her team have identified, formulated and developed integrated business plans for our organization and I would highly recommend her and her staff." </p>
                                                        <p class="text-center"><small><em>David Hunter, Coldwell Banker NRT</em></small></p>
                                                </span>
                                        </div>
                                        <div class="carousel-item text-center">
                                                
                                                 <span>       
                                                        <p >I have also used Pivot Consulting to supplement my clients’ staffing with exceptional and talented young professionals. Pivot’s screening process and training are top-notch where Pivot’s endorsement and recommendation are very reliable. I would recommend Isabella and Pivot Consulting to any business needing a fresh and creative solution to their business issues.</p>
                                                        <p ><small><em>Tim Hanley, CFO for Hire</em></small></p>
                                                </span>                                                
                                        </div>
                                        <div class="carousel-item">
                                                <span>
                                                <p class="text-center">The development of our Intern Program continues to provide significant and ongoing cost savings for our organization. The cultivation of paid staff to be able to execute procedures required for the ongoing acquisition, training and retention of interns.</p>
                                                <p class="text-center"><small><em>Rosemary Steinbach, National Alliance for Mental Illness Greater Orlando</em></small></p>
                                                </span>
                                        </div>
                                        <div class="carousel-item">
                                                <span>
                                                        <p class="text-center">The ability to learn about all the different projects going on at Pivot via the weekly meetings as well as the opportunity to work on things for multiple clients.</p>
                                                </span>
                                        </div>
                                        <div class="carousel-item">
                                               <span>
                                                        <p class="text-center">The ability to learn about all the different projects going on at Pivot via the weekly meetings as well as the clients.</p>
                                                </span>
                                        </div>
                                </div>
                                 <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <!-- <span class="carousel-control-prev-icon text-color-primary" aria-hidden="true"></span> -->
                                <span aria-hidden="true" class="pull-left ml-0"><icon name="angle-left" aria-hidden="true" class="text-muted pull-left" scale="4" opacity="0.1"></icon></span>
                                <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <!-- <span class="carousel-control-next-icon" aria-hidden="true"></span> -->
                                <span aria-hidden="true"><icon name="angle-right" aria-hidden="true" class="text-muted pull-left" scale="4" opacity="0.1"></icon></span>
                                <span class="sr-only">Next</span>
                                </a> 
                        </div>
                        </div>
                 </div>

                </div>
        </div>
</template>

<script>
        import Banner from './Banner.vue'
        export default {
                components: {
                        'banner-img': Banner
                }
        }
</script>

<style scoped>
        .img-box {
                display: block;
        }

        .vert-align {
                vertical-align: middle;
                opacity: .2;
        }

        .college-img-size {
                height: 5em;
                padding: 10px;
        }

        #inner-body {
                background-color: #FFF;
                /* -webkit-box-shadow: 0px 2px 8px rgba( 0, 0, 0, .6);
                box-shadow: 0px 2px 3px 0px rgba( 0, 0, 0, .4); */
        }

        #school-logos {
                margin-left: 0px;
                margin-right: 0px;
        }
        #carousel-section {
                min-height: 20em;
        }
        .carousel-item span {
                margin: auto;
        }
</style>