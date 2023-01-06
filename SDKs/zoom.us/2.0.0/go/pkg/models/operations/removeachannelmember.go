package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveAChannelMemberPathParams struct {
	ChannelID string `pathParam:"style=simple,explode=false,name=channelId"`
	MemberID  string `pathParam:"style=simple,explode=false,name=memberId"`
	UserID    string `pathParam:"style=simple,explode=false,name=userId"`
}

type RemoveAChannelMemberSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type RemoveAChannelMemberRequest struct {
	PathParams RemoveAChannelMemberPathParams
	Security   RemoveAChannelMemberSecurity
}

type RemoveAChannelMemberResponse struct {
	Body                                      []byte
	ContentType                               string
	StatusCode                                int64
	RemoveAChannelMember204ApplicationJSONAny *interface{}
}
