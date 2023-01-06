package shared

type PostDecryptionType struct {
	Method    string `json:"method"`
	PublicKey string `json:"publicKey"`
	Signature string `json:"signature"`
}
