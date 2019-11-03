<template>
  <div class="portfolio-page">
    <section class="hero-portfolio">
      <div class="wrapper">
        <h1 id="heading">
          <span class="animated flipInX">My</span>
          <span class="animated flipInX delay-2">Work</span>
        </h1>
        <img
          id="desk-illustration"
          class="animated bounceInRight slow"
          src="~/assets/img/desk.svg"
          alt="illustration of desk with a laptop, external monitor and speakers"
        />

        <arrow-double-down />
      </div>
    </section>

    <main id="scroll-down" class="portfolio">
      <div class="wrapper">
        <h2>Portfolio</h2>
        <section class="jump-to">
          <p>Jump to:</p>
          <div class="categories-list">
            <nuxt-link to="#websites"><button>Web &amp; UX</button></nuxt-link>
            <nuxt-link to="#graphics"><button>Graphics</button></nuxt-link>
            <nuxt-link to="#animation"><button>Animation</button></nuxt-link>
            <nuxt-link to="#art-comics"
              ><button>Art &amp; Comics</button></nuxt-link
            >
          </div>
        </section>
      </div>

      <section id="websites">
        <div class="wrapper">
          <h3 class="category-title">Web &amp; UX</h3>
          <ul class="websites-list">
            <card-full-width
              v-for="project in webProjects"
              :key="project.heading"
              :project="project"
            ></card-full-width>
          </ul>
        </div>
        <!-- /wrapper -->
      </section>
      <!-- /websites -->

      <section id="graphics">
        <div class="wrapper">
          <h3 class="category-title">Graphics</h3>
          <ul class="graphics-list">
            <a
              href="~/assets/img/ddb-illustrations.png"
              data-lightbox="graphics"
              data-title="Duck Duck Beet illustrations"
            >
              <li class="item">
                <img
                  src="~/assets/img/ddb-farmer_thumb.png"
                  alt="farmer with pitchfork"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>
                      Illustrations to quickly explain the Farm to Table
                      Business.
                    </p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/farm-to-table.png"
              data-lightbox="graphics"
              data-title="Duck Duck Beet icons"
            >
              <li class="item">
                <img
                  src="~/assets/img/farm-to-table-thumb.png"
                  alt="duck duck beet icons"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>Iconography for the Farm to Table business.</p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/ddb-labels-1920.png"
              data-lightbox="graphics"
              data-title="Duck Duck Beet Fire Cider bottle label and food labels featuring the new beet-duck symbol."
            >
              <li class="item">
                <img
                  src="~/assets/img/ddb-labels-thumb.png"
                  alt="duck duck beet fire cider label"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>
                      Duck Duck Beet Fire Cider bottle and food item labels.
                    </p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/paint-and-sip.png"
              data-lightbox="graphics"
              data-title="Paint It Sweet icons"
            >
              <li class="item">
                <img
                  src="~/assets/img/paint-and-sip-thumb.png"
                  alt="paint it sweet icons"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>
                      Iconography to quickly explain the Paint &amp; Sip
                      business.
                    </p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/paint-it-sweet-logo.png"
              data-lightbox="graphics"
              data-title="Updated Paint It Sweet logo. No more Comic Sans!"
            >
              <li class="item">
                <img
                  src="~/assets/img/paint-it-sweet-thumb.png"
                  alt="paint it sweet logo"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>
                      Updated Paint It Sweet logo.<br />
                      No more Comic Sans!
                    </p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/Garden-Variety-f-and-b.jpg"
              data-lightbox="graphics"
              data-title="Garden Variety Promo. Front and back."
            >
              <li class="item">
                <img
                  src="~/assets/img/Garden-Variety-thumb.jpg"
                  alt="garden variety contest flyer"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>
                      Promotional handout for gallery event. Front and back.
                    </p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/FLI-real-estate-flyer.jpg"
              data-lightbox="graphics"
              data-title="Real Estate Photography handout."
            >
              <li class="item">
                <img
                  src="~/assets/img/FLI-real-estate-flyer-thumb.jpg"
                  alt="first light image real estate photography flyer"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>
                      First Light Real Estate Photography promotional handout.
                    </p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/lcs-2019-logo-front-back.jpg"
              data-lightbox="graphics"
              data-title="final print version of the LCS 2018 Western Anthology Logo - front/back covers"
            >
              <li class="item">
                <img
                  src="~/assets/img/lcs-2019-logo-thumb.jpg"
                  alt="Sagebrush and Tumbleweeds"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>
                      Louisville Cartoonist Society<br />
                      final Western Anthology logo.
                    </p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/lcs-western-logo-1.jpg"
              data-lightbox="graphics"
              data-title="logo used for promoting the LCS 2018 Western themed Comics Anthology"
            >
              <li class="item">
                <img
                  src="~/assets/img/lcs-western-logo-1-thumb.jpg"
                  alt="western anthology cover logo"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>
                      Louisville Cartoonist Society<br />
                      promotional Western logo.
                    </p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/legends-logo.jpg"
              data-lightbox="graphics"
              data-title="LCS 2017 Legends Anthology cover logo"
            >
              <li class="item">
                <img
                  src="~/assets/img/legends-logo-thumb.jpg"
                  alt="legends anthology cover logo"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>
                      Louisville Cartoonist Society<br />
                      Legends Anthology logo.
                    </p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/lou-posterama.png"
              data-lightbox="graphics"
              data-title="Louisville T-shirt Design 1"
            >
              <li class="item">
                <img
                  src="~/assets/img/lou-posterama-thumb.png"
                  alt="louisville text design"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>Louisville T-shirt Design 1</p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/lou-blippo.png"
              data-lightbox="graphics"
              data-title="Louisville T-shirt Design 2"
            >
              <li class="item">
                <img
                  src="~/assets/img/lou-blippo-thumb.png"
                  alt="louisville text design"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>Louisville T-shirt Design 2</p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/mfw-logos.png"
              data-lightbox="graphics"
              data-title="May Fine Woodworking modular logo"
            >
              <li class="item">
                <img
                  src="~/assets/img/mfw-logo-thumb.png"
                  alt="may fine woodworking logo"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>May Fine Woodworking logo</p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/Renfro_logos.png"
              data-lightbox="graphics"
              data-title="Renfro Construction logo. Positive &amp; negative."
            >
              <li class="item">
                <img
                  src="~/assets/img/RENFRO-truck-thumb.jpg"
                  alt="renfro construction logo on truck"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>Renfro Construction logo</p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/comic-creator-desk-mock.jpg"
              data-lightbox="graphics"
              data-title="Comic Creator app opening screen logo"
            >
              <li class="item">
                <img
                  src="~/assets/img/Comic-Creator-logo.png"
                  alt="comic creator app logo"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>Comic Creator app logo</p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/rally-4-recovery-2018.jpg"
              data-lightbox="graphics"
              data-title="Promotional flyer for the Louisville's 14th Annual Recovery Rally. I'm happy to contribute to this great cause."
            >
              <li class="item">
                <img
                  src="~/assets/img/rally-4-recovery-2018-thumb.jpg"
                  alt="rally 4 recovery 2018 flyer"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>
                      Promotional flyer for a great cause.
                    </p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/legends-drink-draw.jpg"
              data-lightbox="graphics"
              data-title="Drink &amp; Draw retro back page ad"
            >
              <li class="item">
                <img
                  src="~/assets/img/drink-draw-thumb.jpg"
                  alt="drink &amp; draw retro ad"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>
                      Drink &amp; Draw retro ad for the back page of the 2017
                      Anthology.
                    </p>
                  </div>
                </div>
              </li>
            </a>
          </ul>
        </div>
        <!-- end wrapper -->
      </section>
      <!-- end graphics -->

      <section id="animation">
        <div class="wrapper">
          <h3 class="category-title">Animation</h3>

          <ul class="animation-list">
            <a href="https://youtu.be/1hiePhGSgy4" class="yt-lightbox">
              <li class="item">
                <img
                  src="~/assets/img/bond-thumb.png"
                  alt="james bond goldfinger vector art"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>
                      I added motion to this Goldfinger poster by Rachael
                      Sinclair.
                    </p>
                  </div>
                </div>
              </li>
            </a>

            <a href="https://youtu.be/AxtKEz1CGQ4" class="yt-lightbox">
              <li class="item">
                <img
                  src="~/assets/img/lcs-wester-video-thumb.jpg"
                  alt="james bond goldfinger vector art"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>
                      Promo Video for the 2018 LCS Comics Anthology
                    </p>
                  </div>
                </div>
              </li>
            </a>

            <a href="https://youtu.be/cYM4v92Lp7w" class="yt-lightbox">
              <li class="item">
                <img
                  src="~/assets/img/flg-thumb.png"
                  alt="first light gallery logo"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>First Light logo with added motion and sound FX.</p>
                  </div>
                </div>
              </li>
            </a>

            <a href="https://youtu.be/3guf_TFDH8g" class="yt-lightbox">
              <li class="item">
                <img
                  src="~/assets/img/anselparalax-thumb.jpg"
                  alt="ansel adams photo of mountains"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>
                      I added a paralax effect to this gorgeous Ansel Adams
                      photograph.
                    </p>
                  </div>
                </div>
              </li>
            </a>

            <a href="https://youtu.be/vf82dQP3f9Q" class="yt-lightbox">
              <li class="item">
                <img
                  src="~/assets/img/christmas-thumb.jpg"
                  alt="man woman dog waving"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>A digital Christmas card with animation and Run-DMC.</p>
                  </div>
                </div>
              </li>
            </a>

            <a href="https://youtu.be/se9PtNQHe0A" class="yt-lightbox">
              <li class="item">
                <img
                  src="~/assets/img/twitter-thumb.png"
                  alt="tweet by david soards"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>A mockup Tweet with some added motion design.</p>
                  </div>
                </div>
              </li>
            </a>

            <a href="https://youtu.be/8CiTawhjIEk" class="yt-lightbox">
              <li class="item">
                <img
                  src="~/assets/img/scarface-thumb.jpg"
                  alt="words of wisdom tony camonte scarface 1932"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>
                      Kinetic typography of a quote from a classic gangster
                      flick.
                    </p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/designer_med.gif"
              data-lightbox="anime"
              data-title="Animated icon for designer"
            >
              <li class="item">
                <img
                  src="~/assets/img/designer-thumb.png"
                  alt="drawing a text box"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>
                      Animated icon for designer.<br />
                      Drawing a text box in AI.
                    </p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/illustrator_med.gif"
              data-lightbox="anime"
              data-title="Animated icon for illustrator"
            >
              <li class="item">
                <img
                  src="~/assets/img/illustrator-thumb.png"
                  alt="drawing on a wacom tablet"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>
                      Animated icon for illustrator.<br />
                      Drawing on a Wacom Intuos.
                    </p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/developer_med.gif"
              data-lightbox="anime"
              data-title="Animated icon for developer"
            >
              <li class="item">
                <img
                  src="~/assets/img/developer-thumb.png"
                  alt="text editor on a laptop"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>
                      Animated icon for developer.<br />
                      Using a text editor on a laptop.
                    </p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/wataga.gif"
              data-lightbox="anime"
              data-title="My childhood home on Wataga Drive"
            >
              <li class="item">
                <img
                  src="~/assets/img/wataga-thumb.png"
                  alt="house yard driveway"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>My childhood home animated.</p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/DYS_logo_800x600.gif"
              data-lightbox="anime"
              data-title="DYS Multimedia logo animated with handwritten motion."
            >
              <li class="item">
                <img
                  src="~/assets/img/DYS_thumb.png"
                  alt="initials written d y s"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>DYS Multimedia logo with handwritten motion.</p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/chop-man-export.gif"
              data-lightbox="anime"
              data-title="I created this lumberjack character for a failed video game."
            >
              <li class="item">
                <img
                  src="~/assets/img/chop-man-thumb.jpg"
                  alt="lumberjack chopping wood"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>
                      This lumberjack character was created for a video game.
                    </p>
                  </div>
                </div>
              </li>
            </a>
          </ul>
        </div>
        <!-- /wrapper -->
      </section>
      <!-- /animation -->

      <section id="art-comics">
        <div class="wrapper">
          <h3 class="category-title">Art &amp; Comics</h3>
          <ul class="art-list">
            <a
              href="~/assets/img/lcs-2019-cover.jpg"
              data-lightbox="art"
              data-title="I did the layout, design and logo for this book - the 2018 LCS Comics Western Anthology."
            >
              <li class="item">
                <img
                  src="~/assets/img/lcs-2019-cover-thumb.jpg"
                  alt="Sagebrush and Tumbleweeds cover"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>
                      Cover logo design<br />
                      LCS Anthology 2018
                    </p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/lcs-2019-credits.jpg"
              data-lightbox="art"
              data-title="Credits page design for the 2018 LCS Comics Anthology"
            >
              <li class="item">
                <img
                  src="~/assets/img/lcs-2019-credits-thumb.jpg"
                  alt="Sagebrush and Tumbleweeds credits"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>
                      Credits page design<br />
                      LCS Anthology 2018
                    </p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/lcs-2019-toc.jpg"
              data-lightbox="art"
              data-title="Table of Contents design for the 2018 LCS Comics Anthology"
            >
              <li class="item">
                <img
                  src="~/assets/img/lcs-2019-toc-thumb.jpg"
                  alt="Sagebrush and Tumbleweeds Table of Contents"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>
                      Table of Contents design<br />
                      LCS Anthology 2018
                    </p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/lcs-2019-10.jpg"
              data-lightbox="art"
              data-title="A title page design from the 2018 LCS Comic Anthology"
            >
              <li class="item">
                <img
                  src="~/assets/img/lcs-2019-10-thumb.jpg"
                  alt="Sagebrush and Tumbleweeds title page"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>
                      Title page design<br />
                      LCS Anthology 2018
                    </p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/theseus-1-2.jpg"
              data-lightbox="art"
              data-title="Theseus Vs Periphetes pages 1 &amp; 2"
            >
              <li class="item">
                <img
                  src="~/assets/img/theseus-1-2-thumb.jpg"
                  alt="Theseus Vs Periphetes pages 1 &amp; 2"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>
                      Pages 1 &amp; 2 of my 2017 Anthology story - Theseus Vs
                      Periphetes
                    </p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/theseus-3-4.jpg"
              data-lightbox="art"
              data-title="Theseus Vs Periphetes pages 3 &amp; 4"
            >
              <li class="item">
                <img
                  src="~/assets/img/theseus-3-4-thumb.jpg"
                  alt="Theseus Vs Periphetes pages 3 &amp; 4"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>
                      Pages 3 &amp; 4 of my 2017 Anthology story - Theseus Vs
                      Periphetes
                    </p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/theseus-5.jpg"
              data-lightbox="art"
              data-title="Theseus Vs Periphetes page 5"
            >
              <li class="item">
                <img
                  src="~/assets/img/theseus-cover-thumb.jpg"
                  alt="Theseus Vs Periphetes page 5"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>
                      The exciting surprise conclusion of Theseus Vs Periphetes!
                    </p>
                  </div>
                </div>
              </li>
            </a>
            <a
              href="~/assets/img/Frankenstein-book-cover.jpg"
              data-lightbox="art"
              data-title="Frankenstein painting &amp; book cover"
            >
              <li class="item">
                <img
                  src="~/assets/img/Frankenstein-thumb.jpg"
                  alt="frankenstein book cover"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>Frankenstein ink wash painting &amp; book cover</p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/the-Beatles.jpg"
              data-lightbox="art"
              data-title="The Beatles traditional inks with digital colors"
            >
              <li class="item">
                <img
                  src="~/assets/img/the-Beatles-THUMB.jpg"
                  alt="the beatles abbey road era"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>The Beatles traditional inks with digital colors</p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/the-dude.jpg"
              data-lightbox="art"
              data-title="The Dude Ink wash, gouache &amp; digital"
            >
              <li class="item">
                <img
                  src="~/assets/img/the-dude-thumb.jpg"
                  alt="the dude from big lebowski saying 'mind if i do a jay?'"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>
                      The Dude<br />
                      ink wash, gouache &amp; digital
                    </p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/THE-GREATEST.jpg"
              data-lightbox="art"
              data-title="Muhammad Ali wash with digital letters"
            >
              <li class="item">
                <img
                  src="~/assets/img/THE-GREATEST-thumb.jpg"
                  alt="muhammad ali the greatest"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>Muhammad Ali wash with digital colors &amp; letters</p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/The-Stilgers.jpg"
              data-lightbox="art"
              data-title="Mr. &amp; Mrs. Stilger ink wash"
            >
              <li class="item">
                <img
                  src="~/assets/img/The-Stilgers-THUMB.jpg"
                  alt="painting of couple on wedding day"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>
                      Mr. &amp; Mrs. Stilger<br />
                      Wedding day ink wash
                    </p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/batman-perspective.jpg"
              data-lightbox="art"
              data-title="Batman ink &amp; Copic markers"
            >
              <li class="item">
                <img
                  src="~/assets/img/batman-thumb.jpg"
                  alt="batman illustration with bat signal in background"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>Batman ink &amp; Copic markers</p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/two-face-sketch-cover.jpg"
              data-lightbox="art"
              data-title="Two-Face sketch cover ink &amp; Copic markers"
            >
              <li class="item">
                <img
                  src="~/assets/img/two-face-sketch-cover-thumb.jpg"
                  alt="two-face sketch cover"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>Two-Face sketch cover ink &amp; Copic markers</p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/Vader.jpg"
              data-lightbox="art"
              data-title="Darth Vader ink wash with digital colors"
            >
              <li class="item">
                <img
                  src="~/assets/img/Vader-thumb.jpg"
                  alt="darth vader with luke and vader in foreground"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>Darth Vader ink wash with digital colors</p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/conan-buscema.jpg"
              data-lightbox="art"
              data-title="Conan ink, watercolor &amp; digital colors. Pencils by John Buscema"
            >
              <li class="item">
                <img
                  src="~/assets/img/conan-buscema-thumb.jpg"
                  alt="conan watercolor buscema"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>Conan ink, watercolor &amp; digital colors.</p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/Defenders.jpg"
              data-lightbox="art"
              data-title="The Defenders traditional inks with digital color &amp; letters"
            >
              <li class="item">
                <img
                  src="~/assets/img/Defenders-thumb.jpg"
                  alt="the Defenders"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>
                      The Defenders traditional inks with digital color &amp;
                      letters
                    </p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/three-birds.jpg"
              data-lightbox="art"
              data-title="Three Birds watercolor"
            >
              <li class="item">
                <img
                  src="~/assets/img/three-birds-thumb.jpg"
                  alt="three birds sitting on a fender bass headstock"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>
                      Three Birds on a Fender Bass<br />
                      ink &amp; watercolor
                    </p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/DYS-self-creepy.png"
              data-lightbox="art"
              data-title="Vector Self-portrait w/ Creepy Eyes"
            >
              <li class="item">
                <img
                  src="~/assets/img/DYS-self-creepy-thumb.png"
                  alt="david soards vector art with black eyes"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>Vector Self-portrait w/ Creepy Eyes</p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/king-theo.jpg"
              data-lightbox="art"
              data-title="King Theodore with Longclaw Sword - ink &amp; watercolor"
            >
              <li class="item">
                <img
                  src="~/assets/img/king-theo-thumb.jpg"
                  alt="dog with king's crown and sword"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>
                      King Theodore with Longclaw<br />
                      ink &amp; watercolor
                    </p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/pet-portrait-1.jpg"
              data-lightbox="art"
              data-title="Pet Portrait for Erin watercolor &amp; gouache"
            >
              <li class="item">
                <img
                  src="~/assets/img/pet-portrait-1-thumb.jpg"
                  alt="dog watercolor gouache"
                />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>
                      Pet Portrait for Erin<br />
                      watercolor &amp; gouache
                    </p>
                  </div>
                </div>
              </li>
            </a>

            <a
              href="~/assets/img/pet-portrait-2.jpg"
              data-lightbox="art"
              data-title="Pet Portrait for Grace watercolor &amp; gouache"
            >
              <li class="item">
                <img src="~/assets/img/pet-portrait-2-thumb.jpg" />
                <div class="item_overlay">
                  <button tabindex="-1">View →</button>
                  <div class="text-container">
                    <p>
                      Pet Portrait for Grace<br />
                      watercolor &amp; gouache
                    </p>
                  </div>
                </div>
              </li>
            </a>
          </ul>
        </div>
        <!-- /wrapper -->
      </section>
      <!-- /art-comics -->

      <div>
        <a href="#scroll-down">
          <button><i class="fas fa-angle-double-up"></i> Back to Top</button>
        </a>
      </div>
    </main>
  </div>
