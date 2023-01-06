package shared

type GetEntityConnectionsArrayItemsType struct {
	ID             *string `json:"id,omitempty"`
	SourceEntityID *string `json:"sourceEntityId,omitempty"`
	Status         *string `json:"status,omitempty"`
	TargetEntityID *string `json:"targetEntityId,omitempty"`
}
