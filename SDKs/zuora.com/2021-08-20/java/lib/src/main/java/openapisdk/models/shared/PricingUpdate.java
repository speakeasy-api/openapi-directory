package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PricingUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeModelData")
    public ChargeModelDataOverride chargeModelData;
    public PricingUpdate withChargeModelData(ChargeModelDataOverride chargeModelData) {
        this.chargeModelData = chargeModelData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discount")
    public DiscountPricingUpdate discount;
    public PricingUpdate withDiscount(DiscountPricingUpdate discount) {
        this.discount = discount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurringFlatFee")
    public RecurringFlatFeePricingUpdate recurringFlatFee;
    public PricingUpdate withRecurringFlatFee(RecurringFlatFeePricingUpdate recurringFlatFee) {
        this.recurringFlatFee = recurringFlatFee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurringPerUnit")
    public RecurringPerUnitPricingUpdate recurringPerUnit;
    public PricingUpdate withRecurringPerUnit(RecurringPerUnitPricingUpdate recurringPerUnit) {
        this.recurringPerUnit = recurringPerUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurringTiered")
    public RecurringTieredPricingUpdate recurringTiered;
    public PricingUpdate withRecurringTiered(RecurringTieredPricingUpdate recurringTiered) {
        this.recurringTiered = recurringTiered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurringVolume")
    public RecurringVolumePricingUpdate recurringVolume;
    public PricingUpdate withRecurringVolume(RecurringVolumePricingUpdate recurringVolume) {
        this.recurringVolume = recurringVolume;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageFlatFee")
    public UsageFlatFeePricingUpdate usageFlatFee;
    public PricingUpdate withUsageFlatFee(UsageFlatFeePricingUpdate usageFlatFee) {
        this.usageFlatFee = usageFlatFee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageOverage")
    public UsageOveragePricingUpdate usageOverage;
    public PricingUpdate withUsageOverage(UsageOveragePricingUpdate usageOverage) {
        this.usageOverage = usageOverage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usagePerUnit")
    public UsagePerUnitPricingUpdate usagePerUnit;
    public PricingUpdate withUsagePerUnit(UsagePerUnitPricingUpdate usagePerUnit) {
        this.usagePerUnit = usagePerUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageTiered")
    public UsageTieredPricingUpdate usageTiered;
    public PricingUpdate withUsageTiered(UsageTieredPricingUpdate usageTiered) {
        this.usageTiered = usageTiered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageTieredWithOverage")
    public UsageTieredWithOveragePricingUpdate usageTieredWithOverage;
    public PricingUpdate withUsageTieredWithOverage(UsageTieredWithOveragePricingUpdate usageTieredWithOverage) {
        this.usageTieredWithOverage = usageTieredWithOverage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageVolume")
    public UsageVolumePricingUpdate usageVolume;
    public PricingUpdate withUsageVolume(UsageVolumePricingUpdate usageVolume) {
        this.usageVolume = usageVolume;
        return this;
    }
}