package shared

type VerificationAccountAccountTypeEnum string

const (
	VerificationAccountAccountTypeEnumSavings  VerificationAccountAccountTypeEnum = "SAVINGS"
	VerificationAccountAccountTypeEnumChecking VerificationAccountAccountTypeEnum = "CHECKING"
)

type VerificationAccount struct {
	AccountName      *string                            `json:"accountName,omitempty"`
	AccountNumber    string                             `json:"accountNumber"`
	AccountType      VerificationAccountAccountTypeEnum `json:"accountType"`
	BankTransferCode VerificationBankTransferCode       `json:"bankTransferCode"`
}
