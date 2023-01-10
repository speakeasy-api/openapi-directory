package operations

type ImGroupsImGroupListGroupsTypeEnum string

const (
	IMGroupsIMGroupListGroupsTypeEnumNormal     ImGroupsImGroupListGroupsTypeEnum = "normal"
	IMGroupsIMGroupListGroupsTypeEnumShared     ImGroupsImGroupListGroupsTypeEnum = "shared"
	IMGroupsIMGroupListGroupsTypeEnumRestricted ImGroupsImGroupListGroupsTypeEnum = "restricted"
)

// ImGroupsImGroupListGroups
// Group object.
type ImGroupsImGroupListGroups struct {
	ID                *string                            `json:"id,omitempty"`
	Name              *string                            `json:"name,omitempty"`
	SearchByAccount   *bool                              `json:"search_by_account,omitempty"`
	SearchByDomain    *bool                              `json:"search_by_domain,omitempty"`
	SearchByMaAccount *bool                              `json:"search_by_ma_account,omitempty"`
	TotalMembers      *int64                             `json:"total_members,omitempty"`
	Type              *ImGroupsImGroupListGroupsTypeEnum `json:"type,omitempty"`
}

// ImGroupsImGroupList
// List of IM Groups.
type ImGroupsImGroupList struct {
	Groups       []ImGroupsImGroupListGroups `json:"groups,omitempty"`
	TotalRecords *int64                      `json:"total_records,omitempty"`
}

type ImGroupsResponse struct {
	Body        []byte
	ContentType string
	IMGroupList *ImGroupsImGroupList
	StatusCode  int64
}
