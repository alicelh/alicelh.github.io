<template>
  <Layout>
    <div id="intro">
      <div class="avatar">
        <g-image alt="Example image" src="~/images/avatar.png" width="230" />
        <div class="socialIcons">
          <a href="https://github.com/alicelh" class="icon"
            ><i class="fa-brands fa-github fa-xl" style="color: #000000"></i
          ></a>
          <a
            href="https://scholar.google.com/citations?user=vv6CYB0AAAAJ&hl=en"
            class="icon"
            ><span class="icon-googlescholar"></span
          ></a>
          <a href="https://twitter.com/linhao_meng" class="icon"
            ><i class="fa-brands fa-twitter fa-xl" style="color: #000000"></i
          ></a>
          <a href="https://www.linkedin.com/in/linhao-meng/" class="icon"
            ><i class="fa-brands fa-linkedin fa-xl" style="color: #000000"></i
          ></a>
          <a href="mailto:l.meng1@tue.nl" class="icon"
            ><i class="fa-solid fa-envelope fa-xl" style="color: #000000"></i
          ></a>
          <g-link to="/CV_Linhao_Meng.pdf" class="icon" s>
            <span class="icon-cv"></span>
          </g-link>
        </div>
      </div>
      <div>
        <h1 class="name">Linhao Meng</h1>
        <p class="tags">
          <span class="tag">Data visualization</span> |
          <span class="tag">Visual analytics</span> |
          <span class="tag">Explainable AI</span>
        </p>
        <p class="description">
          Hi! My name is Linhao Meng. I am currently a 4th year Ph.D. student in
          Computer Science at
          <a href="https://research.tue.nl/en/persons/linhao-meng"
            >Eindhoven Univeristy of Technology</a
          >
          advised by
          <a href="https://research.tue.nl/en/persons/anna-vilanova"
            >Prof. Anna Vilanova</a
          >
          and <a href="https://www.win.tue.nl/~selzen/">Dr. van den Elzen</a>.
          My research focuses on designing <b>visualizations</b> and creating
          <b>interactive tools</b> to enhance human’s ability to understand data
          and models in machine learning tasks.
        </p>
        <p style="font-family: 'Comic Sans MS' ">
          <b>
            <i class="fa-solid fa-heart" style="color: #ff00ff"></i> I believe
            in the power of visualization to unveil latent patterns within data
            and facilitate communication between human and data.</b
          >
        </p>
      </div>
    </div>
    <div id="papersection">
      <div class="sectionname"><span>Featured Publications</span></div>
      <div class="paperitem">
        <g-image
          src="~/images/class-constrained_t-SNE.png"
          class="paperimage"
        />
        <div class="paperintro">
          <div class="papertitle">
            Class-constrained t-SNE: Combining Data Features and Class
            Probabilities
          </div>
          <div class="paperauthors">
            <b>Linhao Meng</b>, Stef van den Elzen, Nicola Pezzotti, Anna
            Vilanova
          </div>
          <div class="publishinfo">Accepted by IEEE VIS 2023</div>
          <div class="itemlinks">
            <a href="https://arxiv.org/abs/2308.13837"
              ><i class="fa-regular fa-file-pdf"></i> Paper
            </a>
            <a href="https://github.com/alicelh/class-constrained-t-SNE"
              ><i class="fa-regular fa-file-code"></i> Code
            </a>
            <!-- <a href="https://modelwise.onrender.com/"
              ><i class="fa-solid fa-display"></i> Demo
            </a>
            <a href="https://vimeo.com/696132887?share=copy"
              ><i class="fa-regular fa-circle-play"></i> Video
            </a> -->
          </div>
        </div>
      </div>
      <div class="paperitem">
        <g-image src="~/images/modelwise.png" class="paperimage" />
        <div class="paperintro">
          <div class="papertitle">
            ModelWise: Interactive Model Comparison for Model Diagnosis,
            Improvement and Selection
          </div>
          <div class="paperauthors">
            <b>Linhao Meng</b>, Stef van den Elzen, Anna Vilanova
          </div>
          <div class="publishinfo">Computer Graphics Forum (EuroVis 2022)</div>
          <div class="itemlinks">
            <a href="https://onlinelibrary.wiley.com/doi/full/10.1111/cgf.14525"
              ><i class="fa-regular fa-file-pdf"></i> Paper
            </a>
            <a href="https://github.com/alicelh/ModelWise"
              ><i class="fa-regular fa-file-code"></i> Code
            </a>
            <a href="https://modelwise.onrender.com/"
              ><i class="fa-solid fa-display"></i> Demo
            </a>
            <a href="https://vimeo.com/696132887?share=copy"
              ><i class="fa-regular fa-circle-play"></i> Video
            </a>
          </div>
        </div>
      </div>
      <div class="paperitem">
        <g-image src="~/images/songci.png" class="paperimage" />
        <div class="paperintro">
          <div class="papertitle">
            Visual Reasoning for Uncertainty in Spatio-Temporal Events of
            Historical Figures
          </div>
          <div class="paperauthors">
            Wei Zhang, Siwei Tan, Siming Chen, <b>Linhao Meng</b>, Tianye Zhang,
            Rongcheng Zhu, Wei Chen
          </div>
          <div class="publishinfo">
            IEEE Transactions on Visualization and Computer Graphics 2022
          </div>
          <div class="itemlinks">
            <a href="https://ieeexplore.ieee.org/document/9695348"
              ><i class="fa-regular fa-file-pdf"></i> Paper
            </a>
            <!-- <a href="https://github.com/alicelh/class-constrained-t-SNE"
              ><i class="fa-regular fa-file-code"></i> Code
            </a> -->
            <!-- <a href="https://modelwise.onrender.com/"
              ><i class="fa-solid fa-display"></i> Demo
            </a>
            <a href="https://vimeo.com/696132887?share=copy"
              ><i class="fa-regular fa-circle-play"></i> Video
            </a> -->
          </div>
        </div>
      </div>
      <div class="paperitem">
        <g-image src="~/images/FLVis.png" class="paperimage" />
        <div class="paperintro">
          <div class="papertitle">
            VADAF: Visualization for Abnormal Client Detection and Analysis in
            Federated Learning
          </div>
          <div class="paperauthors">
            <b>Linhao Meng</b>, Yating Wei, Rusheng Pan, Shuyue Zhou, Jianwei
            Zhang, Wei Chen
          </div>
          <div class="publishinfo">
            ACM Transactions on Interactive Intelligent Systems 2021
          </div>
          <div class="itemlinks">
            <g-link to="/VADAF_LinhaoMeng.pdf"
              ><i class="fa-regular fa-file-pdf"></i> Paper
            </g-link>
            <!-- <a href="https://github.com/alicelh/class-constrained-t-SNE"
              ><i class="fa-regular fa-file-code"></i> Code
            </a> -->
            <!-- <a href="https://modelwise.onrender.com/"
              ><i class="fa-solid fa-display"></i> Demo
            </a>
            <a href="https://vimeo.com/696132887?share=copy"
              ><i class="fa-regular fa-circle-play"></i> Video
            </a> -->
          </div>
        </div>
      </div>
      <div class="paperitem">
        <g-image src="~/images/linesample.gif" class="paperimage" />
        <div class="paperintro">
          <div class="papertitle">
            Visual Abstraction of Large Scale Geospatial Origin-Destination
            Movement Data
          </div>
          <div class="paperauthors">
            Zhiguang Zhou, <b>Linhao Meng</b>, Cheng Tang, Ying Zhao, Zhiyong
            Guo, Miaoxin Hu, Wei Chen
          </div>
          <div class="publishinfo">
            IEEE Transactions on Visualization and Computer Graphics (VAST 2018)
          </div>
          <div class="itemlinks">
            <a href="https://ieeexplore.ieee.org/abstract/document/8440039"
              ><i class="fa-regular fa-file-pdf"></i> Paper
            </a>
            <!-- <a href="https://github.com/alicelh/class-constrained-t-SNE"
              ><i class="fa-regular fa-file-code"></i> Code
            </a>
             <a href="https://modelwise.onrender.com/"
              ><i class="fa-solid fa-display"></i> Demo
            </a> -->
            <a href="https://vimeo.com/300464586"
              ><i class="fa-regular fa-circle-play"></i> Video
            </a>
          </div>
        </div>
      </div>
      <div class="moreinfobutton">
        <a href="https://scholar.google.com/citations?user=vv6CYB0AAAAJ&hl=en">
          Go to All Publications
        </a>
      </div>
    </div>
    <div id="projectsection">
      <div class="sectionname"><span>Visualization Projects</span></div>
      <div class="projectitem">
        <g-image src="~/images/visbol.png" class="projectimage" />
        <div class="projectintro">
          <div class="projectname">Sequence View Plugin</div>
          <div class="projectinfo">
            Sequence View Plugin is a visualization plugin engine for SynBioHub
            to enhance the functional annotations of DNA sequence which are
            coordinated with the SBOL Visual standard. This project is done
            under NRNB in Google Summer of Code Program.
          </div>
          <div class="itemlinks">
            <a href="https://github.com/alicelh/sequence-view-plugin/wiki"
              ><i class="fa-regular fa-bookmark"></i> Wiki
            </a>
            <a href="https://github.com/alicelh/sequence-view-plugin"
              ><i class="fa-regular fa-file-code"></i> Code
            </a>
            <a href="https://pubs.acs.org/doi/10.1021/acssynbio.1c00147"
              ><i class="fa-regular fa-file-pdf"></i> Related Paper
            </a>
          </div>
        </div>
      </div>
      <div class="projectitem">
        <g-image src="~/images/brexit.png" class="projectimage" />
        <div class="projectintro">
          <div class="projectname">How Do the British Discuss Brexit</div>
          <div class="projectinfo">
            An animated bubble chart is developed to visualize the dynamic of
            twitter hashtags related to Brexit topics from 2016 to 2019. This
            project is part of Brexit visualization story project collaborated
            with China Central Television Europe.
          </div>
          <div class="itemlinks">
            <a
              href="https://brexitproject.github.io/2019/05/25/%E8%84%B1%E6%AC%A7%E8%AF%9D%E9%A2%98%E8%B5%B0%E5%8A%BF/"
              ><i class="fa-regular fa-bookmark"></i> Wiki
            </a>
            <a href="https://github.com/BrexitProject/visualization"
              ><i class="fa-regular fa-file-code"></i> Code
            </a>
            <a
              href="https://brexitproject.github.io/visualization/views/2_hashtag_online"
              ><i class="fa-solid fa-display"></i> Demo
            </a>
            <a href="https://doi.org/10.1007/s12650-020-00690-7"
              ><i class="fa-regular fa-file-pdf"></i> Related Paper
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "VIS",
  },
};
</script>

