package shared

type AccountHistory struct {
	HistoricalBalances []HistoricalBalance `json:"historicalBalances,omitempty"`
	ID                 *int64              `json:"id,omitempty"`
}
