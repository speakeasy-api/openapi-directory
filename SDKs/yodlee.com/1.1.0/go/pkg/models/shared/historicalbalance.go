package shared

type HistoricalBalanceDataSourceTypeEnum string

const (
	HistoricalBalanceDataSourceTypeEnumS  HistoricalBalanceDataSourceTypeEnum = "S"
	HistoricalBalanceDataSourceTypeEnumC  HistoricalBalanceDataSourceTypeEnum = "C"
	HistoricalBalanceDataSourceTypeEnumCf HistoricalBalanceDataSourceTypeEnum = "CF"
)

type HistoricalBalance struct {
	AsOfDate       *string                              `json:"asOfDate,omitempty"`
	Balance        *Money                               `json:"balance,omitempty"`
	DataSourceType *HistoricalBalanceDataSourceTypeEnum `json:"dataSourceType,omitempty"`
	Date           *string                              `json:"date,omitempty"`
	IsAsset        *bool                                `json:"isAsset,omitempty"`
}
