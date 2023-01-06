package shared

type UserRequestPreferencesCurrencyEnum string

const (
	UserRequestPreferencesCurrencyEnumAud UserRequestPreferencesCurrencyEnum = "AUD"
	UserRequestPreferencesCurrencyEnumBrl UserRequestPreferencesCurrencyEnum = "BRL"
	UserRequestPreferencesCurrencyEnumCad UserRequestPreferencesCurrencyEnum = "CAD"
	UserRequestPreferencesCurrencyEnumEur UserRequestPreferencesCurrencyEnum = "EUR"
	UserRequestPreferencesCurrencyEnumGbp UserRequestPreferencesCurrencyEnum = "GBP"
	UserRequestPreferencesCurrencyEnumHkd UserRequestPreferencesCurrencyEnum = "HKD"
	UserRequestPreferencesCurrencyEnumIdr UserRequestPreferencesCurrencyEnum = "IDR"
	UserRequestPreferencesCurrencyEnumInr UserRequestPreferencesCurrencyEnum = "INR"
	UserRequestPreferencesCurrencyEnumJpy UserRequestPreferencesCurrencyEnum = "JPY"
	UserRequestPreferencesCurrencyEnumNzd UserRequestPreferencesCurrencyEnum = "NZD"
	UserRequestPreferencesCurrencyEnumSgd UserRequestPreferencesCurrencyEnum = "SGD"
	UserRequestPreferencesCurrencyEnumUsd UserRequestPreferencesCurrencyEnum = "USD"
	UserRequestPreferencesCurrencyEnumZar UserRequestPreferencesCurrencyEnum = "ZAR"
	UserRequestPreferencesCurrencyEnumCny UserRequestPreferencesCurrencyEnum = "CNY"
	UserRequestPreferencesCurrencyEnumVnd UserRequestPreferencesCurrencyEnum = "VND"
	UserRequestPreferencesCurrencyEnumMyr UserRequestPreferencesCurrencyEnum = "MYR"
	UserRequestPreferencesCurrencyEnumChf UserRequestPreferencesCurrencyEnum = "CHF"
)

type UserRequestPreferencesLocaleEnum string

const (
	UserRequestPreferencesLocaleEnumEnUs UserRequestPreferencesLocaleEnum = "en_US"
	UserRequestPreferencesLocaleEnumEnEs UserRequestPreferencesLocaleEnum = "en_ES"
	UserRequestPreferencesLocaleEnumFrCa UserRequestPreferencesLocaleEnum = "fr_CA"
	UserRequestPreferencesLocaleEnumZhCn UserRequestPreferencesLocaleEnum = "zh_CN"
)

type UserRequestPreferences struct {
	Currency   *UserRequestPreferencesCurrencyEnum `json:"currency,omitempty"`
	DateFormat *string                             `json:"dateFormat,omitempty"`
	Locale     *UserRequestPreferencesLocaleEnum   `json:"locale,omitempty"`
	TimeZone   *string                             `json:"timeZone,omitempty"`
}
