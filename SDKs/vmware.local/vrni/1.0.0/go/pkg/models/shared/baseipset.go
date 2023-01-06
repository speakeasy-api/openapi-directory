package shared

type BaseIPSet struct {
	DirectDestinationRules   []RuleSet     `json:"direct_destination_rules,omitempty"`
	DirectSourceRules        []RuleSet     `json:"direct_source_rules,omitempty"`
	IndirectDestinationRules []RuleSet     `json:"indirect_destination_rules,omitempty"`
	IndirectSourceRules      []RuleSet     `json:"indirect_source_rules,omitempty"`
	IPAddresses              []IPV4Address `json:"ip_addresses,omitempty"`
	IPNumericRanges          []interface{} `json:"ip_numeric_ranges,omitempty"`
	IPRanges                 []interface{} `json:"ip_ranges,omitempty"`
	ParentSecurityGroups     []Reference   `json:"parent_security_groups,omitempty"`
	TranslatedVMCount        *int32        `json:"translated_vm_count,omitempty"`
	Vendor                   *string       `json:"vendor,omitempty"`
	VendorID                 *string       `json:"vendor_id,omitempty"`
}
