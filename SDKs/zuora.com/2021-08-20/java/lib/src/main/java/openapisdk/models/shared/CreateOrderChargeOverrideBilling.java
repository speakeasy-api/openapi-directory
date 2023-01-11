package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateOrderChargeOverrideBilling
 * Billing information about the charge.
 * 
**/
public class CreateOrderChargeOverrideBilling {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billCycleDay")
    public Long billCycleDay;
    public CreateOrderChargeOverrideBilling withBillCycleDay(Long billCycleDay) {
        this.billCycleDay = billCycleDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billCycleType")
    public CreateOrderChargeOverrideBillingBillCycleTypeEnum billCycleType;
    public CreateOrderChargeOverrideBilling withBillCycleType(CreateOrderChargeOverrideBillingBillCycleTypeEnum billCycleType) {
        this.billCycleType = billCycleType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingPeriod")
    public CreateOrderChargeOverrideBillingBillingPeriodEnum billingPeriod;
    public CreateOrderChargeOverrideBilling withBillingPeriod(CreateOrderChargeOverrideBillingBillingPeriodEnum billingPeriod) {
        this.billingPeriod = billingPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingPeriodAlignment")
    public CreateOrderChargeOverrideBillingBillingPeriodAlignmentEnum billingPeriodAlignment;
    public CreateOrderChargeOverrideBilling withBillingPeriodAlignment(CreateOrderChargeOverrideBillingBillingPeriodAlignmentEnum billingPeriodAlignment) {
        this.billingPeriodAlignment = billingPeriodAlignment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingTiming")
    public CreateOrderChargeOverrideBillingBillingTimingEnum billingTiming;
    public CreateOrderChargeOverrideBilling withBillingTiming(CreateOrderChargeOverrideBillingBillingTimingEnum billingTiming) {
        this.billingTiming = billingTiming;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specificBillingPeriod")
    public Long specificBillingPeriod;
    public CreateOrderChargeOverrideBilling withSpecificBillingPeriod(Long specificBillingPeriod) {
        this.specificBillingPeriod = specificBillingPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weeklyBillCycleDay")
    public CreateOrderChargeOverrideBillingWeeklyBillCycleDayEnum weeklyBillCycleDay;
    public CreateOrderChargeOverrideBilling withWeeklyBillCycleDay(CreateOrderChargeOverrideBillingWeeklyBillCycleDayEnum weeklyBillCycleDay) {
        this.weeklyBillCycleDay = weeklyBillCycleDay;
        return this;
    }
}