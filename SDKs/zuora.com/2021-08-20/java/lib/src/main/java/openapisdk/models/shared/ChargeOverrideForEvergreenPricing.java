package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChargeOverrideForEvergreenPricing
 * Pricing information about the charge.
 * 
**/
public class ChargeOverrideForEvergreenPricing {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeModelData")
    public ChargeModelDataOverride chargeModelData;
    public ChargeOverrideForEvergreenPricing withChargeModelData(ChargeModelDataOverride chargeModelData) {
        this.chargeModelData = chargeModelData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discount")
    public DiscountPricingOverride discount;
    public ChargeOverrideForEvergreenPricing withDiscount(DiscountPricingOverride discount) {
        this.discount = discount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oneTimeFlatFee")
    public OneTimeFlatFeePricingOverride oneTimeFlatFee;
    public ChargeOverrideForEvergreenPricing withOneTimeFlatFee(OneTimeFlatFeePricingOverride oneTimeFlatFee) {
        this.oneTimeFlatFee = oneTimeFlatFee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oneTimePerUnit")
    public OneTimePerUnitPricingOverride oneTimePerUnit;
    public ChargeOverrideForEvergreenPricing withOneTimePerUnit(OneTimePerUnitPricingOverride oneTimePerUnit) {
        this.oneTimePerUnit = oneTimePerUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oneTimeTiered")
    public OneTimeTieredPricingOverride oneTimeTiered;
    public ChargeOverrideForEvergreenPricing withOneTimeTiered(OneTimeTieredPricingOverride oneTimeTiered) {
        this.oneTimeTiered = oneTimeTiered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oneTimeVolume")
    public OneTimeVolumePricingOverride oneTimeVolume;
    public ChargeOverrideForEvergreenPricing withOneTimeVolume(OneTimeVolumePricingOverride oneTimeVolume) {
        this.oneTimeVolume = oneTimeVolume;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurringFlatFee")
    public RecurringFlatFeePricingOverride recurringFlatFee;
    public ChargeOverrideForEvergreenPricing withRecurringFlatFee(RecurringFlatFeePricingOverride recurringFlatFee) {
        this.recurringFlatFee = recurringFlatFee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurringPerUnit")
    public RecurringPerUnitPricingOverride recurringPerUnit;
    public ChargeOverrideForEvergreenPricing withRecurringPerUnit(RecurringPerUnitPricingOverride recurringPerUnit) {
        this.recurringPerUnit = recurringPerUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurringTiered")
    public RecurringTieredPricingOverride recurringTiered;
    public ChargeOverrideForEvergreenPricing withRecurringTiered(RecurringTieredPricingOverride recurringTiered) {
        this.recurringTiered = recurringTiered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurringVolume")
    public RecurringVolumePricingOverride recurringVolume;
    public ChargeOverrideForEvergreenPricing withRecurringVolume(RecurringVolumePricingOverride recurringVolume) {
        this.recurringVolume = recurringVolume;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageFlatFee")
    public UsageFlatFeePricingOverride usageFlatFee;
    public ChargeOverrideForEvergreenPricing withUsageFlatFee(UsageFlatFeePricingOverride usageFlatFee) {
        this.usageFlatFee = usageFlatFee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageOverage")
    public UsageOveragePricingOverride usageOverage;
    public ChargeOverrideForEvergreenPricing withUsageOverage(UsageOveragePricingOverride usageOverage) {
        this.usageOverage = usageOverage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usagePerUnit")
    public UsagePerUnitPricingOverride usagePerUnit;
    public ChargeOverrideForEvergreenPricing withUsagePerUnit(UsagePerUnitPricingOverride usagePerUnit) {
        this.usagePerUnit = usagePerUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageTiered")
    public UsageTieredPricingOverride usageTiered;
    public ChargeOverrideForEvergreenPricing withUsageTiered(UsageTieredPricingOverride usageTiered) {
        this.usageTiered = usageTiered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageTieredWithOverage")
    public UsageTieredWithOveragePricingOverride usageTieredWithOverage;
    public ChargeOverrideForEvergreenPricing withUsageTieredWithOverage(UsageTieredWithOveragePricingOverride usageTieredWithOverage) {
        this.usageTieredWithOverage = usageTieredWithOverage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageVolume")
    public UsageVolumePricingOverride usageVolume;
    public ChargeOverrideForEvergreenPricing withUsageVolume(UsageVolumePricingOverride usageVolume) {
        this.usageVolume = usageVolume;
        return this;
    }
}