package operations

type ListWebinarParticipantsPathParams struct {
	WebinarID string `pathParam:"style=simple,explode=false,name=webinarId"`
}

type ListWebinarParticipantsQueryParams struct {
	NextPageToken *string `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type ListWebinarParticipants200ApplicationJSONParticipants struct {
	ID        *string `json:"id,omitempty"`
	Name      *string `json:"name,omitempty"`
	UserEmail *string `json:"user_email,omitempty"`
}

type ListWebinarParticipants200ApplicationJSON struct {
	NextPageToken *string                                                 `json:"next_page_token,omitempty"`
	PageCount     *int64                                                  `json:"page_count,omitempty"`
	PageSize      *int64                                                  `json:"page_size,omitempty"`
	Participants  []ListWebinarParticipants200ApplicationJSONParticipants `json:"participants,omitempty"`
	TotalRecords  *int64                                                  `json:"total_records,omitempty"`
}

type ListWebinarParticipantsRequest struct {
	PathParams  ListWebinarParticipantsPathParams
	QueryParams ListWebinarParticipantsQueryParams
}

type ListWebinarParticipantsResponse struct {
	Body                                            []byte
	ContentType                                     string
	StatusCode                                      int64
	ListWebinarParticipants200ApplicationJSONObject *ListWebinarParticipants200ApplicationJSON
}
