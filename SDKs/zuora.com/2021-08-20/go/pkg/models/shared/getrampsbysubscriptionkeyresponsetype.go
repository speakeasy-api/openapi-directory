package shared

type GetRampsBySubscriptionKeyResponseTypeReasons struct {
	Code    *string `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}

type GetRampsBySubscriptionKeyResponseType struct {
	ProcessID *string                                        `json:"processId,omitempty"`
	Reasons   []GetRampsBySubscriptionKeyResponseTypeReasons `json:"reasons,omitempty"`
	Success   *bool                                          `json:"success,omitempty"`
}
