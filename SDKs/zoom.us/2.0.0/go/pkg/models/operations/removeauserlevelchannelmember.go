package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveAUserLevelChannelMemberPathParams struct {
	ChannelID string `pathParam:"style=simple,explode=false,name=channelId"`
	MemberID  string `pathParam:"style=simple,explode=false,name=memberId"`
}

type RemoveAUserLevelChannelMemberSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type RemoveAUserLevelChannelMemberRequest struct {
	PathParams RemoveAUserLevelChannelMemberPathParams
	Security   RemoveAUserLevelChannelMemberSecurity
}

type RemoveAUserLevelChannelMemberResponse struct {
	Body                                               []byte
	ContentType                                        string
	StatusCode                                         int64
	RemoveAUserLevelChannelMember204ApplicationJSONAny *interface{}
}
