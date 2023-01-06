package shared

type ClientCredentialToken struct {
	AccessToken *string `json:"accessToken,omitempty"`
	ExpiresIn   *int32  `json:"expiresIn,omitempty"`
	IssuedAt    *string `json:"issuedAt,omitempty"`
}
