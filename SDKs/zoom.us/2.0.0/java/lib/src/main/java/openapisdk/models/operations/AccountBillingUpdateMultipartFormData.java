package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

/**
 * AccountBillingUpdateMultipartFormData
 * Billing Contact object.
**/
public class AccountBillingUpdateMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=address")
    public String address;
    public AccountBillingUpdateMultipartFormData withAddress(String address) {
        this.address = address;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=apt")
    public String apt;
    public AccountBillingUpdateMultipartFormData withApt(String apt) {
        this.apt = apt;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=city")
    public String city;
    public AccountBillingUpdateMultipartFormData withCity(String city) {
        this.city = city;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=country")
    public String country;
    public AccountBillingUpdateMultipartFormData withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=email")
    public String email;
    public AccountBillingUpdateMultipartFormData withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=first_name")
    public String firstName;
    public AccountBillingUpdateMultipartFormData withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=last_name")
    public String lastName;
    public AccountBillingUpdateMultipartFormData withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=phone_number")
    public String phoneNumber;
    public AccountBillingUpdateMultipartFormData withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=state")
    public String state;
    public AccountBillingUpdateMultipartFormData withState(String state) {
        this.state = state;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=zip")
    public String zip;
    public AccountBillingUpdateMultipartFormData withZip(String zip) {
        this.zip = zip;
        return this;
    }
}