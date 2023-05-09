# Users

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [ChangePassword](#changepassword) - Sets user's password to a new value.
* [GetAllNamesWithIds1](#getallnameswithids1) - Returns list of simple users representations
* [GetByID6](#getbyid6) - Returns user details.
* [GetCustomField1](#getcustomfield1) - Returns custom field of a given user.
* [GetCustomFields4](#getcustomfields4) - Returns custom fields of a given user.
* [GetMe](#getme) - Returns currently signed in user details.
* [GetTimeZone](#gettimezone) - Returns time zone preferred by user currently signed in.
* [UpdateCustomField1](#updatecustomfield1) - Updates given custom field of a given user.
* [UpdateCustomFields2](#updatecustomfields2) - Updates custom fields of a given user.
* [Update3](#update3) - Updates an existing user.

## ChangePassword

Sets user's password to a new value.

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
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Users.ChangePassword(ctx, operations.ChangePasswordRequest{
        RequestBody: &operations.ChangePasswordRequestBody{
            NewPassword: sdk.String("sed"),
            OldPassword: sdk.String("nesciunt"),
        },
        UserID: 805463,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAllNamesWithIds1

Returns list of simple users representations

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Users.GetAllNamesWithIds1(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetByID6

Returns user details.

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
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Users.GetByID6(ctx, operations.GetByID6Request{
        UserID: 337841,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCustomField1

Returns custom field of a given user.

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
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Users.GetCustomField1(ctx, operations.GetCustomField1Request{
        CustomFieldKey: "cupiditate",
        UserID: 303253,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCustomFields4

Returns custom fields of a given user.

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
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Users.GetCustomFields4(ctx, operations.GetCustomFields4Request{
        UserID: 569287,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetMe

Returns currently signed in user details.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Users.GetMe(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetTimeZone

Returns time zone preferred by user currently signed in.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Users.GetTimeZone(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateCustomField1

Updates given custom field of a given user.

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
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Users.UpdateCustomField1(ctx, operations.UpdateCustomField1Request{
        CustomFieldDTO: shared.CustomFieldDTO{
            Key: sdk.String("maiores"),
            Name: sdk.String("Jacob Witting"),
            Type: shared.CustomFieldDTOTypeEnumText.ToPointer(),
            Value: map[string]interface{}{
                "tenetur": "quas",
                "molestiae": "aliquid",
                "asperiores": "a",
                "nobis": "perspiciatis",
            },
        },
        CustomFieldKey: "accusantium",
        UserID: 118917,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateCustomFields2

Updates custom fields of a given user.

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
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Users.UpdateCustomFields2(ctx, operations.UpdateCustomFields2Request{
        RequestBody: []shared.CustomFieldDTO{
            shared.CustomFieldDTO{
                Key: sdk.String("commodi"),
                Name: sdk.String("Lowell Rippin"),
                Type: shared.CustomFieldDTOTypeEnumMultiSelection.ToPointer(),
                Value: map[string]interface{}{
                    "eius": "sequi",
                },
            },
            shared.CustomFieldDTO{
                Key: sdk.String("eligendi"),
                Name: sdk.String("Claude Kutch"),
                Type: shared.CustomFieldDTOTypeEnumMultiSelection.ToPointer(),
                Value: map[string]interface{}{
                    "maiores": "itaque",
                    "nulla": "deserunt",
                    "corporis": "velit",
                },
            },
            shared.CustomFieldDTO{
                Key: sdk.String("officiis"),
                Name: sdk.String("Brandi Turner"),
                Type: shared.CustomFieldDTOTypeEnumText.ToPointer(),
                Value: map[string]interface{}{
                    "impedit": "quasi",
                    "blanditiis": "eius",
                    "quisquam": "eos",
                },
            },
            shared.CustomFieldDTO{
                Key: sdk.String("nobis"),
                Name: sdk.String("Kim Crist"),
                Type: shared.CustomFieldDTOTypeEnumSelection.ToPointer(),
                Value: map[string]interface{}{
                    "corrupti": "amet",
                    "molestiae": "amet",
                    "laborum": "modi",
                },
            },
        },
        UserID: 21358,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Update3

Updates an existing user.

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
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Users.Update3(ctx, operations.Update3Request{
        UserDTO: shared.UserDTO{
            CustomFields: []shared.CustomFieldDTO{
                shared.CustomFieldDTO{
                    Key: sdk.String("architecto"),
                    Name: sdk.String("Micheal Cassin"),
                    Type: shared.CustomFieldDTOTypeEnumText.ToPointer(),
                    Value: map[string]interface{}{
                        "veniam": "ipsam",
                        "eaque": "exercitationem",
                        "veniam": "nihil",
                        "ad": "nisi",
                    },
                },
                shared.CustomFieldDTO{
                    Key: sdk.String("tenetur"),
                    Name: sdk.String("Rosemarie Hilll"),
                    Type: shared.CustomFieldDTOTypeEnumText.ToPointer(),
                    Value: map[string]interface{}{
                        "repellendus": "perferendis",
                        "id": "sapiente",
                        "sed": "possimus",
                    },
                },
                shared.CustomFieldDTO{
                    Key: sdk.String("repellat"),
                    Name: sdk.String("Joe Fisher"),
                    Type: shared.CustomFieldDTOTypeEnumDateAndTime.ToPointer(),
                    Value: map[string]interface{}{
                        "iure": "explicabo",
                        "minus": "soluta",
                        "dolorum": "velit",
                        "earum": "praesentium",
                    },
                },
                shared.CustomFieldDTO{
                    Key: sdk.String("error"),
                    Name: sdk.String("Joyce O'Connell"),
                    Type: shared.CustomFieldDTOTypeEnumSelection.ToPointer(),
                    Value: map[string]interface{}{
                        "expedita": "corrupti",
                    },
                },
            },
            Email: sdk.String("Lue.Hyatt@gmail.com"),
            FirstName: sdk.String("Dorian"),
            Gender: sdk.String("male"),
            ID: sdk.Int64(220824),
            LastName: sdk.String("Prohaska"),
            Login: sdk.String("sed"),
            MobilePhone: sdk.String("accusamus"),
            Phone: sdk.String("977-695-6300 x09388"),
            PositionName: sdk.String("neque"),
            TimeZoneID: sdk.String("pariatur"),
            UserGroupName: sdk.String("vel"),
        },
        UserID: 960813,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
