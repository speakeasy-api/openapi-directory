package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRolePathParams struct {
	RoleID string `pathParam:"style=simple,explode=false,name=roleId"`
}

type DeleteRoleSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type DeleteRoleRequest struct {
	PathParams DeleteRolePathParams
	Security   DeleteRoleSecurity
}

type DeleteRoleResponse struct {
	Body                               []byte
	ContentType                        string
	StatusCode                         int64
	DeleteRole204ApplicationJSONObject map[string]interface{}
}
