package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAccountSummaryPaymentInvoiceType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appliedPaymentAmount")
    public String appliedPaymentAmount;
    public GetAccountSummaryPaymentInvoiceType withAppliedPaymentAmount(String appliedPaymentAmount) {
        this.appliedPaymentAmount = appliedPaymentAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceId")
    public String invoiceId;
    public GetAccountSummaryPaymentInvoiceType withInvoiceId(String invoiceId) {
        this.invoiceId = invoiceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceNumber")
    public String invoiceNumber;
    public GetAccountSummaryPaymentInvoiceType withInvoiceNumber(String invoiceNumber) {
        this.invoiceNumber = invoiceNumber;
        return this;
    }
}