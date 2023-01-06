package shared

import (
	"time"
)

// GetCustomExchangeRatesDataTypeListOfExchangeRates
// Container for exchange rate information on a given date. The field name is the date in `yyyy-mm-dd` format, for example, 2016-01-15.
type GetCustomExchangeRatesDataTypeListOfExchangeRates struct {
	CURRENCY                 *string    `json:"CURRENCY,omitempty"`
	ProviderExchangeRateDate *time.Time `json:"providerExchangeRateDate,omitempty"`
}

type GetCustomExchangeRatesDataType struct {
	DATE *GetCustomExchangeRatesDataTypeListOfExchangeRates `json:"DATE,omitempty"`
}
