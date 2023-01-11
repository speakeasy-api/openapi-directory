package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRevenueEventDetailsType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPage")
    public String nextPage;
    public GetRevenueEventDetailsType withNextPage(String nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revenueEventDetails")
    public java.util.Map<String, Object>[] revenueEventDetails;
    public GetRevenueEventDetailsType withRevenueEventDetails(java.util.Map<String, Object>[] revenueEventDetails) {
        this.revenueEventDetails = revenueEventDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetRevenueEventDetailsType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}