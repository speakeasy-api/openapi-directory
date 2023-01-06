package operations

type ImGroupDeletePathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=groupId"`
}

type ImGroupDeleteRequest struct {
	PathParams ImGroupDeletePathParams
}

type ImGroupDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
