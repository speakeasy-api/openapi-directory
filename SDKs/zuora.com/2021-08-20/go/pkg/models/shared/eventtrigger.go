package shared

type EventTrigger struct {
	Active      *bool      `json:"active,omitempty"`
	BaseObject  *string    `json:"baseObject,omitempty"`
	Condition   *string    `json:"condition,omitempty"`
	Description *string    `json:"description,omitempty"`
	EventType   *EventType `json:"eventType,omitempty"`
	ID          *string    `json:"id,omitempty"`
}
