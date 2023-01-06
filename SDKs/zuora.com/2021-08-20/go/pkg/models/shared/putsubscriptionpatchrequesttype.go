package shared

type PutSubscriptionPatchRequestTypeRatePlansCharges struct {
	ChargeID     *string                `json:"chargeId,omitempty"`
	ChargeNumber *string                `json:"chargeNumber,omitempty"`
	CustomFields map[string]interface{} `json:"customFields,omitempty"`
}

type PutSubscriptionPatchRequestTypeRatePlans struct {
	Charges      []PutSubscriptionPatchRequestTypeRatePlansCharges `json:"charges,omitempty"`
	CustomFields map[string]interface{}                            `json:"customFields,omitempty"`
	RatePlanID   string                                            `json:"ratePlanId"`
}

type PutSubscriptionPatchRequestType struct {
	CustomFields map[string]interface{}                     `json:"customFields,omitempty"`
	RatePlans    []PutSubscriptionPatchRequestTypeRatePlans `json:"ratePlans,omitempty"`
}
