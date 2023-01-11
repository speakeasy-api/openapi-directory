package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChargeOverridePricing
 * Pricing information about the charge.
 * 
**/
public class ChargeOverridePricing {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeModelData")
    public ChargeModelDataOverride chargeModelData;
    public ChargeOverridePricing withChargeModelData(ChargeModelDataOverride chargeModelData) {
        this.chargeModelData = chargeModelData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discount")
    public DiscountPricingOverride discount;
    public ChargeOverridePricing withDiscount(DiscountPricingOverride discount) {
        this.discount = discount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oneTimeFlatFee")
    public OneTimeFlatFeePricingOverride oneTimeFlatFee;
    public ChargeOverridePricing withOneTimeFlatFee(OneTimeFlatFeePricingOverride oneTimeFlatFee) {
        this.oneTimeFlatFee = oneTimeFlatFee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oneTimePerUnit")
    public OneTimePerUnitPricingOverride oneTimePerUnit;
    public ChargeOverridePricing withOneTimePerUnit(OneTimePerUnitPricingOverride oneTimePerUnit) {
        this.oneTimePerUnit = oneTimePerUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oneTimeTiered")
    public OneTimeTieredPricingOverride oneTimeTiered;
    public ChargeOverridePricing withOneTimeTiered(OneTimeTieredPricingOverride oneTimeTiered) {
        this.oneTimeTiered = oneTimeTiered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oneTimeVolume")
    public OneTimeVolumePricingOverride oneTimeVolume;
    public ChargeOverridePricing withOneTimeVolume(OneTimeVolumePricingOverride oneTimeVolume) {
        this.oneTimeVolume = oneTimeVolume;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurringFlatFee")
    public RecurringFlatFeePricingOverride recurringFlatFee;
    public ChargeOverridePricing withRecurringFlatFee(RecurringFlatFeePricingOverride recurringFlatFee) {
        this.recurringFlatFee = recurringFlatFee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurringPerUnit")
    public RecurringPerUnitPricingOverride recurringPerUnit;
    public ChargeOverridePricing withRecurringPerUnit(RecurringPerUnitPricingOverride recurringPerUnit) {
        this.recurringPerUnit = recurringPerUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurringTiered")
    public RecurringTieredPricingOverride recurringTiered;
    public ChargeOverridePricing withRecurringTiered(RecurringTieredPricingOverride recurringTiered) {
        this.recurringTiered = recurringTiered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurringVolume")
    public RecurringVolumePricingOverride recurringVolume;
    public ChargeOverridePricing withRecurringVolume(RecurringVolumePricingOverride recurringVolume) {
        this.recurringVolume = recurringVolume;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageFlatFee")
    public UsageFlatFeePricingOverride usageFlatFee;
    public ChargeOverridePricing withUsageFlatFee(UsageFlatFeePricingOverride usageFlatFee) {
        this.usageFlatFee = usageFlatFee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageOverage")
    public UsageOveragePricingOverride usageOverage;
    public ChargeOverridePricing withUsageOverage(UsageOveragePricingOverride usageOverage) {
        this.usageOverage = usageOverage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usagePerUnit")
    public UsagePerUnitPricingOverride usagePerUnit;
    public ChargeOverridePricing withUsagePerUnit(UsagePerUnitPricingOverride usagePerUnit) {
        this.usagePerUnit = usagePerUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageTiered")
    public UsageTieredPricingOverride usageTiered;
    public ChargeOverridePricing withUsageTiered(UsageTieredPricingOverride usageTiered) {
        this.usageTiered = usageTiered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageTieredWithOverage")
    public UsageTieredWithOveragePricingOverride usageTieredWithOverage;
    public ChargeOverridePricing withUsageTieredWithOverage(UsageTieredWithOveragePricingOverride usageTieredWithOverage) {
        this.usageTieredWithOverage = usageTieredWithOverage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageVolume")
    public UsageVolumePricingOverride usageVolume;
    public ChargeOverridePricing withUsageVolume(UsageVolumePricingOverride usageVolume) {
        this.usageVolume = usageVolume;
        return this;
    }
}