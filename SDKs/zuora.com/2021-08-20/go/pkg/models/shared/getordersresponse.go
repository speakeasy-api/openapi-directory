package shared

type GetOrdersResponseReasons struct {
	Code    *string `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}

type GetOrdersResponse struct {
	NextPage  *string                    `json:"nextPage,omitempty"`
	Orders    []Order                    `json:"orders,omitempty"`
	ProcessID *string                    `json:"processId,omitempty"`
	Reasons   []GetOrdersResponseReasons `json:"reasons,omitempty"`
	Success   *bool                      `json:"success,omitempty"`
}
