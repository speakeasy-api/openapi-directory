package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostPaymentMethodDecryptionCardHolderInfo
 * Container for cardholder information. If provided, Zuora will only use this information for this card. If not provided, Zuora will use the account's existing bill-to contact information for this card.
**/
public class PostPaymentMethodDecryptionCardHolderInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addressLine1")
    public String addressLine1;
    public PostPaymentMethodDecryptionCardHolderInfo withAddressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addressLine2")
    public String addressLine2;
    public PostPaymentMethodDecryptionCardHolderInfo withAddressLine2(String addressLine2) {
        this.addressLine2 = addressLine2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cardHolderName")
    public String cardHolderName;
    public PostPaymentMethodDecryptionCardHolderInfo withCardHolderName(String cardHolderName) {
        this.cardHolderName = cardHolderName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public PostPaymentMethodDecryptionCardHolderInfo withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public PostPaymentMethodDecryptionCardHolderInfo withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public PostPaymentMethodDecryptionCardHolderInfo withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone")
    public String phone;
    public PostPaymentMethodDecryptionCardHolderInfo withPhone(String phone) {
        this.phone = phone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public PostPaymentMethodDecryptionCardHolderInfo withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zipCode")
    public String zipCode;
    public PostPaymentMethodDecryptionCardHolderInfo withZipCode(String zipCode) {
        this.zipCode = zipCode;
        return this;
    }
}