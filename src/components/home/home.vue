<template>
  <div>
    <!-- carrousel \0/ -->
    <v-carousel hide-delimiters :cycle="false" xs12 sm4 style="height:700px">
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" :cycle="false">
        <v-layout>
          <v-flex>
            <div><strong>The</strong><em>Best Ideas</em><strong>Emerge From The</strong> Simplest Tools</div>
            <div></div>
            <div>tb</div>
          </v-flex>
          <v-flex class="bt-mais-detalhes">
            <v-btn round outline color="white">mais detalhes</v-btn>
          </v-flex>
        </v-layout>
      </v-carousel-item>
    </v-carousel>
    <!-- fim carrousel -->

    <!-- detalhes -->
    <v-layout column wrap class="lupulo-rt">
      <v-flex xs12 class="lupulo-lb">
        <v-container grid-list-xl style="margin:0;max-width:2000px !important;">
          <v-layout row wrap :class="isMobile ? 'ma-0 mb-5' : 'ma-5'">
            <v-flex xs12 md4>
              <div class="titulo-detalhes-cervejeiro">Detalhes Cervejeiro</div>
              <div class="font-instrucoes-bebendo">Nossas Cervejas</div>
            </v-flex>
            <v-flex xs12 md4>
              <v-flex xs12>
                <v-layout xs12>
                  <v-flex xs3>
                    <img src="../../assets/home-icon01.png">
                  </v-flex>
                  <v-flex xs9>
                    <div class="titulo-detalhes-geral">Melhores Ingredientes</div>
                    <div style="text-align: justify;">Leverage agile frameworks to provide a robust synopsis for high level overviews, iterative approaches</div>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs12>
                <v-layout xs12>
                  <v-flex xs3>
                    <img src="../../assets/home-icon03.png">
                  </v-flex>
                  <v-flex xs9>
                    <div class="titulo-detalhes-geral">Praticas Colheita</div>
                    <div style="text-align: justify;">Leverage agile frameworks to provide a robust synopsis for high level overviews, iterative approaches</div>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-flex>
            <v-flex xs12 md4>
              <v-flex xs12>
                <v-layout xs12>
                  <v-flex xs3>
                    <img src="../../assets/home-icon02.png">
                  </v-flex>
                  <v-flex xs9>
                    <div class="titulo-detalhes-geral">Nossos Processos</div>
                    <div style="text-align: justify;">Leverage agile frameworks to provide a robust synopsis for high level overviews, iterative approaches</div>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs12>
                <v-layout xs12>
                  <v-flex xs3>
                    <img src="../../assets/home-icon04.png">
                  </v-flex>
                  <v-flex xs9>
                    <div class="titulo-detalhes-geral">Fabrica</div>
                    <div style="text-align: justify;">Leverage agile frameworks to provide a robust synopsis for high level overviews, iterative approaches</div>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
    <!-- fim detalhes -->

    <!-- destaques beer -->
    <v-layout column wrap>
      <v-flex xs12>
        <v-container grid-list-xl>
          <v-layout row wrap mt-2>
            <v-flex xs12 md12>
              <div class="titulo-descricao-produto">Descrição Produtos</div>
              <div clas="titulo-descricao-produto2">We have a total irreverence for anything connected with society except that which makes the roads safer and the beer stronger.</div>
            </v-flex>
          </v-layout>    
          <v-layout row wrap mt-1>
            <v-flex xs12 md3>
              <div><img src="../../assets/beer01.jpg"></div>
              <div class="titulo-nome-breja mt-2 mb-4">Irva Blond</div>
              <div>Blalsdal,dsa as,adsl,das</div>
            </v-flex>
            <v-flex xs12 md3>
              <div><img src="../../assets/beer02.jpg"></div>
              <div class="titulo-nome-breja mt-2 mb-4">Kalic Jack</div>
              <div>Blalsdal,dsa as,adsl,das</div>
            </v-flex>
            <v-flex xs12 md3>
              <div><img src="../../assets/beer03.jpg"></div>
              <div class="titulo-nome-breja mt-2 mb-4">Calimero</div>
              <div>Blalsdal,dsa as,adsl,das</div>
            </v-flex>
            <v-flex xs12 md3>
              <div><img src="../../assets/beer04.jpg"></div>
              <div class="titulo-nome-breja mt-2 mb-4">Martigo</div>
              <div>Blalsdal,dsa as,adsl,das</div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
    <!-- fim destaques beer -->

    <!-- parallax nos trabalhamos duro -->
    <section>
      <v-parallax :src="parallax01" height="550">
        <v-layout column text-xs-left justify-center class="ml-5 parallax-nos-trabalhamos">
          <v-flex xs12>
            <div class="font-ibm nos-trabalhamos mb-4 ml-5">NÓS TRABALHAMOS DURO. NÓS ENTREGAMOS QUALIDADE.</div>
            <div class="font-ibm uma-historia pa-0 ma-0 ml-5">Há uma historia</div>
            <div class="font-ibm cada-cerveja pa-0 ma-0 ml-5">Em cada cerveja</div>
          </v-flex>
        </v-layout>
      </v-parallax>
    </section>
    <!-- fim parallax nos trabalhamos -->

    <!-- qualidade -->
    <v-layout align-center wrap fill-height class="qualidade-destaca">
      <v-flex xs12 md6 :class="isMobile ? 'mt-3' : 'ml-3'">
        <v-layout>
          <v-flex ma-2>
            <v-card-media
              src="https://template68191.motopreview.com/mt-demo/68100/68191/mt-content/uploads/2018/06/mt-1507-home-img05.jpg"
              height="420px"/>
          </v-flex>
          <v-flex ma-2>
            <v-card-media
              src="https://template68191.motopreview.com/mt-demo/68100/68191/mt-content/uploads/2018/06/mt-1507-home-img06.jpg"
              height="420px"/>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 md4 mx-5 mb-3 pr-5 text-sm-left align-start>
        <div class="font-ibm titulo-qualidade-destaca mb-4">Qualidade que se destaca</div>
        <div class ="font-ibm sub-titulo-qualidade-destaca mb-4">Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis</div>
        <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean comio ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et 
          magnis dis parturient montes, nascetur ridiculus mus. Venenatis faucibi. Null ut am quis ante.</div>
      </v-flex>
    </v-layout>
    <!-- fim qualidade -->

    <!-- dados -->
    <v-layout column wrap>
      <v-flex xs12>
        <v-card>
          <v-card-media class="card-dados" height="360px" :src="imgContent05">
            <v-container fill-height fluid>
              <v-layout align-center justify-center row wrap fill-height>
                <v-flex xs12 md3 align-end flexbox>
                  <div class="font-ibm font-40">2017</div>
                  <div class="font-ibm detalhes-dados font-15">Cervejaria fundada</div>
                </v-flex>
                <v-flex xs12 md3 align-end flexbox>
                  <div class="font-ibm font-40">360</div>
                  <div class="font-ibm detalhes-dados font-15">Litros mês</div>
                </v-flex>
                <v-flex xs12 md3 align-end flexbox>
                  <div class="font-ibm font-40">8</div>
                  <div class="font-ibm detalhes-dados font-15">Rotulos</div>
                </v-flex>
                <v-flex xs12 md3 align-end flexbox>
                  <div class="font-ibm font-40">800</div>
                  <div class="font-ibm detalhes-dados font-15">Garrafas dia</div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
        </v-card>  
      </v-flex>
    </v-layout> 
    <!-- fim dados -->

    <!-- fundados -->
    <v-layout align-center justify-center wrap>
      <v-flex xs12 md5 text-xs-left mx-5 my-3>
        <div class="font-ibm" style="font-size:36px">Nós Fazemos O Que Amamos</div>
        <div class="font-ibm" style="color: #cc5720;font-size:18px">O que aprendemos até agora</div>
        <div class="font-ibm detalhes-dados mt-5">Leverage agile frameworks to provide a robust synopsis for high level overviews. 
          Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. 
          Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</div>
        <div class="mt-5 mb-2"><img src="../../assets/text-img.png" height="44"/></div>
        <div class="font-ibm nome-mba" >Moisés</div>
        <div class="font-ibm-normal">Fundador</div>
      </v-flex>
      <v-flex xs12 md5 text-xs-right ma-1>
        <img src="../../assets/content-bg07.jpg" height="570"/>
      </v-flex>
    </v-layout>
    <!-- fim fundador -->

    <!-- sobre -->
    <section>
      <v-parallax :src="parallax03" height="550">
        <v-layout align-center justify-center row fill-height class="parallax-nossa-fabrica">
          <v-flex xs12>
            <div class="font-ibm nos-trabalhamos mb-4 ml-5">MAIS SOBRE NÓS.</div>
            <div class="font-ibm uma-historia pa-0 ma-0 ml-5">Nossa Fabrica</div>
            <div class="font-ibm cada-cerveja pa-0 ma-0 ml-5">Pensamos em cada detalhe</div>
          </v-flex>  
        </v-layout>
      </v-parallax>
    </section>

    <!-- google maps localizacao -->
    <v-layout align-center justify-center row fill-height>
      <v-flex class="map-responsive">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29930.42627970709!2d-41.13193275917192!3d-20.32908588573557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb98e32ca7ec4b3%3A0x303a32dc11e3da2b!2sVenda+Nova+do+Imigrante%2C+ES%2C+29375-000!5e0!3m2!1spt-BR!2sbr!4v1534445824427" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
      </v-flex>
    </v-layout>

    <!-- rodape -->
    <v-layout fill-height>
      <v-flex>
        <v-card color="grey darken-4">
          <v-container>
            <v-layout row wrap fill-height>
              <v-flex xs12 md4 justify-center>
                <div>
                  <img src="../../assets/logo.png">
                </div>
                <div class="font-ibm-normal mb-2 white--text">Pra Frente, Bravos.</div>
                <div>
                  <v-btn color="black" fab small dark>
                    <v-icon>fab fa-facebook-f</v-icon>
                  </v-btn>
                  <v-btn color="black" fab small dark>
                    <v-icon>fab fa-instagram</v-icon>
                  </v-btn>
                  <v-btn color="black" fab small dark>
                    <v-icon>fab fa-youtube</v-icon>
                  </v-btn>
                </div>
              </v-flex>
              <v-flex xs12 md4 text-xs-left>
                <div class="font-titles mb-4">ONDE NOS ENCONTRAR</div>
                <div class="font-ibm-normal mb-4">
                <v-icon class="mr-2" color="white" size="20">fas fa-map-marked-alt</v-icon>
                <span>Venda Nova do Imigrante - ES</span>
                </div>
                <div class="font-ibm-normal mb-4"><v-icon class="mr-2" color="white" size="20">fas fa-at</v-icon>contato@bb.com</div>
              </v-flex>
              <v-flex xs12 md4 align-end flexbox>
                 {{menuItems}}
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>  
      </v-flex>
    </v-layout>   
