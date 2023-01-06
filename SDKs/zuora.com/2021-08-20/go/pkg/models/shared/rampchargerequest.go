package shared

type RampChargeRequest struct {
	ChargeNumber *string `json:"chargeNumber,omitempty"`
	UniqueToken  *string `json:"uniqueToken,omitempty"`
}
