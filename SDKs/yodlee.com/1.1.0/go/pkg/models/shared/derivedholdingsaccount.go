package shared

type DerivedHoldingsAccount struct {
	ID    *int64 `json:"id,omitempty"`
	Value *Money `json:"value,omitempty"`
}
