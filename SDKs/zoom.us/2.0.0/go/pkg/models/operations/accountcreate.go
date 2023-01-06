package operations

type AccountCreateApplicationJSONOptionsPayModeEnum string

const (
	AccountCreateApplicationJSONOptionsPayModeEnumMaster AccountCreateApplicationJSONOptionsPayModeEnum = "master"
	AccountCreateApplicationJSONOptionsPayModeEnumSub    AccountCreateApplicationJSONOptionsPayModeEnum = "sub"
)

// AccountCreateApplicationJSONOptions
// Account options object.
type AccountCreateApplicationJSONOptions struct {
	BillingAutoRenew     *bool                                           `json:"billing_auto_renew,omitempty"`
	MeetingConnectorList []string                                        `json:"meeting_connector_list,omitempty"`
	PayMode              *AccountCreateApplicationJSONOptionsPayModeEnum `json:"pay_mode,omitempty"`
	RoomConnectorList    []string                                        `json:"room_connector_list,omitempty"`
	ShareMc              *bool                                           `json:"share_mc,omitempty"`
	ShareRc              *bool                                           `json:"share_rc,omitempty"`
}

// AccountCreateApplicationJSON
// The account object represents an account on Zoom. The account owner is the user who created the account or had an account created for them. You can read more about the Zoom account structure <a href='https://medium.com/zoom-developer-blog/a-brief-look-at-zoom-account-structures-1d19c745bf8a' target='_blank'>here</a>.
type AccountCreateApplicationJSON struct {
	AccountName *string                              `json:"account_name,omitempty"`
	Email       string                               `json:"email"`
	FirstName   string                               `json:"first_name"`
	LastName    string                               `json:"last_name"`
	Options     *AccountCreateApplicationJSONOptions `json:"options,omitempty"`
	Password    string                               `json:"password"`
}

type AccountCreateMultipartFormDataOptionsPayModeEnum string

const (
	AccountCreateMultipartFormDataOptionsPayModeEnumMaster AccountCreateMultipartFormDataOptionsPayModeEnum = "master"
	AccountCreateMultipartFormDataOptionsPayModeEnumSub    AccountCreateMultipartFormDataOptionsPayModeEnum = "sub"
)

// AccountCreateMultipartFormDataOptions
// Account options object.
type AccountCreateMultipartFormDataOptions struct {
	BillingAutoRenew     *bool                                             `json:"billing_auto_renew,omitempty"`
	MeetingConnectorList []string                                          `json:"meeting_connector_list,omitempty"`
	PayMode              *AccountCreateMultipartFormDataOptionsPayModeEnum `json:"pay_mode,omitempty"`
	RoomConnectorList    []string                                          `json:"room_connector_list,omitempty"`
	ShareMc              *bool                                             `json:"share_mc,omitempty"`
	ShareRc              *bool                                             `json:"share_rc,omitempty"`
}

// AccountCreateMultipartFormData
// The account object represents an account on Zoom. The account owner is the user who created the account or had an account created for them. You can read more about the Zoom account structure <a href='https://medium.com/zoom-developer-blog/a-brief-look-at-zoom-account-structures-1d19c745bf8a' target='_blank'>here</a>.
type AccountCreateMultipartFormData struct {
	AccountName *string                                `multipartForm:"name=account_name"`
	Email       string                                 `multipartForm:"name=email"`
	FirstName   string                                 `multipartForm:"name=first_name"`
	LastName    string                                 `multipartForm:"name=last_name"`
	Options     *AccountCreateMultipartFormDataOptions `multipartForm:"name=options,json"`
	Password    string                                 `multipartForm:"name=password"`
}

type AccountCreateRequests struct {
	Object  *AccountCreateApplicationJSON   `request:"mediaType=application/json"`
	Object1 *AccountCreateMultipartFormData `request:"mediaType=multipart/form-data"`
}

type AccountCreate201ApplicationJSON struct {
	CreatedAt  *string `json:"created_at,omitempty"`
	ID         *string `json:"id,omitempty"`
	OwnerEmail *string `json:"owner_email,omitempty"`
	OwnerID    *string `json:"owner_id,omitempty"`
}

type AccountCreateRequest struct {
	Request AccountCreateRequests
}

type AccountCreateResponse struct {
	Body                                  []byte
	ContentType                           string
	Headers                               map[string][]string
	StatusCode                            int64
	AccountCreate201ApplicationJSONObject *AccountCreate201ApplicationJSON
}
