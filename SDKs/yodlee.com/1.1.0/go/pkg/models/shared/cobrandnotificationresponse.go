package shared

type CobrandNotificationResponse struct {
	Event []CobrandNotificationEvent `json:"event,omitempty"`
}
