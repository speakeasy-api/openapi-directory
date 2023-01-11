package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPaymentMethodsType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditCards")
    public GetPaymentMethodType[] creditCards;
    public GetPaymentMethodsType withCreditCards(GetPaymentMethodType[] creditCards) {
        this.creditCards = creditCards;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPage")
    public String nextPage;
    public GetPaymentMethodsType withNextPage(String nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetPaymentMethodsType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}