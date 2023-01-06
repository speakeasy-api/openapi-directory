package shared

type GetEntitiesUserAccessibleResponseType struct {
	Entities []GetEntitiesType `json:"entities,omitempty"`
	Success  *bool             `json:"success,omitempty"`
}