<style>
@font-face {
  font-family: "icomoon";
  src: url("../fonts/icomoon.eot?bzyk82");
  src: url("../fonts/icomoon.eot?bzyk82#iefix") format("embedded-opentype"),
    url("../fonts/icomoon.ttf?bzyk82") format("truetype"),
    url("../fonts/icomoon.woff?bzyk82") format("woff"),
    url("../fonts/icomoon.svg?bzyk82#icomoon") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^="icon-"],
[class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: "icomoon" !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  vertical-align: -0.125em;
  font-size: 1.5rem;
  text-align: center;
  font-weight: 400;
  color: black;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-cv:before {
  content: "\e900";
}
.icon-googlescholar:before {
  content: "\80";
}

.home-links a {
  margin-right: 1rem;
}

.avatar {
  float: right;
  margin-left: 30px;
}

.avatar img {
  border-radius: 10px;
  box-shadow: 2px 2px 4px #999999;
}

.socialIcons {
  display: flex;
  flex-direction: row;
  line-height: 2rem;
  margin: auto;
}

.icon {
  flex-grow: 1;
  text-decoration: none;
  text-align: center;
}

a {
  text-decoration: none;
  color: #022a36;
}

a:visited {
  color: #022a36;
}

p.description a {
  background-color: #aafffc;
  margin-top: 10px;
}

p.description a:hover {
  background-color: cyan;
}

#intro p {
  text-align: justify;
  font-size: 1.2rem;
  color: #022a36;
}

