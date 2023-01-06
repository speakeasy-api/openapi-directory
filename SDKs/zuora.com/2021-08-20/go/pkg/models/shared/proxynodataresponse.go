package shared

type ProxyNoDataResponse struct {
	Done    *bool                    `json:"done,omitempty"`
	Records []map[string]interface{} `json:"records,omitempty"`
	Size    *int64                   `json:"size,omitempty"`
}
