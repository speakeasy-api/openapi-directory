package shared

type APIKeyOutput struct {
	CreatedDate *string `json:"createdDate,omitempty"`
	ExpiresIn   *int64  `json:"expiresIn,omitempty"`
	Key         *string `json:"key,omitempty"`
	PublicKey   *string `json:"publicKey,omitempty"`
}
