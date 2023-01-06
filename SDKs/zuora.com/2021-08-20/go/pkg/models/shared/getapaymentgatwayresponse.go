package shared

type GetaPaymentGatwayResponse struct {
	ID        *string `json:"id,omitempty"`
	IsActive  *bool   `json:"isActive,omitempty"`
	IsDefault *bool   `json:"isDefault,omitempty"`
	Name      *string `json:"name,omitempty"`
	Type      *string `json:"type,omitempty"`
}
