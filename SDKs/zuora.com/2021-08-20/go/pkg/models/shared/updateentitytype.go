package shared

type UpdateEntityType struct {
	DisplayName *string `json:"displayName,omitempty"`
	Locale      *string `json:"locale,omitempty"`
	Name        *string `json:"name,omitempty"`
	Timezone    *string `json:"timezone,omitempty"`
}
