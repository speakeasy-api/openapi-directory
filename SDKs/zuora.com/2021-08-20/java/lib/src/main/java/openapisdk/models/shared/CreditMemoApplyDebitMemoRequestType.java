package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreditMemoApplyDebitMemoRequestType {
    @JsonProperty("amount")
    public Double amount;
    public CreditMemoApplyDebitMemoRequestType withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("debitMemoId")
    public String debitMemoId;
    public CreditMemoApplyDebitMemoRequestType withDebitMemoId(String debitMemoId) {
        this.debitMemoId = debitMemoId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public CreditMemoApplyDebitMemoItemRequestType[] items;
    public CreditMemoApplyDebitMemoRequestType withItems(CreditMemoApplyDebitMemoItemRequestType[] items) {
        this.items = items;
        return this;
    }
}