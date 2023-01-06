package shared

type PostrsaSignatureResponseType struct {
	Key       *string `json:"key,omitempty"`
	Signature *string `json:"signature,omitempty"`
	Success   *bool   `json:"success,omitempty"`
	TenantID  *string `json:"tenantId,omitempty"`
	Token     *string `json:"token,omitempty"`
}
