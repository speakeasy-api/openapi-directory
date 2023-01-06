package shared

type VerifiedAccount struct {
	AccountNumber     *string            `json:"accountNumber,omitempty"`
	AccountType       *string            `json:"accountType,omitempty"`
	BankTransferCode  []BankTransferCode `json:"bankTransferCode,omitempty"`
	FullAccountNumber *string            `json:"fullAccountNumber,omitempty"`
	Holder            []AccountHolder    `json:"holder,omitempty"`
	ID                *int64             `json:"id,omitempty"`
	ProviderAccountID *int64             `json:"providerAccountId,omitempty"`
	ProviderName      *string            `json:"providerName,omitempty"`
}
