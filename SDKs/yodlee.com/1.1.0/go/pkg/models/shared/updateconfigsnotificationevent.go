package shared

type UpdateConfigsNotificationEvent struct {
	CallbackURL *string `json:"callbackUrl,omitempty"`
}
