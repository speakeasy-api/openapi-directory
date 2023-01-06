package shared

type TokenResponse struct {
	AccessToken *string  `json:"access_token,omitempty"`
	ExpiresIn   *float64 `json:"expires_in,omitempty"`
	Jti         *string  `json:"jti,omitempty"`
	Scope       *string  `json:"scope,omitempty"`
	TokenType   *string  `json:"token_type,omitempty"`
}
