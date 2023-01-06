package shared

type DataExtractsEvent struct {
	Data *DataExtractsEventData `json:"data,omitempty"`
	Info *string                `json:"info,omitempty"`
}
