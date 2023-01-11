package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountPlanCreateApplicationJsonContact
 * Billing Contact object.
**/
public class AccountPlanCreateApplicationJsonContact {
    @JsonProperty("address")
    public String address;
    public AccountPlanCreateApplicationJsonContact withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apt")
    public String apt;
    public AccountPlanCreateApplicationJsonContact withApt(String apt) {
        this.apt = apt;
        return this;
    }
    @JsonProperty("city")
    public String city;
    public AccountPlanCreateApplicationJsonContact withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public AccountPlanCreateApplicationJsonContact withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public AccountPlanCreateApplicationJsonContact withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("first_name")
    public String firstName;
    public AccountPlanCreateApplicationJsonContact withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonProperty("last_name")
    public String lastName;
    public AccountPlanCreateApplicationJsonContact withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonProperty("phone_number")
    public String phoneNumber;
    public AccountPlanCreateApplicationJsonContact withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonProperty("state")
    public String state;
    public AccountPlanCreateApplicationJsonContact withState(String state) {
        this.state = state;
        return this;
    }
    @JsonProperty("zip")
    public String zip;
    public AccountPlanCreateApplicationJsonContact withZip(String zip) {
        this.zip = zip;
        return this;
    }
}