</template>

<script>
import CardFullWidth from '~/components/CardFullWidth.vue';
import ArrowDoubleDown from '~/components/ArrowDoubleDown.vue';

import projects from '~/assets/projects.json';

export default {
  name: 'Portfolio',
  components: {
    CardFullWidth,
    ArrowDoubleDown,
  },
  data() {
    return {
      webProjects: projects.webProjects,
    };
  },
  // async asyncData({ $axios }) {
  //   const projects = await $axios.$get(
  //     `https://api.github.com/users/davidysoards`
  //   );
  //   return { projects };
  // },
  mounted() {},
};
</script>

<style lang="scss" scoped>
// =Responsive grid for portfolio images
%category-grid {
  display: grid;
  grid-gap: 2em;
  justify-items: center;
  @media only screen and ($medium-bp) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and ($large-bp) {
    grid-template-columns: repeat(3, 1fr);
  }
}

// =Images with pop-up overlay, caption and button on hover
%item-with-overlay {
  width: 300px;
  display: grid;
  justify-content: center;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0px 1px 5px rgba($color: black, $alpha: 0.3);
  img {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    border-radius: none;
    box-shadow: none;
  }
  &:hover {
    .item_overlay {
      transform: translateY(0);
    }
  }
  .item_overlay {
    background: rgba($color: #000000, $alpha: 0.2);
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    display: grid;
    justify-items: center;
    align-items: end;
    transform: translateY(100%);
    transition: 0.3s;
    .text-container {
      background: $color-primary-dark;
      width: 100%;
      padding: 0.3em;
    }
    p {
      color: white;
      margin-bottom: 0.6em;
    }
    button {
      background: rgba($color: #000000, $alpha: 0.2);
      border: 2px solid white;
      &:hover {
        background: $color-secondary;
      }
    }
  }
}

.hero-portfolio {
  display: grid;
  background: $color-primary-light;
  min-height: 100vh;
  z-index: 75;

  img {
    box-shadow: none;
  }

  h1 {
    @media only screen and ($small-bp) {
      font-size: 6em;
    }
    @media only screen and ($medium-bp) {
      font-size: 8em;
    }
    @media only screen and ($large-bp) {
      font-size: 9.2em;
    }
  }

  .wrapper {
    display: grid;
    grid-gap: 1em;
    align-content: center;
    align-items: center;
    margin-top: 194px;
    padding-top: 0;
    padding-bottom: 5%;
    overflow: hidden;
    @media only screen and ($medium-bp) {
      margin-top: 110px;
    }
    @media only screen and ($small-bp) {
      grid-template-columns: 1fr 2fr;
    }
  }

  #heading {
    span {
      display: inline-block;
    }
  }
}

#desk-illustration {
  max-height: 75vh;
}

