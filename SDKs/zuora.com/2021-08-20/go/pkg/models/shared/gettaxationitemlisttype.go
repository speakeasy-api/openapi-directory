package shared

type GetTaxationItemListType struct {
	Success       *bool                    `json:"success,omitempty"`
	TaxationItems []map[string]interface{} `json:"taxationItems,omitempty"`
}
