package shared

type Error401 struct {
	Code    *int64  `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}
