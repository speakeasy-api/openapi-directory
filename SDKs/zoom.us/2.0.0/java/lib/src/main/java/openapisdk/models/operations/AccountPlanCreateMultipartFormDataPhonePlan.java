package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountPlanCreateMultipartFormDataPhonePlan
 * Phone Plan Object
**/
public class AccountPlanCreateMultipartFormDataPhonePlan {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_base")
    public AccountPlanCreateMultipartFormDataPhonePlanPlanBase planBase;
    public AccountPlanCreateMultipartFormDataPhonePlan withPlanBase(AccountPlanCreateMultipartFormDataPhonePlanPlanBase planBase) {
        this.planBase = planBase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_calling")
    public AccountPlanCreateMultipartFormDataPhonePlanPlanCalling[] planCalling;
    public AccountPlanCreateMultipartFormDataPhonePlan withPlanCalling(AccountPlanCreateMultipartFormDataPhonePlanPlanCalling[] planCalling) {
        this.planCalling = planCalling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_number")
    public AccountPlanCreateMultipartFormDataPhonePlanPlanNumber[] planNumber;
    public AccountPlanCreateMultipartFormDataPhonePlan withPlanNumber(AccountPlanCreateMultipartFormDataPhonePlanPlanNumber[] planNumber) {
        this.planNumber = planNumber;
        return this;
    }
}