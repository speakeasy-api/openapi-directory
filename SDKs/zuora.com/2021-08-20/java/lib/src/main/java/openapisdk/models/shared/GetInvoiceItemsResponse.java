package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInvoiceItemsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceItems")
    public java.util.Map<String, Object>[] invoiceItems;
    public GetInvoiceItemsResponse withInvoiceItems(java.util.Map<String, Object>[] invoiceItems) {
        this.invoiceItems = invoiceItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPage")
    public String nextPage;
    public GetInvoiceItemsResponse withNextPage(String nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetInvoiceItemsResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}