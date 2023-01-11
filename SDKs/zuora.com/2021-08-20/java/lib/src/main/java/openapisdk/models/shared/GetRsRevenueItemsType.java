package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRsRevenueItemsType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPage")
    public String nextPage;
    public GetRsRevenueItemsType withNextPage(String nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revenueItems")
    public java.util.Map<String, Object>[] revenueItems;
    public GetRsRevenueItemsType withRevenueItems(java.util.Map<String, Object>[] revenueItems) {
        this.revenueItems = revenueItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetRsRevenueItemsType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}