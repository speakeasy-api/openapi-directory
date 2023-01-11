package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreditCard
 * Default payment method associated with an account. Only credit card payment methods are supported.
 * 
**/
public class CreditCard {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cardHolderInfo")
    public AccountCreditCardHolder cardHolderInfo;
    public CreditCard withCardHolderInfo(AccountCreditCardHolder cardHolderInfo) {
        this.cardHolderInfo = cardHolderInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cardNumber")
    public String cardNumber;
    public CreditCard withCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cardType")
    public CreditCardCardTypeEnum cardType;
    public CreditCard withCardType(CreditCardCardTypeEnum cardType) {
        this.cardType = cardType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expirationMonth")
    public Long expirationMonth;
    public CreditCard withExpirationMonth(Long expirationMonth) {
        this.expirationMonth = expirationMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expirationYear")
    public Long expirationYear;
    public CreditCard withExpirationYear(Long expirationYear) {
        this.expirationYear = expirationYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityCode")
    public String securityCode;
    public CreditCard withSecurityCode(String securityCode) {
        this.securityCode = securityCode;
        return this;
    }
}