package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SubscribeResultCreditMemoResultCreditMemo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditMemoNumber")
    public String creditMemoNumber;
    public SubscribeResultCreditMemoResultCreditMemo withCreditMemoNumber(String creditMemoNumber) {
        this.creditMemoNumber = creditMemoNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public SubscribeResultCreditMemoResultCreditMemo withId(String id) {
        this.id = id;
        return this;
    }
}