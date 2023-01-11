package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateOrderPricingUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeModelData")
    public ChargeModelDataOverride chargeModelData;
    public CreateOrderPricingUpdate withChargeModelData(ChargeModelDataOverride chargeModelData) {
        this.chargeModelData = chargeModelData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discount")
    public DiscountPricingUpdate discount;
    public CreateOrderPricingUpdate withDiscount(DiscountPricingUpdate discount) {
        this.discount = discount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurringFlatFee")
    public RecurringFlatFeePricingUpdate recurringFlatFee;
    public CreateOrderPricingUpdate withRecurringFlatFee(RecurringFlatFeePricingUpdate recurringFlatFee) {
        this.recurringFlatFee = recurringFlatFee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurringPerUnit")
    public RecurringPerUnitPricingUpdate recurringPerUnit;
    public CreateOrderPricingUpdate withRecurringPerUnit(RecurringPerUnitPricingUpdate recurringPerUnit) {
        this.recurringPerUnit = recurringPerUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurringTiered")
    public RecurringTieredPricingUpdate recurringTiered;
    public CreateOrderPricingUpdate withRecurringTiered(RecurringTieredPricingUpdate recurringTiered) {
        this.recurringTiered = recurringTiered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurringVolume")
    public RecurringVolumePricingUpdate recurringVolume;
    public CreateOrderPricingUpdate withRecurringVolume(RecurringVolumePricingUpdate recurringVolume) {
        this.recurringVolume = recurringVolume;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageFlatFee")
    public UsageFlatFeePricingUpdate usageFlatFee;
    public CreateOrderPricingUpdate withUsageFlatFee(UsageFlatFeePricingUpdate usageFlatFee) {
        this.usageFlatFee = usageFlatFee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageOverage")
    public UsageOveragePricingUpdate usageOverage;
    public CreateOrderPricingUpdate withUsageOverage(UsageOveragePricingUpdate usageOverage) {
        this.usageOverage = usageOverage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usagePerUnit")
    public UsagePerUnitPricingUpdate usagePerUnit;
    public CreateOrderPricingUpdate withUsagePerUnit(UsagePerUnitPricingUpdate usagePerUnit) {
        this.usagePerUnit = usagePerUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageTiered")
    public UsageTieredPricingUpdate usageTiered;
    public CreateOrderPricingUpdate withUsageTiered(UsageTieredPricingUpdate usageTiered) {
        this.usageTiered = usageTiered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageTieredWithOverage")
    public UsageTieredWithOveragePricingUpdate usageTieredWithOverage;
    public CreateOrderPricingUpdate withUsageTieredWithOverage(UsageTieredWithOveragePricingUpdate usageTieredWithOverage) {
        this.usageTieredWithOverage = usageTieredWithOverage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageVolume")
    public UsageVolumePricingUpdate usageVolume;
    public CreateOrderPricingUpdate withUsageVolume(UsageVolumePricingUpdate usageVolume) {
        this.usageVolume = usageVolume;
        return this;
    }
}