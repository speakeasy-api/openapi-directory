package shared

type DerivedNetworth struct {
	Asset              *Money                             `json:"asset,omitempty"`
	Date               *string                            `json:"date,omitempty"`
	HistoricalBalances []DerivedNetworthHistoricalBalance `json:"historicalBalances,omitempty"`
	Liability          *Money                             `json:"liability,omitempty"`
	Networth           *Money                             `json:"networth,omitempty"`
}
