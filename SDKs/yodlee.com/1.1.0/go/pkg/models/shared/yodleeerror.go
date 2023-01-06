package shared

type YodleeError struct {
	ErrorCode     *string `json:"errorCode,omitempty"`
	ErrorMessage  *string `json:"errorMessage,omitempty"`
	ReferenceCode *string `json:"referenceCode,omitempty"`
}
