package shared

type ListAllSettingsResponse struct {
	Settings []SettingItemWithOperationsInformation `json:"settings,omitempty"`
}
