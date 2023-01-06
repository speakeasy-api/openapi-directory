package shared

type SettingsBatchRequest struct {
	Requests []SettingValueRequest `json:"requests,omitempty"`
}
