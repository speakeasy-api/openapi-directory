package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreditMemoUnapplyDebitMemoItemRequestType {
    @JsonProperty("amount")
    public Double amount;
    public CreditMemoUnapplyDebitMemoItemRequestType withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditMemoItemId")
    public String creditMemoItemId;
    public CreditMemoUnapplyDebitMemoItemRequestType withCreditMemoItemId(String creditMemoItemId) {
        this.creditMemoItemId = creditMemoItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditTaxItemId")
    public String creditTaxItemId;
    public CreditMemoUnapplyDebitMemoItemRequestType withCreditTaxItemId(String creditTaxItemId) {
        this.creditTaxItemId = creditTaxItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debitMemoItemId")
    public String debitMemoItemId;
    public CreditMemoUnapplyDebitMemoItemRequestType withDebitMemoItemId(String debitMemoItemId) {
        this.debitMemoItemId = debitMemoItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxItemId")
    public String taxItemId;
    public CreditMemoUnapplyDebitMemoItemRequestType withTaxItemId(String taxItemId) {
        this.taxItemId = taxItemId;
        return this;
    }
}