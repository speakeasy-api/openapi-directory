# Polygons

### Available Operations

* [CreateUpdatePolygon](#createupdatepolygon) - Create/update polygon
* [DeletePolygon](#deletepolygon) - Delete polygon
* [PagedPolygons](#pagedpolygons) - List paged polygons
* [PolygonbyID](#polygonbyid) - List polygon by ID

## CreateUpdatePolygon

Creates or updates your store's polygons by geoshape coordinates and polygon name.

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
    res, err := s.Polygons.CreateUpdatePolygon(ctx, operations.CreateUpdatePolygonRequest{
        Accept: "provident",
        ContentType: "necessitatibus",
        RequestBody: operations.CreateUpdatePolygonCreateUpdatePolygonRequest{
            GeoShape: operations.CreateUpdatePolygonCreateUpdatePolygonRequestGeoShape{
                Coordinates: [][]float64{
                    []float64{
                        2230.81,
                        8915.55,
                        9527.49,
                    },
                    []float64{
                        4471.25,
                        4491.98,
                        8464.09,
                    },
                    []float64{
                        6994.79,
                        1162.02,
                        2974.37,
                        7670.24,
                    },
                },
            },
            Name: "Nathaniel Hyatt",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeletePolygon

Deletes polygon set up in your store, by polygon name.

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
    res, err := s.Polygons.DeletePolygon(ctx, operations.DeletePolygonRequest{
        Accept: "non",
        ContentType: "occaecati",
        PolygonName: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PagedPolygons

Lists stored polygons.

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
    res, err := s.Polygons.PagedPolygons(ctx, operations.PagedPolygonsRequest{
        Accept: "accusamus",
        ContentType: "delectus",
        Page: "{{page}}",
        PerPage: "{{perPage}}",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PolygonbyID

Lists your store's polygons by searching through polygon name

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
    res, err := s.Polygons.PolygonbyID(ctx, operations.PolygonbyIDRequest{
        Accept: "quidem",
        ContentType: "provident",
        PolygonName: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
