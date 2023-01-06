package shared

type CobrandPublicKeyResponse struct {
	KeyAlias       *string `json:"keyAlias,omitempty"`
	KeyAsPemString *string `json:"keyAsPemString,omitempty"`
}
