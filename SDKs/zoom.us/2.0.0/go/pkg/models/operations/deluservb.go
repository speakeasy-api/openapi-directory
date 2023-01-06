package operations

type DelUserVbPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type DelUserVbQueryParams struct {
	FileIds *string `queryParam:"style=form,explode=true,name=file_ids"`
}

type DelUserVbRequest struct {
	PathParams  DelUserVbPathParams
	QueryParams DelUserVbQueryParams
}

type DelUserVbResponse struct {
	ContentType string
	StatusCode  int64
}
