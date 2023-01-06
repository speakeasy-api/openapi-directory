package shared

type UserResponsePreferencesCurrencyEnum string

const (
	UserResponsePreferencesCurrencyEnumAud UserResponsePreferencesCurrencyEnum = "AUD"
	UserResponsePreferencesCurrencyEnumBrl UserResponsePreferencesCurrencyEnum = "BRL"
	UserResponsePreferencesCurrencyEnumCad UserResponsePreferencesCurrencyEnum = "CAD"
	UserResponsePreferencesCurrencyEnumEur UserResponsePreferencesCurrencyEnum = "EUR"
	UserResponsePreferencesCurrencyEnumGbp UserResponsePreferencesCurrencyEnum = "GBP"
	UserResponsePreferencesCurrencyEnumHkd UserResponsePreferencesCurrencyEnum = "HKD"
	UserResponsePreferencesCurrencyEnumIdr UserResponsePreferencesCurrencyEnum = "IDR"
	UserResponsePreferencesCurrencyEnumInr UserResponsePreferencesCurrencyEnum = "INR"
	UserResponsePreferencesCurrencyEnumJpy UserResponsePreferencesCurrencyEnum = "JPY"
	UserResponsePreferencesCurrencyEnumNzd UserResponsePreferencesCurrencyEnum = "NZD"
	UserResponsePreferencesCurrencyEnumSgd UserResponsePreferencesCurrencyEnum = "SGD"
	UserResponsePreferencesCurrencyEnumUsd UserResponsePreferencesCurrencyEnum = "USD"
	UserResponsePreferencesCurrencyEnumZar UserResponsePreferencesCurrencyEnum = "ZAR"
	UserResponsePreferencesCurrencyEnumCny UserResponsePreferencesCurrencyEnum = "CNY"
	UserResponsePreferencesCurrencyEnumVnd UserResponsePreferencesCurrencyEnum = "VND"
	UserResponsePreferencesCurrencyEnumMyr UserResponsePreferencesCurrencyEnum = "MYR"
	UserResponsePreferencesCurrencyEnumChf UserResponsePreferencesCurrencyEnum = "CHF"
)

type UserResponsePreferencesLocaleEnum string

const (
	UserResponsePreferencesLocaleEnumEnUs UserResponsePreferencesLocaleEnum = "en_US"
	UserResponsePreferencesLocaleEnumEnEs UserResponsePreferencesLocaleEnum = "en_ES"
	UserResponsePreferencesLocaleEnumFrCa UserResponsePreferencesLocaleEnum = "fr_CA"
	UserResponsePreferencesLocaleEnumZhCn UserResponsePreferencesLocaleEnum = "zh_CN"
)

type UserResponsePreferences struct {
	Currency   *UserResponsePreferencesCurrencyEnum `json:"currency,omitempty"`
	DateFormat *string                              `json:"dateFormat,omitempty"`
	Locale     *UserResponsePreferencesLocaleEnum   `json:"locale,omitempty"`
	TimeZone   *string                              `json:"timeZone,omitempty"`
}
