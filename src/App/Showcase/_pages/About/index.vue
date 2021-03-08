<template>
  <main id="content" role="main">
    <div class="bg-gray-13 bg-md-transparent">
      <div class="container">
        <div class="my-md-3">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-3 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble">
              <li class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item flex-shrink-0 flex-xl-shrink-1 active" aria-current="page">About Us</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <div class="bg-img-hero mb-14">
      <div class="container">
        <div class="flex-content-center max-width-620-lg flex-column mx-auto text-center min-height-564">
          <h1 class="h1 font-weight-bold">About Us</h1>
          <p class="text-gray-39 font-size-18 text-lh-default">Passion may be a friendly or eager interest in or admiration for a proposal,
            cause, discovery, or activity or love to a feeling of unusual excitement.</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-4 mb-md-0">
          <div class="card mb-3 border-0 text-center rounded-0">
            <img class="img-fluid mb-3" src="https://transvelo.github.io/electro-html/2.0/assets/img/500X300/img1.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="font-size-18 font-weight-semi-bold mb-3">What we really do?</h5>
              <p class="text-gray-90 max-width-334 mx-auto">Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas
                pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna,vitae ultrices lacus purus vitae metus.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4 mb-md-0">
          <div class="card mb-3 border-0 text-center rounded-0">
            <img class="img-fluid mb-3" src="https://transvelo.github.io/electro-html/2.0/assets/img/500X300/img2.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="font-size-18 font-weight-semi-bold mb-3">Our Vision</h5>
              <p class="text-gray-90 max-width-334 mx-auto">Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas
                pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna,vitae ultrices lacus purus vitae metus.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-3 border-0 text-center rounded-0">
            <img class="img-fluid mb-3" src="https://transvelo.github.io/electro-html/2.0/assets/img/500X300/img3.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="font-size-18 font-weight-semi-bold mb-3">History of Beginning</h5>
              <p class="text-gray-90 max-width-334 mx-auto">Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas
                pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna,vitae ultrices lacus purus vitae metus.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-1 py-12 mb-10 mb-lg-15">
      <div class="container">
        <div class="row">
          <div v-for="(employee, i) of employees" :key="i" class="col-md-4 mb-5 mb-xl-0 col-xl text-center">
            <img class="img-fluid mb-3 rounded-circle" :src="employee.image" alt="Card image cap">
            <h2 class="font-size-18 font-weight-semi-bold mb-0">{{ employee.fullName }}</h2>
            <span class="text-gray-41">{{ employee.position }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container mb-8 mb-lg-0">
      <div class="row mb-8">
        <div class="col-lg-7">
          <div class="row">
            <div class="col-lg-6 mb-5 mb-lg-8">
              <h3 class="font-size-18 font-weight-semi-bold text-gray-39 mb-4">What we really do?</h3>
              <p class="text-gray-90">Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui
                vitae iaculis mattis, tortor nisi faucibus magna, vitae ultrices lacus purus vitae metus. Ut nec odio facilisis, ultricies
                nunc eget, fringilla orci.</p>
            </div>
            <div class="col-lg-6 mb-5 mb-lg-8">
              <h3 class="font-size-18 font-weight-semi-bold text-gray-39 mb-4">Our Vision</h3>
              <p class="text-gray-90">Vestibulum velit nibh, egestas vel faucibus vitae, feugiat sollicitudin urna. Praesent iaculis id
                ipsum sit amet pretium. Aliquam tristique sapien nec enim euismod, scelerisque facilisis arcu consectetur. Vestibulum
                velit nibh, egestas vel faucibus vitae.</p>
            </div>
            <div class="col-lg-6 mb-5 mb-lg-8">
              <h3 class="font-size-18 font-weight-semi-bold text-gray-39 mb-4">History of the Company</h3>
              <p class="text-gray-90">Mauris rhoncus aliquet purus, a ornare nisi euismod in. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Etiam imperdiet eu metus vel ornare. Nullam in risus vel orci feugiat vestibulum. In sed aliquam mi.
                Nullam condimentum sollicitudin dui.</p>
            </div>
            <div class="col-lg-6 mb-5 mb-lg-8">
              <h3 class="font-size-18 font-weight-semi-bold text-gray-39 mb-4">Cooperate with Us!</h3>
              <p class="text-gray-90">Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui
                vitae iaculis mattis, tortor nisi faucibus magna, vitae ultrices lacus purus vitae metus. Ut nec odio facilisis, ultricies
                nunc eget, fringilla orci.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="ml-lg-8">
            <h3 class="font-size-18 font-weight-semi-bold text-gray-39 mb-4">What can we do for you ?</h3>
            <div v-if="collapsedItems" id="basicsAccordion1" class="about-accordion">
              <div v-for="(item, i) of collapsedItems" :key="i" class="card mb-4 border-color-4 rounded-0">
                <div class="card-header card-collapse border-color-4" id="basicsHeadingFive">
                  <h5 class="mb-0">
                    <button type="button"
                            class="btn btn-link btn-block flex-horizontal-center card-btn p-0 font-size-18"
                            data-toggle="collapse"
                            data-target="#basicsCollapseFive"
                            :aria-expanded="Boolean(item.state)"
                            :class="{'collapsed': item.state}"
                            aria-controls="basicsCollapseFive"
                            @click="item.state = !item.state"
                    >
                      <span class="border border-color-5 rounded font-size-12 mr-5">
                        <i v-if="item.state" class="fas fa-minus"></i>
                        <i v-else class="fas fa-plus"></i>
                      </span>
                      {{ item.name }}
                    </button>
                  </h5>
                </div>
                <div id="basicsCollapseFive"
                     class="collapse"
                     :class="{'show': item.state}"
                     aria-labelledby="basicsHeadingFive"
                     data-parent="#basicsAccordion1">
                  <div class="card-body">
                    <p class="mb-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                      wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                      Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch
                      et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
                      excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
                      you probably haven't heard of them accusamus labore sustainable VHS.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data: () => ({
    employees: [
      {
        fullName: 'Thomas Snow',
        position: 'CEO/Founder',
        image: 'https://transvelo.github.io/electro-html/2.0/assets/img/300X300/img16.jpg',
      },
      {
        fullName: 'Anna Baranov',
        position: 'Client Care',
        image: 'https://transvelo.github.io/electro-html/2.0/assets/img/300X300/img17.jpg'
      },
      {
        fullName: 'Thomas Snow',
        position: 'CEO/Founder',
        image: 'https://transvelo.github.io/electro-html/2.0/assets/img/300X300/img18.jpg'
      },
      {
        fullName: 'Anna Baranov',
        position: 'Client Care',
        image: 'https://transvelo.github.io/electro-html/2.0/assets/img/300X300/img17.jpg'
      },
      {
        fullName: 'Thomas Snow',
        position: 'CEO/Founder',
        image: 'https://transvelo.github.io/electro-html/2.0/assets/img/300X300/img20.jpg'
      }
    ],
    collapsedItems: [
      {
        name: "Support 24/7",
        state: 1
      },
      {
        name: "Best Quality",
        state: 0
      }
      , {
        name: "Fastest Delivery",
        state: 0
      }
      , {
        name: "Customer Care",
        state: 0
      }
      , {
        name: "Over 200 Satisfied Customers",
        state: 0
      }
    ]
  })
};
</script>