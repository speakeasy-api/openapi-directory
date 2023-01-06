package operations

type DeleteMembersOfSlgPathParams struct {
	SharedLineGroupID string `pathParam:"style=simple,explode=false,name=sharedLineGroupId"`
}

type DeleteMembersOfSlgRequest struct {
	PathParams DeleteMembersOfSlgPathParams
}

type DeleteMembersOfSlgResponse struct {
	Body                                    []byte
	ContentType                             string
	StatusCode                              int64
	DeleteMembersOfSLG204ApplicationJSONAny *interface{}
}
