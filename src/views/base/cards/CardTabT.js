import 'bootstrap/dist/css/bootstrap.min.css'

const CardTabT = () => {
    return( 
      <>
      <div class="container text-center ">
        <h1 class="text-success">
              GeeksforGeeks
          </h1>
        <h5>Bootstrap 5 Cards Navigation</h5>
    </div>

    <div class="card text-center bg-light">
        <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                    <a class="nav-link active" 
                       href=
"https://www.geeksforgeeks.org/courses">
                          Courses
                      </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" 
                           href=
"https://write.geeksforgeeks.org/">
                          Write
                      </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" 
                           href=
"https://write.geeksforgeeks.org//my-posts/">
                          My post
                      </a>
                </li>
            </ul>
        </div>
        <div class="card-body text-bg-success">
            <div class="input-group p-5">
                <button class="btn btn-primary 
                               dropdown-toggle" 
                        type="button" 
                        data-bs-toggle="dropdown">
                    Select the course
                </button>
                <ul class="dropdown-menu">
                    <li>
                          <a class="dropdown-item" href="#">
                              Btech
                          </a>
                      </li>
                    <li>
                          <a class="dropdown-item" href="#">
                            Mtech
                          </a>
                      </li>
                    <li>
                          <a class="dropdown-item" href="#">
                            MBA
                          </a>
                      </li>
                    <li>
                          <a class="dropdown-item" href="#">
                            BSC Agriculture
                          </a>
                      </li>
                </ul>
                <input type="text" class="form-control"></input>
            </div>
        </div>
    </div>
    </>
    )
};

export default CardTabT;