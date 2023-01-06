package operations

type ImGroupPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=groupId"`
}

type ImGroup200ApplicationJSONTypeEnum string

const (
	ImGroup200ApplicationJSONTypeEnumNormal     ImGroup200ApplicationJSONTypeEnum = "normal"
	ImGroup200ApplicationJSONTypeEnumShared     ImGroup200ApplicationJSONTypeEnum = "shared"
	ImGroup200ApplicationJSONTypeEnumRestricted ImGroup200ApplicationJSONTypeEnum = "restricted"
)

// ImGroup200ApplicationJSON
// Group object.
type ImGroup200ApplicationJSON struct {
	SearchByAccount   *bool                              `json:"search_by_account,omitempty"`
	SearchByDomain    *bool                              `json:"search_by_domain,omitempty"`
	SearchByMaAccount *bool                              `json:"search_by_ma_account,omitempty"`
	Type              *ImGroup200ApplicationJSONTypeEnum `json:"type,omitempty"`
}

type ImGroupRequest struct {
	PathParams ImGroupPathParams
}

type ImGroupResponse struct {
	Body                            []byte
	ContentType                     string
	StatusCode                      int64
	ImGroup200ApplicationJSONObject *ImGroup200ApplicationJSON
}
