package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PricingUpdateForEvergreen {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeModelData")
    public ChargeModelDataOverride chargeModelData;
    public PricingUpdateForEvergreen withChargeModelData(ChargeModelDataOverride chargeModelData) {
        this.chargeModelData = chargeModelData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discount")
    public DiscountPricingUpdate discount;
    public PricingUpdateForEvergreen withDiscount(DiscountPricingUpdate discount) {
        this.discount = discount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurringFlatFee")
    public RecurringFlatFeePricingUpdate recurringFlatFee;
    public PricingUpdateForEvergreen withRecurringFlatFee(RecurringFlatFeePricingUpdate recurringFlatFee) {
        this.recurringFlatFee = recurringFlatFee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurringPerUnit")
    public RecurringPerUnitPricingUpdate recurringPerUnit;
    public PricingUpdateForEvergreen withRecurringPerUnit(RecurringPerUnitPricingUpdate recurringPerUnit) {
        this.recurringPerUnit = recurringPerUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurringTiered")
    public RecurringTieredPricingUpdate recurringTiered;
    public PricingUpdateForEvergreen withRecurringTiered(RecurringTieredPricingUpdate recurringTiered) {
        this.recurringTiered = recurringTiered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurringVolume")
    public RecurringVolumePricingUpdate recurringVolume;
    public PricingUpdateForEvergreen withRecurringVolume(RecurringVolumePricingUpdate recurringVolume) {
        this.recurringVolume = recurringVolume;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageFlatFee")
    public UsageFlatFeePricingUpdate usageFlatFee;
    public PricingUpdateForEvergreen withUsageFlatFee(UsageFlatFeePricingUpdate usageFlatFee) {
        this.usageFlatFee = usageFlatFee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageOverage")
    public UsageOveragePricingUpdate usageOverage;
    public PricingUpdateForEvergreen withUsageOverage(UsageOveragePricingUpdate usageOverage) {
        this.usageOverage = usageOverage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usagePerUnit")
    public UsagePerUnitPricingUpdate usagePerUnit;
    public PricingUpdateForEvergreen withUsagePerUnit(UsagePerUnitPricingUpdate usagePerUnit) {
        this.usagePerUnit = usagePerUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageTiered")
    public UsageTieredPricingUpdate usageTiered;
    public PricingUpdateForEvergreen withUsageTiered(UsageTieredPricingUpdate usageTiered) {
        this.usageTiered = usageTiered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageTieredWithOverage")
    public UsageTieredWithOveragePricingUpdate usageTieredWithOverage;
    public PricingUpdateForEvergreen withUsageTieredWithOverage(UsageTieredWithOveragePricingUpdate usageTieredWithOverage) {
        this.usageTieredWithOverage = usageTieredWithOverage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageVolume")
    public UsageVolumePricingUpdate usageVolume;
    public PricingUpdateForEvergreen withUsageVolume(UsageVolumePricingUpdate usageVolume) {
        this.usageVolume = usageVolume;
        return this;
    }
}