class AddOrUpdateTemplate {

  constructor(options) {
    if (options.isForUpdate || options !== 'null') {
      this.isForUpdate = options.isForUpdate; // otherwise it is used for adding
      this.id = options.id;
      this.make = options.make;
      this.model = options.model;
      this.year = options.year;
      this.price = options.price;
      this.mileage = options.mileage;
      this.cylinder = options.cylinder;
      this.drivetrain = options.drivetrain;
      this.status = options.status;
      this.transmission = options.transmission;
      this.engineCapacity = options.engineCapacity;
      this.doors = options.doors;
      this.safetyOption = options.safetyOption;
      this.fuel_type = options.fuel_type;
      this.body_type = options.body_type;
      this.alloy_rim = options.alloy_rim;
      this.technologyOption = options.technologyOption;
      this.interiorOptions = options.interiorOptions;


    }
  }

  addOrUpdateCar_Container() {
    return `
        <div class="row">
            <div class="col-md-12">
                ${this.addOrUpdateCar_Form()}
            </div>
        </div>`;
  }

  addOrUpdateCar_Form() {
    return `
      <form method="post" onsubmit="" class="margin-top-15">   
        <div class="panel panel-default">   
          <div class="panel-heading"><h4>General Info</h4></div>   
            <div class="panel-body">   
              <table cellspacing="1" id="update-car-general-info-table">   
                <tbody>
                ${this.isForUpdate ? this.updateCar_HiddenId() : ''}
                ${this.isForUpdate ? this.addOrUpdateCar_InputMake() : this.addOrUpdateCar_SelectMake()}
                ${this.isForUpdate ? this.addOrUpdateCar_InputModel() : this.addOrUpdateCar_SelectModel()}
                ${this.addOrUpdateCar_SelectYear()}
                ${this.addOrUpdateCar_SelectFuel()}
                ${this.addOrUpdateCar_Price()}
                ${this.addOrUpdateCar_Mileage()}
                ${this.addOrUpdateCar_Transmission()}
                ${this.addOrUpdateCar_Drivetrain()}
                ${this.addOrUpdateCar_Status()}
                </tbody>
              </table>
              <span class="input-required">*</span> <span class="label label-danger">Required fields</span>
            </div>
        </div>
        <div class="panel panel-default">   
          <div class="panel-heading"><h4>Car Specifications</h4></div>   
            <div class="panel-body">   
              <table cellspacing="1" id="update-car-general-info-table">   
                <tbody>
                ${this.addOrUpdateCar_CarBody()}
                ${this.addOrUpdateCar_CarWheels()}
                ${this.addOrUpdateCar_CarSafety()}
                ${this.addOrUpdateCar_CarTechnology()}
                ${this.addOrUpdateCar_CarInterior()}
                </tbody>
              </table>
              <span class="input-required">*</span> <span class="label label-danger">Required fields</span>
            </div>
        </div>
        ${this.addOrUpdateCar_EngineChassis()}
        ${this.addOrUpdateCar_SubmitButton()}
      </form>`;
  }

  updateCar_HiddenId() {
    return `<tr><td><input type="hidden" class="hidden" value="${this.id}" name="update-vehicle-id" id="update-vehicle-id"></td></tr>`;
  }

  addOrUpdateCar_InputMake() {
    return `<tr>
                <td>Make<span class="input-required"> *</span></td>   
                <td><input type="text" value="${this.make}" name="update-make" id="update-make" ></td>   
            </tr>`;
  }

