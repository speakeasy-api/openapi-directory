package operations

import (
	"openapi/pkg/models/shared"
)

type GroupMembersDeletePathParams struct {
	GroupID  string `pathParam:"style=simple,explode=false,name=groupId"`
	MemberID string `pathParam:"style=simple,explode=false,name=memberId"`
}

type GroupMembersDeleteSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type GroupMembersDeleteRequest struct {
	PathParams GroupMembersDeletePathParams
	Security   GroupMembersDeleteSecurity
}

type GroupMembersDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
