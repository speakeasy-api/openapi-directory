package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreditMemoApplyDebitMemoItemRequestType {
    @JsonProperty("amount")
    public Double amount;
    public CreditMemoApplyDebitMemoItemRequestType withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditMemoItemId")
    public String creditMemoItemId;
    public CreditMemoApplyDebitMemoItemRequestType withCreditMemoItemId(String creditMemoItemId) {
        this.creditMemoItemId = creditMemoItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditTaxItemId")
    public String creditTaxItemId;
    public CreditMemoApplyDebitMemoItemRequestType withCreditTaxItemId(String creditTaxItemId) {
        this.creditTaxItemId = creditTaxItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debitMemoItemId")
    public String debitMemoItemId;
    public CreditMemoApplyDebitMemoItemRequestType withDebitMemoItemId(String debitMemoItemId) {
        this.debitMemoItemId = debitMemoItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxItemId")
    public String taxItemId;
    public CreditMemoApplyDebitMemoItemRequestType withTaxItemId(String taxItemId) {
        this.taxItemId = taxItemId;
        return this;
    }
}