package shared

type QueryCustomObjectRecordsResponse struct {
	Count   int64                    `json:"count"`
	Records []map[string]interface{} `json:"records"`
}
