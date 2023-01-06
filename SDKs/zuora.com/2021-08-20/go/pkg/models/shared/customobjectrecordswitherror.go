package shared

type CustomObjectRecordsWithError struct {
	Code    *int64                 `json:"code,omitempty"`
	Message *string                `json:"message,omitempty"`
	Record  map[string]interface{} `json:"record,omitempty"`
}
