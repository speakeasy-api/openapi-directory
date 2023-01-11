package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChargeOverrideBilling
 * Billing information about the charge.
 * 
**/
public class ChargeOverrideBilling {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billCycleDay")
    public Long billCycleDay;
    public ChargeOverrideBilling withBillCycleDay(Long billCycleDay) {
        this.billCycleDay = billCycleDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billCycleType")
    public ChargeOverrideBillingBillCycleTypeEnum billCycleType;
    public ChargeOverrideBilling withBillCycleType(ChargeOverrideBillingBillCycleTypeEnum billCycleType) {
        this.billCycleType = billCycleType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingPeriod")
    public ChargeOverrideBillingBillingPeriodEnum billingPeriod;
    public ChargeOverrideBilling withBillingPeriod(ChargeOverrideBillingBillingPeriodEnum billingPeriod) {
        this.billingPeriod = billingPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingPeriodAlignment")
    public ChargeOverrideBillingBillingPeriodAlignmentEnum billingPeriodAlignment;
    public ChargeOverrideBilling withBillingPeriodAlignment(ChargeOverrideBillingBillingPeriodAlignmentEnum billingPeriodAlignment) {
        this.billingPeriodAlignment = billingPeriodAlignment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingTiming")
    public ChargeOverrideBillingBillingTimingEnum billingTiming;
    public ChargeOverrideBilling withBillingTiming(ChargeOverrideBillingBillingTimingEnum billingTiming) {
        this.billingTiming = billingTiming;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specificBillingPeriod")
    public Long specificBillingPeriod;
    public ChargeOverrideBilling withSpecificBillingPeriod(Long specificBillingPeriod) {
        this.specificBillingPeriod = specificBillingPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weeklyBillCycleDay")
    public ChargeOverrideBillingWeeklyBillCycleDayEnum weeklyBillCycleDay;
    public ChargeOverrideBilling withWeeklyBillCycleDay(ChargeOverrideBillingWeeklyBillCycleDayEnum weeklyBillCycleDay) {
        this.weeklyBillCycleDay = weeklyBillCycleDay;
        return this;
    }
}