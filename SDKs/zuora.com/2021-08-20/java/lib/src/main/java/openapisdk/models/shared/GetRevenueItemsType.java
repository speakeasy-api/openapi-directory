package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRevenueItemsType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPage")
    public String nextPage;
    public GetRevenueItemsType withNextPage(String nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revenueItems")
    public java.util.Map<String, Object>[] revenueItems;
    public GetRevenueItemsType withRevenueItems(java.util.Map<String, Object>[] revenueItems) {
        this.revenueItems = revenueItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetRevenueItemsType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}