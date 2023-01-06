package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSettingTemplatePathParams struct {
	TemplateID string `pathParam:"style=simple,explode=false,name=templateId"`
}

type UpdateSettingTemplateApplicationJSONPolicyAdHocCallRecording struct {
	Enable                 *bool `json:"enable,omitempty"`
	RecordingStartPrompt   *bool `json:"recording_start_prompt,omitempty"`
	RecordingTranscription *bool `json:"recording_transcription,omitempty"`
}

type UpdateSettingTemplateApplicationJSONPolicyAutoCallRecordingRecordingCallsEnum string

const (
	UpdateSettingTemplateApplicationJSONPolicyAutoCallRecordingRecordingCallsEnumInbound  UpdateSettingTemplateApplicationJSONPolicyAutoCallRecordingRecordingCallsEnum = "inbound"
	UpdateSettingTemplateApplicationJSONPolicyAutoCallRecordingRecordingCallsEnumOutbound UpdateSettingTemplateApplicationJSONPolicyAutoCallRecordingRecordingCallsEnum = "outbound"
	UpdateSettingTemplateApplicationJSONPolicyAutoCallRecordingRecordingCallsEnumBoth     UpdateSettingTemplateApplicationJSONPolicyAutoCallRecordingRecordingCallsEnum = "both"
)

type UpdateSettingTemplateApplicationJSONPolicyAutoCallRecording struct {
	Enable                 *bool                                                                          `json:"enable,omitempty"`
	RecordingCalls         *UpdateSettingTemplateApplicationJSONPolicyAutoCallRecordingRecordingCallsEnum `json:"recording_calls,omitempty"`
	RecordingStartPrompt   *bool                                                                          `json:"recording_start_prompt,omitempty"`
	RecordingTranscription *bool                                                                          `json:"recording_transcription,omitempty"`
}

type UpdateSettingTemplateApplicationJSONPolicySms struct {
	Enable           *bool `json:"enable,omitempty"`
	InternationalSms *bool `json:"international_sms,omitempty"`
}

type UpdateSettingTemplateApplicationJSONPolicyVoicemail struct {
	AllowTranscription *bool `json:"allow_transcription,omitempty"`
	Enable             *bool `json:"enable,omitempty"`
}

type UpdateSettingTemplateApplicationJSONPolicy struct {
	AdHocCallRecording *UpdateSettingTemplateApplicationJSONPolicyAdHocCallRecording `json:"ad_hoc_call_recording,omitempty"`
	AutoCallRecording  *UpdateSettingTemplateApplicationJSONPolicyAutoCallRecording  `json:"auto_call_recording,omitempty"`
	Sms                *UpdateSettingTemplateApplicationJSONPolicySms                `json:"sms,omitempty"`
	Voicemail          *UpdateSettingTemplateApplicationJSONPolicyVoicemail          `json:"voicemail,omitempty"`
}

type UpdateSettingTemplateApplicationJSONProfile struct {
	AreaCode *string `json:"area_code,omitempty"`
	Country  *string `json:"country,omitempty"`
}

type UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum string

const (
	UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnumUser             UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum = "user"
	UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnumZoomRoom         UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum = "zoomRoom"
	UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnumCommonAreaPhone  UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum = "commonAreaPhone"
	UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnumAutoReceptionist UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum = "autoReceptionist"
	UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnumCallQueue        UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum = "callQueue"
	UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnumSharedLineGroup  UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum = "sharedLineGroup"
)

// UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperator
// Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
type UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperator struct {
	Enable *bool                                                                                               `json:"enable,omitempty"`
	ID     *string                                                                                             `json:"id,omitempty"`
	Type   *UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum `json:"type,omitempty"`
}

type UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursCustomHours struct {
	From    *string `json:"from,omitempty"`
	To      *string `json:"to,omitempty"`
	Type    *int64  `json:"type,omitempty"`
	Weekday *int64  `json:"weekday,omitempty"`
}

type UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursRingTypeEnum string

const (
	UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursRingTypeEnumZero UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursRingTypeEnum = "0"
	UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursRingTypeEnumOne  UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursRingTypeEnum = "1"
)

type UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnum string

