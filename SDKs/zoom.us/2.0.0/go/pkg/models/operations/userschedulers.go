package operations

import (
	"openapi/pkg/models/shared"
)

type UserSchedulersPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type UserSchedulersSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UserSchedulersUserSchedulersListSchedulers struct {
	Email *string `json:"email,omitempty"`
	ID    *string `json:"id,omitempty"`
	Pmi   *int64  `json:"pmi,omitempty"`
}

// UserSchedulersUserSchedulersList
// List of user's schedulers.
type UserSchedulersUserSchedulersList struct {
	Schedulers []UserSchedulersUserSchedulersListSchedulers `json:"schedulers,omitempty"`
}

type UserSchedulersRequest struct {
	PathParams UserSchedulersPathParams
	Security   UserSchedulersSecurity
}

type UserSchedulersResponse struct {
	Body               []byte
	ContentType        string
	StatusCode         int64
	UserSchedulersList *UserSchedulersUserSchedulersList
}
