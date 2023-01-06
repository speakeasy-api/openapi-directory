package shared

type PostQuoteDocType struct {
	Apiuser             *string `json:"apiuser,omitempty"`
	DocumentType        string  `json:"documentType"`
	Locale              *string `json:"locale,omitempty"`
	Password            *string `json:"password,omitempty"`
	QuoteID             string  `json:"quoteId"`
	Sandbox             *string `json:"sandbox,omitempty"`
	ServerURL           string  `json:"serverUrl"`
	SessionID           string  `json:"sessionId"`
	TemplateID          string  `json:"templateId"`
	Token               *string `json:"token,omitempty"`
	UseSFDCLocale       *string `json:"useSFDCLocale,omitempty"`
	Username            *string `json:"username,omitempty"`
	ZquotesMajorVersion *string `json:"zquotesMajorVersion,omitempty"`
	ZquotesMinorVersion *string `json:"zquotesMinorVersion,omitempty"`
}
