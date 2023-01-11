package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PaymentDebitMemoApplicationItemApplyRequestType {
    @JsonProperty("amount")
    public Double amount;
    public PaymentDebitMemoApplicationItemApplyRequestType withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debitMemoItemId")
    public String debitMemoItemId;
    public PaymentDebitMemoApplicationItemApplyRequestType withDebitMemoItemId(String debitMemoItemId) {
        this.debitMemoItemId = debitMemoItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxItemId")
    public String taxItemId;
    public PaymentDebitMemoApplicationItemApplyRequestType withTaxItemId(String taxItemId) {
        this.taxItemId = taxItemId;
        return this;
    }
}