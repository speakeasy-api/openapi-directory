package operations

import (
	"openapi/pkg/models/shared"
)

type ListAccountPhoneNumbersExtensionTypeEnum string

const (
	ListAccountPhoneNumbersExtensionTypeEnumUser             ListAccountPhoneNumbersExtensionTypeEnum = "user"
	ListAccountPhoneNumbersExtensionTypeEnumCallQueue        ListAccountPhoneNumbersExtensionTypeEnum = "callQueue"
	ListAccountPhoneNumbersExtensionTypeEnumAutoReceptionist ListAccountPhoneNumbersExtensionTypeEnum = "autoReceptionist"
	ListAccountPhoneNumbersExtensionTypeEnumCommonAreaPhone  ListAccountPhoneNumbersExtensionTypeEnum = "commonAreaPhone"
)

type ListAccountPhoneNumbersNumberTypeEnum string

const (
	ListAccountPhoneNumbersNumberTypeEnumToll     ListAccountPhoneNumbersNumberTypeEnum = "toll"
	ListAccountPhoneNumbersNumberTypeEnumTollfree ListAccountPhoneNumbersNumberTypeEnum = "tollfree"
)

type ListAccountPhoneNumbersTypeEnum string

const (
	ListAccountPhoneNumbersTypeEnumAssigned   ListAccountPhoneNumbersTypeEnum = "assigned"
	ListAccountPhoneNumbersTypeEnumUnassigned ListAccountPhoneNumbersTypeEnum = "unassigned"
	ListAccountPhoneNumbersTypeEnumAll        ListAccountPhoneNumbersTypeEnum = "all"
)

type ListAccountPhoneNumbersQueryParams struct {
	ExtensionType  *ListAccountPhoneNumbersExtensionTypeEnum `queryParam:"style=form,explode=true,name=extension_type"`
	NextPageToken  *string                                   `queryParam:"style=form,explode=true,name=next_page_token"`
	NumberType     *ListAccountPhoneNumbersNumberTypeEnum    `queryParam:"style=form,explode=true,name=number_type"`
	PageSize       *int64                                    `queryParam:"style=form,explode=true,name=page_size"`
	PendingNumbers *bool                                     `queryParam:"style=form,explode=true,name=pending_numbers"`
	SiteID         *string                                   `queryParam:"style=form,explode=true,name=site_id"`
	Type           *ListAccountPhoneNumbersTypeEnum          `queryParam:"style=form,explode=true,name=type"`
}

type ListAccountPhoneNumbersSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersAssigneeTypeEnum string

const (
	ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersAssigneeTypeEnumUser             ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersAssigneeTypeEnum = "user"
	ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersAssigneeTypeEnumCallQueue        ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersAssigneeTypeEnum = "callQueue"
	ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersAssigneeTypeEnumAutoReceptionist ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersAssigneeTypeEnum = "autoReceptionist"
	ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersAssigneeTypeEnumCommonAreaPhone  ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersAssigneeTypeEnum = "commonAreaPhone"
)

type ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersAssignee struct {
	ExtensionNumber *int64                                                                 `json:"extension_number,omitempty"`
	ID              *string                                                                `json:"id,omitempty"`
	Name            *string                                                                `json:"name,omitempty"`
	Type            *ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersAssigneeTypeEnum `json:"type,omitempty"`
}

// ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersCarrier
// Displayed when the `type` request parameter is `byoc`.
type ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersCarrier struct {
	Code *string `json:"code,omitempty"`
	Name *string `json:"name,omitempty"`
}

type ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersNumberTypeEnum string

const (
	ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersNumberTypeEnumToll     ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersNumberTypeEnum = "toll"
	ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersNumberTypeEnumTollfree ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersNumberTypeEnum = "tollfree"
)

// ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersSipGroup
// Displayed when the `type` request parameter is `byoc`.
type ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersSipGroup struct {
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersSite struct {
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersSourceEnum string

const (
	ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersSourceEnumInternal ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersSourceEnum = "internal"
	ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersSourceEnumExternal ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersSourceEnum = "external"
)

type ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersStatusEnum string

const (
	ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersStatusEnumPending   ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersStatusEnum = "pending"
	ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersStatusEnumAvailable ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersStatusEnum = "available"
)

type ListAccountPhoneNumbers200ApplicationJSONPhoneNumbers struct {
	Assignee    *ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersAssignee       `json:"assignee,omitempty"`
	Capability  []string                                                             `json:"capability,omitempty"`
	Carrier     *ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersCarrier        `json:"carrier,omitempty"`
	DisplayName *string                                                              `json:"display_name,omitempty"`
	ID          *string                                                              `json:"id,omitempty"`
	Location    *string                                                              `json:"location,omitempty"`
	Number      *string                                                              `json:"number,omitempty"`
	NumberType  *ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersNumberTypeEnum `json:"number_type,omitempty"`
	SipGroup    *ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersSipGroup       `json:"sip_group,omitempty"`
	Site        *ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersSite           `json:"site,omitempty"`
	Source      *ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersSourceEnum     `json:"source,omitempty"`
	Status      *ListAccountPhoneNumbers200ApplicationJSONPhoneNumbersStatusEnum     `json:"status,omitempty"`
}

type ListAccountPhoneNumbers200ApplicationJSON struct {
	NextPageToken *string                                                 `json:"next_page_token,omitempty"`
	PageSize      *int64                                                  `json:"page_size,omitempty"`
	PhoneNumbers  []ListAccountPhoneNumbers200ApplicationJSONPhoneNumbers `json:"phone_numbers,omitempty"`
	TotalRecords  *int64                                                  `json:"total_records,omitempty"`
}

type ListAccountPhoneNumbersRequest struct {
	QueryParams ListAccountPhoneNumbersQueryParams
	Security    ListAccountPhoneNumbersSecurity
}

type ListAccountPhoneNumbersResponse struct {
	Body                                            []byte
	ContentType                                     string
	StatusCode                                      int64
	ListAccountPhoneNumbers200ApplicationJSONObject *ListAccountPhoneNumbers200ApplicationJSON
}
