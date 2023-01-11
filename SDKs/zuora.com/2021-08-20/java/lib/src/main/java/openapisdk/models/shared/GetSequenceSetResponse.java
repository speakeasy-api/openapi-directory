package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSequenceSetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditMemo")
    public CreditMemoEntityPrefix creditMemo;
    public GetSequenceSetResponse withCreditMemo(CreditMemoEntityPrefix creditMemo) {
        this.creditMemo = creditMemo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debitMemo")
    public DebitMemoEntityPrefix debitMemo;
    public GetSequenceSetResponse withDebitMemo(DebitMemoEntityPrefix debitMemo) {
        this.debitMemo = debitMemo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetSequenceSetResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoice")
    public InvoiceEntityPrefix invoice;
    public GetSequenceSetResponse withInvoice(InvoiceEntityPrefix invoice) {
        this.invoice = invoice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetSequenceSetResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payment")
    public PaymentEntityPrefix payment;
    public GetSequenceSetResponse withPayment(PaymentEntityPrefix payment) {
        this.payment = payment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refund")
    public RefundEntityPrefix refund;
    public GetSequenceSetResponse withRefund(RefundEntityPrefix refund) {
        this.refund = refund;
        return this;
    }
}