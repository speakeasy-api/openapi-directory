# Calls

### Available Operations

* [CallAnswer](#callanswer) - Answer call (On supported devices)
* [CallHold](#callhold) - Put call on hold
* [CallTransfer](#calltransfer) - Transfer call
* [CallUnold](#callunold) - Unhold
* [CallVMTransfer](#callvmtransfer) - Send call to voicemail
* [CreateCall](#createcall) - Place a call
* [DestroyCall](#destroycall) - End a call
* [GetCallsCount](#getcallscount) - Get calls count
* [GetRoles](#getroles) - Get a call
* [ListCalls](#listcalls) - List active calls

## CallAnswer

Answer call (On supported devices)

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Calls.CallAnswer(ctx, operations.CallAnswerRequest{
        ID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Call != nil {
        // handle response
    }
}
```

## CallHold

Put call on hold

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Calls.CallHold(ctx, operations.CallHoldRequest{
        ID: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Call != nil {
        // handle response
    }
}
```

## CallTransfer

Transfer call

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Calls.CallTransfer(ctx, operations.CallTransferRequest{
        CallTransfer: shared.CallTransfer{
            PhoneNumber: "impedit",
        },
        ID: "b7392059-2939-46fe-a759-6eb10faaa235",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Call != nil {
        // handle response
    }
}
```

## CallUnold

Unhold

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Calls.CallUnold(ctx, operations.CallUnoldRequest{
        ID: "2c595590-7aff-41a3-a2fa-9467739251aa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Call != nil {
        // handle response
    }
}
```

## CallVMTransfer

Send call to voicemail

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Calls.CallVMTransfer(ctx, operations.CallVMTransferRequest{
        ID: "52c3f5ad-019d-4a1f-be78-f097b0074f15",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Call != nil {
        // handle response
    }
}
```

## CreateCall

Place a call

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Calls.CreateCall(ctx, shared.CallCreate{
        PhoneNumber: "dolore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Calls != nil {
        // handle response
    }
}
```

## DestroyCall

End a call

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Calls.DestroyCall(ctx, operations.DestroyCallRequest{
        ID: "71b5e6e1-3b99-4d48-8e1e-91e450ad2abd",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Calls != nil {
        // handle response
    }
}
```

## GetCallsCount

Get calls count

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Calls.GetCallsCount(ctx, operations.GetCallsCountRequest{
        Direction: operations.GetCallsCountDirectionEnumInbound.ToPointer(),
        FromDate: sdk.Int64(264730),
        States: operations.GetCallsCountStatesEnumInitializing.ToPointer(),
        ToDate: sdk.Int64(397821),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventsCount != nil {
        // handle response
    }
}
```

## GetRoles

Get a call

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Calls.GetRoles(ctx, operations.GetRolesRequest{
        ID: "9802d502-a94b-4b4f-a3c9-69e9a3efa77d",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Calls != nil {
        // handle response
    }
}
```

## ListCalls

Lists currently active calls

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Calls.ListCalls(ctx, operations.ListCallsRequest{
        Direction: operations.ListCallsDirectionEnumOutbound.ToPointer(),
        FromDate: sdk.Int64(699479),
        Offset: sdk.Int64(116202),
        Order: operations.ListCallsOrderEnumDesc.ToPointer(),
        Size: sdk.Int64(767024),
        Sort: sdk.String("facere"),
        States: operations.ListCallsStatesEnumActive.ToPointer(),
        ToDate: sdk.Int64(396506),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Calls != nil {
        // handle response
    }
}
```
