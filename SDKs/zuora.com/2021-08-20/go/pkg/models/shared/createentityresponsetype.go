package shared

type CreateEntityResponseTypeStatusEnum string

const (
	CreateEntityResponseTypeStatusEnumProvisioned   CreateEntityResponseTypeStatusEnum = "Provisioned"
	CreateEntityResponseTypeStatusEnumUnprovisioned CreateEntityResponseTypeStatusEnum = "Unprovisioned"
)

type CreateEntityResponseType struct {
	DisplayName *string                             `json:"displayName,omitempty"`
	ID          *string                             `json:"id,omitempty"`
	Locale      *string                             `json:"locale,omitempty"`
	Name        *string                             `json:"name,omitempty"`
	ParentID    *string                             `json:"parentId,omitempty"`
	Status      *CreateEntityResponseTypeStatusEnum `json:"status,omitempty"`
	Success     *bool                               `json:"success,omitempty"`
	TenantID    *string                             `json:"tenantId,omitempty"`
	Timezone    *string                             `json:"timezone,omitempty"`
}
