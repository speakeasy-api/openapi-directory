package operations

import (
	"time"
)

type AccountsQueryParams struct {
	NextPageToken *string `queryParam:"style=form,explode=true,name=next_page_token"`
	PageNumber    *int64  `queryParam:"style=form,explode=true,name=page_number"`
	PageSize      *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type AccountsAccountListAccounts struct {
	AccountName           *string    `json:"account_name,omitempty"`
	AccountNumber         *string    `json:"account_number,omitempty"`
	AccountType           *string    `json:"account_type,omitempty"`
	CreatedAt             *time.Time `json:"created_at,omitempty"`
	ID                    *string    `json:"id,omitempty"`
	OwnerEmail            *string    `json:"owner_email,omitempty"`
	Seats                 *int64     `json:"seats,omitempty"`
	SubscriptionEndTime   *time.Time `json:"subscription_end_time,omitempty"`
	SubscriptionStartTime *time.Time `json:"subscription_start_time,omitempty"`
}

// AccountsAccountList
// Account object in the account list.
type AccountsAccountList struct {
	Accounts []AccountsAccountListAccounts `json:"accounts,omitempty"`
}

type AccountsRequest struct {
	QueryParams AccountsQueryParams
}

type AccountsResponse struct {
	AccountList *AccountsAccountList
	Body        []byte
	ContentType string
	StatusCode  int64
}
