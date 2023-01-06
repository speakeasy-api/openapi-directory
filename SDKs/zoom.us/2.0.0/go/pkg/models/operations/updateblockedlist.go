package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateBlockedListPathParams struct {
	BlockedListID string `pathParam:"style=simple,explode=false,name=blockedListId"`
}

type UpdateBlockedListApplicationJSONBlockTypeEnum string

const (
	UpdateBlockedListApplicationJSONBlockTypeEnumInbound  UpdateBlockedListApplicationJSONBlockTypeEnum = "inbound"
	UpdateBlockedListApplicationJSONBlockTypeEnumOutbound UpdateBlockedListApplicationJSONBlockTypeEnum = "outbound"
)

type UpdateBlockedListApplicationJSONMatchTypeEnum string

const (
	UpdateBlockedListApplicationJSONMatchTypeEnumPhoneNumber UpdateBlockedListApplicationJSONMatchTypeEnum = "phoneNumber"
	UpdateBlockedListApplicationJSONMatchTypeEnumPrefix      UpdateBlockedListApplicationJSONMatchTypeEnum = "prefix"
)

type UpdateBlockedListApplicationJSONStatusEnum string

const (
	UpdateBlockedListApplicationJSONStatusEnumActive   UpdateBlockedListApplicationJSONStatusEnum = "active"
	UpdateBlockedListApplicationJSONStatusEnumInactive UpdateBlockedListApplicationJSONStatusEnum = "inactive"
)

type UpdateBlockedListApplicationJSON struct {
	BlockType   *UpdateBlockedListApplicationJSONBlockTypeEnum `json:"block_type,omitempty"`
	Comment     *string                                        `json:"comment,omitempty"`
	MatchType   *UpdateBlockedListApplicationJSONMatchTypeEnum `json:"match_type,omitempty"`
	PhoneNumber *string                                        `json:"phone_number,omitempty"`
	Status      *UpdateBlockedListApplicationJSONStatusEnum    `json:"status,omitempty"`
}

type UpdateBlockedListMultipartFormDataBlockTypeEnum string

const (
	UpdateBlockedListMultipartFormDataBlockTypeEnumInbound  UpdateBlockedListMultipartFormDataBlockTypeEnum = "inbound"
	UpdateBlockedListMultipartFormDataBlockTypeEnumOutbound UpdateBlockedListMultipartFormDataBlockTypeEnum = "outbound"
)

type UpdateBlockedListMultipartFormDataMatchTypeEnum string

const (
	UpdateBlockedListMultipartFormDataMatchTypeEnumPhoneNumber UpdateBlockedListMultipartFormDataMatchTypeEnum = "phoneNumber"
	UpdateBlockedListMultipartFormDataMatchTypeEnumPrefix      UpdateBlockedListMultipartFormDataMatchTypeEnum = "prefix"
)

type UpdateBlockedListMultipartFormDataStatusEnum string

const (
	UpdateBlockedListMultipartFormDataStatusEnumActive   UpdateBlockedListMultipartFormDataStatusEnum = "active"
	UpdateBlockedListMultipartFormDataStatusEnumInactive UpdateBlockedListMultipartFormDataStatusEnum = "inactive"
)

type UpdateBlockedListMultipartFormData struct {
	BlockType   *UpdateBlockedListMultipartFormDataBlockTypeEnum `multipartForm:"name=block_type"`
	Comment     *string                                          `multipartForm:"name=comment"`
	MatchType   *UpdateBlockedListMultipartFormDataMatchTypeEnum `multipartForm:"name=match_type"`
	PhoneNumber *string                                          `multipartForm:"name=phone_number"`
	Status      *UpdateBlockedListMultipartFormDataStatusEnum    `multipartForm:"name=status"`
}

type UpdateBlockedListRequests struct {
	Object  *UpdateBlockedListApplicationJSON   `request:"mediaType=application/json"`
	Object1 *UpdateBlockedListMultipartFormData `request:"mediaType=multipart/form-data"`
}

type UpdateBlockedListSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UpdateBlockedListRequest struct {
	PathParams UpdateBlockedListPathParams
	Request    *UpdateBlockedListRequests
	Security   UpdateBlockedListSecurity
}

type UpdateBlockedListResponse struct {
	Body                                   []byte
	ContentType                            string
	StatusCode                             int64
	UpdateBlockedList204ApplicationJSONAny *interface{}
}
