package shared

type DerivedHoldingSummaryResponse struct {
	HoldingSummary []DerivedHoldingsSummary `json:"holdingSummary,omitempty"`
	Link           *DerivedHoldingsLinks    `json:"link,omitempty"`
}
