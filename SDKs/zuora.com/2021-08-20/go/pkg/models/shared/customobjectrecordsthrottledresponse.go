package shared

type CustomObjectRecordsThrottledResponse struct {
	Code    *int64                         `json:"code,omitempty"`
	Details []CustomObjectRecordsWithError `json:"details,omitempty"`
	Message *string                        `json:"message,omitempty"`
}
