package shared

type SuperFund struct {
	ABN                      *string           `json:"ABN,omitempty"`
	AccountName              *string           `json:"AccountName,omitempty"`
	AccountNumber            *string           `json:"AccountNumber,omitempty"`
	BSB                      *string           `json:"BSB,omitempty"`
	ElectronicServiceAddress *string           `json:"ElectronicServiceAddress,omitempty"`
	EmployerNumber           *string           `json:"EmployerNumber,omitempty"`
	Name                     *string           `json:"Name,omitempty"`
	SPIN                     *string           `json:"SPIN,omitempty"`
	SuperFundID              *string           `json:"SuperFundID,omitempty"`
	Type                     SuperFundTypeEnum `json:"Type"`
	USI                      *string           `json:"USI,omitempty"`
	UpdatedDateUTC           *string           `json:"UpdatedDateUTC,omitempty"`
	ValidationErrors         []ValidationError `json:"ValidationErrors,omitempty"`
}

type SuperFundInput struct {
	ABN                      *string           `json:"ABN,omitempty"`
	AccountName              *string           `json:"AccountName,omitempty"`
	AccountNumber            *string           `json:"AccountNumber,omitempty"`
	BSB                      *string           `json:"BSB,omitempty"`
	ElectronicServiceAddress *string           `json:"ElectronicServiceAddress,omitempty"`
	EmployerNumber           *string           `json:"EmployerNumber,omitempty"`
	Name                     *string           `json:"Name,omitempty"`
	SPIN                     *string           `json:"SPIN,omitempty"`
	SuperFundID              *string           `json:"SuperFundID,omitempty"`
	Type                     SuperFundTypeEnum `json:"Type"`
	USI                      *string           `json:"USI,omitempty"`
	ValidationErrors         []ValidationError `json:"ValidationErrors,omitempty"`
}
