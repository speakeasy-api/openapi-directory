package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAGroupMemberPathParams struct {
	GroupID  string `pathParam:"style=simple,explode=false,name=groupId"`
	MemberID string `pathParam:"style=simple,explode=false,name=memberId"`
}

type UpdateAGroupMemberApplicationJSONActionEnum string

const (
	UpdateAGroupMemberApplicationJSONActionEnumMove       UpdateAGroupMemberApplicationJSONActionEnum = "move"
	UpdateAGroupMemberApplicationJSONActionEnumSetPrimary UpdateAGroupMemberApplicationJSONActionEnum = "set_primary"
)

type UpdateAGroupMemberApplicationJSON struct {
	Action        UpdateAGroupMemberApplicationJSONActionEnum `json:"action"`
	TargetGroupID *string                                     `json:"target_group_id,omitempty"`
}

type UpdateAGroupMemberMultipartFormDataActionEnum string

const (
	UpdateAGroupMemberMultipartFormDataActionEnumMove       UpdateAGroupMemberMultipartFormDataActionEnum = "move"
	UpdateAGroupMemberMultipartFormDataActionEnumSetPrimary UpdateAGroupMemberMultipartFormDataActionEnum = "set_primary"
)

type UpdateAGroupMemberMultipartFormData struct {
	Action        UpdateAGroupMemberMultipartFormDataActionEnum `multipartForm:"name=action"`
	TargetGroupID *string                                       `multipartForm:"name=target_group_id"`
}

type UpdateAGroupMemberRequests struct {
	Object  *UpdateAGroupMemberApplicationJSON   `request:"mediaType=application/json"`
	Object1 *UpdateAGroupMemberMultipartFormData `request:"mediaType=multipart/form-data"`
}

type UpdateAGroupMemberSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UpdateAGroupMemberRequest struct {
	PathParams UpdateAGroupMemberPathParams
	Request    *UpdateAGroupMemberRequests
	Security   UpdateAGroupMemberSecurity
}

type UpdateAGroupMemberResponse struct {
	Body                                    []byte
	ContentType                             string
	StatusCode                              int64
	UpdateAGroupMember204ApplicationJSONAny *interface{}
}
