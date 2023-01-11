package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PreviewOrderChargeOverrideBilling
 * Billing information about the charge.
 * 
**/
public class PreviewOrderChargeOverrideBilling {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billCycleDay")
    public Long billCycleDay;
    public PreviewOrderChargeOverrideBilling withBillCycleDay(Long billCycleDay) {
        this.billCycleDay = billCycleDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billCycleType")
    public PreviewOrderChargeOverrideBillingBillCycleTypeEnum billCycleType;
    public PreviewOrderChargeOverrideBilling withBillCycleType(PreviewOrderChargeOverrideBillingBillCycleTypeEnum billCycleType) {
        this.billCycleType = billCycleType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingPeriod")
    public PreviewOrderChargeOverrideBillingBillingPeriodEnum billingPeriod;
    public PreviewOrderChargeOverrideBilling withBillingPeriod(PreviewOrderChargeOverrideBillingBillingPeriodEnum billingPeriod) {
        this.billingPeriod = billingPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingPeriodAlignment")
    public PreviewOrderChargeOverrideBillingBillingPeriodAlignmentEnum billingPeriodAlignment;
    public PreviewOrderChargeOverrideBilling withBillingPeriodAlignment(PreviewOrderChargeOverrideBillingBillingPeriodAlignmentEnum billingPeriodAlignment) {
        this.billingPeriodAlignment = billingPeriodAlignment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingTiming")
    public PreviewOrderChargeOverrideBillingBillingTimingEnum billingTiming;
    public PreviewOrderChargeOverrideBilling withBillingTiming(PreviewOrderChargeOverrideBillingBillingTimingEnum billingTiming) {
        this.billingTiming = billingTiming;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specificBillingPeriod")
    public Long specificBillingPeriod;
    public PreviewOrderChargeOverrideBilling withSpecificBillingPeriod(Long specificBillingPeriod) {
        this.specificBillingPeriod = specificBillingPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weeklyBillCycleDay")
    public PreviewOrderChargeOverrideBillingWeeklyBillCycleDayEnum weeklyBillCycleDay;
    public PreviewOrderChargeOverrideBilling withWeeklyBillCycleDay(PreviewOrderChargeOverrideBillingWeeklyBillCycleDayEnum weeklyBillCycleDay) {
        this.weeklyBillCycleDay = weeklyBillCycleDay;
        return this;
    }
}