package shared

type EvaluateAddressResponse struct {
	Address        []AccountAddress `json:"address,omitempty"`
	IsValidAddress *bool            `json:"isValidAddress,omitempty"`
}
