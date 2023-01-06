package shared

type ChargeModelDataOverrideChargeModelConfiguration struct {
	CustomFieldPerUnitRate *string `json:"customFieldPerUnitRate,omitempty"`
	CustomFieldTotalAmount *string `json:"customFieldTotalAmount,omitempty"`
	Formula                *string `json:"formula,omitempty"`
}

// ChargeModelDataOverride
// Container for charge model configuration data.
//
// **Note**: This field is only available if you have the High Water Mark, Pre-Rated Pricing, or Multi-Attribute Pricing charge models enabled. The charge models are available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information.
type ChargeModelDataOverride struct {
	ChargeModelConfiguration *ChargeModelDataOverrideChargeModelConfiguration `json:"chargeModelConfiguration,omitempty"`
	Tiers                    []ChargeTier                                     `json:"tiers,omitempty"`
}
