package shared

type PutOrderLineItemResponseTypeReasons struct {
	Code    *string `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}

type PutOrderLineItemResponseType struct {
	ProcessID *string                               `json:"processId,omitempty"`
	Reasons   []PutOrderLineItemResponseTypeReasons `json:"reasons,omitempty"`
	Success   *bool                                 `json:"success,omitempty"`
}
