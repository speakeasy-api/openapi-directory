package shared

type CreateConfigsNotificationEvent struct {
	CallbackURL *string `json:"callbackUrl,omitempty"`
}
