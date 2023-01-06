package shared

type PostCustomObjectRecordsRequest struct {
	AllowPartialSuccess *bool                    `json:"allowPartialSuccess,omitempty"`
	Records             []map[string]interface{} `json:"records"`
}
