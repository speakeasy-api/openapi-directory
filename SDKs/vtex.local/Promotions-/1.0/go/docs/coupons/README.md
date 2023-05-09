# Coupons

### Available Operations

* [Archivebycouponcode](#archivebycouponcode) - Archive coupon by coupon code
* [Getall](#getall) - Get all coupons
* [Getarchivedbycouponcode](#getarchivedbycouponcode) - Get archived coupon by coupon code
* [Getbycouponcode](#getbycouponcode) - Get coupon by coupon code
* [Getusage](#getusage) - Get coupon usage
* [MassiveGeneration](#massivegeneration) - Coupon Massive Generation
* [Unarchivebycouponcode](#unarchivebycouponcode) - Unarchive coupon by coupon code
* [Update](#update) - Update coupon
* [PostAPIRnbPvtCoupon](#postapirnbpvtcoupon) - Create coupon
* [PostAPIRnbPvtMultipleCoupons](#postapirnbpvtmultiplecoupons) - Create multiple coupons

## Archivebycouponcode

Archives a specifc coupon by its coupon code.

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
    res, err := s.Coupons.Archivebycouponcode(ctx, operations.ArchivebycouponcodeRequest{
        Accept: "aspernatur",
        ContentType: "vel",
        CouponCode: "test",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CouponCode != nil {
        // handle response
    }
}
```

## Getall


> Check the new [Promotions onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/promotions-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Promotions and is organized by focusing on the developer's journey.

 Retrieves all coupons from an account.

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
    res, err := s.Coupons.Getall(ctx, operations.GetallRequest{
        Accept: "possimus",
        ContentType: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getall200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## Getarchivedbycouponcode

Retrieves a specific archived coupon by its coupon code.

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
    res, err := s.Coupons.Getarchivedbycouponcode(ctx, operations.GetarchivedbycouponcodeRequest{
        Accept: "ratione",
        ContentType: "ex",
        CouponCode: "promo10",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getarchivedbycouponcode200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getbycouponcode

Retrieves a specific coupon by its coupon code.

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
    res, err := s.Coupons.Getbycouponcode(ctx, operations.GetbycouponcodeRequest{
        Accept: "laudantium",
        ContentType: "dicta",
        CouponCode: "promo10",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getbycouponcode200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getusage

Retrieves information about the coupon usage.

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
    res, err := s.Coupons.Getusage(ctx, operations.GetusageRequest{
        Accept: "dolor",
        ContentType: "maiores",
        CouponCode: "test",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getusage200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## MassiveGeneration

Generates a massive amount of coupons

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
    res, err := s.Coupons.MassiveGeneration(ctx, operations.MassiveGenerationRequest{
        Accept: "quasi",
        ContentType: "ex",
        RequestBody: operations.MassiveGenerationRequestBody{
            CouponCode: "ctest",
            ExpirationIntervalPerUse: "00:00:00",
            MaxItemsPerClient: 1,
            UtmCampaign: "cupom3",
            UtmSource: "cupom3",
        },
        Quantity: 10,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CouponCodes != nil {
        // handle response
    }
}
```

## Unarchivebycouponcode

Unarchives a specifc coupon by its coupon code.

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
    res, err := s.Coupons.Unarchivebycouponcode(ctx, operations.UnarchivebycouponcodeRequest{
        Accept: "nulla",
        ContentType: "excepturi",
        CouponCode: "test",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CouponCode != nil {
        // handle response
    }
}
```

## Update

Updates information of a specific coupon.

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
    res, err := s.Coupons.Update(ctx, operations.UpdateRequest{
        Accept: "voluptatibus",
        ContentType: "nostrum",
        RequestBody: operations.UpdateRequestBody{
            CouponCode: "test",
            ExpirationIntervalPerUse: "00:00:00",
            IsArchived: false,
            MaxItemsPerClient: 10,
            UtmCampaign: "coupon3",
            UtmSource: "coupon3",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Update200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAPIRnbPvtCoupon

Creates a single new coupon.

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
    res, err := s.Coupons.PostAPIRnbPvtCoupon(ctx, operations.PostAPIRnbPvtCouponRequest{
        Accept: "sapiente",
        ContentType: "quisquam",
        RequestBody: &operations.PostAPIRnbPvtCouponRequestBody{
            CouponCode: "summersale10",
            ExpirationIntervalPerUse: "00:00:00",
            MaxItemsPerClient: 10,
            UtmCampaign: sdk.String("summer"),
            UtmSource: "email",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAPIRnbPvtCoupon201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAPIRnbPvtMultipleCoupons

Creates multiple coupons with different coupon codes. This endpoint has a throttling of 60 requests per minute.

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
    res, err := s.Coupons.PostAPIRnbPvtMultipleCoupons(ctx, operations.PostAPIRnbPvtMultipleCouponsRequest{
        Accept: "saepe",
        ContentType: "ea",
        RequestBody: []PostAPIRnbPvtMultipleCouponsRequestBody{
            operations.PostAPIRnbPvtMultipleCouponsRequestBody{
                CouponConfiguration: operations.PostAPIRnbPvtMultipleCouponsRequestBodyCouponConfiguration{
                    CouponCode: "test",
                    ExpirationIntervalPerUse: "00:00:00",
                    IsArchived: sdk.Bool(false),
                    MaxItemsPerClient: 10,
                    UtmCampaign: "corporis",
                    UtmSource: "coupon3",
                },
                Quantity: 1,
            },
            operations.PostAPIRnbPvtMultipleCouponsRequestBody{
                CouponConfiguration: operations.PostAPIRnbPvtMultipleCouponsRequestBodyCouponConfiguration{
                    CouponCode: "test",
                    ExpirationIntervalPerUse: "00:00:00",
                    IsArchived: sdk.Bool(false),
                    MaxItemsPerClient: 10,
                    UtmCampaign: "veniam",
                    UtmSource: "coupon3",
                },
                Quantity: 1,
            },
            operations.PostAPIRnbPvtMultipleCouponsRequestBody{
                CouponConfiguration: operations.PostAPIRnbPvtMultipleCouponsRequestBodyCouponConfiguration{
                    CouponCode: "test",
                    ExpirationIntervalPerUse: "00:00:00",
                    IsArchived: sdk.Bool(false),
                    MaxItemsPerClient: 10,
                    UtmCampaign: "aliquid",
                    UtmSource: "coupon3",
                },
                Quantity: 1,
            },
            operations.PostAPIRnbPvtMultipleCouponsRequestBody{
                CouponConfiguration: operations.PostAPIRnbPvtMultipleCouponsRequestBodyCouponConfiguration{
                    CouponCode: "test",
                    ExpirationIntervalPerUse: "00:00:00",
                    IsArchived: sdk.Bool(false),
                    MaxItemsPerClient: 10,
                    UtmCampaign: "inventore",
                    UtmSource: "coupon3",
                },
                Quantity: 1,
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Items != nil {
        // handle response
    }
}
```
