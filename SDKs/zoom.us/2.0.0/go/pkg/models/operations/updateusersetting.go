package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateUserSettingPathParams struct {
	SettingType string `pathParam:"style=simple,explode=false,name=settingType"`
	UserID      string `pathParam:"style=simple,explode=false,name=userId"`
}

// UpdateUserSettingApplicationJSONVoiceMail
// Update the voicemail setting.
type UpdateUserSettingApplicationJSONVoiceMail struct {
	AccessUserID *string `json:"access_user_id,omitempty"`
	Delete       *bool   `json:"delete,omitempty"`
	Download     *bool   `json:"download,omitempty"`
	SharedID     *string `json:"shared_id,omitempty"`
}

type UpdateUserSettingApplicationJSON struct {
	VoiceMail *UpdateUserSettingApplicationJSONVoiceMail `json:"voice_mail,omitempty"`
}

// UpdateUserSettingMultipartFormDataVoiceMail
// Update the voicemail setting.
type UpdateUserSettingMultipartFormDataVoiceMail struct {
	AccessUserID *string `json:"access_user_id,omitempty"`
	Delete       *bool   `json:"delete,omitempty"`
	Download     *bool   `json:"download,omitempty"`
	SharedID     *string `json:"shared_id,omitempty"`
}

type UpdateUserSettingMultipartFormData struct {
	VoiceMail *UpdateUserSettingMultipartFormDataVoiceMail `multipartForm:"name=voice_mail,json"`
}

type UpdateUserSettingRequests struct {
	Object  *UpdateUserSettingApplicationJSON   `request:"mediaType=application/json"`
	Object1 *UpdateUserSettingMultipartFormData `request:"mediaType=multipart/form-data"`
}

type UpdateUserSettingSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UpdateUserSettingRequest struct {
	PathParams UpdateUserSettingPathParams
	Request    *UpdateUserSettingRequests
	Security   UpdateUserSettingSecurity
}

type UpdateUserSettingResponse struct {
	Body                                      []byte
	ContentType                               string
	StatusCode                                int64
	UpdateUserSetting204ApplicationJSONAny    *interface{}
	UpdateUserSetting400ApplicationJSONObject map[string]interface{}
}
