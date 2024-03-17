<template>
    <div id="mainIntroduce">
        <div id="mainIntroGrid" class="minimum-container">
            <dl id="mainIntroText">
                <dt class="main-section-title">
                    <div class="section-actual-name">
                        <p class="name-breaker">
                            <span>A</span>
                            <span>B</span>
                            <span>O</span>
                            <span>U</span>
                            <span>T</span>
                            <span></span>
                            <span>U</span>
                            <span>S</span>
                        </p>

                        <hr class="hf">
                    </div>

                    <h2 class="section-catchy-sentence">
                        Cost efficient &<br>
                        Industrial standard
                    </h2>
                </dt>

                <dd class="intro-text-area">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi sint doloremque tempora, delectus mollitia consequuntur velit molestias vel quidem accusamus iure alias repellat neque dignissimos eos cumque perferendis ex id!
                    Ut quas earum repellendus ipsa accusantium iure quaerat, inventore dolor mollitia. Labore modi expedita et voluptas quis obcaecati amet reiciendis optio exercitationem soluta minus inventore, explicabo eligendi beatae quidem. Placeat!
                    Maxime, voluptatibus. Tempora nesciunt aliquam deserunt omnis ipsam harum dolorum itaque, nemo adipisci est, magni eaque fuga ea culpa quos placeat sapiente ex! Illo a dicta cumque ex harum quidem.
                    Hic, quasi doloremque optio ad sequi nulla ab, fugit consequatur excepturi, dolores deleniti eos aliquid! Sequi ullam a impedit repudiandae! Error, incidunt atque! Nisi sed impedit nihil eligendi saepe voluptatibus!
                    Officia reprehenderit aliquid quos, animi eveniet officiis culpa nobis qui totam saepe pariatur porro tempore delectus nesciunt, maxime esse. Nulla provident maxime rerum maiores? Molestias numquam totam libero cumque maxime.
                    Commodi, voluptatibus eligendi adipisci a itaque corrupti vitae quod excepturi dignissimos culpa reiciendis consequatur impedit, blanditiis, libero nostrum eius aspernatur mollitia pariatur asperiores perspiciatis ullam? Aliquid fuga modi vel sunt?
                    Dolor, at corporis! Autem fugiat quod at repellat, molestias consequatur necessitatibus velit similique maxime consectetur iusto odit ipsa consequuntur voluptatem pariatur. Sequi dignissimos saepe dolorem quo explicabo dolorum incidunt! Magnam.
                    Voluptate dolorem ut nulla voluptatibus placeat et sunt aperiam consequuntur a. Error quo ex nobis pariatur alias molestias dolores temporibus! Totam consequuntur sed esse, quo cum culpa praesentium impedit quaerat.
                    Id eligendi nam repellat voluptatibus doloremque consequatur nihil aliquid laborum adipisci corrupti suscipit ea, accusamus quibusdam eius velit dolor unde ipsum, beatae, tempore voluptatem? Sint cum laborum odit quae aliquam?
                    Expedita illum similique voluptas quaerat impedit aperiam. Dolorem, numquam, libero quas tempore praesentium rerum, reiciendis accusantium dolores consequatur maxime id exercitationem! Doloremque pariatur quod distinctio dolorum, tenetur error cum rem!
                    Rem nulla qui odit aliquam, consectetur similique maxime cupiditate, assumenda aut illo iure tempora eaque nisi tempore architecto itaque. Architecto quas facilis dolorem minus sapiente optio, inventore in adipisci impedit?
                    Beatae quo consequatur eius inventore magni quod, ratione voluptate voluptatum consequuntur ab doloremque molestiae officiis, sunt reprehenderit! At repellat nam quia? Necessitatibus vel fugiat laboriosam debitis quo alias doloremque iure!
                    Aliquam qui expedita, eius laborum nobis voluptatem, eaque numquam perspiciatis adipisci tenetur incidunt. Inventore nesciunt corrupti ipsam magni reiciendis laudantium consectetur velit voluptas eligendi, quibusdam repudiandae, quo eveniet iure laborum.
                    Voluptas ad sunt distinctio facere incidunt nisi at impedit, dicta, in accusantium neque nostrum, perferendis similique quasi repellendus ut laborum? Illo ducimus, facere exercitationem asperiores eius quisquam repudiandae repellendus nostrum.
                    Consectetur, nihil distinctio! Numquam aspernatur placeat libero quod est aliquam dignissimos, molestiae provident omnis veritatis sit voluptatibus praesentium enim quisquam voluptatem amet sed exercitationem vitae labore quos sunt repellat. Delectus.
                    Sequi dicta nostrum quidem quasi eos maiores expedita voluptatum optio, tenetur quos neque officiis repellendus voluptatibus quaerat impedit nulla laudantium ad veniam atque animi placeat earum minus! Natus, quae. Exercitationem?
                    Amet pariatur magnam sed modi, maiores accusantium ex sequi culpa cum nihil cupiditate fugiat omnis, ipsa esse deserunt natus unde, quaerat dolor eum odio. Quae incidunt reprehenderit nam praesentium minima.
                    A debitis quia, voluptatum reprehenderit earum maxime, nesciunt quas molestiae nulla eius corporis placeat. Laborum quisquam consectetur ratione reiciendis sunt quo numquam doloremque ea, incidunt nobis temporibus eligendi vero architecto!
                    Nostrum dolorem dolore fugit incidunt dolor quos nisi aliquam ipsam qui neque quibusdam vel dolores illum reprehenderit ad officiis quasi autem commodi dicta molestiae, assumenda minus voluptatem. At, corrupti ex.
                    Doloremque ipsa assumenda voluptatum ea eaque cumque possimus iure explicabo nemo enim itaque labore perferendis beatae, illum, laborum et corrupti facere atque aliquid nulla dolorum at fugiat. Ex, quis corrupti.
                </dd>

                <hr class="hf">

                <dd class="intro-button-area">
                    <div class="hovering-button-layer" ref="mouseTarget" @mousemove="mousePos">
                        <button type="button" id="btnIntroReadMore">
                            <p class="label-text-breaker">
                                <span>R</span>
                                <span>E</span>
                                <span>A</span>
                                <span>D</span>
                                <span></span>
                                <span>M</span>
                                <span>O</span>
                                <span>R</span>
                                <span>E</span>
                            </p>

                            <i class="ri-zoom-in-line"></i>
                        </button>

                        <div class="hovering-button-circle"></div>
                    </div>
                </dd>
            </dl> <!-- #mainIntroText -->

            <div id="mainIntroImage">
                <div id="introImageSlider">
                    <swiper-container id="introSliderContainer" v-bind="introImageSliderParams">
                        <swiper-slide class="intro-slide" v-for="slide in slides" :key="slide.uniqueKey">
                            <div class="intro-slide-overlay">
                                <h1>{{ slide.textTitle }}</h1>
                                <p>{{ slide.subTitle }}</p>
                            </div>

                            <div class="intro-slide-image">
                                <img :src="slide.imgSrc !== '' ? slide.imgSrc : 'https://picsum.photos/200'" alt="">
                            </div>
                        </swiper-slide>
                    </swiper-container>
                </div> <!-- introImageSlider -->
            </div> <!-- #mainIntroImage -->
        </div> <!-- #mainIntroGrid -->
    </div> <!-- #mainIntroduce -->
