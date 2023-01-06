package operations

type AddMembersToSharedLineGroupPathParams struct {
	SharedLineGroupID string `pathParam:"style=simple,explode=false,name=sharedLineGroupId"`
}

type AddMembersToSharedLineGroupApplicationJSONMembersUsers struct {
	Email *string `json:"email,omitempty"`
	ID    *string `json:"id,omitempty"`
}

// AddMembersToSharedLineGroupApplicationJSONMembers
// Members can comprise of users on the account as well as common area phones. You can add a maximum of 10 members at once.
type AddMembersToSharedLineGroupApplicationJSONMembers struct {
	CommonAreaPhoneIds []string                                                 `json:"common_area_phone_ids,omitempty"`
	Users              []AddMembersToSharedLineGroupApplicationJSONMembersUsers `json:"users,omitempty"`
}

type AddMembersToSharedLineGroupApplicationJSON struct {
	Members *AddMembersToSharedLineGroupApplicationJSONMembers `json:"members,omitempty"`
}

type AddMembersToSharedLineGroupMultipartFormDataMembersUsers struct {
	Email *string `json:"email,omitempty"`
	ID    *string `json:"id,omitempty"`
}

// AddMembersToSharedLineGroupMultipartFormDataMembers
// Members can comprise of users on the account as well as common area phones. You can add a maximum of 10 members at once.
type AddMembersToSharedLineGroupMultipartFormDataMembers struct {
	CommonAreaPhoneIds []string                                                   `json:"common_area_phone_ids,omitempty"`
	Users              []AddMembersToSharedLineGroupMultipartFormDataMembersUsers `json:"users,omitempty"`
}

type AddMembersToSharedLineGroupMultipartFormData struct {
	Members *AddMembersToSharedLineGroupMultipartFormDataMembers `multipartForm:"name=members,json"`
}

type AddMembersToSharedLineGroupRequests struct {
	Object  *AddMembersToSharedLineGroupApplicationJSON   `request:"mediaType=application/json"`
	Object1 *AddMembersToSharedLineGroupMultipartFormData `request:"mediaType=multipart/form-data"`
}

type AddMembersToSharedLineGroupRequest struct {
	PathParams AddMembersToSharedLineGroupPathParams
	Request    *AddMembersToSharedLineGroupRequests
}

type AddMembersToSharedLineGroupResponse struct {
	Body                                             []byte
	ContentType                                      string
	StatusCode                                       int64
	AddMembersToSharedLineGroup201ApplicationJSONAny *interface{}
}
