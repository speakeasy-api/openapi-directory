package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountPlanAddonCreateApplicationJson2PhonePlan
 * Phone Plan Object
**/
public class AccountPlanAddonCreateApplicationJson2PhonePlan {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_base")
    public AccountPlanAddonCreateApplicationJson2PhonePlanPlanBase planBase;
    public AccountPlanAddonCreateApplicationJson2PhonePlan withPlanBase(AccountPlanAddonCreateApplicationJson2PhonePlanPlanBase planBase) {
        this.planBase = planBase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_calling")
    public AccountPlanAddonCreateApplicationJson2PhonePlanPlanCalling[] planCalling;
    public AccountPlanAddonCreateApplicationJson2PhonePlan withPlanCalling(AccountPlanAddonCreateApplicationJson2PhonePlanPlanCalling[] planCalling) {
        this.planCalling = planCalling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_number")
    public AccountPlanAddonCreateApplicationJson2PhonePlanPlanNumber[] planNumber;
    public AccountPlanAddonCreateApplicationJson2PhonePlan withPlanNumber(AccountPlanAddonCreateApplicationJson2PhonePlanPlanNumber[] planNumber) {
        this.planNumber = planNumber;
        return this;
    }
}