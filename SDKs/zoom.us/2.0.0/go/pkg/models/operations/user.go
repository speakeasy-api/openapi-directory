package operations

type UserPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type UserLoginTypeEnum string

const (
	UserLoginTypeEnumZero             UserLoginTypeEnum = "0"
	UserLoginTypeEnumOne              UserLoginTypeEnum = "1"
	UserLoginTypeEnumNinetyNine       UserLoginTypeEnum = "99"
	UserLoginTypeEnumOneHundred       UserLoginTypeEnum = "100"
	UserLoginTypeEnumOneHundredAndOne UserLoginTypeEnum = "101"
)

type UserQueryParams struct {
	LoginType *UserLoginTypeEnum `queryParam:"style=form,explode=true,name=login_type"`
}

// User200ApplicationJSON
// The user object represents a specific user on Zoom.
type User200ApplicationJSON struct {
	ID *string `json:"id,omitempty"`
}

type UserRequest struct {
	PathParams  UserPathParams
	QueryParams UserQueryParams
}

type UserResponse struct {
	Body                         []byte
	ContentType                  string
	StatusCode                   int64
	User200ApplicationJSONObject *User200ApplicationJSON
}
