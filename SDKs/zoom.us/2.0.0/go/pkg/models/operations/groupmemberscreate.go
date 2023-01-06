package operations

type GroupMembersCreatePathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=groupId"`
}

type GroupMembersCreateApplicationJSONMembers struct {
	Email *string `json:"email,omitempty"`
	ID    *string `json:"id,omitempty"`
}

type GroupMembersCreateApplicationJSON struct {
	Members []GroupMembersCreateApplicationJSONMembers `json:"members,omitempty"`
}

type GroupMembersCreateMultipartFormDataMembers struct {
	Email *string `json:"email,omitempty"`
	ID    *string `json:"id,omitempty"`
}

type GroupMembersCreateMultipartFormData1 struct {
	Members []GroupMembersCreateMultipartFormDataMembers `multipartForm:"name=members,json"`
}

type GroupMembersCreateRequests struct {
	Object  *GroupMembersCreateApplicationJSON    `request:"mediaType=application/json"`
	Object1 *GroupMembersCreateMultipartFormData1 `request:"mediaType=multipart/form-data"`
}

type GroupMembersCreateRequest struct {
	PathParams GroupMembersCreatePathParams
	Request    GroupMembersCreateRequests
}

type GroupMembersCreateResponse struct {
	Body                                    []byte
	ContentType                             string
	StatusCode                              int64
	GroupMembersCreate201ApplicationJSONAny *interface{}
}
