package shared

type CommonReasonsErrorResponseReasons struct {
	Code    *string `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}

type CommonReasonsErrorResponse struct {
	Reasons []CommonReasonsErrorResponseReasons `json:"reasons,omitempty"`
}
