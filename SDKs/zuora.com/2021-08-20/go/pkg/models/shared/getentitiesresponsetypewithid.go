package shared

type GetEntitiesResponseTypeWithIDStatusEnum string

const (
	GETEntitiesResponseTypeWithIDStatusEnumProvisioned   GetEntitiesResponseTypeWithIDStatusEnum = "Provisioned"
	GETEntitiesResponseTypeWithIDStatusEnumUnprovisioned GetEntitiesResponseTypeWithIDStatusEnum = "Unprovisioned"
)

type GetEntitiesResponseTypeWithID struct {
	DisplayName *string                                  `json:"displayName,omitempty"`
	ID          *string                                  `json:"id,omitempty"`
	Locale      *string                                  `json:"locale,omitempty"`
	Name        *string                                  `json:"name,omitempty"`
	ParentID    *string                                  `json:"parentId,omitempty"`
	Status      *GetEntitiesResponseTypeWithIDStatusEnum `json:"status,omitempty"`
	Success     *bool                                    `json:"success,omitempty"`
	TenantID    *string                                  `json:"tenantId,omitempty"`
	Timezone    *string                                  `json:"timezone,omitempty"`
}
