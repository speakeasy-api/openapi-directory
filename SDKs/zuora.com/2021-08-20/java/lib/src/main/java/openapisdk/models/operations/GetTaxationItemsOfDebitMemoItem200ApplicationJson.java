package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTaxationItemsOfDebitMemoItem200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public java.util.Map<String, Object>[] data;
    public GetTaxationItemsOfDebitMemoItem200ApplicationJson withData(java.util.Map<String, Object>[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPage")
    public String nextPage;
    public GetTaxationItemsOfDebitMemoItem200ApplicationJson withNextPage(String nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetTaxationItemsOfDebitMemoItem200ApplicationJson withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}