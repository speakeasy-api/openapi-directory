package shared

type GetSubscriptionTermInfoResponseTypeReasons struct {
	Code    *string `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}

type GetSubscriptionTermInfoResponseType struct {
	NextPage  *string                                      `json:"nextPage,omitempty"`
	ProcessID *string                                      `json:"processId,omitempty"`
	Reasons   []GetSubscriptionTermInfoResponseTypeReasons `json:"reasons,omitempty"`
	Success   *bool                                        `json:"success,omitempty"`
	Terms     []Term                                       `json:"terms,omitempty"`
}
