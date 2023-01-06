package shared

type StockExchangeDetail struct {
	CountryCode  *string `json:"countryCode,omitempty"`
	CurrencyCode *string `json:"currencyCode,omitempty"`
	ExchangeCode *string `json:"exchangeCode,omitempty"`
	Symbol       *string `json:"symbol,omitempty"`
}
