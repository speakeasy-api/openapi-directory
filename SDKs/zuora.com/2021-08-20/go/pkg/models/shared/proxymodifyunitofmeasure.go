package shared

type ProxyModifyUnitOfMeasure struct {
	Active        *bool   `json:"Active,omitempty"`
	DecimalPlaces *int64  `json:"DecimalPlaces,omitempty"`
	DisplayedAs   *string `json:"DisplayedAs,omitempty"`
	RoundingMode  *string `json:"RoundingMode,omitempty"`
	UomName       *string `json:"UomName,omitempty"`
}
