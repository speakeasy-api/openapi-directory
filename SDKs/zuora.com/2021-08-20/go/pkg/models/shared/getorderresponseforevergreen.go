package shared

type GetOrderResponseForEvergreenReasons struct {
	Code    *string `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}

type GetOrderResponseForEvergreen struct {
	Order     *OrderForEvergreen                    `json:"order,omitempty"`
	ProcessID *string                               `json:"processId,omitempty"`
	Reasons   []GetOrderResponseForEvergreenReasons `json:"reasons,omitempty"`
	Success   *bool                                 `json:"success,omitempty"`
}
