package operations

import (
	"openapi/pkg/models/shared"
)

type GetSettingTemplatePathParams struct {
	TemplateID string `pathParam:"style=simple,explode=false,name=templateId"`
}

type GetSettingTemplateQueryParams struct {
	CustomQueryFields *string `queryParam:"style=form,explode=true,name=custom_query_fields"`
}

type GetSettingTemplateSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type GetSettingTemplate200ApplicationJSONPolicyAdHocCallRecording struct {
	Enable                 *bool `json:"enable,omitempty"`
	RecordingStartPrompt   *bool `json:"recording_start_prompt,omitempty"`
	RecordingTranscription *bool `json:"recording_transcription,omitempty"`
}

type GetSettingTemplate200ApplicationJSONPolicyAutoCallRecording struct {
	Enable                 *bool   `json:"enable,omitempty"`
	RecordingCalls         *string `json:"recording_calls,omitempty"`
	RecordingStartPrompt   *bool   `json:"recording_start_prompt,omitempty"`
	RecordingTranscription *bool   `json:"recording_transcription,omitempty"`
}

type GetSettingTemplate200ApplicationJSONPolicySms struct {
	Enable           *bool `json:"enable,omitempty"`
	InternationalSms *bool `json:"international_sms,omitempty"`
}

type GetSettingTemplate200ApplicationJSONPolicyVoicemail struct {
	AllowTranscription *bool `json:"allow_transcription,omitempty"`
	Enable             *bool `json:"enable,omitempty"`
}

type GetSettingTemplate200ApplicationJSONPolicy struct {
	AdHocCallRecording *GetSettingTemplate200ApplicationJSONPolicyAdHocCallRecording `json:"ad_hoc_call_recording,omitempty"`
	AutoCallRecording  *GetSettingTemplate200ApplicationJSONPolicyAutoCallRecording  `json:"auto_call_recording,omitempty"`
	Sms                *GetSettingTemplate200ApplicationJSONPolicySms                `json:"sms,omitempty"`
	Voicemail          *GetSettingTemplate200ApplicationJSONPolicyVoicemail          `json:"voicemail,omitempty"`
}

type GetSettingTemplate200ApplicationJSONProfile struct {
	AreaCode *string `json:"area_code,omitempty"`
	Country  *string `json:"country,omitempty"`
}

type GetSettingTemplate200ApplicationJSONTypeEnum string

const (
	GetSettingTemplate200ApplicationJSONTypeEnumUser             GetSettingTemplate200ApplicationJSONTypeEnum = "user"
	GetSettingTemplate200ApplicationJSONTypeEnumGroup            GetSettingTemplate200ApplicationJSONTypeEnum = "group"
	GetSettingTemplate200ApplicationJSONTypeEnumAutoReceptionist GetSettingTemplate200ApplicationJSONTypeEnum = "autoReceptionist"
	GetSettingTemplate200ApplicationJSONTypeEnumCommonArea       GetSettingTemplate200ApplicationJSONTypeEnum = "commonArea"
	GetSettingTemplate200ApplicationJSONTypeEnumZr               GetSettingTemplate200ApplicationJSONTypeEnum = "zr"
	GetSettingTemplate200ApplicationJSONTypeEnumInterop          GetSettingTemplate200ApplicationJSONTypeEnum = "interop"
)

type GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum string

const (
	GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnumUser             GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum = "user"
	GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnumZoomRoom         GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum = "zoomRoom"
	GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnumCommonAreaPhone  GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum = "commonAreaPhone"
	GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnumAutoReceptionist GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum = "autoReceptionist"
	GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnumCallQueue        GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum = "callQueue"
	GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnumSharedLineGroup  GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum = "sharedLineGroup"
)

// GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperator
// Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
type GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperator struct {
	Enable *bool                                                                                               `json:"enable,omitempty"`
	ID     *string                                                                                             `json:"id,omitempty"`
	Type   *GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum `json:"type,omitempty"`
}

type GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursCustomHours struct {
	From    *string `json:"from,omitempty"`
	To      *string `json:"to,omitempty"`
	Type    *int64  `json:"type,omitempty"`
	Weekday *int64  `json:"weekday,omitempty"`
}

type GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursRingTypeEnum string

const (
	GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursRingTypeEnumZero GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursRingTypeEnum = "0"
	GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursRingTypeEnumOne  GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursRingTypeEnum = "1"
)

type GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnum string

const (
	GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnumFifteen    GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnum = "15"
	GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnumTwenty     GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnum = "20"
	GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnumTwentyFive GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnum = "25"
	GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnumThirty     GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnum = "30"
	GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnumThirtyFive GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnum = "35"
	GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnumForty      GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnum = "40"
	GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnumFortyFive  GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnum = "45"
	GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnumFifty      GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnum = "50"
	GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnumFiftyFive  GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnum = "55"
	GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnumSixty      GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnum = "60"
)

type GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHours struct {
	BusinessHourAction *int64                                                                                        `json:"business_hour_action,omitempty"`
	ConnectToOperator  *GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperator   `json:"connect_to_operator,omitempty"`
	CustomHours        []GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursCustomHours        `json:"custom_hours,omitempty"`
	RingType           *GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursRingTypeEnum        `json:"ring_type,omitempty"`
	RingingDuration    *GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnum `json:"ringing_duration,omitempty"`
	Type               *int64                                                                                        `json:"type,omitempty"`
}

type GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum string

const (
	GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnumUser             GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum = "user"
	GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnumZoomRoom         GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum = "zoomRoom"
	GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnumCommonAreaPhone  GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum = "commonAreaPhone"
	GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnumAutoReceptionist GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum = "autoReceptionist"
	GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnumCallQueue        GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum = "callQueue"
	GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnumSharedLineGroup  GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum = "sharedLineGroup"
)

// GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperator
// Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
type GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperator struct {
	Enable *bool                                                                                            `json:"enable,omitempty"`
	ID     *string                                                                                          `json:"id,omitempty"`
	Type   *GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum `json:"type,omitempty"`
}

type GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum string

const (
	GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnumFifteen    GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = "15"
	GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnumTwenty     GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = "20"
	GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnumTwentyFive GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = "25"
	GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnumThirty     GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = "30"
	GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnumThirtyFive GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = "35"
	GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnumForty      GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = "40"
	GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnumFortyFive  GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = "45"
	GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnumFifty      GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = "50"
	GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnumFiftyFive  GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = "55"
	GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnumSixty      GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = "60"
)

type GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHours struct {
	CloseHourAction   *int64                                                                                   `json:"close_hour_action,omitempty"`
	ConnectToOperator *GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperator `json:"connect_to_operator,omitempty"`
	MaxWaitTime       *GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum   `json:"max_wait_time,omitempty"`
}

type GetSettingTemplate200ApplicationJSONUserSettingsCallHandling struct {
	BusinessHours *GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHours `json:"business_hours,omitempty"`
	CloseHours    *GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHours    `json:"close_hours,omitempty"`
}

type GetSettingTemplate200ApplicationJSONUserSettingsDeskPhone struct {
	PinCode *string `json:"pin_code,omitempty"`
}

type GetSettingTemplate200ApplicationJSONUserSettingsHoldMusicEnum string

const (
	GetSettingTemplate200ApplicationJSONUserSettingsHoldMusicEnumDefault GetSettingTemplate200ApplicationJSONUserSettingsHoldMusicEnum = "default"
	GetSettingTemplate200ApplicationJSONUserSettingsHoldMusicEnumDisable GetSettingTemplate200ApplicationJSONUserSettingsHoldMusicEnum = "disable"
)

type GetSettingTemplate200ApplicationJSONUserSettings struct {
	AudioPromptLanguage       *string                                                        `json:"audio_prompt_language,omitempty"`
	BlockCallsWithoutCallerID *bool                                                          `json:"block_calls_without_caller_id,omitempty"`
	CallHandling              *GetSettingTemplate200ApplicationJSONUserSettingsCallHandling  `json:"call_handling,omitempty"`
	DeskPhone                 *GetSettingTemplate200ApplicationJSONUserSettingsDeskPhone     `json:"desk_phone,omitempty"`
	HoldMusic                 *GetSettingTemplate200ApplicationJSONUserSettingsHoldMusicEnum `json:"hold_music,omitempty"`
}

type GetSettingTemplate200ApplicationJSON struct {
	Description  *string                                           `json:"description,omitempty"`
	ID           *string                                           `json:"id,omitempty"`
	Name         *string                                           `json:"name,omitempty"`
	Policy       *GetSettingTemplate200ApplicationJSONPolicy       `json:"policy,omitempty"`
	Profile      *GetSettingTemplate200ApplicationJSONProfile      `json:"profile,omitempty"`
	Type         *GetSettingTemplate200ApplicationJSONTypeEnum     `json:"type,omitempty"`
	UserSettings *GetSettingTemplate200ApplicationJSONUserSettings `json:"user_settings,omitempty"`
}

type GetSettingTemplateRequest struct {
	PathParams  GetSettingTemplatePathParams
	QueryParams GetSettingTemplateQueryParams
	Security    GetSettingTemplateSecurity
}

type GetSettingTemplateResponse struct {
	Body                                       []byte
	ContentType                                string
	StatusCode                                 int64
	GetSettingTemplate200ApplicationJSONObject *GetSettingTemplate200ApplicationJSON
	GetSettingTemplate404ApplicationJSONAny    *interface{}
}