</div>
</template>

<script>
import { mapState } from 'vuex';

let imgParallax01 = require('../../assets/content-parallax-01.jpg');
let imgParallax02 = require('../../assets/content-parallax-02.jpg');
let imgParallax03 = require('../../assets/content-parallax-03.jpg');
let imgContent05 = require('../../assets/content-bg05.jpg');
let imgContent06 = require('../../assets/content-bg06.png');
let kalic = require('../../assets/kalique_jack_2.png');

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  beforeDestroy () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
  },
  methods: {
    onResize () {
      this.isMobile = window.innerWidth < 600
    }
  },
  computed: {
    parallax01 () { return imgParallax01; },
    parallax02 () { return imgParallax02; },
    parallax03 () { return imgParallax03; },
    imgContent05 () { return imgContent05; },
    imgContent06 () { return imgContent06; },
    ...mapState('menu', ['menuItems'])
  },
  data () {
    return {
      isMobile: false,
      items: [
        {
          src: 'https://template68191.motopreview.com/mt-demo/68100/68191/mt-content/uploads/2018/06/mt-1507-content-bg01.jpg'
        },
        {
          src: kalic
        },
        {
          src: 'https://template68191.motopreview.com/mt-demo/68100/68191/mt-content/uploads/2018/06/mt-1507-content-bg03.jpg'
        }
      ]
    }
  }
}
</script>

