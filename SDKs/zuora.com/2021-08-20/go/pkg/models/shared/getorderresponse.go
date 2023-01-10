package shared

type GetOrderResponseReasons struct {
	Code    *string `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}

type GetOrderResponse struct {
	Order     *Order                    `json:"order,omitempty"`
	ProcessID *string                   `json:"processId,omitempty"`
	Reasons   []GetOrderResponseReasons `json:"reasons,omitempty"`
	Success   *bool                     `json:"success,omitempty"`
}