</template> <!-- Template Ends -->

<script setup>
    const slides = ref([
        {
            uniqueKey: 0,
            textTitle: '어쩌고 저쩌고',
            subTitle: '이러쿵 저러쿵',
            imgSrc: '/images/intro-image-01.jpg'
        },
        {
            uniqueKey: 1,
            textTitle: '왁자지껄',
            subTitle: '우당탕 쿠당탕',
            imgSrc: '/images/intro-image-02.jpg'
        },
        {
            uniqueKey: 2,
            textTitle: '왔다리 갔다리',
            subTitle: '어수선 저수선',
            imgSrc: '/images/intro-image-03.jpg'
        }
    ])

    const introImageSliderParams = {
        slidesPerView: 1,
        speed: 500,
        loop: true,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }
    }

    const mouseTarget = ref(null)
    const mousePos = event => {
        const relX = mouseTarget.value.offsetLeft
        const relY = mouseTarget.value.offsetTop

        const trueX = event.pageX - relX
        const trueY = event.pageY - relY

        mouseTarget.value.style.cssText = `--object-x: ${trueX}px; --object-y: ${trueY}px;`
    }
</script> <!-- Logic Ends -->

<style lang="scss" scoped>
    // 메인 소개 영역 시작

    #mainIntroGrid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }

    #mainIntroText {
        display: flex;
        flex-flow: column nowrap;
        gap: 1.5rem;
    }

    .intro-text-area {
        position: relative;
        padding-inline-end: .5rem;
        height: 27rem;
        line-height: 2;
        overflow: auto;

        &::after {
            display: block;
            position: sticky;
            bottom: 0;
            left: 0;
            right: 0;
            height: 5rem;
            background-image: linear-gradient(to top, rgb(var(--clr-background)), transparent);
            pointer-events: none;
            content: '';
        }

        > p + p {
            margin-block-start: 1.5rem;
        }

        & + .hf {
            background-color: rgba(var(--clr-max), .5);
        }
    }

    .intro-button-area {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
    }

    .hovering-button-layer {
        position: relative;
        width: 10rem;
        height: 2.4rem;
        border-radius: .5rem;
        transition: color .5s;
        overflow: hidden;

        &:hover {
            color: rgb(var(--clr-text-on-tint));

            .hovering-button-circle {
                opacity: 1;
            }
        }
    }

    .hovering-button-circle {
        position: absolute;
        top: var(--object-y);
        left: var(--object-x);
        width: 5rem;
        aspect-ratio: 1 / 1;
        border-radius: 100%;
        background-color: rgb(var(--clr-theme));
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: opacity .5s, width .3s;
        z-index: -1;
    }

    #btnIntroReadMore {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: .5rem;
        padding: .8rem;
        width: 100%;
        height: 100%;
        background-color: rgba(var(--clr-max), .15);
        backdrop-filter: blur(1.5rem);
        transition: background-color .5s;
        isolation: isolate;

        &:hover {
            background-color: rgba(var(--clr-theme), .15);
        }

        &:active {
            & + .hovering-button-circle {
                width: 20rem;
            }
        }
    }

    .label-text-breaker {
        display: flex;
        gap: .15rem;
        font-size: .4rem;
        font-weight: 900;

        > span {
            display: block;
            height: .4rem;
        }
    }

    #mainIntroImage {
        position: relative;
        width: 100%;
        height: 100%;

        &::before,
        &::after {
            display: block;
            position: absolute;
            backdrop-filter: blur(1.5rem);
            z-index: -1;
            content: '';
        }

        &::before {
            top: 0;
            right: 0;
            width: 75%;
            height: 25%;
            background-color: rgba(var(--clr-white), .15);
        }

        &::after {
            bottom: 0;
            left: 0;
            width: 40%;
            height: 45%;
            background-color: rgba(var(--clr-black), .15);
        }
    }

    #introImageSlider {
        position: absolute;
        inset: 2.5rem;
        background-color: rgb(var(--clr-min));
        box-shadow: 0 .75rem 2.5rem rgba(var(--clr-min), .15);
    }

    #introSliderContainer {
        width: 100%;
        height: 100%;
    }

    .intro-slide {
        position: relative;
    }

    .intro-slide-overlay {
        position: absolute;
        inset: 0;
    }

    .intro-slide-image {
        position: absolute;
        inset: -2rem;
        transform: skewX(30deg) scaleX(2);
        transition: inset .5s ease-out, transform .5s ease-out;

        > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: blur(1.5rem);
            transition: filter .5s;
        }
    }

    .intro-slide.swiper-slide-active {
        :where(.intro-slide-image) {
            inset: 0;
            transform: none;
            transition: inset 1.5s ease-out;

            > img {
                filter: none;
            }
        }
    }

    // 메인 소개 영역 끝

    // 미디어 쿼리 시작

    @media screen and (width <= 1080px) {
        #mainIntroGrid {
            display: block;
        }

        #mainIntroImage {
            display: none;
        }
    }

    // 미디어 쿼리 끝
</style> <!-- Stylesheet Ends -->