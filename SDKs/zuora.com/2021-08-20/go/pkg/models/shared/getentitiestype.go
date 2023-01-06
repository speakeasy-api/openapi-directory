package shared

type GetEntitiesTypeStatusEnum string

const (
	GETEntitiesTypeStatusEnumProvisioned   GetEntitiesTypeStatusEnum = "Provisioned"
	GETEntitiesTypeStatusEnumUnprovisioned GetEntitiesTypeStatusEnum = "Unprovisioned"
)

type GetEntitiesType struct {
	DisplayName *string                    `json:"displayName,omitempty"`
	ID          *string                    `json:"id,omitempty"`
	Locale      *string                    `json:"locale,omitempty"`
	Name        *string                    `json:"name,omitempty"`
	ParentID    *string                    `json:"parentId,omitempty"`
	Status      *GetEntitiesTypeStatusEnum `json:"status,omitempty"`
	TenantID    *string                    `json:"tenantId,omitempty"`
	Timezone    *string                    `json:"timezone,omitempty"`
}
