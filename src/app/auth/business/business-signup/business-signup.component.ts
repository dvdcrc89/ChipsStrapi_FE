import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth-service/auth.service';

@Component({
  selector: 'app-business-signup',
  templateUrl: './business-signup.component.html',
  styleUrls: ['./business-signup.component.scss']
})
export class BusinessSignupComponent implements OnInit {
  confirmUser = false;
  didFail = false;
  isLoading = false;
  handleAddressChange = (e) => {
    const {formatted_address, name, website, international_phone_number, geometry} = e;
    const lat = geometry.location.lat();
    const lng = geometry.location.lng();
    this.usrForm.value.place = {
      name,
      address: formatted_address,
      lat,
      lng,
      phone: international_phone_number,
      website
    }
  };
  placeSelected: boolean;
  brightonFirst = new google.maps.LatLngBounds(
    new google.maps.LatLng(50.837397,-0.1762297),
    new google.maps.LatLng(50.837397,-0.1762297));
  options={
    bounds: this.brightonFirst,
    types: ['establishment'],
    componentRestrictions: { 
      country: 'UK'
    }
  }
  
  @ViewChild('usrForm', {static: true }) usrForm: NgForm;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const values = this.usrForm.value
    console.log(values);
    this.authService.registerRestaurant(values)
  }


}
