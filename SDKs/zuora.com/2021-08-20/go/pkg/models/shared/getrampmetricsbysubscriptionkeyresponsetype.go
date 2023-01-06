package shared

type GetRampMetricsBySubscriptionKeyResponseTypeReasons struct {
	Code    *string `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}

type GetRampMetricsBySubscriptionKeyResponseType struct {
	ProcessID *string                                              `json:"processId,omitempty"`
	Reasons   []GetRampMetricsBySubscriptionKeyResponseTypeReasons `json:"reasons,omitempty"`
	Success   *bool                                                `json:"success,omitempty"`
}