p.tags {
  margin-top: -15px;
}

p span.tag {
  background-color: #444444;
  padding: 3px;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
}

h1.name {
  font-size: 2.4rem;
  font-family: Raleway;
  font-weight: 800;
}

.sectionname {
  margin-top: 25px;
}

.sectionname span {
  font-size: 1.7rem;
  font-weight: 700;
  padding: 5px 10px 20px 10px;
  border-radius: 10px;
}

#papersection .sectionname span {
  background-color: #f7d2e1;
}

.paperitem {
  display: flex;
  text-align: justify;
  background-color: #f7d2e1;
  color: #022a36;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 10px;
}

.paperitem img {
  width: 30%;
  height: auto;
  border-radius: 5px;
  border-color: #777777;
  border-style: solid;
  border-width: 1px;
}

.paperintro {
  margin: 0 20px;
  display: flex;
  flex-direction: column;
}

.papertitle {
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.8rem;
}

.paperauthors {
  margin: 6px 0 5px 0;
}

.publishinfo {
  color: #565656;
  margin: 0 0 10px 0;
}

.itemlinks {
  margin-top: auto;
}

.itemlinks a {
  margin: 0 10px 0 0;
}

.moreinfobutton {
  text-align: center;
}

.moreinfobutton a {
  position: relative;
  border-radius: 10px;
  font-size: 1.2rem;
  background-color: #f7d2e1;
  padding: 4px 10px;
  border: 1.5px solid #555555;
}

#projectsection .sectionname span {
  background-color: #bfe4f0;
}

.projectitem {
  background-color: #bfe4f0;
  color: #022a36;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 10px;
  flex-grow: 1;
  flex-basis: 0;
  text-align: justify;
  display: flex;
  flex-direction: row;
}

.projectitem img {
  width: 30%;
  border-radius: 5px;
  border-color: #777777;
  border-style: solid;
  border-width: 1px;
}

.projectintro {
  margin: 0 20px;
  display: flex;
  flex-direction: column;
}

.projectname {
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0;
}
</style>
