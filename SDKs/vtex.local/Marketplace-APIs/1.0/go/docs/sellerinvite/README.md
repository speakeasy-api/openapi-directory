# SellerInvite

## Overview

Used to invite sellers and configure their accounts

### Available Operations

* [AcceptSellerLead](#acceptsellerlead) - Accept Seller Lead
* [CreateSellerFromSellerLead](#createsellerfromsellerlead) - Create Seller From Lead
* [CreateSellerLead](#createsellerlead) - Invite Seller Lead
* [ListSellerLeads](#listsellerleads) - List Seller Leads
* [RemoveSellerLead](#removesellerlead) - Delete Seller Lead
* [ResendSellerLeadRequest](#resendsellerleadrequest) - Resend Seller Lead Invite
* [RetrieveSellerLead](#retrievesellerlead) - Get Seller Lead's Data by Id

## AcceptSellerLead

This endpoint is triggered by the seller onboarding wizard, once the seller confirms their invitation. It can be used by marketplace operators to manually accept seller leads, and carry on with their onboarding process. 

Note that there's no specific API call that allows status changes. The operations only allow the seller lead to move forward: 

 From `invite` > to `Accept` > closing on `Create Seller`.  

If you want to change the status, you can start the process again, by deleting that lead through the *Delete Seller Lead* endpoint, and resending the invite through the *Resend Seller Lead's Invite* endpoint.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SellerInvite.AcceptSellerLead(ctx, operations.AcceptSellerLeadRequest{
        Accept: "dolorem",
        AcceptSellerLeadRequest: shared.AcceptSellerLeadRequest{
            AccountID: "corporis",
            Accountable: shared.Accountable{
                Email: "Nestor.Halvorson@gmail.com",
                Name: "Velma Batz",
                Phone: "916.361.9652 x44426",
            },
            Address: shared.Address{
                City: "West Berniechester",
                Complement: "animi",
                Neighborhood: "enim",
                Number: "odit",
                Postalcode: "19368-0068",
                State: "laborum",
                Street: "99845 Bednar Parks",
            },
            Document: "voluptate",
            Email: "Aiyana.Batz@hotmail.com",
            HasAcceptedLegalTerms: false,
            SalesChannel: "maiores",
            SellerAccountName: "dicta",
            SellerEmail: "corporis",
            SellerName: "dolore",
            SellerType: 480894,
        },
        ContentType: "dicta",
        AccountName: "harum",
        Environment: "enim",
        SellerLeadID: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateSellerFromSellerLead

This endpoint is used by marketplace operators to create seller accounts. The request will only accept Seller Leads whose status is `accepted`. If they are already `connected` or `invited`, the call will not be fulfilled. 

The creation of the account at VTEX is done by an internal Billing service. There is no seller account and marketplace affiliation if you do not go through this step. 

Note that there's no specific API call that allows status changes. The operations only allow the seller lead to move forward: 

 From `invite` > to `Accept` > closing on `Create Seller`.  

If you want to change the status, you can start the process again, by deleting that lead through the *Delete Seller Lead* endpoint, and resending the invite through the *Resend Seller Lead's Invite* endpoint.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SellerInvite.CreateSellerFromSellerLead(ctx, operations.CreateSellerFromSellerLeadRequest{
        Accept: "commodi",
        ContentType: "repudiandae",
        AccountName: "quae",
        Environment: "ipsum",
        IsActive: false,
        SellerLeadID: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateSellerLead

This API is used by marketplace operators to invite sellers to join their marketplace. The request sends an email to the seller, inviting sellers to activate their store. The invitation's link in the email is unique per user, and available for only seven days for the seller to click and begin activating their store. 

The email template is completely customizable. All email templates that VTEX sends to seller leads can be found and edited in the marketplace's VTEX Admin, on the Message Center section.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SellerInvite.CreateSellerLead(ctx, operations.CreateSellerLeadRequest{
        Accept: "molestias",
        ContentType: "excepturi",
        CreateSellerLeadRequest: shared.CreateSellerLeadRequest{
            AccountID: "pariatur",
            Accountable: shared.Accountable{
                Email: "Johanna.Ledner92@gmail.com",
                Name: "Patrick Ward",
                Phone: "781-778-2213",
            },
            Address: shared.Address{
                City: "Kavontown",
                Complement: "magni",
                Neighborhood: "assumenda",
                Number: "ipsam",
                Postalcode: "16527",
                State: "tempore",
                Street: "94275 Laron Turnpike",
            },
            Document: "sint",
            Email: "Damien_Toy44@yahoo.com",
            HasAcceptedLegalTerms: false,
            SalesChannel: "in",
            SellerAccountName: "illum",
            SellerEmail: "maiores",
            SellerName: "rerum",
            SellerType: 116202,
        },
        AccountName: "magnam",
        Environment: "cumque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ListSellerLeads

This call's response includes a list of all sellers invited by the marketplace operator to join them. Retrieved results can be filtered by adding optional query fields to the request. Each seller listed includes the following information: 

- `id` 

- `createdAt` 

- `status` 

- `isConnected` 

- `sellerEmail` 

- `sellerName` 

- `salesChannel` 

- `email`

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SellerInvite.ListSellerLeads(ctx, operations.ListSellerLeadsRequest{
        Accept: "facere",
        ContentType: "ea",
        AccountName: "aliquid",
        Environment: "laborum",
        IsConnected: "accusamus",
        Limit: 249796,
        Offset: 581273,
        OrderBy: "enim",
        Search: "accusamus",
        Status: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveSellerLead

This endpoint permanently deletes a seller previously invited to the marketplace, if the seller has not already accepted the invitation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SellerInvite.RemoveSellerLead(ctx, operations.RemoveSellerLeadRequest{
        Accept: "quidem",
        ContentType: "provident",
        AccountName: "nam",
        Environment: "id",
        SellerLeadID: "blanditiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ResendSellerLeadRequest

This endpoint allows marketplace operators to resend an invitation to a seller lead, previously invited to join their marketplace. The request will only accept Seller Leads whose status is `invited`. If they are already `connected` or `accepted`, the call will not be fulfilled.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SellerInvite.ResendSellerLeadRequest(ctx, operations.ResendSellerLeadRequestRequest{
        Accept: "deleniti",
        ContentType: "sapiente",
        ResendSellerLeadRequestRequest: shared.ResendSellerLeadRequestRequest{
            Status: "amet",
        },
        AccountName: "deserunt",
        Environment: "nisi",
        SellerLeadID: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RetrieveSellerLead

Marketplace operators may call this endpoint to retrieve information about a specific seller invited to the Seller Portal, by searching through their `Seller Lead Id`. To know the chosen seller's `sellerLeadId`, marketplace operators can count on the *List Sellers* endpoint's response as well. Each seller listed includes the following information: 

- `id` 

- `createdAt` 

- `status` 

- `isConnected` 

- `sellerEmail` 

- `sellerName` 

- `salesChannel` 

- `email`

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AppKey: "YOUR_API_KEY_HERE",
            AppToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SellerInvite.RetrieveSellerLead(ctx, operations.RetrieveSellerLeadRequest{
        Accept: "natus",
        ContentType: "omnis",
        AccountName: "molestiae",
        Environment: "perferendis",
        SellerLeadID: "nihil",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
