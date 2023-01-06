package shared

type SecurityHolding struct {
	ID       *string   `json:"id,omitempty"`
	Security *Security `json:"security,omitempty"`
}
