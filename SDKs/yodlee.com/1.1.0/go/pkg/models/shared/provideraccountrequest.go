package shared

type ProviderAccountRequestAggregationSourceEnum string

const (
	ProviderAccountRequestAggregationSourceEnumSystem ProviderAccountRequestAggregationSourceEnum = "SYSTEM"
	ProviderAccountRequestAggregationSourceEnumUser   ProviderAccountRequestAggregationSourceEnum = "USER"
)

type ProviderAccountRequestDatasetNameEnum string

const (
	ProviderAccountRequestDatasetNameEnumBasicAggData   ProviderAccountRequestDatasetNameEnum = "BASIC_AGG_DATA"
	ProviderAccountRequestDatasetNameEnumAdvanceAggData ProviderAccountRequestDatasetNameEnum = "ADVANCE_AGG_DATA"
	ProviderAccountRequestDatasetNameEnumAcctProfile    ProviderAccountRequestDatasetNameEnum = "ACCT_PROFILE"
	ProviderAccountRequestDatasetNameEnumDocument       ProviderAccountRequestDatasetNameEnum = "DOCUMENT"
)

type ProviderAccountRequestInput struct {
	AggregationSource *ProviderAccountRequestAggregationSourceEnum `json:"aggregationSource,omitempty"`
	ConsentID         *int64                                       `json:"consentId,omitempty"`
	Dataset           []ProvidersDatasetInput                      `json:"dataset,omitempty"`
	DatasetName       []ProviderAccountRequestDatasetNameEnum      `json:"datasetName,omitempty"`
	Field             []FieldInput                                 `json:"field"`
	Preferences       *ProviderAccountPreferences                  `json:"preferences,omitempty"`
}
