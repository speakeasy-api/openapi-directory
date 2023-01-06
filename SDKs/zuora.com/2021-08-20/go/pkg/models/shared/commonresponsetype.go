package shared

type CommonResponseTypeReasons struct {
	Code    *string `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}

type CommonResponseType struct {
	ProcessID *string                     `json:"processId,omitempty"`
	Reasons   []CommonResponseTypeReasons `json:"reasons,omitempty"`
	Success   *bool                       `json:"success,omitempty"`
}