<style>

  .map-responsive {
    overflow:hidden;
    padding-bottom:25%;
    position:relative;
    height:0;
  }

  .map-responsive iframe {
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
  }

 .font-ibm {
    font-weight: 500;
    font-style: normal;
    font-family: 'IBM Plex Serif', serif;
    font-size: 60px;
    line-height: 1.4;
    letter-spacing: 2px;
  }

  .font-ibm-300{
    font-weight: 300;
    font-style: normal;
    font-family: 'IBM Plex Serif', serif;
    color: #ffffff;
    font-size: 60px;
    line-height: 1.3;
    letter-spacing: 2px;
  }

  .font-ibm-normal {
    font-weight: 400;
    font-style: normal;
    font-family: 'IBM Plex Sans', sans-serif;
    color: #7d7670;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0px;
  }

  .container {
    max-width: 2200px;
  }

  .trabalho-duro {

  }


  .nome-mba {
    font-weight: 500;
    font-style: normal;
    font-family: 'IBM Plex Serif', serif;
    color: #000000;
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: 0px;
  }

  .qualidade-destaca {
    background-image: url('../../assets/content-bg04.png');
    background-position-x: 1px;
    background-position-y: 5px;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 475px;
  }

  .detalhes-dados {
    color: #7e7058;
    font-size: 18px;
  }

  .titulo-qualidade-destaca {
    font-size: 36px !important;
    font-weight: 400 !important;
  }

  .sub-titulo-qualidade-destaca {
    font-weight: 400;
    font-style: normal;
    color: #7e7058;
    font-size: 18px;
    line-height: 1.4;
    letter-spacing: 0px;
  }

  .uma-historia {
    font-size: 60px;
    line-height: 1.4;
    letter-spacing: 2px;
  }

  .nos-trabalhamos {
    font-family: 'IBM Plex Sans', sans-serif !important;
    font-weight: 500 !important;
    font-size: 13px;
    letter-spacing: 2px;
  }

  .cada-cerveja {
    font-weight: 400 !important;
    font-size: 67px;
    font-style: italic;
  }

  .titulo-nome-breja {
    font-weight: 400;
    font-style: normal;
    font-family: 'IBM Plex Serif', serif;
    color: #000000;
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: 0px;
  }

  .titulo-descricao-produto2 {
    font-weight: 400;
    font-style: normal;
    font-family: 'IBM Plex Serif', serif;
    color: #7d7670;
    font-size: 18px;
    line-height: 1.4;
    letter-spacing: 0px;
  }

  .titulo-descricao-produto {
    padding-bottom: 20px;
    font-weight: 500;
    font-style: normal;
    font-family: 'IBM Plex Serif', serif;
    color: #382c28;
    font-size: 36px;
    line-height: 1.2;
    letter-spacing: 0px
  }

  .titulo-detalhes-geral {
    font-weight: 500;
    font-style: normal;
    font-family: 'IBM Plex Serif', serif;
    color: #000000;
    font-size: 19px;
    line-height: 1.2;
    letter-spacing: 0px;
    margin-bottom: 15px;
    text-align: initial;
  }

  .bt-mais-detalhes {
    position: absolute;
    top: 70px;
    right: 85px;
  }

 .lupulo-lb {
    background-image: url('../../assets/content-bg2.png');
    background-position: left bottom;
    background-repeat: no-repeat;
    background-size: contain;
    min-height: 470px;
 }

  .lupulo-rt {
    background-image: url('../../assets/content-bg1.png');
    background-position: right top;
    background-repeat: no-repeat;
    background-size: contain;
    min-height: 470px;
  }

