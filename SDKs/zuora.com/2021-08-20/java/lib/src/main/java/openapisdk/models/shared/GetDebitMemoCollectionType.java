package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDebitMemoCollectionType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debitmemos")
    public java.util.Map<String, Object>[] debitmemos;
    public GetDebitMemoCollectionType withDebitmemos(java.util.Map<String, Object>[] debitmemos) {
        this.debitmemos = debitmemos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPage")
    public String nextPage;
    public GetDebitMemoCollectionType withNextPage(String nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetDebitMemoCollectionType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}