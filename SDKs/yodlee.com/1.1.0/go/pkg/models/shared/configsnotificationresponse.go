package shared

type ConfigsNotificationResponse struct {
	Event []ConfigsNotificationEvent `json:"event,omitempty"`
}
