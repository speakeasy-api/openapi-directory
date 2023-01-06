package operations

type ImGroupCreateApplicationJSONTypeEnum string

const (
	ImGroupCreateApplicationJSONTypeEnumNormal     ImGroupCreateApplicationJSONTypeEnum = "normal"
	ImGroupCreateApplicationJSONTypeEnumShared     ImGroupCreateApplicationJSONTypeEnum = "shared"
	ImGroupCreateApplicationJSONTypeEnumRestricted ImGroupCreateApplicationJSONTypeEnum = "restricted"
)

type ImGroupCreateApplicationJSON struct {
	Name              *string                               `json:"name,omitempty"`
	SearchByAccount   *bool                                 `json:"search_by_account,omitempty"`
	SearchByDomain    *bool                                 `json:"search_by_domain,omitempty"`
	SearchByMaAccount *bool                                 `json:"search_by_ma_account,omitempty"`
	Type              *ImGroupCreateApplicationJSONTypeEnum `json:"type,omitempty"`
}

type ImGroupCreateMultipartFormDataTypeEnum string

const (
	ImGroupCreateMultipartFormDataTypeEnumNormal     ImGroupCreateMultipartFormDataTypeEnum = "normal"
	ImGroupCreateMultipartFormDataTypeEnumShared     ImGroupCreateMultipartFormDataTypeEnum = "shared"
	ImGroupCreateMultipartFormDataTypeEnumRestricted ImGroupCreateMultipartFormDataTypeEnum = "restricted"
)

type ImGroupCreateMultipartFormData struct {
	Name              *string                                 `multipartForm:"name=name"`
	SearchByAccount   *bool                                   `multipartForm:"name=search_by_account"`
	SearchByDomain    *bool                                   `multipartForm:"name=search_by_domain"`
	SearchByMaAccount *bool                                   `multipartForm:"name=search_by_ma_account"`
	Type              *ImGroupCreateMultipartFormDataTypeEnum `multipartForm:"name=type"`
}

type ImGroupCreateRequests struct {
	Object  *ImGroupCreateApplicationJSON   `request:"mediaType=application/json"`
	Object1 *ImGroupCreateMultipartFormData `request:"mediaType=multipart/form-data"`
}

type ImGroupCreate201ApplicationJSON struct {
	ID                *string `json:"id,omitempty"`
	Name              *string `json:"name,omitempty"`
	SearchByAccount   *bool   `json:"search_by_account,omitempty"`
	SearchByDomain    *bool   `json:"search_by_domain,omitempty"`
	SearchByMaAccount *bool   `json:"search_by_ma_account,omitempty"`
	TotalMembers      *int64  `json:"total_members,omitempty"`
}

type ImGroupCreateRequest struct {
	Request ImGroupCreateRequests
}

type ImGroupCreateResponse struct {
	Body                                  []byte
	ContentType                           string
	Headers                               map[string][]string
	StatusCode                            int64
	ImGroupCreate201ApplicationJSONObject *ImGroupCreate201ApplicationJSON
}
