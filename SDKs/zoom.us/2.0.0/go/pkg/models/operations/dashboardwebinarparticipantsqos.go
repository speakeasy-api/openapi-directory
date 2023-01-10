package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type DashboardWebinarParticipantsQosPathParams struct {
	WebinarID string `pathParam:"style=simple,explode=false,name=webinarId"`
}

type DashboardWebinarParticipantsQosTypeEnum string

const (
	DashboardWebinarParticipantsQOSTypeEnumPast DashboardWebinarParticipantsQosTypeEnum = "past"
	DashboardWebinarParticipantsQOSTypeEnumLive DashboardWebinarParticipantsQosTypeEnum = "live"
)

type DashboardWebinarParticipantsQosQueryParams struct {
	NextPageToken *string                                  `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64                                   `queryParam:"style=form,explode=true,name=page_size"`
	Type          *DashboardWebinarParticipantsQosTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type DashboardWebinarParticipantsQosSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

// DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc
// QoS metrics on screen shares by a participant who joined the meeting via a Cloud Room Connector.
type DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc struct {
	AvgLoss *string `json:"avg_loss,omitempty"`
	Bitrate *string `json:"bitrate,omitempty"`
	Jitter  *string `json:"jitter,omitempty"`
	Latency *string `json:"latency,omitempty"`
	MaxLoss *string `json:"max_loss,omitempty"`
}

// DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc
// QoS metrics on screen shares output being received by a participant who joined the meeting via a Cloud Room Connector.
type DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc struct {
	AvgLoss *string `json:"avg_loss,omitempty"`
	Bitrate *string `json:"bitrate,omitempty"`
	Jitter  *string `json:"jitter,omitempty"`
	Latency *string `json:"latency,omitempty"`
	MaxLoss *string `json:"max_loss,omitempty"`
}

// DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject
// Quality of Service object.
type DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject struct {
	AvgLoss    *string `json:"avg_loss,omitempty"`
	Bitrate    *string `json:"bitrate,omitempty"`
	FrameRate  *string `json:"frame_rate,omitempty"`
	Jitter     *string `json:"jitter,omitempty"`
	Latency    *string `json:"latency,omitempty"`
	MaxLoss    *string `json:"max_loss,omitempty"`
	Resolution *string `json:"resolution,omitempty"`
}

// DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc
// QoS metrics on audio being sent by a participant who joined the meeting via a Cloud Room Connector.
type DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc struct {
	AvgLoss *string `json:"avg_loss,omitempty"`
	Bitrate *string `json:"bitrate,omitempty"`
	Jitter  *string `json:"jitter,omitempty"`
	Latency *string `json:"latency,omitempty"`
	MaxLoss *string `json:"max_loss,omitempty"`
}

// DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc
// QoS metrics on audio received by a participant who joined the meeting via a Cloud Room Connector.
type DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc struct {
	AvgLoss *string `json:"avg_loss,omitempty"`
	Bitrate *string `json:"bitrate,omitempty"`
	Jitter  *string `json:"jitter,omitempty"`
	Latency *string `json:"latency,omitempty"`
	MaxLoss *string `json:"max_loss,omitempty"`
}

// DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject1
// Quality of Service object.
type DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject1 struct {
	AvgLoss *string `json:"avg_loss,omitempty"`
	Bitrate *string `json:"bitrate,omitempty"`
	Jitter  *string `json:"jitter,omitempty"`
	Latency *string `json:"latency,omitempty"`
	MaxLoss *string `json:"max_loss,omitempty"`
}

type DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosCPUUsage struct {
	SystemMaxCPUUsage *string `json:"system_max_cpu_usage,omitempty"`
	ZoomAvgCPUUsage   *string `json:"zoom_avg_cpu_usage,omitempty"`
	ZoomMaxCPUUsage   *string `json:"zoom_max_cpu_usage,omitempty"`
	ZoomMinCPUUsage   *string `json:"zoom_min_cpu_usage,omitempty"`
}

// DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc
// QoS metrics on video input being sent from a Cloud Room Connector used by the participant to join the meeting.
type DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc struct {
	AvgLoss *string `json:"avg_loss,omitempty"`
	Bitrate *string `json:"bitrate,omitempty"`
	Jitter  *string `json:"jitter,omitempty"`
	Latency *string `json:"latency,omitempty"`
	MaxLoss *string `json:"max_loss,omitempty"`
}

// DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc
// QoS metrics on video output received by a participant who joined the meeting via a Cloud Room Connector.
type DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc struct {
	AvgLoss *string `json:"avg_loss,omitempty"`
	Bitrate *string `json:"bitrate,omitempty"`
	Jitter  *string `json:"jitter,omitempty"`
	Latency *string `json:"latency,omitempty"`
	MaxLoss *string `json:"max_loss,omitempty"`
}

type DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos struct {
	AsDeviceFromCrc    *DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc    `json:"as_device_from_crc,omitempty"`
	AsDeviceToCrc      *DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc      `json:"as_device_to_crc,omitempty"`
	AsInput            *DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject          `json:"as_input,omitempty"`
	AsOutput           *DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject          `json:"as_output,omitempty"`
	AudioDeviceFromCrc *DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc `json:"audio_device_from_crc,omitempty"`
	AudioDeviceToCrc   *DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc   `json:"audio_device_to_crc,omitempty"`
	AudioInput         *DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject1         `json:"audio_input,omitempty"`
	AudioOutput        *DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject1         `json:"audio_output,omitempty"`
	CPUUsage           *DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosCPUUsage           `json:"cpu_usage,omitempty"`
	DateTime           *time.Time                                                                                `json:"date_time,omitempty"`
	VideoDeviceFromCrc *DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc `json:"video_device_from_crc,omitempty"`
	VideoDeviceToCrc   *DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc   `json:"video_device_to_crc,omitempty"`
	VideoInput         *DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject          `json:"video_input,omitempty"`
	VideoOutput        *DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject          `json:"video_output,omitempty"`
}

// DashboardWebinarParticipantsQosParticipantQosListParticipantQos
// Participant QOS.
type DashboardWebinarParticipantsQosParticipantQosListParticipantQos struct {
	Device     *string                                                                  `json:"device,omitempty"`
	Domain     *string                                                                  `json:"domain,omitempty"`
	HarddiskID *string                                                                  `json:"harddisk_id,omitempty"`
	IPAddress  *string                                                                  `json:"ip_address,omitempty"`
	JoinTime   *time.Time                                                               `json:"join_time,omitempty"`
	LeaveTime  *time.Time                                                               `json:"leave_time,omitempty"`
	Location   *string                                                                  `json:"location,omitempty"`
	MacAddr    *string                                                                  `json:"mac_addr,omitempty"`
	PcName     *string                                                                  `json:"pc_name,omitempty"`
	UserID     *string                                                                  `json:"user_id,omitempty"`
	UserName   *string                                                                  `json:"user_name,omitempty"`
	UserQos    []DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos `json:"user_qos,omitempty"`
	Version    *string                                                                  `json:"version,omitempty"`
}

// DashboardWebinarParticipantsQosParticipantQosList
// Pagination object.
type DashboardWebinarParticipantsQosParticipantQosList struct {
	NextPageToken *string                                                           `json:"next_page_token,omitempty"`
	PageCount     *int64                                                            `json:"page_count,omitempty"`
	PageSize      *int64                                                            `json:"page_size,omitempty"`
	Participants  []DashboardWebinarParticipantsQosParticipantQosListParticipantQos `json:"participants,omitempty"`
	TotalRecords  *int64                                                            `json:"total_records,omitempty"`
}

type DashboardWebinarParticipantsQosRequest struct {
	PathParams  DashboardWebinarParticipantsQosPathParams
	QueryParams DashboardWebinarParticipantsQosQueryParams
	Security    DashboardWebinarParticipantsQosSecurity
}

type DashboardWebinarParticipantsQosResponse struct {
	Body               []byte
	ContentType        string
	ParticipantQOSList *DashboardWebinarParticipantsQosParticipantQosList
	StatusCode         int64
}
