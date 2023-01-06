package operations

type MeetingregistrantdeletePathParams struct {
	MeetingID    int64  `pathParam:"style=simple,explode=false,name=meetingId"`
	RegistrantID string `pathParam:"style=simple,explode=false,name=registrantId"`
}

type MeetingregistrantdeleteQueryParams struct {
	OccurrenceID *string `queryParam:"style=form,explode=true,name=occurrence_id"`
}

type MeetingregistrantdeleteRequest struct {
	PathParams  MeetingregistrantdeletePathParams
	QueryParams MeetingregistrantdeleteQueryParams
}

type MeetingregistrantdeleteResponse struct {
	ContentType string
	StatusCode  int64
}
