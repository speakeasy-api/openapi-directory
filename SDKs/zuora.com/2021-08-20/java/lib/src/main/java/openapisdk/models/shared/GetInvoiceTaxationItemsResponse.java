package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInvoiceTaxationItemsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public GetInvoiceTaxItemType[] data;
    public GetInvoiceTaxationItemsResponse withData(GetInvoiceTaxItemType[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPage")
    public String nextPage;
    public GetInvoiceTaxationItemsResponse withNextPage(String nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetInvoiceTaxationItemsResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}