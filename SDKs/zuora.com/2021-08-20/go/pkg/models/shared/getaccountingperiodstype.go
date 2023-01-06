package shared

type GetAccountingPeriodsType struct {
	AccountingPeriods []map[string]interface{} `json:"accountingPeriods,omitempty"`
	NextPage          *string                  `json:"nextPage,omitempty"`
	Success           *bool                    `json:"success,omitempty"`
}
