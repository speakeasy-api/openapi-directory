package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LeaveApplications {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LeaveApplications")
    public LeaveApplication[] leaveApplications;
    public LeaveApplications withLeaveApplications(LeaveApplication[] leaveApplications) {
        this.leaveApplications = leaveApplications;
        return this;
    }
}