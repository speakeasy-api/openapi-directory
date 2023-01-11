package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PreviewOrderChargeOverridePricing
 * Pricing information about the charge.
 * 
**/
public class PreviewOrderChargeOverridePricing {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeModelData")
    public ChargeModelDataOverride chargeModelData;
    public PreviewOrderChargeOverridePricing withChargeModelData(ChargeModelDataOverride chargeModelData) {
        this.chargeModelData = chargeModelData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discount")
    public DiscountPricingOverride discount;
    public PreviewOrderChargeOverridePricing withDiscount(DiscountPricingOverride discount) {
        this.discount = discount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oneTimeFlatFee")
    public OneTimeFlatFeePricingOverride oneTimeFlatFee;
    public PreviewOrderChargeOverridePricing withOneTimeFlatFee(OneTimeFlatFeePricingOverride oneTimeFlatFee) {
        this.oneTimeFlatFee = oneTimeFlatFee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oneTimePerUnit")
    public OneTimePerUnitPricingOverride oneTimePerUnit;
    public PreviewOrderChargeOverridePricing withOneTimePerUnit(OneTimePerUnitPricingOverride oneTimePerUnit) {
        this.oneTimePerUnit = oneTimePerUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oneTimeTiered")
    public OneTimeTieredPricingOverride oneTimeTiered;
    public PreviewOrderChargeOverridePricing withOneTimeTiered(OneTimeTieredPricingOverride oneTimeTiered) {
        this.oneTimeTiered = oneTimeTiered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oneTimeVolume")
    public OneTimeVolumePricingOverride oneTimeVolume;
    public PreviewOrderChargeOverridePricing withOneTimeVolume(OneTimeVolumePricingOverride oneTimeVolume) {
        this.oneTimeVolume = oneTimeVolume;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurringFlatFee")
    public RecurringFlatFeePricingOverride recurringFlatFee;
    public PreviewOrderChargeOverridePricing withRecurringFlatFee(RecurringFlatFeePricingOverride recurringFlatFee) {
        this.recurringFlatFee = recurringFlatFee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurringPerUnit")
    public RecurringPerUnitPricingOverride recurringPerUnit;
    public PreviewOrderChargeOverridePricing withRecurringPerUnit(RecurringPerUnitPricingOverride recurringPerUnit) {
        this.recurringPerUnit = recurringPerUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurringTiered")
    public RecurringTieredPricingOverride recurringTiered;
    public PreviewOrderChargeOverridePricing withRecurringTiered(RecurringTieredPricingOverride recurringTiered) {
        this.recurringTiered = recurringTiered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurringVolume")
    public RecurringVolumePricingOverride recurringVolume;
    public PreviewOrderChargeOverridePricing withRecurringVolume(RecurringVolumePricingOverride recurringVolume) {
        this.recurringVolume = recurringVolume;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageFlatFee")
    public UsageFlatFeePricingOverride usageFlatFee;
    public PreviewOrderChargeOverridePricing withUsageFlatFee(UsageFlatFeePricingOverride usageFlatFee) {
        this.usageFlatFee = usageFlatFee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageOverage")
    public UsageOveragePricingOverride usageOverage;
    public PreviewOrderChargeOverridePricing withUsageOverage(UsageOveragePricingOverride usageOverage) {
        this.usageOverage = usageOverage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usagePerUnit")
    public UsagePerUnitPricingOverride usagePerUnit;
    public PreviewOrderChargeOverridePricing withUsagePerUnit(UsagePerUnitPricingOverride usagePerUnit) {
        this.usagePerUnit = usagePerUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageTiered")
    public UsageTieredPricingOverride usageTiered;
    public PreviewOrderChargeOverridePricing withUsageTiered(UsageTieredPricingOverride usageTiered) {
        this.usageTiered = usageTiered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageTieredWithOverage")
    public UsageTieredWithOveragePricingOverride usageTieredWithOverage;
    public PreviewOrderChargeOverridePricing withUsageTieredWithOverage(UsageTieredWithOveragePricingOverride usageTieredWithOverage) {
        this.usageTieredWithOverage = usageTieredWithOverage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageVolume")
    public UsageVolumePricingOverride usageVolume;
    public PreviewOrderChargeOverridePricing withUsageVolume(UsageVolumePricingOverride usageVolume) {
        this.usageVolume = usageVolume;
        return this;
    }
}