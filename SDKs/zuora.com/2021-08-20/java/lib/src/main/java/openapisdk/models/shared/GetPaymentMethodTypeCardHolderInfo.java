package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetPaymentMethodTypeCardHolderInfo
 * Container for the name and billing address for the card holder.
 * 
**/
public class GetPaymentMethodTypeCardHolderInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addressLine1")
    public String addressLine1;
    public GetPaymentMethodTypeCardHolderInfo withAddressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addressLine2")
    public String addressLine2;
    public GetPaymentMethodTypeCardHolderInfo withAddressLine2(String addressLine2) {
        this.addressLine2 = addressLine2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cardHolderName")
    public String cardHolderName;
    public GetPaymentMethodTypeCardHolderInfo withCardHolderName(String cardHolderName) {
        this.cardHolderName = cardHolderName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public GetPaymentMethodTypeCardHolderInfo withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public GetPaymentMethodTypeCardHolderInfo withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public GetPaymentMethodTypeCardHolderInfo withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone")
    public String phone;
    public GetPaymentMethodTypeCardHolderInfo withPhone(String phone) {
        this.phone = phone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public GetPaymentMethodTypeCardHolderInfo withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zipCode")
    public String zipCode;
    public GetPaymentMethodTypeCardHolderInfo withZipCode(String zipCode) {
        this.zipCode = zipCode;
        return this;
    }
}