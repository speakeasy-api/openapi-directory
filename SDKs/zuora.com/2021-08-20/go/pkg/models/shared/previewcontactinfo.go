package shared

type PreviewContactInfo struct {
	City       *string `json:"city,omitempty"`
	Country    *string `json:"country,omitempty"`
	County     *string `json:"county,omitempty"`
	PostalCode *string `json:"postalCode,omitempty"`
	State      *string `json:"state,omitempty"`
	TaxRegion  *string `json:"taxRegion,omitempty"`
}