@media screen and (min-width: 300px) and (max-width: 600px) {
  .v-carousel {
    height: 450px !important;
  }
  .v-jumbotron__image {
    height: 110% !important;
  }

  .titulo-detalhes-cervejeiro {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 20px;
    font-weight: 500;
  }

  .font-instrucoes-bebendo {
    font-family: 'IBM Plex Serif', serif;
    font-size: 18px;
    font-weight: 300;
    font-style: italic;
  }

  .bt-mais-detalhes {
    position: absolute;
    top: 15px;
    right: 8px;
  }

  .parallax-nos-trabalhamos {
    flex-direction: initial !important;
    margin-left: 3px !important;
    margin-top: 35px;
  }

  .titulo-descricao-produto {
    font-size: 25px !important;
  }

  .card-dados {
    height: 400px !important;
  }

  .font-40 {
    font-size: 40px !important;
  }

  .font-15 {
    font-size: 15px !important;
  }

  .parallax-nossa-fabrica {
    flex-direction: initial !important;
    margin-left: 3px !important;
    margin-top: 35px;
    align-items: initial;
  }

  .nos-trabalhamos {
    margin-left: 0 !important;
  }

  .uma-historia {
    margin-left: 0 !important;
    font-size: 40px;
  }

  .cada-cerveja {
    margin-left: 0 !important;
    font-size: 60px;
  }

  .map-responsive, .map-responsive.iframe  {
    height: 230px !important;
  }

}

@media screen and (min-width: 601px) and (max-width: 959px) {
  .v-carousel {
    height: 350px !important;
  }
  .v-jumbotron__image {
    height: 100% !important;
  }

  .titulo-detalhes-cervejeiro {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 20px;
    font-weight: 500;
  }

  .font-instrucoes-bebendo {
    font-family: 'IBM Plex Serif', serif;
    font-size: 18px;
    font-weight: 300;
    font-style: italic;
  }

  .font-40 {
    font-size: 40px !important;
  }

  .font-15 {
    font-size: 15px !important;
  }
}

@media screen and (min-width: 960px) and (max-width: 1981px) {
  .titulo-detalhes-cervejeiro {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 29px;
    font-weight: 500;
  }

  .font-instrucoes-bebendo {
    font-family: 'IBM Plex Serif', serif;
    font-size: 25px;
    font-weight: 300;
    font-style: italic;
  }

  .qualidade-destaca {
    background-position-x: 1px;
    background-position-y: 5px;
    background-size: cover;
    min-height: 475px;
  }


}

</style>
