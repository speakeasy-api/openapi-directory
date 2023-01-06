package operations

type DelVbPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type DelVbQueryParams struct {
	FileIds *string `queryParam:"style=form,explode=true,name=file_ids"`
}

type DelVbRequest struct {
	PathParams  DelVbPathParams
	QueryParams DelVbQueryParams
}

type DelVbResponse struct {
	ContentType string
	StatusCode  int64
}
