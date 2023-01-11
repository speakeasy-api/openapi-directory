package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChargeOverrideForEvergreen
 * Charge associated with a rate plan.
 * 
**/
public class ChargeOverrideForEvergreen {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billing")
    public ChargeOverrideForEvergreenBilling billing;
    public ChargeOverrideForEvergreen withBilling(ChargeOverrideForEvergreenBilling billing) {
        this.billing = billing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeNumber")
    public String chargeNumber;
    public ChargeOverrideForEvergreen withChargeNumber(String chargeNumber) {
        this.chargeNumber = chargeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public java.util.Map<String, Object> customFields;
    public ChargeOverrideForEvergreen withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ChargeOverrideForEvergreen withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public EndConditions endDate;
    public ChargeOverrideForEvergreen withEndDate(EndConditions endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pricing")
    public ChargeOverrideForEvergreenPricing pricing;
    public ChargeOverrideForEvergreen withPricing(ChargeOverrideForEvergreenPricing pricing) {
        this.pricing = pricing;
        return this;
    }
    @JsonProperty("productRatePlanChargeId")
    public String productRatePlanChargeId;
    public ChargeOverrideForEvergreen withProductRatePlanChargeId(String productRatePlanChargeId) {
        this.productRatePlanChargeId = productRatePlanChargeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revRecCode")
    public String revRecCode;
    public ChargeOverrideForEvergreen withRevRecCode(String revRecCode) {
        this.revRecCode = revRecCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revRecTriggerCondition")
    public ChargeOverrideForEvergreenRevRecTriggerConditionEnum revRecTriggerCondition;
    public ChargeOverrideForEvergreen withRevRecTriggerCondition(ChargeOverrideForEvergreenRevRecTriggerConditionEnum revRecTriggerCondition) {
        this.revRecTriggerCondition = revRecTriggerCondition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revenueRecognitionRuleName")
    public ChargeOverrideForEvergreenRevenueRecognitionRuleNameEnum revenueRecognitionRuleName;
    public ChargeOverrideForEvergreen withRevenueRecognitionRuleName(ChargeOverrideForEvergreenRevenueRecognitionRuleNameEnum revenueRecognitionRuleName) {
        this.revenueRecognitionRuleName = revenueRecognitionRuleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public TriggerParams startDate;
    public ChargeOverrideForEvergreen withStartDate(TriggerParams startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uniqueToken")
    public String uniqueToken;
    public ChargeOverrideForEvergreen withUniqueToken(String uniqueToken) {
        this.uniqueToken = uniqueToken;
        return this;
    }
}