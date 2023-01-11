package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutSequenceSetRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditMemo")
    public CreditMemoEntityPrefix creditMemo;
    public PutSequenceSetRequest withCreditMemo(CreditMemoEntityPrefix creditMemo) {
        this.creditMemo = creditMemo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debitMemo")
    public DebitMemoEntityPrefix debitMemo;
    public PutSequenceSetRequest withDebitMemo(DebitMemoEntityPrefix debitMemo) {
        this.debitMemo = debitMemo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoice")
    public InvoiceEntityPrefix invoice;
    public PutSequenceSetRequest withInvoice(InvoiceEntityPrefix invoice) {
        this.invoice = invoice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PutSequenceSetRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payment")
    public PaymentEntityPrefix payment;
    public PutSequenceSetRequest withPayment(PaymentEntityPrefix payment) {
        this.payment = payment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refund")
    public RefundEntityPrefix refund;
    public PutSequenceSetRequest withRefund(RefundEntityPrefix refund) {
        this.refund = refund;
        return this;
    }
}