.jump-to {
  p {
    margin-bottom: 0.5em;
  }
  .categories-list {
    display: grid;
    grid-gap: 0.6em;
    grid-template-columns: 1fr 1fr;
    button {
      width: 100%;
    }
    @media (min-width: 450px) {
      grid-template-columns: none;
      grid-auto-flow: column;
    }
  }
}

.category-title {
  margin-bottom: 1em;
}

// =Websites
#websites {
  background: $color-primary-lighter;
  padding-bottom: 3em;
}

.websites-list {
  display: grid;
  grid-gap: 4em;
  max-width: 1000px;
  margin: 0 auto;
  li {
    display: grid;
    grid-gap: 2em;
    grid-auto-columns: 1fr;
    padding: 1em;
    box-shadow: 0px 1px 5px rgba($color: black, $alpha: 0.3);
    align-items: center;
    border-radius: 6px;
    @media only screen and ($medium-bp) {
      grid-template-columns: 1fr 1fr;
    }
    .content-container {
      text-align: left;
    }
    .thumb-container {
      overflow: hidden;
      max-height: 300px;
      border-radius: 6px;
      img {
        border-radius: none;
        box-shadow: none;
      }
    }
  }
}

.website-full {
  background: white;
  a:hover {
    opacity: 0.6;
  }
}

// =Graphics
.graphics-list {
  @extend %category-grid;
  .item {
    @extend %item-with-overlay;
  }
}

// =Animation
#animation {
  background: $color-primary-lighter;
  padding-bottom: 2em;
}

.animation-list {
  @extend %category-grid;
  .item {
    @extend %item-with-overlay;
  }
}

// =Art & Comics
.art-list {
  @extend %category-grid;
  .item {
    @extend %item-with-overlay;
  }
}
</style>
