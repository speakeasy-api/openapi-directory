package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ProxyCreateInvoicePayment {
    @JsonProperty("Amount")
    public Double amount;
    public ProxyCreateInvoicePayment withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("InvoiceId")
    public String invoiceId;
    public ProxyCreateInvoicePayment withInvoiceId(String invoiceId) {
        this.invoiceId = invoiceId;
        return this;
    }
    @JsonProperty("PaymentId")
    public String paymentId;
    public ProxyCreateInvoicePayment withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
}