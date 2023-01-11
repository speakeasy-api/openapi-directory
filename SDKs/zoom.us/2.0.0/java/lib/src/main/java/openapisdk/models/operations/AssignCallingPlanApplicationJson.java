package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssignCallingPlanApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calling_plans")
    public AssignCallingPlanApplicationJsonCallingPlans[] callingPlans;
    public AssignCallingPlanApplicationJson withCallingPlans(AssignCallingPlanApplicationJsonCallingPlans[] callingPlans) {
        this.callingPlans = callingPlans;
        return this;
    }
}