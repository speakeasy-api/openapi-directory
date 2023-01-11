package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutRevenueScheduleResponseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revenueEventNumber")
    public String revenueEventNumber;
    public PutRevenueScheduleResponseType withRevenueEventNumber(String revenueEventNumber) {
        this.revenueEventNumber = revenueEventNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public PutRevenueScheduleResponseType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}