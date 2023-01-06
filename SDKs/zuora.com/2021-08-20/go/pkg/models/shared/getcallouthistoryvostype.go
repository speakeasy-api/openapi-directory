package shared

type GetCalloutHistoryVOsType struct {
	CalloutHistories []GetCalloutHistoryVoType `json:"calloutHistories,omitempty"`
	NextPage         *string                   `json:"nextPage,omitempty"`
	Success          *bool                     `json:"success,omitempty"`
}
