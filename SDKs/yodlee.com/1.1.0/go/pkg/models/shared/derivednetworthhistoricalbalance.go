package shared

type DerivedNetworthHistoricalBalanceDataSourceTypeEnum string

const (
	DerivedNetworthHistoricalBalanceDataSourceTypeEnumS  DerivedNetworthHistoricalBalanceDataSourceTypeEnum = "S"
	DerivedNetworthHistoricalBalanceDataSourceTypeEnumC  DerivedNetworthHistoricalBalanceDataSourceTypeEnum = "C"
	DerivedNetworthHistoricalBalanceDataSourceTypeEnumCf DerivedNetworthHistoricalBalanceDataSourceTypeEnum = "CF"
)

type DerivedNetworthHistoricalBalance struct {
	AccountID      *int64                                              `json:"accountId,omitempty"`
	AsOfDate       *string                                             `json:"asOfDate,omitempty"`
	Balance        *Money                                              `json:"balance,omitempty"`
	DataSourceType *DerivedNetworthHistoricalBalanceDataSourceTypeEnum `json:"dataSourceType,omitempty"`
	Date           *string                                             `json:"date,omitempty"`
	IsAsset        *bool                                               `json:"isAsset,omitempty"`
}
