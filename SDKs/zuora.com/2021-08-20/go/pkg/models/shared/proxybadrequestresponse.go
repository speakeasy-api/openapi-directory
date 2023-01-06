package shared

type ProxyBadRequestResponseErrors struct {
	Code    *string `json:"Code,omitempty"`
	Message *string `json:"Message,omitempty"`
}

type ProxyBadRequestResponse struct {
	Errors  []ProxyBadRequestResponseErrors `json:"Errors,omitempty"`
	Success *bool                           `json:"Success,omitempty"`
}
