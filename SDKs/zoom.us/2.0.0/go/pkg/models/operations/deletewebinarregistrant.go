package operations

type DeleteWebinarRegistrantPathParams struct {
	RegistrantID string `pathParam:"style=simple,explode=false,name=registrantId"`
	WebinarID    int64  `pathParam:"style=simple,explode=false,name=webinarId"`
}

type DeleteWebinarRegistrantQueryParams struct {
	OccurrenceID *string `queryParam:"style=form,explode=true,name=occurrence_id"`
}

type DeleteWebinarRegistrantRequest struct {
	PathParams  DeleteWebinarRegistrantPathParams
	QueryParams DeleteWebinarRegistrantQueryParams
}

type DeleteWebinarRegistrantResponse struct {
	ContentType string
	StatusCode  int64
}
