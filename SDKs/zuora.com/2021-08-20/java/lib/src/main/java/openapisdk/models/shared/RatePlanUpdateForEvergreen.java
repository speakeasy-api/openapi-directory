package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RatePlanUpdateForEvergreen
 * Information about an order action of type `UpdateProduct`.
 * 
**/
public class RatePlanUpdateForEvergreen {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeUpdates")
    public ChargeUpdateForEvergreen[] chargeUpdates;
    public RatePlanUpdateForEvergreen withChargeUpdates(ChargeUpdateForEvergreen[] chargeUpdates) {
        this.chargeUpdates = chargeUpdates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public java.util.Map<String, Object> customFields;
    public RatePlanUpdateForEvergreen withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newRatePlanId")
    public String newRatePlanId;
    public RatePlanUpdateForEvergreen withNewRatePlanId(String newRatePlanId) {
        this.newRatePlanId = newRatePlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ratePlanId")
    public String ratePlanId;
    public RatePlanUpdateForEvergreen withRatePlanId(String ratePlanId) {
        this.ratePlanId = ratePlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specificUpdateDate")
    public LocalDate specificUpdateDate;
    public RatePlanUpdateForEvergreen withSpecificUpdateDate(LocalDate specificUpdateDate) {
        this.specificUpdateDate = specificUpdateDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uniqueToken")
    public String uniqueToken;
    public RatePlanUpdateForEvergreen withUniqueToken(String uniqueToken) {
        this.uniqueToken = uniqueToken;
        return this;
    }
}