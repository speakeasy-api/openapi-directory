package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PaymentDebitMemoApplicationApplyRequestType {
    @JsonProperty("amount")
    public Double amount;
    public PaymentDebitMemoApplicationApplyRequestType withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debitMemoId")
    public String debitMemoId;
    public PaymentDebitMemoApplicationApplyRequestType withDebitMemoId(String debitMemoId) {
        this.debitMemoId = debitMemoId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public PaymentDebitMemoApplicationItemApplyRequestType[] items;
    public PaymentDebitMemoApplicationApplyRequestType withItems(PaymentDebitMemoApplicationItemApplyRequestType[] items) {
        this.items = items;
        return this;
    }
}