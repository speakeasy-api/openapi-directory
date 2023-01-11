package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostSequenceSetRequest {
    @JsonProperty("creditMemo")
    public CreditMemoEntityPrefix creditMemo;
    public PostSequenceSetRequest withCreditMemo(CreditMemoEntityPrefix creditMemo) {
        this.creditMemo = creditMemo;
        return this;
    }
    @JsonProperty("debitMemo")
    public DebitMemoEntityPrefix debitMemo;
    public PostSequenceSetRequest withDebitMemo(DebitMemoEntityPrefix debitMemo) {
        this.debitMemo = debitMemo;
        return this;
    }
    @JsonProperty("invoice")
    public InvoiceEntityPrefix invoice;
    public PostSequenceSetRequest withInvoice(InvoiceEntityPrefix invoice) {
        this.invoice = invoice;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PostSequenceSetRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payment")
    public PaymentEntityPrefix payment;
    public PostSequenceSetRequest withPayment(PaymentEntityPrefix payment) {
        this.payment = payment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refund")
    public RefundEntityPrefix refund;
    public PostSequenceSetRequest withRefund(RefundEntityPrefix refund) {
        this.refund = refund;
        return this;
    }
}