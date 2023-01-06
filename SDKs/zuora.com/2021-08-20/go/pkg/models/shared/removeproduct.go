package shared

// RemoveProduct
// Information about an order action of type `RemoveProduct`.
type RemoveProduct struct {
	RatePlanID  *string `json:"ratePlanId,omitempty"`
	UniqueToken *string `json:"uniqueToken,omitempty"`
}
