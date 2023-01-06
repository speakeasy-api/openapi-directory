package shared

type SettingsBatchResponse struct {
	Responses []SettingValueResponseWrapper `json:"responses,omitempty"`
}
