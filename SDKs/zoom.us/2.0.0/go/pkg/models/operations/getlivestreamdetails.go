package operations

type GetLiveStreamDetailsPathParams struct {
	MeetingID string `pathParam:"style=simple,explode=false,name=meetingId"`
}

type GetLiveStreamDetails200ApplicationJSON struct {
	PageURL   *string `json:"page_url,omitempty"`
	StreamKey *string `json:"stream_key,omitempty"`
	StreamURL *string `json:"stream_url,omitempty"`
}

type GetLiveStreamDetailsRequest struct {
	PathParams GetLiveStreamDetailsPathParams
}

type GetLiveStreamDetailsResponse struct {
	Body                                         []byte
	ContentType                                  string
	StatusCode                                   int64
	GetLiveStreamDetails200ApplicationJSONObject *GetLiveStreamDetails200ApplicationJSON
}
