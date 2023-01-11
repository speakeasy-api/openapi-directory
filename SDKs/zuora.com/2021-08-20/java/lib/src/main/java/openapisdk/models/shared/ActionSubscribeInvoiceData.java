package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ActionSubscribeInvoiceData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Invoice")
    public java.util.Map<String, Object> invoice;
    public ActionSubscribeInvoiceData withInvoice(java.util.Map<String, Object> invoice) {
        this.invoice = invoice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InvoiceItem")
    public java.util.Map<String, Object>[] invoiceItem;
    public ActionSubscribeInvoiceData withInvoiceItem(java.util.Map<String, Object>[] invoiceItem) {
        this.invoiceItem = invoiceItem;
        return this;
    }
}