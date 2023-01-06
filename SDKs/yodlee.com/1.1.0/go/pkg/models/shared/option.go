package shared

type Option struct {
	DisplayText *string `json:"displayText,omitempty"`
	IsSelected  *bool   `json:"isSelected,omitempty"`
	OptionValue *string `json:"optionValue,omitempty"`
}
