package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDebitMemoItemCollectionType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public java.util.Map<String, Object>[] items;
    public GetDebitMemoItemCollectionType withItems(java.util.Map<String, Object>[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPage")
    public String nextPage;
    public GetDebitMemoItemCollectionType withNextPage(String nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetDebitMemoItemCollectionType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}