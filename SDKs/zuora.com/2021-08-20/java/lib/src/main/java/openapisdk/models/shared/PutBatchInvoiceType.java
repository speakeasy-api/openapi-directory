package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutBatchInvoiceType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoices")
    public java.util.Map<String, Object>[] invoices;
    public PutBatchInvoiceType withInvoices(java.util.Map<String, Object>[] invoices) {
        this.invoices = invoices;
        return this;
    }
}