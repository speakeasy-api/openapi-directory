package shared

type PostTaxationItemListForCmType struct {
	TaxationItems []map[string]interface{} `json:"taxationItems,omitempty"`
}
