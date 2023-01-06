package operations

type DeleteASharedLineGroupPathParams struct {
	SharedLineGroupID string `pathParam:"style=simple,explode=false,name=sharedLineGroupId"`
}

type DeleteASharedLineGroupRequest struct {
	PathParams DeleteASharedLineGroupPathParams
}

type DeleteASharedLineGroupResponse struct {
	Body                                        []byte
	ContentType                                 string
	StatusCode                                  int64
	DeleteASharedLineGroup204ApplicationJSONAny *interface{}
}
