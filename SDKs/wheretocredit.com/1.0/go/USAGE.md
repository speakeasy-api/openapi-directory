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
                BaseFareUSD: 14.200000,
                ID: "expedita",
                Segments: []shared.Segment{
                    shared.Segment{
                        BookingClass: "dolor",
                        Carrier: "expedita",
                        Departure: "1978-05-28T16:08:43Z",
                        Destination: "fugit",
                        Distance: 28.100000,
                        FlightNumber: 8325060299420976708,
                        OperatingCarrier: "dicta",
                        Origin: "debitis",
                    },
                    shared.Segment{
                        BookingClass: "voluptatum",
                        Carrier: "et",
                        Departure: "1970-04-14T21:44:49Z",
                        Destination: "dolorem",
                        Distance: 50.099998,
                        FlightNumber: 3287288577352441706,
                        OperatingCarrier: "vitae",
                        Origin: "totam",
                    },
                    shared.Segment{
                        BookingClass: "dolores",
                        Carrier: "illum",
                        Departure: "1975-11-02T15:36:54Z",
                        Destination: "vel",
                        Distance: 20.200001,
                        FlightNumber: 4035568504096476779,
                        OperatingCarrier: "aspernatur",
                        Origin: "accusantium",
                    },
                },
                TicketingCarrier: "totam",
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