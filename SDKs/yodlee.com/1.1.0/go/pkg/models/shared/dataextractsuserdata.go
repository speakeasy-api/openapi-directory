package shared

type DataExtractsUserData struct {
	Account                []DataExtractsAccount         `json:"account,omitempty"`
	Holding                []DataExtractsHolding         `json:"holding,omitempty"`
	ProviderAccount        []DataExtractsProviderAccount `json:"providerAccount,omitempty"`
	TotalTransactionsCount *int64                        `json:"totalTransactionsCount,omitempty"`
	Transaction            []DataExtractsTransaction     `json:"transaction,omitempty"`
	User                   *DataExtractsUser             `json:"user,omitempty"`
}
