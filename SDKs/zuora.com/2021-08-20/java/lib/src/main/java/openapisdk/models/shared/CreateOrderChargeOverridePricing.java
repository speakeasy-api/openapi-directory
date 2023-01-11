package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateOrderChargeOverridePricing
 * Pricing information about the charge.
 * 
**/
public class CreateOrderChargeOverridePricing {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeModelData")
    public ChargeModelDataOverride chargeModelData;
    public CreateOrderChargeOverridePricing withChargeModelData(ChargeModelDataOverride chargeModelData) {
        this.chargeModelData = chargeModelData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discount")
    public DiscountPricingOverride discount;
    public CreateOrderChargeOverridePricing withDiscount(DiscountPricingOverride discount) {
        this.discount = discount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oneTimeFlatFee")
    public OneTimeFlatFeePricingOverride oneTimeFlatFee;
    public CreateOrderChargeOverridePricing withOneTimeFlatFee(OneTimeFlatFeePricingOverride oneTimeFlatFee) {
        this.oneTimeFlatFee = oneTimeFlatFee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oneTimePerUnit")
    public OneTimePerUnitPricingOverride oneTimePerUnit;
    public CreateOrderChargeOverridePricing withOneTimePerUnit(OneTimePerUnitPricingOverride oneTimePerUnit) {
        this.oneTimePerUnit = oneTimePerUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oneTimeTiered")
    public OneTimeTieredPricingOverride oneTimeTiered;
    public CreateOrderChargeOverridePricing withOneTimeTiered(OneTimeTieredPricingOverride oneTimeTiered) {
        this.oneTimeTiered = oneTimeTiered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oneTimeVolume")
    public OneTimeVolumePricingOverride oneTimeVolume;
    public CreateOrderChargeOverridePricing withOneTimeVolume(OneTimeVolumePricingOverride oneTimeVolume) {
        this.oneTimeVolume = oneTimeVolume;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurringFlatFee")
    public RecurringFlatFeePricingOverride recurringFlatFee;
    public CreateOrderChargeOverridePricing withRecurringFlatFee(RecurringFlatFeePricingOverride recurringFlatFee) {
        this.recurringFlatFee = recurringFlatFee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurringPerUnit")
    public RecurringPerUnitPricingOverride recurringPerUnit;
    public CreateOrderChargeOverridePricing withRecurringPerUnit(RecurringPerUnitPricingOverride recurringPerUnit) {
        this.recurringPerUnit = recurringPerUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurringTiered")
    public RecurringTieredPricingOverride recurringTiered;
    public CreateOrderChargeOverridePricing withRecurringTiered(RecurringTieredPricingOverride recurringTiered) {
        this.recurringTiered = recurringTiered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurringVolume")
    public RecurringVolumePricingOverride recurringVolume;
    public CreateOrderChargeOverridePricing withRecurringVolume(RecurringVolumePricingOverride recurringVolume) {
        this.recurringVolume = recurringVolume;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageFlatFee")
    public UsageFlatFeePricingOverride usageFlatFee;
    public CreateOrderChargeOverridePricing withUsageFlatFee(UsageFlatFeePricingOverride usageFlatFee) {
        this.usageFlatFee = usageFlatFee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageOverage")
    public UsageOveragePricingOverride usageOverage;
    public CreateOrderChargeOverridePricing withUsageOverage(UsageOveragePricingOverride usageOverage) {
        this.usageOverage = usageOverage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usagePerUnit")
    public UsagePerUnitPricingOverride usagePerUnit;
    public CreateOrderChargeOverridePricing withUsagePerUnit(UsagePerUnitPricingOverride usagePerUnit) {
        this.usagePerUnit = usagePerUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageTiered")
    public UsageTieredPricingOverride usageTiered;
    public CreateOrderChargeOverridePricing withUsageTiered(UsageTieredPricingOverride usageTiered) {
        this.usageTiered = usageTiered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageTieredWithOverage")
    public UsageTieredWithOveragePricingOverride usageTieredWithOverage;
    public CreateOrderChargeOverridePricing withUsageTieredWithOverage(UsageTieredWithOveragePricingOverride usageTieredWithOverage) {
        this.usageTieredWithOverage = usageTieredWithOverage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageVolume")
    public UsageVolumePricingOverride usageVolume;
    public CreateOrderChargeOverridePricing withUsageVolume(UsageVolumePricingOverride usageVolume) {
        this.usageVolume = usageVolume;
        return this;
    }
}