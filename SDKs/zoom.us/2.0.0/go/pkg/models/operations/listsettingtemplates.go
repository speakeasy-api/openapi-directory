package operations

import (
	"openapi/pkg/models/shared"
)

type ListSettingTemplatesQueryParams struct {
	NextPageToken *string `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64  `queryParam:"style=form,explode=true,name=page_size"`
	SiteID        *string `queryParam:"style=form,explode=true,name=site_id"`
}

type ListSettingTemplatesSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ListSettingTemplates200ApplicationJSONTemplatesTypeEnum string

const (
	ListSettingTemplates200ApplicationJSONTemplatesTypeEnumUser            ListSettingTemplates200ApplicationJSONTemplatesTypeEnum = "user"
	ListSettingTemplates200ApplicationJSONTemplatesTypeEnumGroup           ListSettingTemplates200ApplicationJSONTemplatesTypeEnum = "group"
	ListSettingTemplates200ApplicationJSONTemplatesTypeEnumAutReceptionist ListSettingTemplates200ApplicationJSONTemplatesTypeEnum = "autReceptionist"
	ListSettingTemplates200ApplicationJSONTemplatesTypeEnumCommonArea      ListSettingTemplates200ApplicationJSONTemplatesTypeEnum = "commonArea"
	ListSettingTemplates200ApplicationJSONTemplatesTypeEnumZr              ListSettingTemplates200ApplicationJSONTemplatesTypeEnum = "zr"
	ListSettingTemplates200ApplicationJSONTemplatesTypeEnumInterop         ListSettingTemplates200ApplicationJSONTemplatesTypeEnum = "interop"
)

type ListSettingTemplates200ApplicationJSONTemplates struct {
	Description *string                                                  `json:"description,omitempty"`
	ID          *string                                                  `json:"id,omitempty"`
	Name        *string                                                  `json:"name,omitempty"`
	Type        *ListSettingTemplates200ApplicationJSONTemplatesTypeEnum `json:"type,omitempty"`
}

type ListSettingTemplates200ApplicationJSON struct {
	NextPageToken *string                                           `json:"next_page_token,omitempty"`
	PageSize      *int64                                            `json:"page_size,omitempty"`
	Templates     []ListSettingTemplates200ApplicationJSONTemplates `json:"templates,omitempty"`
	TotalRecords  *int64                                            `json:"total_records,omitempty"`
}

type ListSettingTemplatesRequest struct {
	QueryParams ListSettingTemplatesQueryParams
	Security    ListSettingTemplatesSecurity
}

type ListSettingTemplatesResponse struct {
	Body                                         []byte
	ContentType                                  string
	StatusCode                                   int64
	ListSettingTemplates200ApplicationJSONObject *ListSettingTemplates200ApplicationJSON
}
