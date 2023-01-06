package shared

type GetRampMetricsByOrderNumberResponseTypeReasons struct {
	Code    *string `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}

type GetRampMetricsByOrderNumberResponseType struct {
	ProcessID *string                                          `json:"processId,omitempty"`
	Reasons   []GetRampMetricsByOrderNumberResponseTypeReasons `json:"reasons,omitempty"`
	Success   *bool                                            `json:"success,omitempty"`
}
