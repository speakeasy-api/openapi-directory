package operations

import (
	"openapi/pkg/models/shared"
)

type AddAnumberToBlockedListApplicationJSONBlockTypeEnum string

const (
	AddAnumberToBlockedListApplicationJSONBlockTypeEnumInbound  AddAnumberToBlockedListApplicationJSONBlockTypeEnum = "inbound"
	AddAnumberToBlockedListApplicationJSONBlockTypeEnumOutbound AddAnumberToBlockedListApplicationJSONBlockTypeEnum = "outbound"
)

type AddAnumberToBlockedListApplicationJSONMatchTypeEnum string

const (
	AddAnumberToBlockedListApplicationJSONMatchTypeEnumPhoneNumber AddAnumberToBlockedListApplicationJSONMatchTypeEnum = "phoneNumber"
	AddAnumberToBlockedListApplicationJSONMatchTypeEnumPrefix      AddAnumberToBlockedListApplicationJSONMatchTypeEnum = "prefix"
)

type AddAnumberToBlockedListApplicationJSONStatusEnum string

const (
	AddAnumberToBlockedListApplicationJSONStatusEnumActive   AddAnumberToBlockedListApplicationJSONStatusEnum = "active"
	AddAnumberToBlockedListApplicationJSONStatusEnumInactive AddAnumberToBlockedListApplicationJSONStatusEnum = "inactive"
)

type AddAnumberToBlockedListApplicationJSON struct {
	BlockType   *AddAnumberToBlockedListApplicationJSONBlockTypeEnum `json:"block_type,omitempty"`
	Comment     *string                                              `json:"comment,omitempty"`
	MatchType   *AddAnumberToBlockedListApplicationJSONMatchTypeEnum `json:"match_type,omitempty"`
	PhoneNumber *string                                              `json:"phone_number,omitempty"`
	Status      *AddAnumberToBlockedListApplicationJSONStatusEnum    `json:"status,omitempty"`
}

type AddAnumberToBlockedListMultipartFormDataBlockTypeEnum string

const (
	AddAnumberToBlockedListMultipartFormDataBlockTypeEnumInbound  AddAnumberToBlockedListMultipartFormDataBlockTypeEnum = "inbound"
	AddAnumberToBlockedListMultipartFormDataBlockTypeEnumOutbound AddAnumberToBlockedListMultipartFormDataBlockTypeEnum = "outbound"
)

type AddAnumberToBlockedListMultipartFormDataMatchTypeEnum string

const (
	AddAnumberToBlockedListMultipartFormDataMatchTypeEnumPhoneNumber AddAnumberToBlockedListMultipartFormDataMatchTypeEnum = "phoneNumber"
	AddAnumberToBlockedListMultipartFormDataMatchTypeEnumPrefix      AddAnumberToBlockedListMultipartFormDataMatchTypeEnum = "prefix"
)

type AddAnumberToBlockedListMultipartFormDataStatusEnum string

const (
	AddAnumberToBlockedListMultipartFormDataStatusEnumActive   AddAnumberToBlockedListMultipartFormDataStatusEnum = "active"
	AddAnumberToBlockedListMultipartFormDataStatusEnumInactive AddAnumberToBlockedListMultipartFormDataStatusEnum = "inactive"
)

type AddAnumberToBlockedListMultipartFormData struct {
	BlockType   *AddAnumberToBlockedListMultipartFormDataBlockTypeEnum `multipartForm:"name=block_type"`
	Comment     *string                                                `multipartForm:"name=comment"`
	MatchType   *AddAnumberToBlockedListMultipartFormDataMatchTypeEnum `multipartForm:"name=match_type"`
	PhoneNumber *string                                                `multipartForm:"name=phone_number"`
	Status      *AddAnumberToBlockedListMultipartFormDataStatusEnum    `multipartForm:"name=status"`
}

type AddAnumberToBlockedListRequests struct {
	Object  *AddAnumberToBlockedListApplicationJSON   `request:"mediaType=application/json"`
	Object1 *AddAnumberToBlockedListMultipartFormData `request:"mediaType=multipart/form-data"`
}

type AddAnumberToBlockedListSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type AddAnumberToBlockedList201ApplicationJSON struct {
	ID *string `json:"id,omitempty"`
}

type AddAnumberToBlockedListRequest struct {
	Request  *AddAnumberToBlockedListRequests
	Security AddAnumberToBlockedListSecurity
}

type AddAnumberToBlockedListResponse struct {
	Body                                            []byte
	ContentType                                     string
	StatusCode                                      int64
	AddAnumberToBlockedList201ApplicationJSONObject *AddAnumberToBlockedList201ApplicationJSON
}
