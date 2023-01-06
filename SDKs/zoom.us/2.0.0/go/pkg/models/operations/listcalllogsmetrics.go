package operations

type ListCallLogsMetricsQueryParams struct {
	From          *string `queryParam:"style=form,explode=true,name=from"`
	NextPageToken *string `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64  `queryParam:"style=form,explode=true,name=page_size"`
	QualityType   *string `queryParam:"style=form,explode=true,name=quality_type"`
	SiteID        *string `queryParam:"style=form,explode=true,name=site_id"`
	To            *string `queryParam:"style=form,explode=true,name=to"`
}

// ListCallLogsMetrics200ApplicationJSONCallLogsCallee
// Callee object contains information of the calee.
type ListCallLogsMetrics200ApplicationJSONCallLogsCallee struct {
	Codec           *string `json:"codec,omitempty"`
	DeviceType      *string `json:"device_type,omitempty"`
	ExtensionNumber *string `json:"extension_number,omitempty"`
	Headset         *string `json:"headset,omitempty"`
	Isp             *string `json:"isp,omitempty"`
	Microphone      *string `json:"microphone,omitempty"`
	PhoneNumber     *string `json:"phone_number,omitempty"`
	SiteID          *string `json:"site_id,omitempty"`
}

// ListCallLogsMetrics200ApplicationJSONCallLogsCaller
// Caller object contains information of the caller.
type ListCallLogsMetrics200ApplicationJSONCallLogsCaller struct {
	Codec           *string `json:"codec,omitempty"`
	DeviceType      *string `json:"device_type,omitempty"`
	ExtensionNumber *string `json:"extension_number,omitempty"`
	Headset         *string `json:"headset,omitempty"`
	Isp             *string `json:"isp,omitempty"`
	Microphone      *string `json:"microphone,omitempty"`
	PhoneNumber     *string `json:"phone_number,omitempty"`
	SiteID          *string `json:"site_id,omitempty"`
}

type ListCallLogsMetrics200ApplicationJSONCallLogs struct {
	CallID    *string                                              `json:"call_id,omitempty"`
	Callee    *ListCallLogsMetrics200ApplicationJSONCallLogsCallee `json:"callee,omitempty"`
	Caller    *ListCallLogsMetrics200ApplicationJSONCallLogsCaller `json:"caller,omitempty"`
	DateTime  *string                                              `json:"date_time,omitempty"`
	Direction *string                                              `json:"direction,omitempty"`
	Duration  *int64                                               `json:"duration,omitempty"`
	Mos       *string                                              `json:"mos,omitempty"`
}

type ListCallLogsMetrics200ApplicationJSON struct {
	CallLogs      []ListCallLogsMetrics200ApplicationJSONCallLogs `json:"call_logs,omitempty"`
	From          *string                                         `json:"from,omitempty"`
	NextPageToken *string                                         `json:"next_page_token,omitempty"`
	PageSize      *int64                                          `json:"page_size,omitempty"`
	To            *string                                         `json:"to,omitempty"`
	TotalRecords  *int64                                          `json:"total_records,omitempty"`
}

type ListCallLogsMetricsRequest struct {
	QueryParams ListCallLogsMetricsQueryParams
}

type ListCallLogsMetricsResponse struct {
	Body                                        []byte
	ContentType                                 string
	StatusCode                                  int64
	ListCallLogsMetrics200ApplicationJSONObject *ListCallLogsMetrics200ApplicationJSON
}
