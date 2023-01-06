package shared

// PreviewAccountInfo
// Information about the account that will own the order.
type PreviewAccountInfo struct {
	BillCycleDay  int64                  `json:"billCycleDay"`
	Currency      string                 `json:"currency"`
	CustomFields  map[string]interface{} `json:"customFields,omitempty"`
	SoldToContact *PreviewContactInfo    `json:"soldToContact,omitempty"`
	TaxInfo       *TaxInfo               `json:"taxInfo,omitempty"`
}
