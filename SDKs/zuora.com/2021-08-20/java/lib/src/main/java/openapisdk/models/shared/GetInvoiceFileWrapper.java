package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInvoiceFileWrapper {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoices")
    public java.util.Map<String, Object>[] invoices;
    public GetInvoiceFileWrapper withInvoices(java.util.Map<String, Object>[] invoices) {
        this.invoices = invoices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPage")
    public String nextPage;
    public GetInvoiceFileWrapper withNextPage(String nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetInvoiceFileWrapper withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}