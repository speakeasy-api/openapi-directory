package shared

type ProvidersDatasetNameEnum string

const (
	ProvidersDatasetNameEnumBasicAggData   ProvidersDatasetNameEnum = "BASIC_AGG_DATA"
	ProvidersDatasetNameEnumAdvanceAggData ProvidersDatasetNameEnum = "ADVANCE_AGG_DATA"
	ProvidersDatasetNameEnumAcctProfile    ProvidersDatasetNameEnum = "ACCT_PROFILE"
	ProvidersDatasetNameEnumDocument       ProvidersDatasetNameEnum = "DOCUMENT"
)

type ProvidersDatasetInput struct {
	Attribute []AttributeInput          `json:"attribute,omitempty"`
	Name      *ProvidersDatasetNameEnum `json:"name,omitempty"`
}

type ProvidersDataset struct {
	Attribute []Attribute               `json:"attribute,omitempty"`
	Name      *ProvidersDatasetNameEnum `json:"name,omitempty"`
}
