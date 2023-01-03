import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div class="container mt-4">

      <h1 class="text-center mb-5">Programavimo kursai</h1>
      <div class="row m-5 text-white">

        <div class="col-md-4 text-center">
          <div class="card bg-primary mb-3">
            <div class="card-header">
              <h3>React kursai</h3>
            </div>
            <div class="card-body m-3">
              <p class="card-text">nuo <span class="fs-1">9.99</span> EUR / mėn.</p>
            </div>
          </div>
        </div>

        <div class="col-md-4 text-center">
          <div class="card bg-info mb-3">
            <div class="card-header">
              <h3>Angular.JS kursai</h3>
            </div>
            <div class="card-body m-3">
              <p class="card-text">nuo <span class="fs-1">29.99</span> EUR / mėn.</p>
            </div>
          </div>
        </div>

        <div class="col-md-4 text-center">
          <div class="card bg-primary mb-3">
            <div class="card-header">
              <h3>PHP kursai</h3>
            </div>
            <div class="card-body m-3">
              <p class="card-text">nuo <span class="fs-1">49.99</span> EUR / mėn.</p>
            </div>
          </div>
        </div>

      </div>

      <div class="card-group bg-light px-5">
        <h2 class="ps-5" >Mūsų dėstytojai</h2>
        {/* <hr class="hr" /> */}


        <div class="row">
          <div class="col-md-6">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <p>IMG</p>
                  {/* <img src="../avatar3.png" class="img-fluid rounded-start" alt="avatar"> */}
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h4 class="card-title"><strong>Michael</strong> Deo</h4>
                    <p class="card-text">Ui UX Designer  This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  {/* <img src="..." class="img-fluid rounded-start" alt="..."> */}
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h4 class="card-title"> <strong>Michael</strong> Deo</h4>
                    <p class="card-text">Ui UX Designer This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                  </div>
                </div>
              </div>
            </div>


          </div>

        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  {/* <img src="..." class="img-fluid rounded-start" alt="..."> */}
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h4 class="card-title"><strong>Michael</strong> Deo</h4>
                    <p class="card-text">Ui UX Designer.  This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  {/* <img src="..." class="img-fluid rounded-start" alt="..."> */}
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h4 class="card-title"><strong>Michael</strong> Deo</h4>
                    <p class="card-text">Ui UX Designer This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

      </div>



    </div >


  );
}

export default App;
