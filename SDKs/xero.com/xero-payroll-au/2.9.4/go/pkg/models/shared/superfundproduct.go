package shared

type SuperFundProduct struct {
	ABN         *string `json:"ABN,omitempty"`
	ProductName *string `json:"ProductName,omitempty"`
	SPIN        *string `json:"SPIN,omitempty"`
	USI         *string `json:"USI,omitempty"`
}
