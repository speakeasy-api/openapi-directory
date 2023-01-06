package operations

type GetASharedLineGroupPathParams struct {
	SharedLineGroupID string `pathParam:"style=simple,explode=false,name=sharedLineGroupId"`
}

type GetASharedLineGroup200ApplicationJSONMembersCommonAreaPhones struct {
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type GetASharedLineGroup200ApplicationJSONMembersUsers struct {
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

// GetASharedLineGroup200ApplicationJSONMembers
// View current [members](https://support.zoom.us/hc/en-us/articles/360038850792-Setting-up-shared-line-groups#h_3ffbbb77-a009-4c09-91e4-81fc264b61d6) of the shared line group.
type GetASharedLineGroup200ApplicationJSONMembers struct {
	CommonAreaPhones []GetASharedLineGroup200ApplicationJSONMembersCommonAreaPhones `json:"common_area_phones,omitempty"`
	Users            []GetASharedLineGroup200ApplicationJSONMembersUsers            `json:"users,omitempty"`
}

type GetASharedLineGroup200ApplicationJSONPhoneNumbers struct {
	ID     *string `json:"id,omitempty"`
	Number *string `json:"number,omitempty"`
}

// GetASharedLineGroup200ApplicationJSONSite
// Site assigned to the Shared Line Group.
type GetASharedLineGroup200ApplicationJSONSite struct {
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type GetASharedLineGroup200ApplicationJSONStatusEnum string

const (
	GetASharedLineGroup200ApplicationJSONStatusEnumActive   GetASharedLineGroup200ApplicationJSONStatusEnum = "active"
	GetASharedLineGroup200ApplicationJSONStatusEnumInactive GetASharedLineGroup200ApplicationJSONStatusEnum = "inactive"
)

type GetASharedLineGroup200ApplicationJSON struct {
	DisplayName     *string                                             `json:"display_name,omitempty"`
	ExtensionNumber *int64                                              `json:"extension_number,omitempty"`
	ID              *string                                             `json:"id,omitempty"`
	Members         *GetASharedLineGroup200ApplicationJSONMembers       `json:"members,omitempty"`
	PhoneNumbers    []GetASharedLineGroup200ApplicationJSONPhoneNumbers `json:"phone_numbers,omitempty"`
	PrimaryNumber   *string                                             `json:"primary_number,omitempty"`
	Site            *GetASharedLineGroup200ApplicationJSONSite          `json:"site,omitempty"`
	Status          *GetASharedLineGroup200ApplicationJSONStatusEnum    `json:"status,omitempty"`
	Timezone        *string                                             `json:"timezone,omitempty"`
}

type GetASharedLineGroupRequest struct {
	PathParams GetASharedLineGroupPathParams
}

type GetASharedLineGroupResponse struct {
	Body                                        []byte
	ContentType                                 string
	StatusCode                                  int64
	GetASharedLineGroup200ApplicationJSONObject *GetASharedLineGroup200ApplicationJSON
}
