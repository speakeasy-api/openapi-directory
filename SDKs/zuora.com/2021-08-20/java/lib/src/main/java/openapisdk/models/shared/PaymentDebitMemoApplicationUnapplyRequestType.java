package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PaymentDebitMemoApplicationUnapplyRequestType {
    @JsonProperty("amount")
    public Double amount;
    public PaymentDebitMemoApplicationUnapplyRequestType withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debitMemoId")
    public String debitMemoId;
    public PaymentDebitMemoApplicationUnapplyRequestType withDebitMemoId(String debitMemoId) {
        this.debitMemoId = debitMemoId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public PaymentDebitMemoApplicationItemUnapplyRequestType[] items;
    public PaymentDebitMemoApplicationUnapplyRequestType withItems(PaymentDebitMemoApplicationItemUnapplyRequestType[] items) {
        this.items = items;
        return this;
    }
}