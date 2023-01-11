package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountBilling200ApplicationJson
 * Billing Contact object.
**/
public class AccountBilling200ApplicationJson {
    @JsonProperty("address")
    public String address;
    public AccountBilling200ApplicationJson withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apt")
    public String apt;
    public AccountBilling200ApplicationJson withApt(String apt) {
        this.apt = apt;
        return this;
    }
    @JsonProperty("city")
    public String city;
    public AccountBilling200ApplicationJson withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public AccountBilling200ApplicationJson withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public AccountBilling200ApplicationJson withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("first_name")
    public String firstName;
    public AccountBilling200ApplicationJson withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonProperty("last_name")
    public String lastName;
    public AccountBilling200ApplicationJson withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonProperty("phone_number")
    public String phoneNumber;
    public AccountBilling200ApplicationJson withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonProperty("state")
    public String state;
    public AccountBilling200ApplicationJson withState(String state) {
        this.state = state;
        return this;
    }
    @JsonProperty("zip")
    public String zip;
    public AccountBilling200ApplicationJson withZip(String zip) {
        this.zip = zip;
        return this;
    }
}