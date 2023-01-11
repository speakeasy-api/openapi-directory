package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountPlanCreate201ApplicationJsonPhonePlan
 * Phone Plan Object
**/
public class AccountPlanCreate201ApplicationJsonPhonePlan {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_base")
    public AccountPlanCreate201ApplicationJsonPhonePlanPlanBase planBase;
    public AccountPlanCreate201ApplicationJsonPhonePlan withPlanBase(AccountPlanCreate201ApplicationJsonPhonePlanPlanBase planBase) {
        this.planBase = planBase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_calling")
    public AccountPlanCreate201ApplicationJsonPhonePlanPlanCalling[] planCalling;
    public AccountPlanCreate201ApplicationJsonPhonePlan withPlanCalling(AccountPlanCreate201ApplicationJsonPhonePlanPlanCalling[] planCalling) {
        this.planCalling = planCalling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_number")
    public AccountPlanCreate201ApplicationJsonPhonePlanPlanNumber[] planNumber;
    public AccountPlanCreate201ApplicationJsonPhonePlan withPlanNumber(AccountPlanCreate201ApplicationJsonPhonePlanPlanNumber[] planNumber) {
        this.planNumber = planNumber;
        return this;
    }
}