package shared

type PostCreditMemoEmailRequestType struct {
	EmailAddresses                  *string `json:"emailAddresses,omitempty"`
	IncludeAdditionalEmailAddresses *bool   `json:"includeAdditionalEmailAddresses,omitempty"`
	UseEmailTemplateSetting         *bool   `json:"useEmailTemplateSetting,omitempty"`
}
