package shared

type PostTaxationItemListForDmType struct {
	TaxationItems []map[string]interface{} `json:"taxationItems,omitempty"`
}
