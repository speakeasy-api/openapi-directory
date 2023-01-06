package shared

// OrderDeltaTcb
// Order Delta Tcb. This is a metric that reflects the change to the estimated billing on Rate Plan Charge object, or the estimated billing for an Order Line Item as the result of the order
type OrderDeltaTcb struct {
	OrderLineItemID *string `json:"orderLineItemId,omitempty"`
}
