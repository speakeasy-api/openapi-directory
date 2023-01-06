package shared

type HoldingSecuritiesResponse struct {
	Holding []SecurityHolding `json:"holding,omitempty"`
}
