package shared

type Contact struct {
	Email *string `json:"email,omitempty"`
	Phone *string `json:"phone,omitempty"`
}