  addOrUpdateCar_SelectMake() {
    return `<tr>
              <td>Make<span class="input-required"> *</span></td>
              <td>
                  <select title="make" name="make" id="make" class=""
                          onchange="new CommonUtil().selectCarMake(this);" required>
                      <option selected="selected" value="">Select Make
                      </option>
                      <option value="Acura">Acura</option>
                      <option value="Alfa Romeo">Alfa Romeo</option>
                      <option value="Aston Martin">Aston Martin</option>
                      <option value="Audi">Audi</option>
                      <option value="Bentley">Bentley</option>
                      <option value="BMW">BMW</option>
                      <option value="Buick">Buick</option>
                      <option value="Cadillac">Cadillac</option>
                      <option value="Chevrolet">Chevrolet</option>
                      <option value="Chrysler">Chrysler</option>
                      <option value="Dodge">Dodge</option>
                      <option value="Ferrari">Ferrari</option>
                      <option value="FIAT">Fiat</option>
                      <option value="Ford">Ford</option>
                      <option value="GMC">GMC</option>
                      <option value="Honda">Honda</option>
                      <option value="Hyundai">Hyundai</option>
                      <option value="Infiniti">Infiniti</option>
                      <option value="Isuzu">Isuzu</option>
                      <option value="Jaguar">Jaguar</option>
                      <option value="Jeep">Jeep</option>
                      <option value="Kia">Kia</option>
                      <option value="Lamborghini">Lamborghini</option>
                      <option value="Land Rover">Land Rover</option>
                      <option value="Lexus">Lexus</option>
                      <option value="Lincoln">Lincoln</option>
                      <option value="Lotus">Lotus</option>
                      <option value="Maserati">Maserati</option>
                      <option value="Mazda">Mazda</option>
                      <option value="Mercedes-Benz">Mercedes-Benz</option>
                      <option value="Mini">Mini</option>
                      <option value="Mitsubishi">Mitsubishi</option>
                      <option value="Nissan">Nissan</option>
                      <option value="Pontiac">Pontiac</option>
                      <option value="Porsche">Porsche</option>
                      <option value="Ram">Ram</option>
                      <option value="Saab">Saab</option>
                      <option value="Saturn">Saturn</option>
                      <option value="Scion">Scion</option>
                      <option value="Smart">Smart</option>
                      <option value="Subaru">Subaru</option>
                      <option value="Suzuki">Suzuki</option>
                      <option value="Tesla">Tesla</option>
                      <option value="Toyota">Toyota</option>
                      <option value="Volkswagen">Volkswagen</option>
                      <option value="Volvo">Volvo</option>
                  </select>
                  <b style="font-size: 10px; color: red;" id="make-err">&nbsp;</b>
              </td>
          </tr>`;
  }

  addOrUpdateCar_SelectYear() {
    return `<tr>
        <td>Year<span class="input-required"> *</span></td>   
        <td>   
            <select name="year" id="year" title="year" required >   
                <option selected="selected" value="">Select year</option> 
                <option value="2019">2019</option>   
                <option value="2018">2018</option>   
                <option value="2017">2017</option>   
                <option value="2016">2016</option>   
                <option value="2015">2015</option>   
                <option value="2014">2014</option>   
                <option value="2013">2013</option>   
                <option value="2012">2012</option>   
                <option value="2011">2011</option>   
                <option value="2010">2010</option>   
                <option value="2009">2009</option>   
                <option value="2008">2008</option>   
                <option value="2007">2007</option>   
                <option value="2006">2006</option>   
                <option value="2005">2005</option>   
                <option value="2004">2004</option>   
                <option value="2003">2003</option>   
                <option value="2002">2002</option>   
                <option value="2001">2001</option>   
                <option value="2000">2000</option>   
                <option value="1999">1999</option>   
                <option value="1998">1998</option>   
                <option value="1997">1997</option>   
                <option value="1996">1996</option>   
                <option value="1995">1995</option>   
                <option value="1994">1994</option>   
                <option value="1993">1993</option>   
                <option value="1992">1992</option>   
                <option value="1991">1991</option>   
                <option value="1990">1990</option>   
                <option value="1989">1989</option>   
                <option value="1988">1988</option>   
                <option value="1987">1987</option>   
                <option value="1986">1986</option>   
                <option value="1985">1985</option>   
                <option value="1984">1984</option>   
                <option value="1983">1983</option>   
                <option value="1982">1982</option>   
                <option value="1981">1981</option>   
                <option value="1980">1980</option>   
            </select>   
            <b style="font-size: 10px; color: red;" id="year-err">&nbsp;</b>   
        </td></tr>`;
  }
  addOrUpdateCar_SelectFuel() {
    return `<tr>
        <td>Fuel Type<span class="input-required"> *</span></td>   
        <td>   
            <select name="fuel_type" id="fuel_type" title="fuel_type" required >   
                <option selected="selected" value="">Select fuel type</option> 
                <option value="gasoline">Gasoline</option>
                <option value="diesel">Diesel</option>
                <option value="electric">Electric</option>
                <option value="hybrid">Hybrid</option>
            </select>   
            <b style="font-size: 10px; color: red;" id="year-err">&nbsp;</b>   
        </td></tr>`;
  }
  addOrUpdateCar_InputModel() {
    return `<tr>
                <td>Model<span class="input-required"> *</span></td>
                <td><input type="text" ${this.isForUpdate ? 'readonly' : 'required'} value="${this.isForUpdate ? this.model : ''}" name="update-model" id="update-model" ></td>
            </tr>`;
  }

