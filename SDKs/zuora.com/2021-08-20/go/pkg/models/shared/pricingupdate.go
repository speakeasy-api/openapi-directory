package shared

type PricingUpdate struct {
	ChargeModelData        *ChargeModelDataOverride             `json:"chargeModelData,omitempty"`
	Discount               *DiscountPricingUpdate               `json:"discount,omitempty"`
	RecurringFlatFee       *RecurringFlatFeePricingUpdate       `json:"recurringFlatFee,omitempty"`
	RecurringPerUnit       *RecurringPerUnitPricingUpdate       `json:"recurringPerUnit,omitempty"`
	RecurringTiered        *RecurringTieredPricingUpdate        `json:"recurringTiered,omitempty"`
	RecurringVolume        *RecurringVolumePricingUpdate        `json:"recurringVolume,omitempty"`
	UsageFlatFee           *UsageFlatFeePricingUpdate           `json:"usageFlatFee,omitempty"`
	UsageOverage           *UsageOveragePricingUpdate           `json:"usageOverage,omitempty"`
	UsagePerUnit           *UsagePerUnitPricingUpdate           `json:"usagePerUnit,omitempty"`
	UsageTiered            *UsageTieredPricingUpdate            `json:"usageTiered,omitempty"`
	UsageTieredWithOverage *UsageTieredWithOveragePricingUpdate `json:"usageTieredWithOverage,omitempty"`
	UsageVolume            *UsageVolumePricingUpdate            `json:"usageVolume,omitempty"`
}
