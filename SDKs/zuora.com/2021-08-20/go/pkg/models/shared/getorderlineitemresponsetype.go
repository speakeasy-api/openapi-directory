package shared

type GetOrderLineItemResponseTypeReasons struct {
	Code    *string `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}

type GetOrderLineItemResponseType struct {
	OrderLineItem *OrderLineItem                        `json:"orderLineItem,omitempty"`
	ProcessID     *string                               `json:"processId,omitempty"`
	Reasons       []GetOrderLineItemResponseTypeReasons `json:"reasons,omitempty"`
	Success       *bool                                 `json:"success,omitempty"`
}
