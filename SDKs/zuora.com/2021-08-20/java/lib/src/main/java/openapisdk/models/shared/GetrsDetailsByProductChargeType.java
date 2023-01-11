package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetrsDetailsByProductChargeType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPage")
    public String nextPage;
    public GetrsDetailsByProductChargeType withNextPage(String nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revenueSchedules")
    public java.util.Map<String, Object>[] revenueSchedules;
    public GetrsDetailsByProductChargeType withRevenueSchedules(java.util.Map<String, Object>[] revenueSchedules) {
        this.revenueSchedules = revenueSchedules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetrsDetailsByProductChargeType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}