package shared

type EventType struct {
	Description *string `json:"description,omitempty"`
	DisplayName string  `json:"displayName"`
	Name        string  `json:"name"`
}
