package shared

type GetCustomExchangeRatesType struct {
	Inverse *bool                            `json:"inverse,omitempty"`
	Rates   []GetCustomExchangeRatesDataType `json:"rates,omitempty"`
	Success *bool                            `json:"success,omitempty"`
}
