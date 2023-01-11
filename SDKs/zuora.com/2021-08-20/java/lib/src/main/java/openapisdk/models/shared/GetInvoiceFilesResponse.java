package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInvoiceFilesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceFiles")
    public InvoiceFile[] invoiceFiles;
    public GetInvoiceFilesResponse withInvoiceFiles(InvoiceFile[] invoiceFiles) {
        this.invoiceFiles = invoiceFiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPage")
    public String nextPage;
    public GetInvoiceFilesResponse withNextPage(String nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetInvoiceFilesResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}