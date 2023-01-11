package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserAddress {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address1")
    public String address1;
    public UserAddress withAddress1(String address1) {
        this.address1 = address1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address2")
    public String address2;
    public UserAddress withAddress2(String address2) {
        this.address2 = address2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address3")
    public String address3;
    public UserAddress withAddress3(String address3) {
        this.address3 = address3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public UserAddress withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public UserAddress withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public UserAddress withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zip")
    public String zip;
    public UserAddress withZip(String zip) {
        this.zip = zip;
        return this;
    }
}