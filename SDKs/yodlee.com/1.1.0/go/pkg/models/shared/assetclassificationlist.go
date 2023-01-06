package shared

type AssetClassificationList struct {
	ClassificationType  *string  `json:"classificationType,omitempty"`
	ClassificationValue []string `json:"classificationValue,omitempty"`
}
