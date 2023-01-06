package shared

type GetEntitiesResponseType struct {
	Entities []GetEntitiesType `json:"entities,omitempty"`
	Success  *bool             `json:"success,omitempty"`
}
