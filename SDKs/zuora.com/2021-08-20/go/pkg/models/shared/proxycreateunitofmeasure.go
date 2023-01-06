package shared

type ProxyCreateUnitOfMeasure struct {
	Active        *bool   `json:"Active,omitempty"`
	DecimalPlaces int64   `json:"DecimalPlaces"`
	DisplayedAs   *string `json:"DisplayedAs,omitempty"`
	RoundingMode  *string `json:"RoundingMode,omitempty"`
	UomName       string  `json:"UomName"`
}