const (
	UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnumFifteen    UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnum = "15"
	UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnumTwenty     UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnum = "20"
	UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnumTwentyFive UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnum = "25"
	UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnumThirty     UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnum = "30"
	UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnumThirtyFive UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnum = "35"
	UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnumForty      UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnum = "40"
	UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnumFortyFive  UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnum = "45"
	UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnumFifty      UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnum = "50"
	UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnumFiftyFive  UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnum = "55"
	UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnumSixty      UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnum = "60"
)

type UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHours struct {
	BusinessHourAction *int64                                                                                        `json:"business_hour_action,omitempty"`
	ConnectToOperator  *UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperator   `json:"connect_to_operator,omitempty"`
	CustomHours        []UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursCustomHours        `json:"custom_hours,omitempty"`
	RingType           *UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursRingTypeEnum        `json:"ring_type,omitempty"`
	RingingDuration    *UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnum `json:"ringing_duration,omitempty"`
	Type               *int64                                                                                        `json:"type,omitempty"`
}

type UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum string

const (
	UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnumUser             UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum = "user"
	UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnumZoomRoom         UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum = "zoomRoom"
	UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnumCommonAreaPhone  UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum = "commonAreaPhone"
	UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnumAutoReceptionist UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum = "autoReceptionist"
	UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnumCallQueue        UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum = "callQueue"
	UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnumSharedLineGroup  UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum = "sharedLineGroup"
)

// UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperator
// Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
type UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperator struct {
	Enable *bool                                                                                            `json:"enable,omitempty"`
	ID     *string                                                                                          `json:"id,omitempty"`
	Type   *UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum `json:"type,omitempty"`
}

type UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum string

const (
	UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnumFifteen    UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = "15"
	UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnumTwenty     UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = "20"
	UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnumTwentyFive UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = "25"
	UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnumThirty     UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = "30"
	UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnumThirtyFive UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = "35"
	UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnumForty      UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = "40"
	UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnumFortyFive  UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = "45"
	UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnumFifty      UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = "50"
	UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnumFiftyFive  UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = "55"
	UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnumSixty      UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = "60"
)

type UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHours struct {
	CloseHourAction   *int64                                                                                   `json:"close_hour_action,omitempty"`
	ConnectToOperator *UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperator `json:"connect_to_operator,omitempty"`
	MaxWaitTime       *UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum   `json:"max_wait_time,omitempty"`
}

type UpdateSettingTemplateApplicationJSONUserSettingsCallHandling struct {
	BusinessHours *UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHours `json:"business_hours,omitempty"`
	CloseHours    *UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHours    `json:"close_hours,omitempty"`
}

type UpdateSettingTemplateApplicationJSONUserSettingsDeskPhone struct {
	PinCode *string `json:"pin_code,omitempty"`
}

type UpdateSettingTemplateApplicationJSONUserSettingsHoldMusicEnum string

const (
	UpdateSettingTemplateApplicationJSONUserSettingsHoldMusicEnumDefault UpdateSettingTemplateApplicationJSONUserSettingsHoldMusicEnum = "default"
	UpdateSettingTemplateApplicationJSONUserSettingsHoldMusicEnumDisable UpdateSettingTemplateApplicationJSONUserSettingsHoldMusicEnum = "disable"
)

type UpdateSettingTemplateApplicationJSONUserSettings struct {
	AudioPromptLanguage       *string                                                        `json:"audio_prompt_language,omitempty"`
	BlockCallsWithoutCallerID *bool                                                          `json:"block_calls_without_caller_id,omitempty"`
	CallHandling              *UpdateSettingTemplateApplicationJSONUserSettingsCallHandling  `json:"call_handling,omitempty"`
	DeskPhone                 *UpdateSettingTemplateApplicationJSONUserSettingsDeskPhone     `json:"desk_phone,omitempty"`
	HoldMusic                 *UpdateSettingTemplateApplicationJSONUserSettingsHoldMusicEnum `json:"hold_music,omitempty"`
}

type UpdateSettingTemplateApplicationJSON struct {
	Description  *string                                           `json:"description,omitempty"`
	Name         *string                                           `json:"name,omitempty"`
	Policy       *UpdateSettingTemplateApplicationJSONPolicy       `json:"policy,omitempty"`
	Profile      *UpdateSettingTemplateApplicationJSONProfile      `json:"profile,omitempty"`
	UserSettings *UpdateSettingTemplateApplicationJSONUserSettings `json:"user_settings,omitempty"`
}

