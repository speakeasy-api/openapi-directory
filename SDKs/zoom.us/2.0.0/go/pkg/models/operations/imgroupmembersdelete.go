package operations

import (
	"openapi/pkg/models/shared"
)

type ImGroupMembersDeletePathParams struct {
	GroupID  string `pathParam:"style=simple,explode=false,name=groupId"`
	MemberID string `pathParam:"style=simple,explode=false,name=memberId"`
}

type ImGroupMembersDeleteSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ImGroupMembersDeleteRequest struct {
	PathParams ImGroupMembersDeletePathParams
	Security   ImGroupMembersDeleteSecurity
}

type ImGroupMembersDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
