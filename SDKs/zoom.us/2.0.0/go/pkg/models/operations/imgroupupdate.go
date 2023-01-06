package operations

type ImGroupUpdatePathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=groupId"`
}

type ImGroupUpdateApplicationJSONTypeEnum string

const (
	ImGroupUpdateApplicationJSONTypeEnumNormal     ImGroupUpdateApplicationJSONTypeEnum = "normal"
	ImGroupUpdateApplicationJSONTypeEnumShared     ImGroupUpdateApplicationJSONTypeEnum = "shared"
	ImGroupUpdateApplicationJSONTypeEnumRestricted ImGroupUpdateApplicationJSONTypeEnum = "restricted"
)

type ImGroupUpdateApplicationJSON struct {
	Name              *string                               `json:"name,omitempty"`
	SearchByAccount   *bool                                 `json:"search_by_account,omitempty"`
	SearchByDomain    *bool                                 `json:"search_by_domain,omitempty"`
	SearchByMaAccount *bool                                 `json:"search_by_ma_account,omitempty"`
	Type              *ImGroupUpdateApplicationJSONTypeEnum `json:"type,omitempty"`
}

type ImGroupUpdateMultipartFormDataTypeEnum string

const (
	ImGroupUpdateMultipartFormDataTypeEnumNormal     ImGroupUpdateMultipartFormDataTypeEnum = "normal"
	ImGroupUpdateMultipartFormDataTypeEnumShared     ImGroupUpdateMultipartFormDataTypeEnum = "shared"
	ImGroupUpdateMultipartFormDataTypeEnumRestricted ImGroupUpdateMultipartFormDataTypeEnum = "restricted"
)

type ImGroupUpdateMultipartFormData struct {
	Name              *string                                 `multipartForm:"name=name"`
	SearchByAccount   *bool                                   `multipartForm:"name=search_by_account"`
	SearchByDomain    *bool                                   `multipartForm:"name=search_by_domain"`
	SearchByMaAccount *bool                                   `multipartForm:"name=search_by_ma_account"`
	Type              *ImGroupUpdateMultipartFormDataTypeEnum `multipartForm:"name=type"`
}

type ImGroupUpdateRequests struct {
	Object  *ImGroupUpdateApplicationJSON   `request:"mediaType=application/json"`
	Object1 *ImGroupUpdateMultipartFormData `request:"mediaType=multipart/form-data"`
}

type ImGroupUpdateRequest struct {
	PathParams ImGroupUpdatePathParams
	Request    ImGroupUpdateRequests
}

type ImGroupUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
