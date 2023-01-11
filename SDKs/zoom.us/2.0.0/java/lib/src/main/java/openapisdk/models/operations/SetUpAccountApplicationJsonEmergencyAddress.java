package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SetUpAccountApplicationJsonEmergencyAddress
 * Specify emergency address for the account.
**/
public class SetUpAccountApplicationJsonEmergencyAddress {
    @JsonProperty("address_line1")
    public String addressLine1;
    public SetUpAccountApplicationJsonEmergencyAddress withAddressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address_line2")
    public String addressLine2;
    public SetUpAccountApplicationJsonEmergencyAddress withAddressLine2(String addressLine2) {
        this.addressLine2 = addressLine2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public SetUpAccountApplicationJsonEmergencyAddress withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public SetUpAccountApplicationJsonEmergencyAddress withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state_code")
    public String stateCode;
    public SetUpAccountApplicationJsonEmergencyAddress withStateCode(String stateCode) {
        this.stateCode = stateCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zip")
    public String zip;
    public SetUpAccountApplicationJsonEmergencyAddress withZip(String zip) {
        this.zip = zip;
        return this;
    }
}