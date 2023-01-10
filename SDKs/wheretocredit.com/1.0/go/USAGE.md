<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                APIKey: &shared.SchemeAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.PostAPI10CalculateRequest{
        Request: []shared.Itinerary{
            shared.Itinerary{
                BaseFareUSD: 17.100000,
                ID: "repellat",
                Segments: []shared.Segment{
                    shared.Segment{
                        BookingClass: "molestiae",
                        Carrier: "occaecati",
                        Departure: "2013-07-27T00:16:19Z",
                        Destination: "aut",
                        Distance: 56.200001,
                        FlightNumber: 5546392017063827085,
                        OperatingCarrier: "ab",
                        Origin: "magni",
                    },
                    shared.Segment{
                        BookingClass: "accusantium",
                        Carrier: "necessitatibus",
                        Departure: "1986-08-14T14:02:13Z",
                        Destination: "assumenda",
                        Distance: 22.100000,
                        FlightNumber: 8049362476316004085,
                        OperatingCarrier: "corrupti",
                        Origin: "aut",
                    },
                    shared.Segment{
                        BookingClass: "voluptatem",
                        Carrier: "nemo",
                        Departure: "2008-10-20T15:28:21Z",
                        Destination: "voluptatem",
                        Distance: 52.099998,
                        FlightNumber: 3781651038987718744,
                        OperatingCarrier: "quis",
                        Origin: "minus",
                    },
                },
                TicketingCarrier: "rerum",
            },
        },
    }
    
    res, err := s.Calculate.PostAPI10Calculate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CalculateResults != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->