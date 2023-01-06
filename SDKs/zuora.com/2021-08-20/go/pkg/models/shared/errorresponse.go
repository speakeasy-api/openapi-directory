package shared

type ErrorResponseReasons struct {
	Code    *string `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}

type ErrorResponse struct {
	Reasons []ErrorResponseReasons `json:"reasons,omitempty"`
}
