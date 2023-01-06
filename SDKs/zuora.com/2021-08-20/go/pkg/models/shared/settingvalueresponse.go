package shared

type SettingValueResponse struct {
	Body          map[string]interface{} `json:"body,omitempty"`
	ErrorMessages []string               `json:"errorMessages,omitempty"`
	Status        *string                `json:"status,omitempty"`
}
