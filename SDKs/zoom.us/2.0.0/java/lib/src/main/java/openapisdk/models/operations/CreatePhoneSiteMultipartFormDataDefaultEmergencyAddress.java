package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreatePhoneSiteMultipartFormDataDefaultEmergencyAddress {
    @JsonProperty("address_line1")
    public String addressLine1;
    public CreatePhoneSiteMultipartFormDataDefaultEmergencyAddress withAddressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address_line2")
    public String addressLine2;
    public CreatePhoneSiteMultipartFormDataDefaultEmergencyAddress withAddressLine2(String addressLine2) {
        this.addressLine2 = addressLine2;
        return this;
    }
    @JsonProperty("city")
    public String city;
    public CreatePhoneSiteMultipartFormDataDefaultEmergencyAddress withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public CreatePhoneSiteMultipartFormDataDefaultEmergencyAddress withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("state_code")
    public String stateCode;
    public CreatePhoneSiteMultipartFormDataDefaultEmergencyAddress withStateCode(String stateCode) {
        this.stateCode = stateCode;
        return this;
    }
    @JsonProperty("zip")
    public String zip;
    public CreatePhoneSiteMultipartFormDataDefaultEmergencyAddress withZip(String zip) {
        this.zip = zip;
        return this;
    }
}