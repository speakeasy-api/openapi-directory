package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostRevenueScheduleByChargeResponseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revenueScheduleNumber")
    public String revenueScheduleNumber;
    public PostRevenueScheduleByChargeResponseType withRevenueScheduleNumber(String revenueScheduleNumber) {
        this.revenueScheduleNumber = revenueScheduleNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public PostRevenueScheduleByChargeResponseType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}