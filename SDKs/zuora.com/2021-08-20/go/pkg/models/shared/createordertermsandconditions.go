package shared

type CreateOrderTermsAndConditionsRenewalSettingEnum string

const (
	CreateOrderTermsAndConditionsRenewalSettingEnumRenewWithSpecificTerm CreateOrderTermsAndConditionsRenewalSettingEnum = "RENEW_WITH_SPECIFIC_TERM"
	CreateOrderTermsAndConditionsRenewalSettingEnumRenewToEvergreen      CreateOrderTermsAndConditionsRenewalSettingEnum = "RENEW_TO_EVERGREEN"
)

// CreateOrderTermsAndConditions
// Information about an order action of type `TermsAndConditions`.
type CreateOrderTermsAndConditions struct {
	AutoRenew      *bool                                            `json:"autoRenew,omitempty"`
	LastTerm       *LastTerm                                        `json:"lastTerm,omitempty"`
	RenewalSetting *CreateOrderTermsAndConditionsRenewalSettingEnum `json:"renewalSetting,omitempty"`
	RenewalTerms   []RenewalTerm                                    `json:"renewalTerms,omitempty"`
}
