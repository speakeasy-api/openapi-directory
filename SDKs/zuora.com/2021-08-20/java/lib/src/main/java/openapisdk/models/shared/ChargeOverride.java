package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChargeOverride
 * Charge associated with a rate plan.
 * 
**/
public class ChargeOverride {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billing")
    public ChargeOverrideBilling billing;
    public ChargeOverride withBilling(ChargeOverrideBilling billing) {
        this.billing = billing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeNumber")
    public String chargeNumber;
    public ChargeOverride withChargeNumber(String chargeNumber) {
        this.chargeNumber = chargeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public java.util.Map<String, Object> customFields;
    public ChargeOverride withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ChargeOverride withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public EndConditions endDate;
    public ChargeOverride withEndDate(EndConditions endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pricing")
    public ChargeOverridePricing pricing;
    public ChargeOverride withPricing(ChargeOverridePricing pricing) {
        this.pricing = pricing;
        return this;
    }
    @JsonProperty("productRatePlanChargeId")
    public String productRatePlanChargeId;
    public ChargeOverride withProductRatePlanChargeId(String productRatePlanChargeId) {
        this.productRatePlanChargeId = productRatePlanChargeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revRecCode")
    public String revRecCode;
    public ChargeOverride withRevRecCode(String revRecCode) {
        this.revRecCode = revRecCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revRecTriggerCondition")
    public ChargeOverrideRevRecTriggerConditionEnum revRecTriggerCondition;
    public ChargeOverride withRevRecTriggerCondition(ChargeOverrideRevRecTriggerConditionEnum revRecTriggerCondition) {
        this.revRecTriggerCondition = revRecTriggerCondition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revenueRecognitionRuleName")
    public ChargeOverrideRevenueRecognitionRuleNameEnum revenueRecognitionRuleName;
    public ChargeOverride withRevenueRecognitionRuleName(ChargeOverrideRevenueRecognitionRuleNameEnum revenueRecognitionRuleName) {
        this.revenueRecognitionRuleName = revenueRecognitionRuleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public TriggerParams startDate;
    public ChargeOverride withStartDate(TriggerParams startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uniqueToken")
    public String uniqueToken;
    public ChargeOverride withUniqueToken(String uniqueToken) {
        this.uniqueToken = uniqueToken;
        return this;
    }
}