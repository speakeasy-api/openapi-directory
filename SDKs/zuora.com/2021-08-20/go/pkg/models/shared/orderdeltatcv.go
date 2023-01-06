package shared

// OrderDeltaTcv
// Order Delta Tcv. This is a metric that reflects the change to the TCV on Rate Plan Charge object, or the Total Contracted Value for an Order Line Item as the result of the order
type OrderDeltaTcv struct {
	OrderLineItemID *string `json:"orderLineItemId,omitempty"`
}
