package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SetUpAccountMultipartFormDataEmergencyAddress
 * Specify emergency address for the account.
**/
public class SetUpAccountMultipartFormDataEmergencyAddress {
    @JsonProperty("address_line1")
    public String addressLine1;
    public SetUpAccountMultipartFormDataEmergencyAddress withAddressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address_line2")
    public String addressLine2;
    public SetUpAccountMultipartFormDataEmergencyAddress withAddressLine2(String addressLine2) {
        this.addressLine2 = addressLine2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public SetUpAccountMultipartFormDataEmergencyAddress withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public SetUpAccountMultipartFormDataEmergencyAddress withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state_code")
    public String stateCode;
    public SetUpAccountMultipartFormDataEmergencyAddress withStateCode(String stateCode) {
        this.stateCode = stateCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zip")
    public String zip;
    public SetUpAccountMultipartFormDataEmergencyAddress withZip(String zip) {
        this.zip = zip;
        return this;
    }
}