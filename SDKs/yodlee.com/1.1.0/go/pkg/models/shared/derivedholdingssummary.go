package shared

type DerivedHoldingsSummary struct {
	Account             []DerivedHoldingsAccount `json:"account,omitempty"`
	ClassificationType  *string                  `json:"classificationType,omitempty"`
	ClassificationValue *string                  `json:"classificationValue,omitempty"`
	Holding             []DerivedHolding         `json:"holding,omitempty"`
	Value               *Money                   `json:"value,omitempty"`
}
