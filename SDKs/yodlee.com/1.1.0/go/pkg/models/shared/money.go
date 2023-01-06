package shared

type MoneyCurrencyEnum string

const (
	MoneyCurrencyEnumAud MoneyCurrencyEnum = "AUD"
	MoneyCurrencyEnumBrl MoneyCurrencyEnum = "BRL"
	MoneyCurrencyEnumCad MoneyCurrencyEnum = "CAD"
	MoneyCurrencyEnumEur MoneyCurrencyEnum = "EUR"
	MoneyCurrencyEnumGbp MoneyCurrencyEnum = "GBP"
	MoneyCurrencyEnumHkd MoneyCurrencyEnum = "HKD"
	MoneyCurrencyEnumIdr MoneyCurrencyEnum = "IDR"
	MoneyCurrencyEnumInr MoneyCurrencyEnum = "INR"
	MoneyCurrencyEnumJpy MoneyCurrencyEnum = "JPY"
	MoneyCurrencyEnumNzd MoneyCurrencyEnum = "NZD"
	MoneyCurrencyEnumSgd MoneyCurrencyEnum = "SGD"
	MoneyCurrencyEnumUsd MoneyCurrencyEnum = "USD"
	MoneyCurrencyEnumZar MoneyCurrencyEnum = "ZAR"
	MoneyCurrencyEnumCny MoneyCurrencyEnum = "CNY"
	MoneyCurrencyEnumVnd MoneyCurrencyEnum = "VND"
	MoneyCurrencyEnumMyr MoneyCurrencyEnum = "MYR"
	MoneyCurrencyEnumChf MoneyCurrencyEnum = "CHF"
)

type Money struct {
	Amount   float64           `json:"amount"`
	Currency MoneyCurrencyEnum `json:"currency"`
}
