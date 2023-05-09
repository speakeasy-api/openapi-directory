# Browser

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [BrowseCSV](#browsecsv) - Searches for data (ie. customer, task, etc) and returns it in a CSV form.
* [BrowseJSON](#browsejson) - Searches for data (ie. customer, task, etc) and returns it in a tabular form.
* [Create](#create) - Creates view for given class.
* [Delete](#delete) - Removes a view.
* [DeleteColumn](#deletecolumn) - Deletes a single column from view.
* [Get](#get) - Returns all view's information.
* [GetColumnSettings](#getcolumnsettings) - Returns column's specific settings.
* [GetColumns](#getcolumns) - Returns columns defined in view.
* [GetCurrentViewDetails](#getcurrentviewdetails) - Returns current view's detailed information, suitable for browser.
* [GetFilter](#getfilter) - Returns view's filter.
* [GetLocalSettings](#getlocalsettings) - Returns view's local settings (for current user).
* [GetOrder](#getorder) - Returns view's order settings.
* [GetPermissions](#getpermissions) - Returns view's permissions.
* [GetSettings](#getsettings) - Returns view's settings.
* [GetViewDetails](#getviewdetails) - Returns view's detailed information, suitable for browser.
* [GetViewsBrief](#getviewsbrief) - Returns views' brief.
* [SelectViewAndGetItsDetails](#selectviewandgetitsdetails) - Selects given view as current and returns its detailed information, suitable for browser.
* [Update](#update) - Updates all view's information.
* [UpdateColumnSettings](#updatecolumnsettings) - Updates column's specific settings.
* [UpdateColumns](#updatecolumns) - Updates columns in view.
* [UpdateFilter](#updatefilter) - Updates view's filter.
* [UpdateFilterProperty](#updatefilterproperty) - Updates view's filter property.
* [UpdateLocalSettings](#updatelocalsettings) - Updates view's local settings (for current user).
* [UpdateOrder](#updateorder) - Updates view's order settings.
* [UpdatePermissions](#updatepermissions) - Updates view's permissions.
* [UpdateSettings](#updatesettings) - Updates view's settings.

## BrowseCSV

Searches for data (ie. customer, task, etc) and returns it in a CSV form.

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
    res, err := s.Browser.BrowseCSV(ctx, operations.BrowseCSVRequest{
        AdditionalOrder: sdk.String("unde"),
        SecondarySeparator: sdk.String("nulla"),
        Separator: sdk.String("corrupti"),
        ViewID: sdk.Int64(847252),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## BrowseJSON

Searches for data (ie. customer, task, etc) and returns it in a tabular form.

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
    res, err := s.Browser.BrowseJSON(ctx, operations.BrowseJSONRequest{
        AdditionalOrder: sdk.String("vel"),
        MaxRows: sdk.Int(623564),
        Page: sdk.Int(645894),
        UseDeferredColumns: sdk.String("suscipit"),
        ViewID: sdk.Int64(437587),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Create

Creates view for given class.

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
    res, err := s.Browser.Create(ctx, operations.CreateRequest{
        ViewDTO: shared.ViewDTO{
            Columns: []shared.ColumnDTO{
                shared.ColumnDTO{
                    Name: sdk.String("Larry Windler"),
                    Settings: map[string]interface{}{
                        "minus": "placeat",
                        "voluptatum": "iusto",
                    },
                },
                shared.ColumnDTO{
                    Name: sdk.String("Charlie Walsh II"),
                    Settings: map[string]interface{}{
                        "deserunt": "perferendis",
                    },
                },
            },
            Order: &shared.OrderDTO{
                Column: sdk.String("ipsam"),
                Type: sdk.String("repellendus"),
            },
            Permissions: &shared.PermissionsDTO{
                SharedGroups: []int64{
                    778157,
                    140350,
                    870013,
                    870088,
                },
            },
            Settings: &shared.SettingsDTO{
                Local: &shared.LocalSettingsDTO{
                    MaxLinesInRow: sdk.Int(978619),
                    MaxRows: sdk.Int(473608),
                },
                Name: sdk.String("Forrest Koepp"),
            },
        },
        ClassName: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Delete

Removes a view. No content is returned upon success (204).

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
    res, err := s.Browser.Delete(ctx, operations.DeleteRequest{
        ViewID: 118274,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteColumn

Deletes a single column from view.

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
    res, err := s.Browser.DeleteColumn(ctx, operations.DeleteColumnRequest{
        ColumnName: "nam",
        ViewID: 639921,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Get

Returns all view's information (ie. name, columns, filters, etc).

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
    res, err := s.Browser.Get(ctx, operations.GetRequest{
        ViewID: 582020,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetColumnSettings

Returns column's specific settings. For example when column describes money amount we can decide whether it should display currency or not.

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
    res, err := s.Browser.GetColumnSettings(ctx, operations.GetColumnSettingsRequest{
        ColumnName: "fugit",
        ViewID: 537373,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetColumns

Returns columns defined in view.

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
    res, err := s.Browser.GetColumns(ctx, operations.GetColumnsRequest{
        ViewID: 944669,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCurrentViewDetails

Returns current view's detailed information, suitable for browser.

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
    res, err := s.Browser.GetCurrentViewDetails(ctx, operations.GetCurrentViewDetailsRequest{
        ClassName: "optio",
        PlaceName: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFilter

Returns view's filter.

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
    res, err := s.Browser.GetFilter(ctx, operations.GetFilterRequest{
        ViewID: 105907,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetLocalSettings

Returns view's local settings (for current user).

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
    res, err := s.Browser.GetLocalSettings(ctx, operations.GetLocalSettingsRequest{
        ViewID: 414662,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOrder

Returns view's order settings.

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
    res, err := s.Browser.GetOrder(ctx, operations.GetOrderRequest{
        ViewID: 473600,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetPermissions

Returns view's permissions.

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
    res, err := s.Browser.GetPermissions(ctx, operations.GetPermissionsRequest{
        ViewID: 264555,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSettings

Returns view's settings (ie. name).

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
    res, err := s.Browser.GetSettings(ctx, operations.GetSettingsRequest{
        ViewID: 186332,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetViewDetails

Returns view's detailed information, suitable for browser.

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
    res, err := s.Browser.GetViewDetails(ctx, operations.GetViewDetailsRequest{
        ClassName: "impedit",
        PlaceName: sdk.String("cum"),
        ViewID: 456150,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetViewsBrief

Returns views' brief.

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
    res, err := s.Browser.GetViewsBrief(ctx, operations.GetViewsBriefRequest{
        ClassName: "ipsum",
        PlaceName: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SelectViewAndGetItsDetails

Selects given view as current and returns its detailed information, suitable for browser.

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
    res, err := s.Browser.SelectViewAndGetItsDetails(ctx, operations.SelectViewAndGetItsDetailsRequest{
        ClassName: "aspernatur",
        PlaceNameDenotesSpecificPlaceInSystemWithTheTable: sdk.String("perferendis"),
        ViewID: 324141,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Update

Updates all view's information (ie. name, columns, filters, etc).

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
    res, err := s.Browser.Update(ctx, operations.UpdateRequest{
        ViewDTO: shared.ViewDTO{
            Columns: []shared.ColumnDTO{
                shared.ColumnDTO{
                    Name: sdk.String("Sheryl Fadel"),
                    Settings: map[string]interface{}{
                        "saepe": "fuga",
                        "in": "corporis",
                        "iste": "iure",
                        "saepe": "quidem",
                    },
                },
                shared.ColumnDTO{
                    Name: sdk.String("Brenda Wisozk"),
                    Settings: map[string]interface{}{
                        "dolores": "dolorem",
                        "corporis": "explicabo",
                        "nobis": "enim",
                    },
                },
                shared.ColumnDTO{
                    Name: sdk.String("Corey Hane III"),
                    Settings: map[string]interface{}{
                        "doloribus": "sapiente",
                        "architecto": "mollitia",
                        "dolorem": "culpa",
                    },
                },
            },
            Order: &shared.OrderDTO{
                Column: sdk.String("consequuntur"),
                Type: sdk.String("repellat"),
            },
            Permissions: &shared.PermissionsDTO{
                SharedGroups: []int64{
                    581850,
                    253291,
                    414369,
                },
            },
            Settings: &shared.SettingsDTO{
                Local: &shared.LocalSettingsDTO{
                    MaxLinesInRow: sdk.Int(466311),
                    MaxRows: sdk.Int(474697),
                },
                Name: sdk.String("Sabrina Cronin MD"),
            },
        },
        ViewID: 656330,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateColumnSettings

Updates column's specific settings. For example when column describes money amount we can decide whether it should display currency or not.

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
    res, err := s.Browser.UpdateColumnSettings(ctx, operations.UpdateColumnSettingsRequest{
        RequestBody: map[string]interface{}{
            "odit": "quo",
            "sequi": "tenetur",
        },
        ColumnName: "ipsam",
        ViewID: 662527,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateColumns

Updates columns in view.

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
    res, err := s.Browser.UpdateColumns(ctx, operations.UpdateColumnsRequest{
        RequestBody: []shared.ColumnDTO{
            shared.ColumnDTO{
                Name: sdk.String("Joyce Mueller"),
                Settings: map[string]interface{}{
                    "reiciendis": "voluptatibus",
                },
            },
            shared.ColumnDTO{
                Name: sdk.String("Jessie Langosh V"),
                Settings: map[string]interface{}{
                    "cum": "perferendis",
                    "doloremque": "reprehenderit",
                },
            },
            shared.ColumnDTO{
                Name: sdk.String("Shawna Carter"),
                Settings: map[string]interface{}{
                    "dicta": "harum",
                    "enim": "accusamus",
                },
            },
            shared.ColumnDTO{
                Name: sdk.String("Elvira Bergnaum"),
                Settings: map[string]interface{}{
                    "excepturi": "pariatur",
                    "modi": "praesentium",
                    "rem": "voluptates",
                },
            },
        },
        ViewID: 93940,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateFilter

Updates view's filter.

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
    res, err := s.Browser.UpdateFilter(ctx, operations.UpdateFilterRequest{
        RequestBody: []shared.FilterPropertyDTO{
            shared.FilterPropertyDTO{
                Name: sdk.String("Patrick Ward"),
                Settings: map[string]interface{}{
                    "est": "quibusdam",
                },
                SettingsPresent: sdk.Bool(false),
                Type: sdk.String("explicabo"),
            },
            shared.FilterPropertyDTO{
                Name: sdk.String("Rudy Spencer"),
                Settings: map[string]interface{}{
                    "aliquid": "cupiditate",
                },
                SettingsPresent: sdk.Bool(false),
                Type: sdk.String("quos"),
            },
            shared.FilterPropertyDTO{
                Name: sdk.String("Louise Simonis Sr."),
                Settings: map[string]interface{}{
                    "excepturi": "tempora",
                    "facilis": "tempore",
                    "labore": "delectus",
                },
                SettingsPresent: sdk.Bool(false),
                Type: sdk.String("eum"),
            },
            shared.FilterPropertyDTO{
                Name: sdk.String("Sheri Mayer"),
                Settings: map[string]interface{}{
                    "sint": "officia",
                    "dolor": "debitis",
                    "a": "dolorum",
                    "in": "in",
                },
                SettingsPresent: sdk.Bool(false),
                Type: sdk.String("illum"),
            },
        },
        ViewID: 978571,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateFilterProperty

Updates view's filter property.

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
    res, err := s.Browser.UpdateFilterProperty(ctx, operations.UpdateFilterPropertyRequest{
        FilterPropertyDTO: shared.FilterPropertyDTO{
            Name: sdk.String("Keith Gulgowski"),
            Settings: map[string]interface{}{
                "aliquid": "laborum",
                "accusamus": "non",
            },
            SettingsPresent: sdk.Bool(false),
            Type: sdk.String("occaecati"),
        },
        FilterProperty: "enim",
        ViewID: 881736,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateLocalSettings

Updates view's local settings (for current user).

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
    res, err := s.Browser.UpdateLocalSettings(ctx, operations.UpdateLocalSettingsRequest{
        LocalSettingsDTO: shared.LocalSettingsDTO{
            MaxLinesInRow: sdk.Int(965417),
            MaxRows: sdk.Int(692532),
        },
        ViewID: 588465,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateOrder

Updates view's order settings.

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
    res, err := s.Browser.UpdateOrder(ctx, operations.UpdateOrderRequest{
        OrderDTO: shared.OrderDTO{
            Column: sdk.String("nam"),
            Type: sdk.String("id"),
        },
        ViewID: 501324,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdatePermissions

Updates view's permissions.

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
    res, err := s.Browser.UpdatePermissions(ctx, operations.UpdatePermissionsRequest{
        PermissionsDTO: shared.PermissionsDTO{
            SharedGroups: []int64{
                956084,
                230533,
                643990,
            },
        },
        ViewID: 394869,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateSettings

Updates view's settings.

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
    res, err := s.Browser.UpdateSettings(ctx, operations.UpdateSettingsRequest{
        SettingsDTO: shared.SettingsDTO{
            Local: &shared.LocalSettingsDTO{
                MaxLinesInRow: sdk.Int(423855),
                MaxRows: sdk.Int(618809),
            },
            Name: sdk.String("Fernando Aufderhar"),
        },
        ViewID: 716075,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