  addOrUpdateCar_SelectModel() {
    return `<tr>
              <td>Model<span class="input-required"> *</span></td>
              <td>
                  <select name="model" id="model" title="model" required>
                      <option selected="selected">Select model</option>
                  </select>
                  <b style="font-size: 10px; color: red;" id="model-err">&nbsp;</b>
              </td>
            </tr>`;
  }

  addOrUpdateCar_Price() {
    return `
    <tr>
        <td>Price<span class="input-required"> *</span></td>
        <td>
         <input type="number" name="price" id="price" title="price" min="0" max="999999999" required value="${this.isForUpdate ? this.price : ''}" />
         <b style="font-size: 10px; color: red;" id="price-err">&nbsp;</b>
        </td>
    </tr>`;
  }

  addOrUpdateCar_Mileage() {
    return `<tr>   
              <td>Mileage(Km)<span class="input-required"> *</span></td>   
              <td>   
                <input type="number" name="mileage" id="mileage" title="mileage" min="0" max="999999" required/ value="${this.isForUpdate ? this.mileage : ''}">   
                <b style="font-size: 10px;  color: red;" id="mileage-err">&nbsp;</b>   
              </td>   
            </tr>`;
  }

  addOrUpdateCar_Transmission() {
    return `<tr>   
              <td>Transmission <span class="input-required"> *</span>&nbsp;</td>   
              <td>
                <input type="radio" name="transmission" id="transmission" value="Automatic" title="transmission" required>&nbsp;Automatic   
                <input type="radio" name="transmission" id="transmission" value="Manual" title="transmission" required>&nbsp;Manual   
                <input type="radio" name="transmission" id="transmission" value="Continuously Variable Transmission (CVT)" title="transmission" required>&nbsp;CVT   
                <input type="radio" name="transmission" id="transmission" value="Dual-Clutch Transmission (DCT)" title="transmission" required>&nbsp;Dual Clutch Transmission   
                <input type="radio" name="transmission" id="transmission" value="Sequential Manual Transmission (SMT)" title="transmission" required>&nbsp;Sequential Manual Transmission   
                <input type="radio" name="transmission" id="transmission" value="Automated Manual Transmission (AMT)" title="transmission" required>&nbsp;Automated Manual Transmission  
                <input type="radio" name="transmission" id="transmission" value="Hybrid Transmission" title="transmission" required>&nbsp;Hybrid Transmission   
                <b style="font-size: 10px; color: red;" id="transmission-err">&nbsp;</b>   
              </td>   
            </tr>`;
  }

  addOrUpdateCar_Drivetrain() {
    return `<tr>   
              <td>Drivetrain<span class="input-required"> *</span></td>   
              <td>   
                <input type="radio" name="drivetrain" id="drivetrain" value="AWD" title="drivetrain" required> AWD   
                <input type="radio" name="drivetrain" id="drivetrain" value="FWD" title="drivetrain" required> FWD   
                <input type="radio" name="drivetrain" id="drivetrain" value="RWD" title="drivetrain" required> RWD   
                <input type="radio" name="drivetrain" id="drivetrain" value="4WD" title="drivetrain" required> 4WD   
                <b style="font-size: 10px; color: red;" id="drivetrain-err">&nbsp;</b>   
              </td>   
            </tr>`;
  }

