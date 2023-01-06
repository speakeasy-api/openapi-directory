package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateRoomProfilePathParams struct {
	RoomID string `pathParam:"style=simple,explode=false,name=roomId"`
}

type UpdateRoomProfileApplicationJSONBasic struct {
	HideRoomInContacts *bool   `json:"hide_room_in_contacts,omitempty"`
	Name               *string `json:"name,omitempty"`
	RequiredCodeToExt  *bool   `json:"required_code_to_ext,omitempty"`
	RoomPasscode       *string `json:"room_passcode,omitempty"`
	SupportEmail       *string `json:"support_email,omitempty"`
	SupportPhone       *string `json:"support_phone,omitempty"`
}

type UpdateRoomProfileApplicationJSON struct {
	Basic *UpdateRoomProfileApplicationJSONBasic `json:"basic,omitempty"`
}

type UpdateRoomProfileMultipartFormDataBasic struct {
	HideRoomInContacts *bool   `json:"hide_room_in_contacts,omitempty"`
	Name               *string `json:"name,omitempty"`
	RequiredCodeToExt  *bool   `json:"required_code_to_ext,omitempty"`
	RoomPasscode       *string `json:"room_passcode,omitempty"`
	SupportEmail       *string `json:"support_email,omitempty"`
	SupportPhone       *string `json:"support_phone,omitempty"`
}

type UpdateRoomProfileMultipartFormData struct {
	Basic *UpdateRoomProfileMultipartFormDataBasic `multipartForm:"name=basic,json"`
}

type UpdateRoomProfileRequests struct {
	Object  *UpdateRoomProfileApplicationJSON   `request:"mediaType=application/json"`
	Object1 *UpdateRoomProfileMultipartFormData `request:"mediaType=multipart/form-data"`
}

type UpdateRoomProfileSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UpdateRoomProfileRequest struct {
	PathParams UpdateRoomProfilePathParams
	Request    *UpdateRoomProfileRequests
	Security   UpdateRoomProfileSecurity
}

type UpdateRoomProfileResponse struct {
	Body                                      []byte
	ContentType                               string
	StatusCode                                int64
	UpdateRoomProfile204ApplicationJSONObject map[string]interface{}
}
