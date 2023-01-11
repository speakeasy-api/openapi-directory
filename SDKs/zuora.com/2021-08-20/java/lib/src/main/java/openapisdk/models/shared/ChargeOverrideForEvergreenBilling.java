package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChargeOverrideForEvergreenBilling
 * Billing information about the charge.
 * 
**/
public class ChargeOverrideForEvergreenBilling {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billCycleDay")
    public Long billCycleDay;
    public ChargeOverrideForEvergreenBilling withBillCycleDay(Long billCycleDay) {
        this.billCycleDay = billCycleDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billCycleType")
    public ChargeOverrideForEvergreenBillingBillCycleTypeEnum billCycleType;
    public ChargeOverrideForEvergreenBilling withBillCycleType(ChargeOverrideForEvergreenBillingBillCycleTypeEnum billCycleType) {
        this.billCycleType = billCycleType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingPeriod")
    public ChargeOverrideForEvergreenBillingBillingPeriodEnum billingPeriod;
    public ChargeOverrideForEvergreenBilling withBillingPeriod(ChargeOverrideForEvergreenBillingBillingPeriodEnum billingPeriod) {
        this.billingPeriod = billingPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingPeriodAlignment")
    public ChargeOverrideForEvergreenBillingBillingPeriodAlignmentEnum billingPeriodAlignment;
    public ChargeOverrideForEvergreenBilling withBillingPeriodAlignment(ChargeOverrideForEvergreenBillingBillingPeriodAlignmentEnum billingPeriodAlignment) {
        this.billingPeriodAlignment = billingPeriodAlignment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingTiming")
    public ChargeOverrideForEvergreenBillingBillingTimingEnum billingTiming;
    public ChargeOverrideForEvergreenBilling withBillingTiming(ChargeOverrideForEvergreenBillingBillingTimingEnum billingTiming) {
        this.billingTiming = billingTiming;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specificBillingPeriod")
    public Long specificBillingPeriod;
    public ChargeOverrideForEvergreenBilling withSpecificBillingPeriod(Long specificBillingPeriod) {
        this.specificBillingPeriod = specificBillingPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weeklyBillCycleDay")
    public ChargeOverrideForEvergreenBillingWeeklyBillCycleDayEnum weeklyBillCycleDay;
    public ChargeOverrideForEvergreenBilling withWeeklyBillCycleDay(ChargeOverrideForEvergreenBillingWeeklyBillCycleDayEnum weeklyBillCycleDay) {
        this.weeklyBillCycleDay = weeklyBillCycleDay;
        return this;
    }
}