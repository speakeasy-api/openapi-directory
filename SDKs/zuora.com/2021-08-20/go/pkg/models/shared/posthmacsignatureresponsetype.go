package shared

type PosthmacSignatureResponseType struct {
	Signature *string `json:"signature,omitempty"`
	Success   *bool   `json:"success,omitempty"`
	Token     *string `json:"token,omitempty"`
}
