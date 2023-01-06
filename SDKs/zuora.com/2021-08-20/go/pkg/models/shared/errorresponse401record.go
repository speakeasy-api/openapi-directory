package shared

type ErrorResponse401Record struct {
	Code    *int64     `json:"code,omitempty"`
	Details []Error401 `json:"details,omitempty"`
	Message *string    `json:"message,omitempty"`
}
