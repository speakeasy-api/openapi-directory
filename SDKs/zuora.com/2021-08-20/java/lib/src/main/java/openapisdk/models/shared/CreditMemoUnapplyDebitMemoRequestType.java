package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreditMemoUnapplyDebitMemoRequestType {
    @JsonProperty("amount")
    public Double amount;
    public CreditMemoUnapplyDebitMemoRequestType withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("debitMemoId")
    public String debitMemoId;
    public CreditMemoUnapplyDebitMemoRequestType withDebitMemoId(String debitMemoId) {
        this.debitMemoId = debitMemoId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public CreditMemoUnapplyDebitMemoItemRequestType[] items;
    public CreditMemoUnapplyDebitMemoRequestType withItems(CreditMemoUnapplyDebitMemoItemRequestType[] items) {
        this.items = items;
        return this;
    }
}