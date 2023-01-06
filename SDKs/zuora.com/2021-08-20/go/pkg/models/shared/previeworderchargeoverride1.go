package shared

// PreviewOrderChargeOverridePricing1
// Pricing information about the charge.
type PreviewOrderChargeOverridePricing1 struct {
	ChargeModelData        *ChargeModelDataOverride               `json:"chargeModelData,omitempty"`
	Discount               *DiscountPricingOverride               `json:"discount,omitempty"`
	OneTimeFlatFee         *OneTimeFlatFeePricingOverride         `json:"oneTimeFlatFee,omitempty"`
	OneTimePerUnit         *OneTimePerUnitPricingOverride         `json:"oneTimePerUnit,omitempty"`
	OneTimeTiered          *OneTimeTieredPricingOverride          `json:"oneTimeTiered,omitempty"`
	OneTimeVolume          *OneTimeVolumePricingOverride          `json:"oneTimeVolume,omitempty"`
	RecurringFlatFee       *RecurringFlatFeePricingOverride       `json:"recurringFlatFee,omitempty"`
	RecurringPerUnit       *RecurringPerUnitPricingOverride       `json:"recurringPerUnit,omitempty"`
	RecurringTiered        *RecurringTieredPricingOverride1       `json:"recurringTiered,omitempty"`
	RecurringVolume        *RecurringVolumePricingOverride        `json:"recurringVolume,omitempty"`
	UsageFlatFee           *UsageFlatFeePricingOverride           `json:"usageFlatFee,omitempty"`
	UsageOverage           *UsageOveragePricingOverride           `json:"usageOverage,omitempty"`
	UsagePerUnit           *UsagePerUnitPricingOverride           `json:"usagePerUnit,omitempty"`
	UsageTiered            *UsageTieredPricingOverride            `json:"usageTiered,omitempty"`
	UsageTieredWithOverage *UsageTieredWithOveragePricingOverride `json:"usageTieredWithOverage,omitempty"`
	UsageVolume            *UsageVolumePricingOverride            `json:"usageVolume,omitempty"`
}

// PreviewOrderChargeOverride1
// Charge associated with a rate plan.
type PreviewOrderChargeOverride1 struct {
	Billing                    *PreviewOrderChargeOverrideBilling                        `json:"billing,omitempty"`
	ChargeNumber               *string                                                   `json:"chargeNumber,omitempty"`
	CustomFields               map[string]interface{}                                    `json:"customFields,omitempty"`
	Description                *string                                                   `json:"description,omitempty"`
	EndDate                    *EndConditions                                            `json:"endDate,omitempty"`
	Pricing                    *PreviewOrderChargeOverridePricing1                       `json:"pricing,omitempty"`
	ProductRatePlanChargeID    string                                                    `json:"productRatePlanChargeId"`
	RevRecCode                 *string                                                   `json:"revRecCode,omitempty"`
	RevRecTriggerCondition     *PreviewOrderChargeOverrideRevRecTriggerConditionEnum     `json:"revRecTriggerCondition,omitempty"`
	RevenueRecognitionRuleName *PreviewOrderChargeOverrideRevenueRecognitionRuleNameEnum `json:"revenueRecognitionRuleName,omitempty"`
	StartDate                  *PreviewOrderTriggerParams                                `json:"startDate,omitempty"`
	UniqueToken                *string                                                   `json:"uniqueToken,omitempty"`
}
