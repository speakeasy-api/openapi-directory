package shared

type ProxyActionupdateRequest struct {
	Objects []map[string]interface{} `json:"objects"`
	Type    string                   `json:"type"`
}
