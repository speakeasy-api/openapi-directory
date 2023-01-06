package shared

type RecurringPerUnitPricingUpdate struct {
	ListPrice *float64 `json:"listPrice,omitempty"`
	Quantity  *float64 `json:"quantity,omitempty"`
}
