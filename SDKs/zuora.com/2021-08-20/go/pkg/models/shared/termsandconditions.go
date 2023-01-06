package shared

type TermsAndConditionsRenewalSettingEnum string

const (
	TermsAndConditionsRenewalSettingEnumRenewWithSpecificTerm TermsAndConditionsRenewalSettingEnum = "RENEW_WITH_SPECIFIC_TERM"
	TermsAndConditionsRenewalSettingEnumRenewToEvergreen      TermsAndConditionsRenewalSettingEnum = "RENEW_TO_EVERGREEN"
)

// TermsAndConditions
// Information about an order action of type `TermsAndConditions`.
type TermsAndConditions struct {
	AutoRenew      *bool                                 `json:"autoRenew,omitempty"`
	InitialTerm    *InitialTerm                          `json:"initialTerm,omitempty"`
	RenewalSetting *TermsAndConditionsRenewalSettingEnum `json:"renewalSetting,omitempty"`
	RenewalTerms   []RenewalTerm                         `json:"renewalTerms,omitempty"`
}
