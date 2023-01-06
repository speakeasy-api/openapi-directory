package shared

type ProxyActionamendRequest struct {
	Requests []AmendRequest `json:"requests,omitempty"`
}
