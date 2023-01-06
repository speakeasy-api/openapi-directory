package operations

import (
	"openapi/pkg/models/shared"
)

type GetPhoneNumberDetailsPathParams struct {
	NumberID string `pathParam:"style=simple,explode=false,name=numberId"`
}

type GetPhoneNumberDetailsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type GetPhoneNumberDetails200ApplicationJSONAssigneeTypeEnum string

const (
	GetPhoneNumberDetails200ApplicationJSONAssigneeTypeEnumUser             GetPhoneNumberDetails200ApplicationJSONAssigneeTypeEnum = "user"
	GetPhoneNumberDetails200ApplicationJSONAssigneeTypeEnumCallQueue        GetPhoneNumberDetails200ApplicationJSONAssigneeTypeEnum = "callQueue"
	GetPhoneNumberDetails200ApplicationJSONAssigneeTypeEnumAutoReceptionist GetPhoneNumberDetails200ApplicationJSONAssigneeTypeEnum = "autoReceptionist"
	GetPhoneNumberDetails200ApplicationJSONAssigneeTypeEnumCommonAreaPhone  GetPhoneNumberDetails200ApplicationJSONAssigneeTypeEnum = "commonAreaPhone"
)

type GetPhoneNumberDetails200ApplicationJSONAssignee struct {
	ExtensionNumber *int64                                                   `json:"extension_number,omitempty"`
	ID              *string                                                  `json:"id,omitempty"`
	Name            *string                                                  `json:"name,omitempty"`
	Type            *GetPhoneNumberDetails200ApplicationJSONAssigneeTypeEnum `json:"type,omitempty"`
}

type GetPhoneNumberDetails200ApplicationJSONNumberTypeEnum string

const (
	GetPhoneNumberDetails200ApplicationJSONNumberTypeEnumToll     GetPhoneNumberDetails200ApplicationJSONNumberTypeEnum = "toll"
	GetPhoneNumberDetails200ApplicationJSONNumberTypeEnumTollfree GetPhoneNumberDetails200ApplicationJSONNumberTypeEnum = "tollfree"
)

type GetPhoneNumberDetails200ApplicationJSONSite struct {
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type GetPhoneNumberDetails200ApplicationJSONSourceEnum string

const (
	GetPhoneNumberDetails200ApplicationJSONSourceEnumInternal GetPhoneNumberDetails200ApplicationJSONSourceEnum = "internal"
	GetPhoneNumberDetails200ApplicationJSONSourceEnumExternal GetPhoneNumberDetails200ApplicationJSONSourceEnum = "external"
)

type GetPhoneNumberDetails200ApplicationJSONStatusEnum string

const (
	GetPhoneNumberDetails200ApplicationJSONStatusEnumPending   GetPhoneNumberDetails200ApplicationJSONStatusEnum = "pending"
	GetPhoneNumberDetails200ApplicationJSONStatusEnumAvailable GetPhoneNumberDetails200ApplicationJSONStatusEnum = "available"
)

type GetPhoneNumberDetails200ApplicationJSON struct {
	Assignee    *GetPhoneNumberDetails200ApplicationJSONAssignee       `json:"assignee,omitempty"`
	Capability  []string                                               `json:"capability,omitempty"`
	DisplayName *string                                                `json:"display_name,omitempty"`
	ID          *string                                                `json:"id,omitempty"`
	Location    *string                                                `json:"location,omitempty"`
	Number      *string                                                `json:"number,omitempty"`
	NumberType  *GetPhoneNumberDetails200ApplicationJSONNumberTypeEnum `json:"number_type,omitempty"`
	Site        *GetPhoneNumberDetails200ApplicationJSONSite           `json:"site,omitempty"`
	Source      *GetPhoneNumberDetails200ApplicationJSONSourceEnum     `json:"source,omitempty"`
	Status      *GetPhoneNumberDetails200ApplicationJSONStatusEnum     `json:"status,omitempty"`
}

type GetPhoneNumberDetailsRequest struct {
	PathParams GetPhoneNumberDetailsPathParams
	Security   GetPhoneNumberDetailsSecurity
}

type GetPhoneNumberDetailsResponse struct {
	Body                                          []byte
	ContentType                                   string
	StatusCode                                    int64
	GetPhoneNumberDetails200ApplicationJSONObject *GetPhoneNumberDetails200ApplicationJSON
}
