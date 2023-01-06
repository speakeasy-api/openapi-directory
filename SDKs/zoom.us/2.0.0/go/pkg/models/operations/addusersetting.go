package operations

import (
	"openapi/pkg/models/shared"
)

type AddUserSettingPathParams struct {
	SettingType string `pathParam:"style=simple,explode=false,name=settingType"`
	UserID      string `pathParam:"style=simple,explode=false,name=userId"`
}

// AddUserSettingApplicationJSONVoiceMail
// Update the voicemail setting.
type AddUserSettingApplicationJSONVoiceMail struct {
	AccessUserID *string `json:"access_user_id,omitempty"`
	Delete       *bool   `json:"delete,omitempty"`
	Download     *bool   `json:"download,omitempty"`
}

type AddUserSettingApplicationJSON struct {
	VoiceMail *AddUserSettingApplicationJSONVoiceMail `json:"voice_mail,omitempty"`
}

// AddUserSettingMultipartFormDataVoiceMail
// Update the voicemail setting.
type AddUserSettingMultipartFormDataVoiceMail struct {
	AccessUserID *string `json:"access_user_id,omitempty"`
	Delete       *bool   `json:"delete,omitempty"`
	Download     *bool   `json:"download,omitempty"`
}

type AddUserSettingMultipartFormData struct {
	VoiceMail *AddUserSettingMultipartFormDataVoiceMail `multipartForm:"name=voice_mail,json"`
}

type AddUserSettingRequests struct {
	Object  *AddUserSettingApplicationJSON   `request:"mediaType=application/json"`
	Object1 *AddUserSettingMultipartFormData `request:"mediaType=multipart/form-data"`
}

type AddUserSettingSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type AddUserSetting201ApplicationJSONVoiceMail struct {
	AccessUserID *string `json:"access_user_id,omitempty"`
	Delete       *bool   `json:"delete,omitempty"`
	Download     *bool   `json:"download,omitempty"`
	SharedID     *string `json:"shared_id,omitempty"`
}

type AddUserSetting201ApplicationJSON struct {
	VoiceMail *AddUserSetting201ApplicationJSONVoiceMail `json:"voice_mail,omitempty"`
}

type AddUserSettingRequest struct {
	PathParams AddUserSettingPathParams
	Request    *AddUserSettingRequests
	Security   AddUserSettingSecurity
}

type AddUserSettingResponse struct {
	Body                                   []byte
	ContentType                            string
	StatusCode                             int64
	AddUserSetting201ApplicationJSONObject *AddUserSetting201ApplicationJSON
	AddUserSetting400ApplicationJSONAny    *interface{}
}
