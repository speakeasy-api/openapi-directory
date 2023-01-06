package operations

type DelGroupVbPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=groupId"`
}

type DelGroupVbQueryParams struct {
	FileIds *string `queryParam:"style=form,explode=true,name=file_ids"`
}

type DelGroupVbRequest struct {
	PathParams  DelGroupVbPathParams
	QueryParams DelGroupVbQueryParams
}

type DelGroupVbResponse struct {
	ContentType string
	StatusCode  int64
}
