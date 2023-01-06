package shared

// PutEventTriggerRequestEventType
// The type of events to be triggered.
type PutEventTriggerRequestEventType struct {
	Description *string `json:"description,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
}

type PutEventTriggerRequest struct {
	Active      *bool                            `json:"active,omitempty"`
	Condition   *string                          `json:"condition,omitempty"`
	Description *string                          `json:"description,omitempty"`
	EventType   *PutEventTriggerRequestEventType `json:"eventType,omitempty"`
}
