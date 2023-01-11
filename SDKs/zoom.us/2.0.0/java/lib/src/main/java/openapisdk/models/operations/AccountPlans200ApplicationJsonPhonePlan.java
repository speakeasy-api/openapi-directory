package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountPlans200ApplicationJsonPhonePlan
 * Phone Plan Object
**/
public class AccountPlans200ApplicationJsonPhonePlan {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_base")
    public AccountPlans200ApplicationJsonPhonePlanPlanBase planBase;
    public AccountPlans200ApplicationJsonPhonePlan withPlanBase(AccountPlans200ApplicationJsonPhonePlanPlanBase planBase) {
        this.planBase = planBase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_calling")
    public AccountPlans200ApplicationJsonPhonePlanPlanCalling[] planCalling;
    public AccountPlans200ApplicationJsonPhonePlan withPlanCalling(AccountPlans200ApplicationJsonPhonePlanPlanCalling[] planCalling) {
        this.planCalling = planCalling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_number")
    public AccountPlans200ApplicationJsonPhonePlanPlanNumber[] planNumber;
    public AccountPlans200ApplicationJsonPhonePlan withPlanNumber(AccountPlans200ApplicationJsonPhonePlanPlanNumber[] planNumber) {
        this.planNumber = planNumber;
        return this;
    }
}