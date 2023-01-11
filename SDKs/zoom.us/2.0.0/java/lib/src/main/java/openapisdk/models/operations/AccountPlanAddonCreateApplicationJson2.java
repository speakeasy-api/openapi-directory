package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AccountPlanAddonCreateApplicationJson2
 * Zoom Phone Plan Object
**/
public class AccountPlanAddonCreateApplicationJson2 {
    @JsonProperty("plan_details")
    public AccountPlanAddonCreateApplicationJson2PhonePlan planDetails;
    public AccountPlanAddonCreateApplicationJson2 withPlanDetails(AccountPlanAddonCreateApplicationJson2PhonePlan planDetails) {
        this.planDetails = planDetails;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public AccountPlanAddonCreateApplicationJson2 withType(String type) {
        this.type = type;
        return this;
    }
}