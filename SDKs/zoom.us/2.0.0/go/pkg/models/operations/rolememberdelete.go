package operations

import (
	"openapi/pkg/models/shared"
)

type RoleMemberDeletePathParams struct {
	MemberID string `pathParam:"style=simple,explode=false,name=memberId"`
	RoleID   string `pathParam:"style=simple,explode=false,name=roleId"`
}

type RoleMemberDeleteSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type RoleMemberDeleteRequest struct {
	PathParams RoleMemberDeletePathParams
	Security   RoleMemberDeleteSecurity
}

type RoleMemberDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
