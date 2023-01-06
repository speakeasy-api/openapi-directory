package shared

type CreateEntityType struct {
	DisplayName *string `json:"displayName,omitempty"`
	Locale      string  `json:"locale"`
	Name        string  `json:"name"`
	ParentID    string  `json:"parentId"`
	Timezone    string  `json:"timezone"`
}
