package shared

type AccountHistoricalBalancesResponse struct {
	Account []AccountHistory `json:"account,omitempty"`
}
