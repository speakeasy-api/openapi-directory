package shared

type DataExtractsEventUserData struct {
	Links []DataExtractsEventLinks `json:"links,omitempty"`
	User  *DataExtractsUser        `json:"user,omitempty"`
}
