package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountPlanAddonCreateMultipartFormData2PhonePlan
 * Phone Plan Object
**/
public class AccountPlanAddonCreateMultipartFormData2PhonePlan {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_base")
    public AccountPlanAddonCreateMultipartFormData2PhonePlanPlanBase planBase;
    public AccountPlanAddonCreateMultipartFormData2PhonePlan withPlanBase(AccountPlanAddonCreateMultipartFormData2PhonePlanPlanBase planBase) {
        this.planBase = planBase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_calling")
    public AccountPlanAddonCreateMultipartFormData2PhonePlanPlanCalling[] planCalling;
    public AccountPlanAddonCreateMultipartFormData2PhonePlan withPlanCalling(AccountPlanAddonCreateMultipartFormData2PhonePlanPlanCalling[] planCalling) {
        this.planCalling = planCalling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_number")
    public AccountPlanAddonCreateMultipartFormData2PhonePlanPlanNumber[] planNumber;
    public AccountPlanAddonCreateMultipartFormData2PhonePlan withPlanNumber(AccountPlanAddonCreateMultipartFormData2PhonePlanPlanNumber[] planNumber) {
        this.planNumber = planNumber;
        return this;
    }
}