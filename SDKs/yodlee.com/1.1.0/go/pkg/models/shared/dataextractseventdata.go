package shared

type DataExtractsEventData struct {
	FromDate  *string                     `json:"fromDate,omitempty"`
	ToDate    *string                     `json:"toDate,omitempty"`
	UserCount *int32                      `json:"userCount,omitempty"`
	UserData  []DataExtractsEventUserData `json:"userData,omitempty"`
}
