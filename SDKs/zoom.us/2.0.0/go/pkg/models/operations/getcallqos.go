package operations

import (
	"time"
)

type GetCallQoSPathParams struct {
	CallID string `pathParam:"style=simple,explode=false,name=callId"`
}

type GetCallQoS200ApplicationJSONCalleeQosReceivingQos struct {
	AvgLoss      *string `json:"avg_loss,omitempty"`
	Bitrate      *string `json:"bitrate,omitempty"`
	Jitter       *string `json:"jitter,omitempty"`
	MaxLoss      *string `json:"max_loss,omitempty"`
	Mos          *string `json:"mos,omitempty"`
	NetworkDelay *string `json:"network_delay,omitempty"`
}

type GetCallQoS200ApplicationJSONCalleeQosReceiving struct {
	DateTime *time.Time                                         `json:"date_time,omitempty"`
	Qos      *GetCallQoS200ApplicationJSONCalleeQosReceivingQos `json:"qos,omitempty"`
}

type GetCallQoS200ApplicationJSONCalleeQosSendingQos struct {
	AvgLoss      *string `json:"avg_loss,omitempty"`
	Bitrate      *string `json:"bitrate,omitempty"`
	Jitter       *string `json:"jitter,omitempty"`
	MaxLoss      *string `json:"max_loss,omitempty"`
	Mos          *string `json:"mos,omitempty"`
	NetworkDelay *string `json:"network_delay,omitempty"`
}

type GetCallQoS200ApplicationJSONCalleeQosSending struct {
	DateTime *time.Time                                       `json:"date_time,omitempty"`
	Qos      *GetCallQoS200ApplicationJSONCalleeQosSendingQos `json:"qos,omitempty"`
}

type GetCallQoS200ApplicationJSONCalleeQos struct {
	Receiving []GetCallQoS200ApplicationJSONCalleeQosReceiving `json:"receiving,omitempty"`
	Sending   []GetCallQoS200ApplicationJSONCalleeQosSending   `json:"sending,omitempty"`
}

type GetCallQoS200ApplicationJSONCallerQosReceivingQos struct {
	AvgLoss      *string `json:"avg_loss,omitempty"`
	Bitrate      *string `json:"bitrate,omitempty"`
	Jitter       *string `json:"jitter,omitempty"`
	MaxLoss      *string `json:"max_loss,omitempty"`
	Mos          *string `json:"mos,omitempty"`
	NetworkDelay *string `json:"network_delay,omitempty"`
}

type GetCallQoS200ApplicationJSONCallerQosReceiving struct {
	DateTime *time.Time                                         `json:"date_time,omitempty"`
	Qos      *GetCallQoS200ApplicationJSONCallerQosReceivingQos `json:"qos,omitempty"`
}

type GetCallQoS200ApplicationJSONCallerQosSendingQos struct {
	AvgLoss      *string `json:"avg_loss,omitempty"`
	Bitrate      *string `json:"bitrate,omitempty"`
	Jitter       *string `json:"jitter,omitempty"`
	MaxLoss      *string `json:"max_loss,omitempty"`
	Mos          *string `json:"mos,omitempty"`
	NetworkDelay *string `json:"network_delay,omitempty"`
}

type GetCallQoS200ApplicationJSONCallerQosSending struct {
	DateTime *time.Time                                       `json:"date_time,omitempty"`
	Qos      *GetCallQoS200ApplicationJSONCallerQosSendingQos `json:"qos,omitempty"`
}

// GetCallQoS200ApplicationJSONCallerQos
// Quality of Service object that represents the call quality data of the caller.
type GetCallQoS200ApplicationJSONCallerQos struct {
	Receiving []GetCallQoS200ApplicationJSONCallerQosReceiving `json:"receiving,omitempty"`
	Sending   []GetCallQoS200ApplicationJSONCallerQosSending   `json:"sending,omitempty"`
}

type GetCallQoS200ApplicationJSON struct {
	CallID    *string                                `json:"call_id,omitempty"`
	CalleeQos *GetCallQoS200ApplicationJSONCalleeQos `json:"callee_qos,omitempty"`
	CallerQos *GetCallQoS200ApplicationJSONCallerQos `json:"caller_qos,omitempty"`
}

type GetCallQoSRequest struct {
	PathParams GetCallQoSPathParams
}

type GetCallQoSResponse struct {
	Body                               []byte
	ContentType                        string
	StatusCode                         int64
	GetCallQoS200ApplicationJSONObject *GetCallQoS200ApplicationJSON
}
