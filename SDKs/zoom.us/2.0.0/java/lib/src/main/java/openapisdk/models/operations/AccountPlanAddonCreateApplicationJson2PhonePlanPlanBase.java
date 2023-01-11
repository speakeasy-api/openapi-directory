package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountPlanAddonCreateApplicationJson2PhonePlanPlanBase
 * Additional phone base plans.
**/
public class AccountPlanAddonCreateApplicationJson2PhonePlanPlanBase {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callout_countries")
    public String calloutCountries;
    public AccountPlanAddonCreateApplicationJson2PhonePlanPlanBase withCalloutCountries(String calloutCountries) {
        this.calloutCountries = calloutCountries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AccountPlanAddonCreateApplicationJson2PhonePlanPlanBase withType(String type) {
        this.type = type;
        return this;
    }
}