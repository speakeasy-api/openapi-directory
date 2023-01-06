package shared

type GetAccountingCodesType struct {
	AccountingCodes []map[string]interface{} `json:"accountingCodes,omitempty"`
	NextPage        *string                  `json:"nextPage,omitempty"`
	Success         *bool                    `json:"success,omitempty"`
}
