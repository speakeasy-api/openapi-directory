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
	SearchByAccount   *bool                              `json:"search_by_account,omitempty"`
	SearchByDomain    *bool                              `json:"search_by_domain,omitempty"`
	SearchByMaAccount *bool                              `json:"search_by_ma_account,omitempty"`
	Type              *ImGroupsImGroupListGroupsTypeEnum `json:"type,omitempty"`
}

// ImGroupsImGroupList
// List of IM Groups.
type ImGroupsImGroupList struct {
	Groups []ImGroupsImGroupListGroups `json:"groups,omitempty"`
}

type ImGroupsResponse struct {
	Body        []byte
	ContentType string
	IMGroupList *ImGroupsImGroupList
	StatusCode  int64
}
