package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountPlanCreateApplicationJsonPhonePlan
 * Phone Plan Object
**/
public class AccountPlanCreateApplicationJsonPhonePlan {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_base")
    public AccountPlanCreateApplicationJsonPhonePlanPlanBase planBase;
    public AccountPlanCreateApplicationJsonPhonePlan withPlanBase(AccountPlanCreateApplicationJsonPhonePlanPlanBase planBase) {
        this.planBase = planBase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_calling")
    public AccountPlanCreateApplicationJsonPhonePlanPlanCalling[] planCalling;
    public AccountPlanCreateApplicationJsonPhonePlan withPlanCalling(AccountPlanCreateApplicationJsonPhonePlanPlanCalling[] planCalling) {
        this.planCalling = planCalling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_number")
    public AccountPlanCreateApplicationJsonPhonePlanPlanNumber[] planNumber;
    public AccountPlanCreateApplicationJsonPhonePlan withPlanNumber(AccountPlanCreateApplicationJsonPhonePlanPlanNumber[] planNumber) {
        this.planNumber = planNumber;
        return this;
    }
}