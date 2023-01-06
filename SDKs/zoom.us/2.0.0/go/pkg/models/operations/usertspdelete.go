package operations

type UserTspDeleteTspIDEnum string

const (
	UserTSPDeleteTSPIDEnumOne UserTspDeleteTspIDEnum = "1"
	UserTSPDeleteTSPIDEnumTwo UserTspDeleteTspIDEnum = "2"
)

type UserTspDeletePathParams struct {
	TspID  UserTspDeleteTspIDEnum `pathParam:"style=simple,explode=false,name=tspId"`
	UserID string                 `pathParam:"style=simple,explode=false,name=userId"`
}

type UserTspDeleteRequest struct {
	PathParams UserTspDeletePathParams
}

type UserTspDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
