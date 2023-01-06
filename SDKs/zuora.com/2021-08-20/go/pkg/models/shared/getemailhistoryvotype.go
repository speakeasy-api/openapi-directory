package shared

type GetEmailHistoryVoType struct {
	Bcc           *string `json:"bcc,omitempty"`
	Cc            *string `json:"cc,omitempty"`
	ErrorMessage  *string `json:"errorMessage,omitempty"`
	EventCategory *string `json:"eventCategory,omitempty"`
	FromEmail     *string `json:"fromEmail,omitempty"`
	Notification  *string `json:"notification,omitempty"`
	ReplyTo       *string `json:"replyTo,omitempty"`
	Result        *string `json:"result,omitempty"`
	SendTime      *string `json:"sendTime,omitempty"`
	Subject       *string `json:"subject,omitempty"`
	ToEmail       *string `json:"toEmail,omitempty"`
}
