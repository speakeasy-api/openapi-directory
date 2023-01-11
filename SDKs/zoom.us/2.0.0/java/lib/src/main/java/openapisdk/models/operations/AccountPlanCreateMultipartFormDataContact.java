package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountPlanCreateMultipartFormDataContact
 * Billing Contact object.
**/
public class AccountPlanCreateMultipartFormDataContact {
    @JsonProperty("address")
    public String address;
    public AccountPlanCreateMultipartFormDataContact withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apt")
    public String apt;
    public AccountPlanCreateMultipartFormDataContact withApt(String apt) {
        this.apt = apt;
        return this;
    }
    @JsonProperty("city")
    public String city;
    public AccountPlanCreateMultipartFormDataContact withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public AccountPlanCreateMultipartFormDataContact withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public AccountPlanCreateMultipartFormDataContact withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("first_name")
    public String firstName;
    public AccountPlanCreateMultipartFormDataContact withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonProperty("last_name")
    public String lastName;
    public AccountPlanCreateMultipartFormDataContact withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonProperty("phone_number")
    public String phoneNumber;
    public AccountPlanCreateMultipartFormDataContact withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonProperty("state")
    public String state;
    public AccountPlanCreateMultipartFormDataContact withState(String state) {
        this.state = state;
        return this;
    }
    @JsonProperty("zip")
    public String zip;
    public AccountPlanCreateMultipartFormDataContact withZip(String zip) {
        this.zip = zip;
        return this;
    }
}