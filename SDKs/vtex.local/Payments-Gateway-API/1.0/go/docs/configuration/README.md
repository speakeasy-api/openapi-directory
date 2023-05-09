# Configuration

### Available Operations

* [AffiliationByID](#affiliationbyid) - Affiliation By Id
* [Affiliations](#affiliations) - Affiliations
* [AvailablePaymentMethods](#availablepaymentmethods) - Available Payment Methods
* [InsertAffiliation](#insertaffiliation) - Insert Affiliation
* [InsertRule](#insertrule) - Insert Rule
* [PutRuleByID](#putrulebyid) - Rule By Id
* [Rule](#rule) - Delete Rule
* [RuleByID](#rulebyid) - Rule By Id
* [Rules](#rules) - Rules
* [UpdateAffiliation](#updateaffiliation) - Update Affiliation

## AffiliationByID

Returns associated data for the specified affiliation Id, like name and implementation, for example.

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
    res, err := s.Configuration.AffiliationByID(ctx, operations.AffiliationByIDRequest{
        Accept: "application/json",
        ContentType: "application/json",
        XPROVIDERAPIAppKey: "{{X-PROVIDER-API-AppKey}}",
        XPROVIDERAPIAppToken: "{{X-PROVIDER-API-AppToken}}",
        AffiliationID: "e046d326-5421-45ab-95ae-f13d37f260b5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Affiliations

Returns all affiliations that your provider can handle.

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
    res, err := s.Configuration.Affiliations(ctx, operations.AffiliationsRequest{
        Accept: "application/json",
        ContentType: "application/json",
        XPROVIDERAPIAppKey: "{{X-PROVIDER-API-AppKey}}",
        XPROVIDERAPIAppToken: "{{X-PROVIDER-API-AppToken}}",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AvailablePaymentMethods

Returns enabled payment methods, like visa, master, bankissueinvoice that are shown for the final user and enabled to receive payment.

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
    res, err := s.Configuration.AvailablePaymentMethods(ctx, operations.AvailablePaymentMethodsRequest{
        Accept: "application/json",
        ContentType: "application/json",
        XPROVIDERAPIAppKey: "{{X-PROVIDER-API-AppKey}}",
        XPROVIDERAPIAppToken: "{{X-PROVIDER-API-AppToken}}",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentSystemsResponses != nil {
        // handle response
    }
}
```

## InsertAffiliation

Creates a new affiliation and returns a successful response.

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
    res, err := s.Configuration.InsertAffiliation(ctx, operations.InsertAffiliationRequest{
        Accept: "application/json",
        ContentType: "application/json",
        InsertAffiliationRequest: shared.InsertAffiliationRequest{
            Configuration: []shared.Configuration{
                shared.Configuration{
                    Name: "Kelvin Sporer",
                    Value: "corrupti",
                },
                shared.Configuration{
                    Name: "Ben Mueller",
                    Value: "iure",
                },
                shared.Configuration{
                    Name: "Raquel Bednar",
                    Value: "suscipit",
                },
            },
            Implementation: "molestiae",
            IsConfigured: false,
            Isdelivered: false,
            Name: "Irving Lehner",
        },
        XPROVIDERAPIAppKey: "{{X-PROVIDER-API-AppKey}}",
        XPROVIDERAPIAppToken: "{{X-PROVIDER-API-AppToken}}",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## InsertRule

Creates a new rule and returns a successful response.

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
    res, err := s.Configuration.InsertRule(ctx, operations.InsertRuleRequest{
        Accept: "application/json",
        ContentType: "application/json",
        InsertRuleRequest: shared.InsertRuleRequest{
            Antifraud: shared.Antifraud{
                AffiliationID: "nisi",
                Implementation: "recusandae",
            },
            BeginDate: "temporibus",
            Condition: "ab",
            Connector: shared.Connector{
                AffiliationID: "quis",
                Implementation: "veritatis",
            },
            Country: "Nigeria",
            DateIntervals: "perferendis",
            Enabled: false,
            EndDate: "ipsam",
            InstallmentOptions: "repellendus",
            InstallmentsService: "sapiente",
            IsDefault: false,
            IsSelfAuthorized: "quo",
            Issuer: shared.Issuer{
                Name: "Teri Strosin",
            },
            MultiMerchantList: "quod",
            Name: "Erik Lebsack",
            PaymentSystem: shared.PaymentSystem{
                ID: 118274,
                Implementation: "nam",
                Name: "Seth Conroy",
            },
            RequiresAuthentication: "optio",
            SalesChannels: []shared.SalesChannel{
                shared.SalesChannel{
                    ID: "16742cb7-3920-4592-9396-fea7596eb10f",
                },
                shared.SalesChannel{
                    ID: "aaa2352c-5955-4907-aff1-a3a2fa946773",
                },
                shared.SalesChannel{
                    ID: "9251aa52-c3f5-4ad0-99da-1ffe78f097b0",
                },
            },
        },
        XPROVIDERAPIAppKey: "{{X-PROVIDER-API-AppKey}}",
        XPROVIDERAPIAppToken: "{{X-PROVIDER-API-AppToken}}",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PutRuleByID

Update Rule.

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
    res, err := s.Configuration.PutRuleByID(ctx, operations.PutRuleByIDRequest{
        Accept: "application/json",
        ContentType: "application/json",
        RuleByIDRequest: shared.RuleByIDRequest{
            Antifraud: shared.Antifraud1{
                AffiliationID: "doloremque",
            },
            BeginDate: "reprehenderit",
            Condition: "ut",
            Connector: shared.Connector{
                AffiliationID: "maiores",
                Implementation: "dicta",
            },
            Country: "Guernsey",
            DateIntervals: "dolore",
            Enabled: false,
            EndDate: "iusto",
            ID: "1b5e6e13-b99d-4488-a1e9-1e450ad2abd4",
            InstallmentOptions: shared.InstallmentOptions{
                InterestRateMethod: "modi",
            },
            IsDefault: "qui",
            IsSelfAuthorized: "aliquid",
            Issuer: shared.Issuer{
                Name: "Isaac Aufderhar",
            },
            MultiMerchantList: "ipsam",
            Name: "Denise Pagac",
            PaymentSystem: shared.PaymentSystem{
                ID: 703737,
                Implementation: "tempore",
                Name: "Lucia Kemmer",
            },
            SalesChannels: []shared.SalesChannel{
                shared.SalesChannel{
                    ID: "69e9a3ef-a77d-4fb1-8cd6-6ae395efb9ba",
                },
                shared.SalesChannel{
                    ID: "88f3a669-9707-44ba-8469-b6e214195989",
                },
                shared.SalesChannel{
                    ID: "0afa563e-2516-4fe4-88b7-11e5b7fd2ed0",
                },
            },
        },
        XPROVIDERAPIAppKey: "{{X-PROVIDER-API-AppKey}}",
        XPROVIDERAPIAppToken: "{{X-PROVIDER-API-AppToken}}",
        RuleID: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Rule

Deletes rules by specified Id.

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
    res, err := s.Configuration.Rule(ctx, operations.RuleRequest{
        Accept: "application/json",
        ContentType: "application/json",
        XPROVIDERAPIAppKey: "{{X-PROVIDER-API-AppKey}}",
        XPROVIDERAPIAppToken: "{{X-PROVIDER-API-AppToken}}",
        RuleID: "praesentium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RuleByID

Returns rule by specified RuleId.

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
    res, err := s.Configuration.RuleByID(ctx, operations.RuleByIDRequest{
        Accept: "application/json",
        ContentType: "application/json",
        XPROVIDERAPIAppKey: "{{X-PROVIDER-API-AppKey}}",
        XPROVIDERAPIAppToken: "{{X-PROVIDER-API-AppToken}}",
        RuleID: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Rules

Returns all rules conditions your provider can handle.

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
    res, err := s.Configuration.Rules(ctx, operations.RulesRequest{
        Accept: "application/json",
        ContentType: "application/json",
        XPROVIDERAPIAppKey: "{{X-PROVIDER-API-AppKey}}",
        XPROVIDERAPIAppToken: "{{X-PROVIDER-API-AppToken}}",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateAffiliation

Returns all affiliations.

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
    res, err := s.Configuration.UpdateAffiliation(ctx, operations.UpdateAffiliationRequest{
        Accept: "application/json",
        ContentType: "application/json",
        UpdateAffiliationRequest: shared.UpdateAffiliationRequest{
            Configuration: []shared.Configuration{
                shared.Configuration{
                    Name: "Angelica Stanton",
                    Value: "ea",
                },
            },
            ID: "92601fb5-76b0-4d5f-8d30-c5fbb2587053",
            Implementation: "eos",
            IsConfigured: false,
            Isdelivered: false,
            Name: "Jacqueline Schimmel",
        },
        XPROVIDERAPIAppKey: "{{X-PROVIDER-API-AppKey}}",
        XPROVIDERAPIAppToken: "{{X-PROVIDER-API-AppToken}}",
        AffiliationID: "e046d326-5421-45ab-95ae-f13d37f260b5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
