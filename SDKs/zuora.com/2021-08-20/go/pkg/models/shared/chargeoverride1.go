package shared

// ChargeOverridePricing1
// Pricing information about the charge.
type ChargeOverridePricing1 struct {
	ChargeModelData        *ChargeModelDataOverride               `json:"chargeModelData,omitempty"`
	Discount               *DiscountPricingOverride               `json:"discount,omitempty"`
	OneTimeFlatFee         *OneTimeFlatFeePricingOverride         `json:"oneTimeFlatFee,omitempty"`
	OneTimePerUnit         *OneTimePerUnitPricingOverride         `json:"oneTimePerUnit,omitempty"`
	OneTimeTiered          *OneTimeTieredPricingOverride          `json:"oneTimeTiered,omitempty"`
	OneTimeVolume          *OneTimeVolumePricingOverride          `json:"oneTimeVolume,omitempty"`
	RecurringFlatFee       *RecurringFlatFeePricingOverride       `json:"recurringFlatFee,omitempty"`
	RecurringPerUnit       *RecurringPerUnitPricingOverride       `json:"recurringPerUnit,omitempty"`
	RecurringTiered        *RecurringTieredPricingOverride        `json:"recurringTiered,omitempty"`
	RecurringVolume        *RecurringVolumePricingOverride        `json:"recurringVolume,omitempty"`
	UsageFlatFee           *UsageFlatFeePricingOverride           `json:"usageFlatFee,omitempty"`
	UsageOverage           *UsageOveragePricingOverride           `json:"usageOverage,omitempty"`
	UsagePerUnit           *UsagePerUnitPricingOverride           `json:"usagePerUnit,omitempty"`
	UsageTiered            *UsageTieredPricingOverride1           `json:"usageTiered,omitempty"`
	UsageTieredWithOverage *UsageTieredWithOveragePricingOverride `json:"usageTieredWithOverage,omitempty"`
	UsageVolume            *UsageVolumePricingOverride            `json:"usageVolume,omitempty"`
}

// ChargeOverride1
// Charge associated with a rate plan.
type ChargeOverride1 struct {
	Billing                    *ChargeOverrideBilling                        `json:"billing,omitempty"`
	ChargeNumber               *string                                       `json:"chargeNumber,omitempty"`
	CustomFields               map[string]interface{}                        `json:"customFields,omitempty"`
	Description                *string                                       `json:"description,omitempty"`
	EndDate                    *EndConditions                                `json:"endDate,omitempty"`
	Pricing                    *ChargeOverridePricing1                       `json:"pricing,omitempty"`
	ProductRatePlanChargeID    string                                        `json:"productRatePlanChargeId"`
	RevRecCode                 *string                                       `json:"revRecCode,omitempty"`
	RevRecTriggerCondition     *ChargeOverrideRevRecTriggerConditionEnum     `json:"revRecTriggerCondition,omitempty"`
	RevenueRecognitionRuleName *ChargeOverrideRevenueRecognitionRuleNameEnum `json:"revenueRecognitionRuleName,omitempty"`
	StartDate                  *TriggerParams                                `json:"startDate,omitempty"`
	UniqueToken                *string                                       `json:"uniqueToken,omitempty"`
}
