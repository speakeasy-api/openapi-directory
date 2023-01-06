package shared

type ProxyCreateOrModifyResponse struct {
	ID      *string `json:"Id,omitempty"`
	Success *bool   `json:"Success,omitempty"`
}
