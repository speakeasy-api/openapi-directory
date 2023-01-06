package operations

type DeleteAMemberSlgPathParams struct {
	MemberID          string `pathParam:"style=simple,explode=false,name=memberId"`
	SharedLineGroupID string `pathParam:"style=simple,explode=false,name=sharedLineGroupId"`
}

type DeleteAMemberSlgRequest struct {
	PathParams DeleteAMemberSlgPathParams
}

type DeleteAMemberSlgResponse struct {
	ContentType string
	StatusCode  int64
}
