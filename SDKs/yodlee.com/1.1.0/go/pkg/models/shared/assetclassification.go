package shared

type AssetClassification struct {
	Allocation          *float64 `json:"allocation,omitempty"`
	ClassificationType  *string  `json:"classificationType,omitempty"`
	ClassificationValue *string  `json:"classificationValue,omitempty"`
}
