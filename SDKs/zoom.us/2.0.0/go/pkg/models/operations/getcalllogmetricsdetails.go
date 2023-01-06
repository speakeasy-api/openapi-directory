package operations

type GetCallLogMetricsDetailsPathParams struct {
	CallID string `pathParam:"style=simple,explode=false,name=call_id"`
}

// GetCallLogMetricsDetails200ApplicationJSONCallee
// Callee object contains information of the calee.
type GetCallLogMetricsDetails200ApplicationJSONCallee struct {
	Codec           *string `json:"codec,omitempty"`
	DeviceType      *string `json:"device_type,omitempty"`
	ExtensionNumber *string `json:"extension_number,omitempty"`
	Headset         *string `json:"headset,omitempty"`
	Isp             *string `json:"isp,omitempty"`
	Microphone      *string `json:"microphone,omitempty"`
	PhoneNumber     *string `json:"phone_number,omitempty"`
	SiteID          *string `json:"site_id,omitempty"`
}

// GetCallLogMetricsDetails200ApplicationJSONCaller
// Caller object contains information of the caller.
type GetCallLogMetricsDetails200ApplicationJSONCaller struct {
	Codec           *string `json:"codec,omitempty"`
	DeviceType      *string `json:"device_type,omitempty"`
	ExtensionNumber *string `json:"extension_number,omitempty"`
	Headset         *string `json:"headset,omitempty"`
	Isp             *string `json:"isp,omitempty"`
	Microphone      *string `json:"microphone,omitempty"`
	PhoneNumber     *string `json:"phone_number,omitempty"`
	SiteID          *string `json:"site_id,omitempty"`
}

type GetCallLogMetricsDetails200ApplicationJSON struct {
	CallID    *string                                           `json:"call_id,omitempty"`
	Callee    *GetCallLogMetricsDetails200ApplicationJSONCallee `json:"callee,omitempty"`
	Caller    *GetCallLogMetricsDetails200ApplicationJSONCaller `json:"caller,omitempty"`
	DateTime  *string                                           `json:"date_time,omitempty"`
	Direction *string                                           `json:"direction,omitempty"`
	Duration  *int64                                            `json:"duration,omitempty"`
	Mos       *string                                           `json:"mos,omitempty"`
}

type GetCallLogMetricsDetailsRequest struct {
	PathParams GetCallLogMetricsDetailsPathParams
}

type GetCallLogMetricsDetailsResponse struct {
	Body                                             []byte
	ContentType                                      string
	StatusCode                                       int64
	GetCallLogMetricsDetails200ApplicationJSONObject *GetCallLogMetricsDetails200ApplicationJSON
}
