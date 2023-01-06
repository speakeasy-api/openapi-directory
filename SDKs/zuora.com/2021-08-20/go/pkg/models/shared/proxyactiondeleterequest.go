package shared

type ProxyActiondeleteRequest struct {
	Ids  []string `json:"ids"`
	Type string   `json:"type"`
}
