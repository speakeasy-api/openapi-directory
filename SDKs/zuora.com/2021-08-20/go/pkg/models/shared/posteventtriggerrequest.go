package shared

type PostEventTriggerRequest struct {
	Active      bool      `json:"active"`
	BaseObject  string    `json:"baseObject"`
	Condition   string    `json:"condition"`
	Description *string   `json:"description,omitempty"`
	EventType   EventType `json:"eventType"`
}
