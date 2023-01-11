package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPaymentMethodType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cardHolderInfo")
    public GetPaymentMethodTypeCardHolderInfo cardHolderInfo;
    public GetPaymentMethodType withCardHolderInfo(GetPaymentMethodTypeCardHolderInfo cardHolderInfo) {
        this.cardHolderInfo = cardHolderInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cardNumber")
    public String cardNumber;
    public GetPaymentMethodType withCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cardType")
    public String cardType;
    public GetPaymentMethodType withCardType(String cardType) {
        this.cardType = cardType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultPaymentMethod")
    public Boolean defaultPaymentMethod;
    public GetPaymentMethodType withDefaultPaymentMethod(Boolean defaultPaymentMethod) {
        this.defaultPaymentMethod = defaultPaymentMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expirationMonth")
    public Long expirationMonth;
    public GetPaymentMethodType withExpirationMonth(Long expirationMonth) {
        this.expirationMonth = expirationMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expirationYear")
    public Long expirationYear;
    public GetPaymentMethodType withExpirationYear(Long expirationYear) {
        this.expirationYear = expirationYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetPaymentMethodType withId(String id) {
        this.id = id;
        return this;
    }
}