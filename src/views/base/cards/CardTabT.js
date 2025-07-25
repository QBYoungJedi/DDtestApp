import 'bootstrap/dist/css/bootstrap.min.css'

const CardTabT = () => {
    return(
         <div class="card">
            <div class="card-header">
                <h5 class="card-title">Network Settings</h5>
                <ul class="nav nav-tabs card-header-tabs" data-bs-tabs="tabs">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="true" data-bs-toggle="tab" href="#dhcp">DHCP</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tab" href="#static">Static</a>
                    </li>
                </ul>
            </div>
            <form class="card-body tab-content">
                <div class="tab-pane active" id="dhcp">
                    <p class="card-text">Change DHCP Network settings.</p>
                </div>
                <div class="tab-pane" id="static">
                    <p class=" card-text">Change Static Network settings.</p>
                </div>
                <button class="btn btn-primary" type="submit">Save</button>
            </form>
       </div>
    )
};

export default CardTabT;