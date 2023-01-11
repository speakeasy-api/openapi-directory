package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostInvoiceCollectResponseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountCollected")
    public String amountCollected;
    public PostInvoiceCollectResponseType withAmountCollected(String amountCollected) {
        this.amountCollected = amountCollected;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditMemos")
    public PostInvoiceCollectCreditMemosType[] creditMemos;
    public PostInvoiceCollectResponseType withCreditMemos(PostInvoiceCollectCreditMemosType[] creditMemos) {
        this.creditMemos = creditMemos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoices")
    public PostInvoiceCollectInvoicesType[] invoices;
    public PostInvoiceCollectResponseType withInvoices(PostInvoiceCollectInvoicesType[] invoices) {
        this.invoices = invoices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentId")
    public String paymentId;
    public PostInvoiceCollectResponseType withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public PostInvoiceCollectResponseType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}