package operations

type UserPermissionPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type UserPermission200ApplicationJSON struct {
	Permissions []string `json:"permissions,omitempty"`
}

type UserPermissionRequest struct {
	PathParams UserPermissionPathParams
}

type UserPermissionResponse struct {
	Body                                   []byte
	ContentType                            string
	StatusCode                             int64
	UserPermission200ApplicationJSONObject *UserPermission200ApplicationJSON
}
