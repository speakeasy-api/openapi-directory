package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCreditMemoCollectionType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditmemos")
    public java.util.Map<String, Object>[] creditmemos;
    public GetCreditMemoCollectionType withCreditmemos(java.util.Map<String, Object>[] creditmemos) {
        this.creditmemos = creditmemos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPage")
    public String nextPage;
    public GetCreditMemoCollectionType withNextPage(String nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetCreditMemoCollectionType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}