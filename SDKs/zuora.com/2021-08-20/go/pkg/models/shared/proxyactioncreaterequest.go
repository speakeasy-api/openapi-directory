package shared

type ProxyActioncreateRequest struct {
	Objects []map[string]interface{} `json:"objects"`
	Type    string                   `json:"type"`
}
