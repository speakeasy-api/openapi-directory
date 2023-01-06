package shared

type AccessTokens struct {
	AppID *string `json:"appId,omitempty"`
	URL   *string `json:"url,omitempty"`
	Value *string `json:"value,omitempty"`
}