  addOrUpdateCar_Status() {
    return `<tr>
              <td>Status</td>
              <td>
                <input type="radio" name="status" id="status" value="Available" title="status" checked> Available
                <input type="radio" name="status" id="status" value="SOLD" title="status"> Sold
                <input type="radio" name="status" id="status" value="IN shipment" title="status"> In shipment
                <input type="radio" name="status" id="status" value="New Arrivals" title="status"> New Arrivals
              </td>
            </tr>`;
  }

  addOrUpdateCar_CarBody() {
    return `
        <tr>
        <td>Body Type<span class="input-required"> *</span></td>   
        <td>   
            <select name="body_type" id="body_type" title="body_type" required >   
                <option selected="selected" value="">Select body type</option> 
                <option value="sedan">Sedan</option>
                <option value="hatchback">Hatchback</option>
                <option value="SUV">SUV</option>
                <option value="crossover">Crossover</option>
                <option value="coupe">Coupe</option>
                <option value="convertible">Convertible</option>
                <option value="pickup">Pickup Truck</option>
                <option value="van">Van</option>
                <option value="wagon">Station Wagon</option>
                <option value="luxury">Luxury Car</option>
                <option value="sports">Sports</option>
                <option value="compact">Compact</option>
                <option value="mid-size">Mid-Size</option>
                <option value="full-size">Full-Size</option>
                <option value="crossover">Crossover</option>
                <option value="off-road">Off-Road</option>
            </select>   
            <b style="font-size: 10px; color: red;" id="year-err">&nbsp;</b>   
        </td></tr>`;
  }
  addOrUpdateCar_CarWheels() {
    return `
        <tr>
        <td>Alloy Rim Size<span class="input-required"> *</span></td>   
        <td>   
            <select name="alloy_rim" id="alloy_rim" title="alloy_rim" required >   
                <option selected="selected" value="">Select rim size</option> 
                <option value="13">13-inch Wheels</option>
                <option value="14">14-inch Wheels</option>
                <option value="15">15-inch Wheels</option>
                <option value="16">16-inch Wheels</option>
                <option value="17">17-inch Wheels</option>
                <option value="18">18-inch Wheels</option>
                <option value="19">19-inch Wheels</option>
                <option value="20">20-inch Wheels</option>
                <option value="21">21-inch Wheels</option>
                <option value="22">22-inch Wheels</option>
            </select>   
            <b style="font-size: 10px; color: red;" id="year-err">&nbsp;</b>   
        </td></tr>`;
  }
  addOrUpdateCar_CarSafety() {
    return `
        <tr>
        <td>Car Safety<span class="input-required"> *</span></td>   
        <td> 
            <div>
              <input type="checkbox" name="safetyOption[]" value="abs"> Anti-lock Braking System (ABS)
              <input type="checkbox" name="safetyOption[]" value="airbags"> Airbags
              <input type="checkbox" name="safetyOption[]" value="traction-control"> Traction Control
              <input type="checkbox" name="safetyOption[]" value="stability-control"> Stability Control
              <input type="checkbox" name="safetyOption[]" value="blind-spot-monitoring"> Blind Spot Monitoring
              <input type="checkbox" name="safetyOption[]" value="lane-departure-warning"> Lane Departure Warning
              <input type="checkbox" name="safetyOption[]" value="forward-collision-warning"> Forward Collision Warning
            </div>
       
            <b style="font-size: 10px; color: red;" id="year-err">&nbsp;</b>   
        </td></tr>`;
  }
  addOrUpdateCar_CarTechnology() {
    return `
        <tr>
        <td>Car Technology<span class="input-required"> *</span></td>   
        <td>
            <div>
                <input type="checkbox" name="technologyOption[]" value="gps"> GPS Navigation
                <input type="checkbox" name="technologyOption[]" value="air-conditioning"> Air Conditioning
                <input type="checkbox" name="technologyOption[]" value="sun-roof"> Sun Roof
                <input type="checkbox" name="technologyOption[]" value="heated-seats"> Heated Seats
                <input type="checkbox" name="technologyOption[]" value="bluetooth"> Bluetooth Connectivity
                <input type="checkbox" name="technologyOption[]" value="backup-camera"> Backup Camera
                <input type="checkbox" name="technologyOption[]" value="blind-spot-monitoring"> Blind Spot Monitoring
                <input type="checkbox" name="technologyOption[]" value="adaptive-cruise-control"> Adaptive Cruise Control
                <input type="checkbox" name="technologyOption[]" value="android-auto"> Android Auto
                <input type="checkbox" name="technologyOption[]" value="apple-carplay"> Apple CarPlay
                <input type="checkbox" name="technologyOption[]" value="wireless-charging"> Wireless Charging
                <input type="checkbox" name="technologyOption[]" value="keyless-entry"> Keyless Entry
                <input type="checkbox" name="technologyOption[]" value="push-button-start"> Push Button Start
                <input type="checkbox" name="technologyOption[]" value="parking-assist"> Parking Assist
                <input type="checkbox" name="technologyOption[]" value="head-up-display"> Head-Up Display
                <input type="checkbox" name="technologyOption[]" value="smartphone-integration"> Smartphone Integration
                <input type="checkbox" name="technologyOption[]" value="voice-control""> Voice Control
            </div>
      
        <b style="font-size: 10px; color: red;" id="year-err">&nbsp;</b>   
        </td></tr>`;
  }
  addOrUpdateCar_CarInterior() {
    return `
        <tr>
        <td>Car Interior<span class="input-required"> *</span></td>   
        <td> 
        <div>  
          <select name="interiorOptions" class="form-control" id="interiorOptions">
            <option value="leather">Leather</option>
            <option value="cloth">Cloth</option>
            <option value="suede">Suede</option>
            <option value="alcantara">Alcantara</option>
            <option value="synthetic">Synthetic</option>
            <!-- Add more interior options as needed -->
          </select>
        </div>
        <b style="font-size: 10px; color: red;" id="year-err">&nbsp;</b>   
        </td></tr>`;
  }
  addOrUpdateCar_EngineChassis() {
    return `
    <div class="panel panel-default">   
       <div class="panel-heading"><h4>Engine and Chassis</h4></div>   
       <div class="panel-body">   
        <table>   
         <tbody>   
         <tr>   
          <td>Cylinder<span class="input-required"> *</span></td>   
          <td>   
           <input required type="radio" name="cylinder" id="cylinder" title="cylinder" value="4"> 4   
           <input required type="radio" name="cylinder" id="cylinder" title="cylinder" value="6"> V6   
           <input required type="radio" name="cylinder" id="cylinder" title="cylinder" value="8"> V8   
           <input required type="radio" name="cylinder" id="cylinder" title="cylinder" value="10"> V10   
          </td>   
         </tr>   
         <tr>   
          <td>Engine Capacity<span class="input-required"> *</span></td>   
          <td>   
           <input value="${this.isForUpdate ? this.engineCapacity : ''}" type="text" name="capacity" id="capacity" minlength="0" maxlength="4" title="capacity" required>   
           <b style="font-size: 10px; color: red;" id="capacity-err">&nbsp;</b>   
          </td>   
         </tr>   
         <tr>   
          <td>Doors<span class="input-required"> *</span></td>   
          <td>   
           <input value="${this.isForUpdate ? this.doors : ''}" type="number" name="doors" id="doors" title="doors" required min="2" max="6">   
           <b style="font-size: 10px; color: red;" id="door-err">&nbsp;</b>   
          </td>   
         </tr>   
         </tbody>   
        </table>   
        <span class="input-required">*</span> <span class="label label-danger">Required fields</span>   
       </div>   
      </div>`;
  }

  addOrUpdateCar_SubmitButton() {
    return `<div style="margin-bottom: 2em;">
                <input type="submit" class="btn btn-primary btn-sm" name="${this.isForUpdate ? 'update-car-submit' : 'add-car-submit'}" 
                id="${this.isForUpdate ? 'update-car-submit' : 'add-car-submit'}" value="Submit">
            </div>`;
  }

}