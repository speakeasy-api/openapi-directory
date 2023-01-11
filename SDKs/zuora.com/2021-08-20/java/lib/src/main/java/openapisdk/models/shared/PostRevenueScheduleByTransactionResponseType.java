package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostRevenueScheduleByTransactionResponseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revenueScheduleNumber")
    public String revenueScheduleNumber;
    public PostRevenueScheduleByTransactionResponseType withRevenueScheduleNumber(String revenueScheduleNumber) {
        this.revenueScheduleNumber = revenueScheduleNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public PostRevenueScheduleByTransactionResponseType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}