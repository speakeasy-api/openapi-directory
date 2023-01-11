package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PreviewOrderChargeOverride
 * Charge associated with a rate plan.
 * 
**/
public class PreviewOrderChargeOverride {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billing")
    public PreviewOrderChargeOverrideBilling billing;
    public PreviewOrderChargeOverride withBilling(PreviewOrderChargeOverrideBilling billing) {
        this.billing = billing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeNumber")
    public String chargeNumber;
    public PreviewOrderChargeOverride withChargeNumber(String chargeNumber) {
        this.chargeNumber = chargeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public java.util.Map<String, Object> customFields;
    public PreviewOrderChargeOverride withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PreviewOrderChargeOverride withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public EndConditions endDate;
    public PreviewOrderChargeOverride withEndDate(EndConditions endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pricing")
    public PreviewOrderChargeOverridePricing pricing;
    public PreviewOrderChargeOverride withPricing(PreviewOrderChargeOverridePricing pricing) {
        this.pricing = pricing;
        return this;
    }
    @JsonProperty("productRatePlanChargeId")
    public String productRatePlanChargeId;
    public PreviewOrderChargeOverride withProductRatePlanChargeId(String productRatePlanChargeId) {
        this.productRatePlanChargeId = productRatePlanChargeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revRecCode")
    public String revRecCode;
    public PreviewOrderChargeOverride withRevRecCode(String revRecCode) {
        this.revRecCode = revRecCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revRecTriggerCondition")
    public PreviewOrderChargeOverrideRevRecTriggerConditionEnum revRecTriggerCondition;
    public PreviewOrderChargeOverride withRevRecTriggerCondition(PreviewOrderChargeOverrideRevRecTriggerConditionEnum revRecTriggerCondition) {
        this.revRecTriggerCondition = revRecTriggerCondition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revenueRecognitionRuleName")
    public PreviewOrderChargeOverrideRevenueRecognitionRuleNameEnum revenueRecognitionRuleName;
    public PreviewOrderChargeOverride withRevenueRecognitionRuleName(PreviewOrderChargeOverrideRevenueRecognitionRuleNameEnum revenueRecognitionRuleName) {
        this.revenueRecognitionRuleName = revenueRecognitionRuleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public PreviewOrderTriggerParams startDate;
    public PreviewOrderChargeOverride withStartDate(PreviewOrderTriggerParams startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uniqueToken")
    public String uniqueToken;
    public PreviewOrderChargeOverride withUniqueToken(String uniqueToken) {
        this.uniqueToken = uniqueToken;
        return this;
    }
}