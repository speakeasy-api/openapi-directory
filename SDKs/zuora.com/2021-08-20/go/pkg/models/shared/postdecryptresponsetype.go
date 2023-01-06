package shared

type PostDecryptResponseType struct {
	DecryptedSignature *string `json:"decryptedSignature,omitempty"`
	PublicKey          *string `json:"publicKey,omitempty"`
	Signature          *string `json:"signature,omitempty"`
	Success            *bool   `json:"success,omitempty"`
}
