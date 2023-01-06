package shared

type GetRampMetricsByRampNumberResponseTypeReasons struct {
	Code    *string `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}

type GetRampMetricsByRampNumberResponseType struct {
	ProcessID *string                                         `json:"processId,omitempty"`
	Reasons   []GetRampMetricsByRampNumberResponseTypeReasons `json:"reasons,omitempty"`
	Success   *bool                                           `json:"success,omitempty"`
}
