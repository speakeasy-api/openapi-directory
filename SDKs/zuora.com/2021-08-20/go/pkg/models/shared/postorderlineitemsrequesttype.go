package shared

type PostOrderLineItemsRequestType struct {
	OrderLineItems    []PostOrderLineItemUpdateType `json:"orderLineItems,omitempty"`
	ProcessingOptions *ProcessingOptions            `json:"processingOptions,omitempty"`
}