type UpdateSettingTemplateMultipartFormDataPolicyAdHocCallRecording struct {
	Enable                 *bool `json:"enable,omitempty"`
	RecordingStartPrompt   *bool `json:"recording_start_prompt,omitempty"`
	RecordingTranscription *bool `json:"recording_transcription,omitempty"`
}

type UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecordingRecordingCallsEnum string

const (
	UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecordingRecordingCallsEnumInbound  UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecordingRecordingCallsEnum = "inbound"
	UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecordingRecordingCallsEnumOutbound UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecordingRecordingCallsEnum = "outbound"
	UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecordingRecordingCallsEnumBoth     UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecordingRecordingCallsEnum = "both"
)

type UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecording struct {
	Enable                 *bool                                                                            `json:"enable,omitempty"`
	RecordingCalls         *UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecordingRecordingCallsEnum `json:"recording_calls,omitempty"`
	RecordingStartPrompt   *bool                                                                            `json:"recording_start_prompt,omitempty"`
	RecordingTranscription *bool                                                                            `json:"recording_transcription,omitempty"`
}

type UpdateSettingTemplateMultipartFormDataPolicySms struct {
	Enable           *bool `json:"enable,omitempty"`
	InternationalSms *bool `json:"international_sms,omitempty"`
}

type UpdateSettingTemplateMultipartFormDataPolicyVoicemail struct {
	AllowTranscription *bool `json:"allow_transcription,omitempty"`
	Enable             *bool `json:"enable,omitempty"`
}

type UpdateSettingTemplateMultipartFormDataPolicy struct {
	AdHocCallRecording *UpdateSettingTemplateMultipartFormDataPolicyAdHocCallRecording `json:"ad_hoc_call_recording,omitempty"`
	AutoCallRecording  *UpdateSettingTemplateMultipartFormDataPolicyAutoCallRecording  `json:"auto_call_recording,omitempty"`
	Sms                *UpdateSettingTemplateMultipartFormDataPolicySms                `json:"sms,omitempty"`
	Voicemail          *UpdateSettingTemplateMultipartFormDataPolicyVoicemail          `json:"voicemail,omitempty"`
}

type UpdateSettingTemplateMultipartFormDataProfile struct {
	AreaCode *string `json:"area_code,omitempty"`
	Country  *string `json:"country,omitempty"`
}

type UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum string

const (
	UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnumUser             UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum = "user"
	UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnumZoomRoom         UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum = "zoomRoom"
	UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnumCommonAreaPhone  UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum = "commonAreaPhone"
	UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnumAutoReceptionist UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum = "autoReceptionist"
	UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnumCallQueue        UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum = "callQueue"
	UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnumSharedLineGroup  UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum = "sharedLineGroup"
)

// UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperator
// Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
type UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperator struct {
	Enable *bool                                                                                                 `json:"enable,omitempty"`
	ID     *string                                                                                               `json:"id,omitempty"`
	Type   *UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum `json:"type,omitempty"`
}

type UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursCustomHours struct {
	From    *string `json:"from,omitempty"`
	To      *string `json:"to,omitempty"`
	Type    *int64  `json:"type,omitempty"`
	Weekday *int64  `json:"weekday,omitempty"`
}

type UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingTypeEnum string

const (
	UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingTypeEnumZero UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingTypeEnum = "0"
	UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingTypeEnumOne  UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingTypeEnum = "1"
)

type UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnum string

const (
	UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnumFifteen    UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnum = "15"
	UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnumTwenty     UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnum = "20"
	UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnumTwentyFive UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnum = "25"
	UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnumThirty     UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnum = "30"
	UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnumThirtyFive UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnum = "35"
	UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnumForty      UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnum = "40"
	UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnumFortyFive  UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnum = "45"
	UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnumFifty      UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnum = "50"
	UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnumFiftyFive  UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnum = "55"
	UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnumSixty      UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnum = "60"
)

type UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHours struct {
	BusinessHourAction *int64                                                                                          `json:"business_hour_action,omitempty"`
	ConnectToOperator  *UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperator   `json:"connect_to_operator,omitempty"`
	CustomHours        []UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursCustomHours        `json:"custom_hours,omitempty"`
	RingType           *UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingTypeEnum        `json:"ring_type,omitempty"`
	RingingDuration    *UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnum `json:"ringing_duration,omitempty"`
	Type               *int64                                                                                          `json:"type,omitempty"`
}

type UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum string

const (
	UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnumUser             UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum = "user"
	UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnumZoomRoom         UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum = "zoomRoom"
	UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnumCommonAreaPhone  UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum = "commonAreaPhone"
	UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnumAutoReceptionist UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum = "autoReceptionist"
	UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnumCallQueue        UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum = "callQueue"
	UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnumSharedLineGroup  UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum = "sharedLineGroup"
)

// UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperator
// Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
type UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperator struct {
	Enable *bool                                                                                              `json:"enable,omitempty"`
	ID     *string                                                                                            `json:"id,omitempty"`
	Type   *UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum `json:"type,omitempty"`
}

type UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum string

const (
	UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnumFifteen    UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = "15"
	UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnumTwenty     UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = "20"
	UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnumTwentyFive UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = "25"
	UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnumThirty     UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = "30"
	UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnumThirtyFive UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = "35"
	UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnumForty      UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = "40"
	UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnumFortyFive  UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = "45"
	UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnumFifty      UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = "50"
	UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnumFiftyFive  UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = "55"
	UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnumSixty      UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum = "60"
)

type UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHours struct {
	CloseHourAction   *int64                                                                                     `json:"close_hour_action,omitempty"`
	ConnectToOperator *UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperator `json:"connect_to_operator,omitempty"`
	MaxWaitTime       *UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum   `json:"max_wait_time,omitempty"`
}

type UpdateSettingTemplateMultipartFormDataUserSettingsCallHandling struct {
	BusinessHours *UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHours `json:"business_hours,omitempty"`
	CloseHours    *UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHours    `json:"close_hours,omitempty"`
}

type UpdateSettingTemplateMultipartFormDataUserSettingsDeskPhone struct {
	PinCode *string `json:"pin_code,omitempty"`
}

type UpdateSettingTemplateMultipartFormDataUserSettingsHoldMusicEnum string

const (
	UpdateSettingTemplateMultipartFormDataUserSettingsHoldMusicEnumDefault UpdateSettingTemplateMultipartFormDataUserSettingsHoldMusicEnum = "default"
	UpdateSettingTemplateMultipartFormDataUserSettingsHoldMusicEnumDisable UpdateSettingTemplateMultipartFormDataUserSettingsHoldMusicEnum = "disable"
)

type UpdateSettingTemplateMultipartFormDataUserSettings struct {
	AudioPromptLanguage       *string                                                          `json:"audio_prompt_language,omitempty"`
	BlockCallsWithoutCallerID *bool                                                            `json:"block_calls_without_caller_id,omitempty"`
	CallHandling              *UpdateSettingTemplateMultipartFormDataUserSettingsCallHandling  `json:"call_handling,omitempty"`
	DeskPhone                 *UpdateSettingTemplateMultipartFormDataUserSettingsDeskPhone     `json:"desk_phone,omitempty"`
	HoldMusic                 *UpdateSettingTemplateMultipartFormDataUserSettingsHoldMusicEnum `json:"hold_music,omitempty"`
}

type UpdateSettingTemplateMultipartFormData struct {
	Description  *string                                             `multipartForm:"name=description"`
	Name         *string                                             `multipartForm:"name=name"`
	Policy       *UpdateSettingTemplateMultipartFormDataPolicy       `multipartForm:"name=policy,json"`
	Profile      *UpdateSettingTemplateMultipartFormDataProfile      `multipartForm:"name=profile,json"`
	UserSettings *UpdateSettingTemplateMultipartFormDataUserSettings `multipartForm:"name=user_settings,json"`
}

type UpdateSettingTemplateRequests struct {
	Object  *UpdateSettingTemplateApplicationJSON   `request:"mediaType=application/json"`
	Object1 *UpdateSettingTemplateMultipartFormData `request:"mediaType=multipart/form-data"`
}

type UpdateSettingTemplateSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UpdateSettingTemplateRequest struct {
	PathParams UpdateSettingTemplatePathParams
	Request    *UpdateSettingTemplateRequests
	Security   UpdateSettingTemplateSecurity
}

type UpdateSettingTemplateResponse struct {
	Body                                       []byte
	ContentType                                string
	StatusCode                                 int64
	UpdateSettingTemplate204ApplicationJSONAny *interface{}
}
