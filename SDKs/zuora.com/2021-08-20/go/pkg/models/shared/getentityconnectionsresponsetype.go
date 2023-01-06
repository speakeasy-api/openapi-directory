package shared

type GetEntityConnectionsResponseType struct {
	EntityConnections []GetEntityConnectionsArrayItemsType `json:"entityConnections,omitempty"`
	NextPage          *string                              `json:"nextPage,omitempty"`
	Success           *bool                                `json:"success,omitempty"`
}
