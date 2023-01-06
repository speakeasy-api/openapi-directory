package shared

type CreateCobrandNotificationEvent struct {
	CallbackURL *string `json:"callbackUrl,omitempty"`
}
