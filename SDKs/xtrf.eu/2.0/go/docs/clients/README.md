# Clients

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [Create2](#create2) - Creates a new person.
* [Create3](#create3) - Creates a new client.
* [Delete3](#delete3) - Removes a person.
* [Delete4](#delete4) - Removes a customer price list.
* [Delete5](#delete5) - Removes a client.
* [GenerateSingleUseSignInToken](#generatesingleusesignintoken) - Generates a single use sign-in token.
* [GetAddress](#getaddress) - Returns address of a given client.
* [GetAllIds1](#getallids1) - Returns persons' internal identifiers.
* [GetAllIds2](#getallids2) - Returns clients' internal identifiers.
* [GetAllNamesWithIds](#getallnameswithids) - Returns list of simple clients representations
* [GetByID1](#getbyid1) - Returns person details.
* [GetByID2](#getbyid2) - Returns client details.
* [GetCategories](#getcategories) - Returns categories of a given client.
* [GetContact](#getcontact) - Returns contact of a given person.
* [GetContact1](#getcontact1) - Returns contact of a given client.
* [GetCorrespondenceAddress](#getcorrespondenceaddress) - Returns correspondence address of a given client.
* [GetCustomField](#getcustomfield) - Returns custom field of a given client.
* [GetCustomFields](#getcustomfields) - Returns custom fields of a given person.
* [GetCustomFields1](#getcustomfields1) - Returns custom fields of a given client.
* [GetIndustries](#getindustries) - Returns industries of a given client.
* [UpdateAddress](#updateaddress) - Updates address of a given client.
* [UpdateCategories](#updatecategories) - Updates categories of a given client.
* [UpdateContact](#updatecontact) - Updates contact of a given person.
* [UpdateContact1](#updatecontact1) - Updates contact of a given client.
* [UpdateCorrespondenceAddress](#updatecorrespondenceaddress) - Updates correspondence address of a given client.
* [UpdateCustomField](#updatecustomfield) - Updates given custom field of a given client.
* [UpdateCustomFields](#updatecustomfields) - Updates custom fields of a given person.
* [UpdateCustomFields1](#updatecustomfields1) - Updates custom fields of a given client.
* [UpdateIndustries](#updateindustries) - Updates industries of a given client.
* [Update1](#update1) - Updates an existing person.
* [Update2](#update2) - Updates an existing client.

## Create2

Creates a new person. Required fields are presented in the example. Other fields (from PUT) may also be specified here.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Clients.Create2(ctx, shared.CustomerPersonDTO{
        Active: sdk.Bool(false),
        Contact: &shared.PersonContactDTO{
            Emails: &shared.PersonContactEmailsDTO{
                Additional: []string{
                    "in",
                    "architecto",
                    "architecto",
                },
                Primary: "repudiandae",
            },
            Fax: sdk.String("ullam"),
            Phones: []string{
                "nihil",
                "repellat",
                "quibusdam",
            },
            Sms: sdk.String("sed"),
        },
        CustomFields: []shared.CustomFieldDTO{
            shared.CustomFieldDTO{
                Key: sdk.String("pariatur"),
                Name: sdk.String("Kathryn Lang"),
                Type: shared.CustomFieldDTOTypeEnumText.ToPointer(),
                Value: map[string]interface{}{
                    "illum": "pariatur",
                    "maxime": "ea",
                    "excepturi": "odit",
                    "ea": "accusantium",
                },
            },
            shared.CustomFieldDTO{
                Key: sdk.String("ab"),
                Name: sdk.String("Rickey Hintz"),
                Type: shared.CustomFieldDTOTypeEnumSelection.ToPointer(),
                Value: map[string]interface{}{
                    "pariatur": "nemo",
                },
            },
            shared.CustomFieldDTO{
                Key: sdk.String("voluptatibus"),
                Name: sdk.String("Miss Ginger Feeney"),
                Type: shared.CustomFieldDTOTypeEnumMultiSelection.ToPointer(),
                Value: map[string]interface{}{
                    "nobis": "dolores",
                    "quis": "totam",
                    "dignissimos": "eaque",
                },
            },
            shared.CustomFieldDTO{
                Key: sdk.String("quis"),
                Name: sdk.String("Ruby Auer"),
                Type: shared.CustomFieldDTOTypeEnumNumber.ToPointer(),
                Value: map[string]interface{}{
                    "vero": "nostrum",
                },
            },
        },
        CustomerID: sdk.Int64(944120),
        FirstProjectDate: types.MustTimeFromString("2021-03-05T23:06:52.311Z"),
        FirstQuoteDate: types.MustTimeFromString("2021-10-22T10:35:49.400Z"),
        Gender: shared.CustomerPersonDTOGenderEnumFemale.ToPointer(),
        ID: sdk.Int64(783645),
        LastName: sdk.String("Cruickshank"),
        LastProjectDate: types.MustTimeFromString("2021-10-04T07:41:53.553Z"),
        LastQuoteDate: types.MustTimeFromString("2022-06-04T07:28:38.912Z"),
        MotherTonguesIds: []int64{
            237893,
            992397,
            934214,
        },
        Name: sdk.String("Sheryl Parisian"),
        NumberOfProjects: sdk.Int(589910),
        NumberOfQuotes: sdk.Int(750844),
        PositionID: sdk.Int64(730122),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Create3

Creates a new client. All available fields are presented in PUT request.<p>
  Required fields:
  <ul>
    <li>name</li>
    <li>fullName</li>
    <li>contact -> emails -> primary</li>
  </ul>
</p>


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Clients.Create3(ctx, shared.CustomerDTO{
        AccountOnCustomerServer: sdk.String("delectus"),
        Accounting: &shared.CustomerAccountingDTO{
            TaxNumbers: []shared.CustomerTaxNoDTO{
                shared.CustomerTaxNoDTO{
                    Number: sdk.String("quos"),
                    Type: sdk.String("aliquid"),
                },
                shared.CustomerTaxNoDTO{
                    Number: sdk.String("dolorem"),
                    Type: sdk.String("dolorem"),
                },
            },
        },
        BillingAddress: &shared.AddressDTO{
            AddressLine1: sdk.String("dolor"),
            AddressLine2: sdk.String("qui"),
            City: sdk.String("Fort Kevin"),
            CountryID: sdk.Int64(739551),
            PostalCode: sdk.String("49262"),
            ProvinceID: sdk.Int64(85295),
            SameAsBillingAddress: sdk.Bool(false),
        },
        BranchID: sdk.Int64(58029),
        CategoriesIds: []int64{
            434417,
        },
        ClientFirstProjectDate: types.MustTimeFromString("2022-09-09T04:40:04.540Z"),
        ClientFirstQuoteDate: types.MustTimeFromString("2020-11-29T12:05:35.198Z"),
        ClientLastProjectDate: types.MustTimeFromString("2021-11-13T08:40:53.559Z"),
        ClientLastQuoteDate: types.MustTimeFromString("2022-08-22T21:20:36.034Z"),
        ClientNumberOfProjects: sdk.Int(542499),
        ClientNumberOfQuotes: sdk.Int(24678),
        Contact: &shared.ContactDTO{
            Emails: &shared.CustomerContactEmailsDTO{
                Additional: []string{
                    "ab",
                    "soluta",
                    "dolorum",
                    "iusto",
                },
                Cc: []string{
                    "dolorum",
                    "deleniti",
                },
                Primary: "omnis",
            },
            Fax: sdk.String("necessitatibus"),
            Phones: []string{
                "asperiores",
                "nihil",
                "ipsum",
            },
            Sms: sdk.String("voluptate"),
            Websites: []string{
                "saepe",
                "eius",
                "aspernatur",
            },
        },
        ContractNumber: sdk.String("perferendis"),
        CorrespondenceAddress: &shared.AddressDTO{
            AddressLine1: sdk.String("amet"),
            AddressLine2: sdk.String("optio"),
            City: sdk.String("Fort Lauderdale"),
            CountryID: sdk.Int64(904425),
            PostalCode: sdk.String("65385"),
            ProvinceID: sdk.Int64(628982),
            SameAsBillingAddress: sdk.Bool(false),
        },
        CustomFields: []shared.CustomFieldDTO{
            shared.CustomFieldDTO{
                Key: sdk.String("at"),
                Name: sdk.String("Rhonda Kautzer"),
                Type: shared.CustomFieldDTOTypeEnumDate.ToPointer(),
                Value: map[string]interface{}{
                    "a": "esse",
                    "harum": "iusto",
                    "ipsum": "quisquam",
                },
            },
        },
        FullName: sdk.String("tenetur"),
        ID: sdk.Int64(229442),
        IDNumber: sdk.String("tempore"),
        IndustriesIds: []int64{
            253941,
            313692,
            213312,
            957451,
        },
        LeadSourceID: sdk.Int64(518201),
        LimitAccessToPeopleResponsible: sdk.Bool(false),
        Name: sdk.String("Karen Rath"),
        Notes: sdk.String("vel"),
        Persons: []shared.CustomerPersonDTO{
            shared.CustomerPersonDTO{
                Active: sdk.Bool(false),
                Contact: &shared.PersonContactDTO{
                    Emails: &shared.PersonContactEmailsDTO{
                        Additional: []string{
                            "deserunt",
                            "quam",
                        },
                        Primary: "ipsum",
                    },
                    Fax: sdk.String("incidunt"),
                    Phones: []string{
                        "cupiditate",
                    },
                    Sms: sdk.String("maxime"),
                },
                CustomFields: []shared.CustomFieldDTO{
                    shared.CustomFieldDTO{
                        Key: sdk.String("soluta"),
                        Name: sdk.String("Kayla Larson"),
                        Type: shared.CustomFieldDTOTypeEnumDate.ToPointer(),
                        Value: map[string]interface{}{
                            "facilis": "aliquid",
                            "quam": "molestias",
                            "temporibus": "qui",
                        },
                    },
                    shared.CustomFieldDTO{
                        Key: sdk.String("neque"),
                        Name: sdk.String("Mrs. Louise Kuhlman"),
                        Type: shared.CustomFieldDTOTypeEnumMultiSelection.ToPointer(),
                        Value: map[string]interface{}{
                            "cumque": "soluta",
                        },
                    },
                    shared.CustomFieldDTO{
                        Key: sdk.String("nobis"),
                        Name: sdk.String("Miss Kerry Emmerich"),
                        Type: shared.CustomFieldDTOTypeEnumSelection.ToPointer(),
                        Value: map[string]interface{}{
                            "aperiam": "delectus",
                            "dolorem": "dolore",
                            "labore": "adipisci",
                        },
                    },
                    shared.CustomFieldDTO{
                        Key: sdk.String("dolorum"),
                        Name: sdk.String("Amy Armstrong"),
                        Type: shared.CustomFieldDTOTypeEnumText.ToPointer(),
                        Value: map[string]interface{}{
                            "repellendus": "porro",
                            "doloribus": "ut",
                            "facilis": "cupiditate",
                        },
                    },
                },
                CustomerID: sdk.Int64(181631),
                FirstProjectDate: types.MustTimeFromString("2022-06-27T23:25:59.184Z"),
                FirstQuoteDate: types.MustTimeFromString("2022-06-03T03:16:58.870Z"),
                Gender: shared.CustomerPersonDTOGenderEnumMale.ToPointer(),
                ID: sdk.Int64(787542),
                LastName: sdk.String("Terry"),
                LastProjectDate: types.MustTimeFromString("2022-04-29T03:27:17.664Z"),
                LastQuoteDate: types.MustTimeFromString("2022-01-15T00:38:43.469Z"),
                MotherTonguesIds: []int64{
                    231701,
                    878870,
                },
                Name: sdk.String("Julio Weissnat"),
                NumberOfProjects: sdk.Int(486160),
                NumberOfQuotes: sdk.Int(630448),
                PositionID: sdk.Int64(708548),
            },
            shared.CustomerPersonDTO{
                Active: sdk.Bool(false),
                Contact: &shared.PersonContactDTO{
                    Emails: &shared.PersonContactEmailsDTO{
                        Additional: []string{
                            "ducimus",
                            "dolore",
                            "quibusdam",
                            "illum",
                        },
                        Primary: "sequi",
                    },
                    Fax: sdk.String("natus"),
                    Phones: []string{
                        "aut",
                        "voluptatibus",
                        "exercitationem",
                        "nulla",
                    },
                    Sms: sdk.String("fugit"),
                },
                CustomFields: []shared.CustomFieldDTO{
                    shared.CustomFieldDTO{
                        Key: sdk.String("maiores"),
                        Name: sdk.String("Ted Romaguera MD"),
                        Type: shared.CustomFieldDTOTypeEnumDate.ToPointer(),
                        Value: map[string]interface{}{
                            "ea": "aspernatur",
                            "vel": "possimus",
                        },
                    },
                    shared.CustomFieldDTO{
                        Key: sdk.String("magnam"),
                        Name: sdk.String("Mrs. Vicki Langosh"),
                        Type: shared.CustomFieldDTOTypeEnumText.ToPointer(),
                        Value: map[string]interface{}{
                            "nulla": "excepturi",
                            "voluptatibus": "nostrum",
                        },
                    },
                    shared.CustomFieldDTO{
                        Key: sdk.String("sapiente"),
                        Name: sdk.String("Elbert Jenkins"),
                        Type: shared.CustomFieldDTOTypeEnumDateAndTime.ToPointer(),
                        Value: map[string]interface{}{
                            "inventore": "magnam",
                            "ea": "quo",
                        },
                    },
                    shared.CustomFieldDTO{
                        Key: sdk.String("consectetur"),
                        Name: sdk.String("Dr. Bruce Hane"),
                        Type: shared.CustomFieldDTOTypeEnumText.ToPointer(),
                        Value: map[string]interface{}{
                            "deleniti": "impedit",
                        },
                    },
                },
                CustomerID: sdk.Int64(304582),
                FirstProjectDate: types.MustTimeFromString("2022-02-12T18:08:46.973Z"),
                FirstQuoteDate: types.MustTimeFromString("2022-10-01T12:32:41.161Z"),
                Gender: shared.CustomerPersonDTOGenderEnumFemale.ToPointer(),
                ID: sdk.Int64(677412),
                LastName: sdk.String("Osinski"),
                LastProjectDate: types.MustTimeFromString("2022-04-07T07:44:57.988Z"),
                LastQuoteDate: types.MustTimeFromString("2022-07-31T12:04:26.954Z"),
                MotherTonguesIds: []int64{
                    557369,
                    829603,
                    860552,
                    379034,
                },
                Name: sdk.String("Ryan Glover"),
                NumberOfProjects: sdk.Int(591935),
                NumberOfQuotes: sdk.Int(55374),
                PositionID: sdk.Int64(476477),
            },
            shared.CustomerPersonDTO{
                Active: sdk.Bool(false),
                Contact: &shared.PersonContactDTO{
                    Emails: &shared.PersonContactEmailsDTO{
                        Additional: []string{
                            "odio",
                            "eius",
                        },
                        Primary: "esse",
                    },
                    Fax: sdk.String("esse"),
                    Phones: []string{
                        "fuga",
                        "reprehenderit",
                        "quidem",
                    },
                    Sms: sdk.String("fugiat"),
                },
                CustomFields: []shared.CustomFieldDTO{
                    shared.CustomFieldDTO{
                        Key: sdk.String("eum"),
                        Name: sdk.String("Angelina Davis"),
                        Type: shared.CustomFieldDTOTypeEnumText.ToPointer(),
                        Value: map[string]interface{}{
                            "id": "quidem",
                        },
                    },
                    shared.CustomFieldDTO{
                        Key: sdk.String("neque"),
                        Name: sdk.String("Dallas Sanford"),
                        Type: shared.CustomFieldDTOTypeEnumDate.ToPointer(),
                        Value: map[string]interface{}{
                            "ab": "cupiditate",
                            "consequatur": "tempora",
                        },
                    },
                },
                CustomerID: sdk.Int64(892050),
                FirstProjectDate: types.MustTimeFromString("2022-11-13T06:50:40.250Z"),
                FirstQuoteDate: types.MustTimeFromString("2022-03-22T14:16:41.787Z"),
                Gender: shared.CustomerPersonDTOGenderEnumFemale.ToPointer(),
                ID: sdk.Int64(925164),
                LastName: sdk.String("Bayer"),
                LastProjectDate: types.MustTimeFromString("2021-05-27T03:34:33.852Z"),
                LastQuoteDate: types.MustTimeFromString("2022-12-03T21:51:40.661Z"),
                MotherTonguesIds: []int64{
                    518835,
                    882710,
                },
                Name: sdk.String("Courtney Mayert"),
                NumberOfProjects: sdk.Int(174112),
                NumberOfQuotes: sdk.Int(645570),
                PositionID: sdk.Int64(475289),
            },
        },
        ResponsiblePersons: &shared.CustomerResponsiblePersonsDTO{
            AccountManagerID: sdk.Int64(35362),
            ProjectCoordinatorID: sdk.Int64(783648),
            ProjectManagerID: 430402,
            SalesPersonID: 556429,
        },
        SalesNotes: sdk.String("praesentium"),
        Status: shared.CustomerDTOStatusEnumActive.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Delete3

Removes a person.

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
    res, err := s.Clients.Delete3(ctx, operations.Delete3Request{
        PersonID: 536178,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Delete4

Removes a customer price list.

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
    res, err := s.Clients.Delete4(ctx, operations.Delete4Request{
        PriceListID: 143829,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Delete5

Removes a client.

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
    res, err := s.Clients.Delete5(ctx, operations.Delete5Request{
        CustomerID: 681393,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GenerateSingleUseSignInToken

Generates a single use sign-in token for the customer person found for given login or e-mail. Returns 'url' and 'token' which allows to sign-in to customer portal as this person. Token is valid for two minutes and can be used only once. To sign-in to customer portal you should post 'token' provided as the 'accessToken' form param to the 'url' using POST method.Detailed description is available in the Customer API <a href="/api-doc/customer-api/authentication">authentication</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Clients.GenerateSingleUseSignInToken(ctx, shared.AccessTokenRequestDTO{
        LoginOrEmail: sdk.String("mollitia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAddress

Returns address of a given client.

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
    res, err := s.Clients.GetAddress(ctx, operations.GetAddressRequest{
        CustomerID: 277596,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAllIds1

Returns persons' internal identifiers.

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
    res, err := s.Clients.GetAllIds1(ctx, operations.GetAllIds1Request{
        UpdatedSince: sdk.Int64(539224),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAllIds2

Returns clients' internal identifiers.

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
    res, err := s.Clients.GetAllIds2(ctx, operations.GetAllIds2Request{
        EmailEquals: sdk.String("explicabo"),
        NameEquals: sdk.String("minima"),
        UpdatedSince: sdk.Int64(392676),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAllNamesWithIds

Returns list of simple clients representations

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
    res, err := s.Clients.GetAllNamesWithIds(ctx, operations.GetAllNamesWithIdsRequest{
        UpdatedSince: sdk.Int64(147014),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetByID1

Returns person details.

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
    res, err := s.Clients.GetByID1(ctx, operations.GetByID1Request{
        PersonID: 956406,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetByID2

Returns client details.

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
    res, err := s.Clients.GetByID2(ctx, operations.GetByID2Request{
        CustomerID: 159870,
        Embed: sdk.String("ratione"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCategories

Returns categories of a given client.

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
    res, err := s.Clients.GetCategories(ctx, operations.GetCategoriesRequest{
        CustomerID: 129412,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetContact

Returns contact of a given person.

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
    res, err := s.Clients.GetContact(ctx, operations.GetContactRequest{
        PersonID: 903984,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetContact1

Returns contact of a given client.

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
    res, err := s.Clients.GetContact1(ctx, operations.GetContact1Request{
        CustomerID: 578922,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCorrespondenceAddress

Returns correspondence address of a given client.

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
    res, err := s.Clients.GetCorrespondenceAddress(ctx, operations.GetCorrespondenceAddressRequest{
        CustomerID: 543806,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCustomField

Returns custom field of a given client.

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
    res, err := s.Clients.GetCustomField(ctx, operations.GetCustomFieldRequest{
        CustomFieldKey: "et",
        CustomerID: 456911,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCustomFields

Returns custom fields of a given person.

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
    res, err := s.Clients.GetCustomFields(ctx, operations.GetCustomFieldsRequest{
        PersonID: 910545,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCustomFields1

Returns custom fields of a given client.

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
    res, err := s.Clients.GetCustomFields1(ctx, operations.GetCustomFields1Request{
        CustomerID: 882042,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetIndustries

Returns industries of a given client.

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
    res, err := s.Clients.GetIndustries(ctx, operations.GetIndustriesRequest{
        CustomerID: 82971,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateAddress

Updates address of a given client.

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
    res, err := s.Clients.UpdateAddress(ctx, operations.UpdateAddressRequest{
        AddressDTO: shared.AddressDTO{
            AddressLine1: sdk.String("esse"),
            AddressLine2: sdk.String("quod"),
            City: sdk.String("Terryview"),
            CountryID: sdk.Int64(93459),
            PostalCode: sdk.String("46465-3770"),
            ProvinceID: sdk.Int64(636061),
            SameAsBillingAddress: sdk.Bool(false),
        },
        CustomerID: 731398,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateCategories

Updates categories of a given client.

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
    res, err := s.Clients.UpdateCategories(ctx, operations.UpdateCategoriesRequest{
        RequestBody: []int64{
            766964,
        },
        CustomerID: 160538,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateContact

Updates contact of a given person. Sets that this person uses specific address and contact (not the one from customer).

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
    res, err := s.Clients.UpdateContact(ctx, operations.UpdateContactRequest{
        PersonContactDTO: shared.PersonContactDTO{
            Emails: &shared.PersonContactEmailsDTO{
                Additional: []string{
                    "minus",
                },
                Primary: "quaerat",
            },
            Fax: sdk.String("sapiente"),
            Phones: []string{
                "esse",
            },
            Sms: sdk.String("blanditiis"),
        },
        PersonID: 590984,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateContact1

Updates contact of a given client.

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
    res, err := s.Clients.UpdateContact1(ctx, operations.UpdateContact1Request{
        ContactDTO: shared.ContactDTO{
            Emails: &shared.CustomerContactEmailsDTO{
                Additional: []string{
                    "nulla",
                    "quas",
                    "esse",
                    "quasi",
                },
                Cc: []string{
                    "error",
                    "sint",
                    "pariatur",
                    "possimus",
                },
                Primary: "quia",
            },
            Fax: sdk.String("eveniet"),
            Phones: []string{
                "facere",
                "veritatis",
                "consequuntur",
                "quasi",
            },
            Sms: sdk.String("similique"),
            Websites: []string{
                "aliquid",
                "tenetur",
                "quae",
            },
        },
        CustomerID: 936747,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateCorrespondenceAddress

Updates correspondence address of a given client.

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
    res, err := s.Clients.UpdateCorrespondenceAddress(ctx, operations.UpdateCorrespondenceAddressRequest{
        AddressDTO: shared.AddressDTO{
            AddressLine1: sdk.String("vel"),
            AddressLine2: sdk.String("in"),
            City: sdk.String("Lake Rosina"),
            CountryID: sdk.Int64(742238),
            PostalCode: sdk.String("39134"),
            ProvinceID: sdk.Int64(356707),
            SameAsBillingAddress: sdk.Bool(false),
        },
        CustomerID: 391774,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateCustomField

Updates given custom field of a given client.

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
    res, err := s.Clients.UpdateCustomField(ctx, operations.UpdateCustomFieldRequest{
        CustomFieldDTO: shared.CustomFieldDTO{
            Key: sdk.String("aut"),
            Name: sdk.String("Clarence Sporer"),
            Type: shared.CustomFieldDTOTypeEnumMultiSelection.ToPointer(),
            Value: map[string]interface{}{
                "architecto": "omnis",
                "tenetur": "quasi",
                "at": "et",
            },
        },
        CustomFieldKey: "voluptate",
        CustomerID: 55965,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateCustomFields

Updates custom fields of a given person.

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
    res, err := s.Clients.UpdateCustomFields(ctx, operations.UpdateCustomFieldsRequest{
        RequestBody: []shared.CustomFieldDTO{
            shared.CustomFieldDTO{
                Key: sdk.String("veritatis"),
                Name: sdk.String("Sherry Morar IV"),
                Type: shared.CustomFieldDTOTypeEnumText.ToPointer(),
                Value: map[string]interface{}{
                    "eum": "mollitia",
                    "ab": "corrupti",
                    "non": "voluptatem",
                },
            },
            shared.CustomFieldDTO{
                Key: sdk.String("dolor"),
                Name: sdk.String("Francis Russel"),
                Type: shared.CustomFieldDTOTypeEnumText.ToPointer(),
                Value: map[string]interface{}{
                    "dicta": "maiores",
                    "natus": "velit",
                },
            },
        },
        PersonID: 974257,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateCustomFields1

Updates custom fields of a given client.

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
    res, err := s.Clients.UpdateCustomFields1(ctx, operations.UpdateCustomFields1Request{
        RequestBody: []shared.CustomFieldDTO{
            shared.CustomFieldDTO{
                Key: sdk.String("asperiores"),
                Name: sdk.String("Eileen Hagenes"),
                Type: shared.CustomFieldDTOTypeEnumCheckbox.ToPointer(),
                Value: map[string]interface{}{
                    "dignissimos": "officia",
                    "asperiores": "nemo",
                    "quae": "quaerat",
                    "porro": "quod",
                },
            },
            shared.CustomFieldDTO{
                Key: sdk.String("labore"),
                Name: sdk.String("Josephine Paucek"),
                Type: shared.CustomFieldDTOTypeEnumDate.ToPointer(),
                Value: map[string]interface{}{
                    "est": "recusandae",
                    "totam": "fugiat",
                    "vel": "ducimus",
                },
            },
        },
        CustomerID: 554688,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateIndustries

Updates industries of a given client.

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
    res, err := s.Clients.UpdateIndustries(ctx, operations.UpdateIndustriesRequest{
        RequestBody: []int64{
            287051,
            822560,
        },
        CustomerID: 706575,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Update1

Only specified fields will be changed. One may not specify embeddable fields here - use separate API calls for updating them.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Clients.Update1(ctx, operations.Update1Request{
        CustomerPersonDTO: shared.CustomerPersonDTO{
            Active: sdk.Bool(false),
            Contact: &shared.PersonContactDTO{
                Emails: &shared.PersonContactEmailsDTO{
                    Additional: []string{
                        "commodi",
                        "in",
                        "corporis",
                    },
                    Primary: "reiciendis",
                },
                Fax: sdk.String("assumenda"),
                Phones: []string{
                    "recusandae",
                    "aliquid",
                },
                Sms: sdk.String("aperiam"),
            },
            CustomFields: []shared.CustomFieldDTO{
                shared.CustomFieldDTO{
                    Key: sdk.String("consectetur"),
                    Name: sdk.String("Annette Wehner"),
                    Type: shared.CustomFieldDTOTypeEnumMultiSelection.ToPointer(),
                    Value: map[string]interface{}{
                        "reiciendis": "quidem",
                        "saepe": "necessitatibus",
                    },
                },
                shared.CustomFieldDTO{
                    Key: sdk.String("dolore"),
                    Name: sdk.String("Ollie Flatley"),
                    Type: shared.CustomFieldDTOTypeEnumText.ToPointer(),
                    Value: map[string]interface{}{
                        "a": "debitis",
                        "consectetur": "corporis",
                    },
                },
                shared.CustomFieldDTO{
                    Key: sdk.String("harum"),
                    Name: sdk.String("Melissa Von PhD"),
                    Type: shared.CustomFieldDTOTypeEnumCheckbox.ToPointer(),
                    Value: map[string]interface{}{
                        "aspernatur": "voluptas",
                        "voluptas": "voluptas",
                    },
                },
            },
            CustomerID: sdk.Int64(324405),
            FirstProjectDate: types.MustTimeFromString("2021-08-22T12:22:32.426Z"),
            FirstQuoteDate: types.MustTimeFromString("2022-03-16T15:06:56.015Z"),
            Gender: shared.CustomerPersonDTOGenderEnumFemale.ToPointer(),
            ID: sdk.Int64(503934),
            LastName: sdk.String("Kirlin"),
            LastProjectDate: types.MustTimeFromString("2022-09-11T20:51:23.700Z"),
            LastQuoteDate: types.MustTimeFromString("2020-06-26T02:06:35.498Z"),
            MotherTonguesIds: []int64{
                237742,
                738391,
            },
            Name: sdk.String("Morris Weissnat"),
            NumberOfProjects: sdk.Int(548519),
            NumberOfQuotes: sdk.Int(867290),
            PositionID: sdk.Int64(519643),
        },
        PersonID: 940210,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Update2

Only specified fields will be changed (id is required). One may not specify embeddable fields here - use separate API calls for updating them.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            XAuthAccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Clients.Update2(ctx, operations.Update2Request{
        CustomerDTO: shared.CustomerDTO{
            AccountOnCustomerServer: sdk.String("exercitationem"),
            Accounting: &shared.CustomerAccountingDTO{
                TaxNumbers: []shared.CustomerTaxNoDTO{
                    shared.CustomerTaxNoDTO{
                        Number: sdk.String("sit"),
                        Type: sdk.String("rerum"),
                    },
                    shared.CustomerTaxNoDTO{
                        Number: sdk.String("sed"),
                        Type: sdk.String("reiciendis"),
                    },
                    shared.CustomerTaxNoDTO{
                        Number: sdk.String("explicabo"),
                        Type: sdk.String("asperiores"),
                    },
                    shared.CustomerTaxNoDTO{
                        Number: sdk.String("facilis"),
                        Type: sdk.String("voluptate"),
                    },
                },
            },
            BillingAddress: &shared.AddressDTO{
                AddressLine1: sdk.String("expedita"),
                AddressLine2: sdk.String("ab"),
                City: sdk.String("Greenholtchester"),
                CountryID: sdk.Int64(152354),
                PostalCode: sdk.String("46136"),
                ProvinceID: sdk.Int64(100032),
                SameAsBillingAddress: sdk.Bool(false),
            },
            BranchID: sdk.Int64(382808),
            CategoriesIds: []int64{
                895386,
                72434,
                967795,
                19300,
            },
            ClientFirstProjectDate: types.MustTimeFromString("2021-01-15T21:52:35.790Z"),
            ClientFirstQuoteDate: types.MustTimeFromString("2022-11-07T19:19:54.306Z"),
            ClientLastProjectDate: types.MustTimeFromString("2022-06-26T03:32:06.720Z"),
            ClientLastQuoteDate: types.MustTimeFromString("2022-05-09T23:54:09.125Z"),
            ClientNumberOfProjects: sdk.Int(406733),
            ClientNumberOfQuotes: sdk.Int(579912),
            Contact: &shared.ContactDTO{
                Emails: &shared.CustomerContactEmailsDTO{
                    Additional: []string{
                        "voluptatibus",
                        "tempora",
                        "tempora",
                    },
                    Cc: []string{
                        "reiciendis",
                        "ex",
                    },
                    Primary: "sit",
                },
                Fax: sdk.String("non"),
                Phones: []string{
                    "praesentium",
                    "facilis",
                    "quaerat",
                    "incidunt",
                },
                Sms: sdk.String("ipsam"),
                Websites: []string{
                    "rem",
                    "sit",
                    "nobis",
                    "error",
                },
            },
            ContractNumber: sdk.String("veniam"),
            CorrespondenceAddress: &shared.AddressDTO{
                AddressLine1: sdk.String("minima"),
                AddressLine2: sdk.String("recusandae"),
                City: sdk.String("Stamford"),
                CountryID: sdk.Int64(168576),
                PostalCode: sdk.String("92348"),
                ProvinceID: sdk.Int64(104627),
                SameAsBillingAddress: sdk.Bool(false),
            },
            CustomFields: []shared.CustomFieldDTO{
                shared.CustomFieldDTO{
                    Key: sdk.String("exercitationem"),
                    Name: sdk.String("Bennie Howe"),
                    Type: shared.CustomFieldDTOTypeEnumCheckbox.ToPointer(),
                    Value: map[string]interface{}{
                        "expedita": "debitis",
                        "neque": "dolorum",
                        "nostrum": "officia",
                        "dolorum": "corrupti",
                    },
                },
                shared.CustomFieldDTO{
                    Key: sdk.String("accusamus"),
                    Name: sdk.String("Kay Cormier"),
                    Type: shared.CustomFieldDTOTypeEnumText.ToPointer(),
                    Value: map[string]interface{}{
                        "expedita": "magnam",
                        "consequatur": "esse",
                        "ipsam": "sit",
                    },
                },
                shared.CustomFieldDTO{
                    Key: sdk.String("voluptatum"),
                    Name: sdk.String("Ms. Lamar Hessel"),
                    Type: shared.CustomFieldDTOTypeEnumDate.ToPointer(),
                    Value: map[string]interface{}{
                        "vel": "nostrum",
                    },
                },
            },
            FullName: sdk.String("saepe"),
            ID: sdk.Int64(622231),
            IDNumber: sdk.String("consequatur"),
            IndustriesIds: []int64{
                968865,
                209750,
            },
            LeadSourceID: sdk.Int64(690894),
            LimitAccessToPeopleResponsible: sdk.Bool(false),
            Name: sdk.String("Diane Mayer"),
            Notes: sdk.String("atque"),
            Persons: []shared.CustomerPersonDTO{
                shared.CustomerPersonDTO{
                    Active: sdk.Bool(false),
                    Contact: &shared.PersonContactDTO{
                        Emails: &shared.PersonContactEmailsDTO{
                            Additional: []string{
                                "tenetur",
                                "laboriosam",
                                "alias",
                            },
                            Primary: "amet",
                        },
                        Fax: sdk.String("deserunt"),
                        Phones: []string{
                            "unde",
                            "reiciendis",
                        },
                        Sms: sdk.String("provident"),
                    },
                    CustomFields: []shared.CustomFieldDTO{
                        shared.CustomFieldDTO{
                            Key: sdk.String("delectus"),
                            Name: sdk.String("Joseph Orn"),
                            Type: shared.CustomFieldDTOTypeEnumSelection.ToPointer(),
                            Value: map[string]interface{}{
                                "praesentium": "mollitia",
                                "veniam": "voluptatem",
                                "quisquam": "repudiandae",
                            },
                        },
                        shared.CustomFieldDTO{
                            Key: sdk.String("quasi"),
                            Name: sdk.String("Mitchell Zboncak"),
                            Type: shared.CustomFieldDTOTypeEnumCheckbox.ToPointer(),
                            Value: map[string]interface{}{
                                "et": "esse",
                                "amet": "assumenda",
                                "ea": "atque",
                                "error": "officiis",
                            },
                        },
                        shared.CustomFieldDTO{
                            Key: sdk.String("officiis"),
                            Name: sdk.String("Wendell Harber"),
                            Type: shared.CustomFieldDTOTypeEnumMultiSelection.ToPointer(),
                            Value: map[string]interface{}{
                                "at": "error",
                                "blanditiis": "suscipit",
                                "repudiandae": "atque",
                            },
                        },
                        shared.CustomFieldDTO{
                            Key: sdk.String("atque"),
                            Name: sdk.String("Delia Parisian"),
                            Type: shared.CustomFieldDTOTypeEnumMultiSelection.ToPointer(),
                            Value: map[string]interface{}{
                                "repudiandae": "dicta",
                            },
                        },
                    },
                    CustomerID: sdk.Int64(36033),
                    FirstProjectDate: types.MustTimeFromString("2022-10-29T04:59:49.150Z"),
                    FirstQuoteDate: types.MustTimeFromString("2022-08-11T23:10:48.145Z"),
                    Gender: shared.CustomerPersonDTOGenderEnumFemale.ToPointer(),
                    ID: sdk.Int64(952143),
                    LastName: sdk.String("Maggio"),
                    LastProjectDate: types.MustTimeFromString("2022-02-04T04:20:12.809Z"),
                    LastQuoteDate: types.MustTimeFromString("2022-06-03T06:15:48.130Z"),
                    MotherTonguesIds: []int64{
                        597937,
                        446394,
                        238043,
                        907876,
                    },
                    Name: sdk.String("Carlos Considine"),
                    NumberOfProjects: sdk.Int(440264),
                    NumberOfQuotes: sdk.Int(625528),
                    PositionID: sdk.Int64(76486),
                },
                shared.CustomerPersonDTO{
                    Active: sdk.Bool(false),
                    Contact: &shared.PersonContactDTO{
                        Emails: &shared.PersonContactEmailsDTO{
                            Additional: []string{
                                "quidem",
                                "eveniet",
                            },
                            Primary: "non",
                        },
                        Fax: sdk.String("vero"),
                        Phones: []string{
                            "iure",
                        },
                        Sms: sdk.String("ipsa"),
                    },
                    CustomFields: []shared.CustomFieldDTO{
                        shared.CustomFieldDTO{
                            Key: sdk.String("quae"),
                            Name: sdk.String("Tricia Denesik"),
                            Type: shared.CustomFieldDTOTypeEnumMultiSelection.ToPointer(),
                            Value: map[string]interface{}{
                                "laborum": "distinctio",
                            },
                        },
                        shared.CustomFieldDTO{
                            Key: sdk.String("voluptatum"),
                            Name: sdk.String("Jim Hammes II"),
                            Type: shared.CustomFieldDTOTypeEnumCheckbox.ToPointer(),
                            Value: map[string]interface{}{
                                "mollitia": "voluptas",
                                "alias": "maiores",
                            },
                        },
                        shared.CustomFieldDTO{
                            Key: sdk.String("reiciendis"),
                            Name: sdk.String("Alberta Harber"),
                            Type: shared.CustomFieldDTOTypeEnumDate.ToPointer(),
                            Value: map[string]interface{}{
                                "recusandae": "omnis",
                            },
                        },
                    },
                    CustomerID: sdk.Int64(309251),
                    FirstProjectDate: types.MustTimeFromString("2022-08-06T19:48:35.360Z"),
                    FirstQuoteDate: types.MustTimeFromString("2022-05-14T22:22:36.102Z"),
                    Gender: shared.CustomerPersonDTOGenderEnumFemale.ToPointer(),
                    ID: sdk.Int64(890653),
                    LastName: sdk.String("Larkin"),
                    LastProjectDate: types.MustTimeFromString("2022-08-19T16:57:15.208Z"),
                    LastQuoteDate: types.MustTimeFromString("2021-08-19T02:39:25.517Z"),
                    MotherTonguesIds: []int64{
                        337477,
                        431785,
                        970494,
                    },
                    Name: sdk.String("Miss Bruce Hermann"),
                    NumberOfProjects: sdk.Int(652309),
                    NumberOfQuotes: sdk.Int(591027),
                    PositionID: sdk.Int64(821719),
                },
                shared.CustomerPersonDTO{
                    Active: sdk.Bool(false),
                    Contact: &shared.PersonContactDTO{
                        Emails: &shared.PersonContactEmailsDTO{
                            Additional: []string{
                                "ex",
                                "aliquid",
                                "accusantium",
                            },
                            Primary: "repellat",
                        },
                        Fax: sdk.String("doloribus"),
                        Phones: []string{
                            "in",
                            "nam",
                        },
                        Sms: sdk.String("earum"),
                    },
                    CustomFields: []shared.CustomFieldDTO{
                        shared.CustomFieldDTO{
                            Key: sdk.String("laborum"),
                            Name: sdk.String("Edwin Wolf"),
                            Type: shared.CustomFieldDTOTypeEnumMultiSelection.ToPointer(),
                            Value: map[string]interface{}{
                                "vitae": "rerum",
                                "tempora": "quis",
                                "inventore": "fugit",
                                "cumque": "quae",
                            },
                        },
                        shared.CustomFieldDTO{
                            Key: sdk.String("perferendis"),
                            Name: sdk.String("Judy Kemmer"),
                            Type: shared.CustomFieldDTOTypeEnumMultiSelection.ToPointer(),
                            Value: map[string]interface{}{
                                "eos": "sapiente",
                                "eum": "dicta",
                                "minima": "beatae",
                                "cupiditate": "provident",
                            },
                        },
                        shared.CustomFieldDTO{
                            Key: sdk.String("earum"),
                            Name: sdk.String("Dr. Terrell Stanton"),
                            Type: shared.CustomFieldDTOTypeEnumMultiSelection.ToPointer(),
                            Value: map[string]interface{}{
                                "aliquid": "porro",
                                "suscipit": "dolorem",
                                "fugit": "cumque",
                                "fuga": "ratione",
                            },
                        },
                    },
                    CustomerID: sdk.Int64(656762),
                    FirstProjectDate: types.MustTimeFromString("2020-06-01T00:59:41.712Z"),
                    FirstQuoteDate: types.MustTimeFromString("2022-11-26T12:01:10.841Z"),
                    Gender: shared.CustomerPersonDTOGenderEnumFemale.ToPointer(),
                    ID: sdk.Int64(497777),
                    LastName: sdk.String("Mosciski"),
                    LastProjectDate: types.MustTimeFromString("2022-03-27T19:38:57.457Z"),
                    LastQuoteDate: types.MustTimeFromString("2022-11-26T18:06:32.022Z"),
                    MotherTonguesIds: []int64{
                        984934,
                    },
                    Name: sdk.String("Terence Beer"),
                    NumberOfProjects: sdk.Int(473190),
                    NumberOfQuotes: sdk.Int(115834),
                    PositionID: sdk.Int64(479754),
                },
            },
            ResponsiblePersons: &shared.CustomerResponsiblePersonsDTO{
                AccountManagerID: sdk.Int64(457059),
                ProjectCoordinatorID: sdk.Int64(508390),
                ProjectManagerID: 979963,
                SalesPersonID: 967260,
            },
            SalesNotes: sdk.String("vel"),
            Status: shared.CustomerDTOStatusEnumActive.ToPointer(),
        },
        CustomerID: 857125,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
