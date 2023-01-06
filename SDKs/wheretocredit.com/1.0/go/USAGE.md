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
                BaseFareUSD: 10.100000,
                ID: "quia",
                Segments: []shared.Segment{
                    shared.Segment{
                        BookingClass: "illo",
                        Carrier: "non",
                        Departure: "1984-05-26T01:27:03Z",
                        Destination: "minima",
                        Distance: 64.199997,
                        FlightNumber: 507860946819629148,
                        OperatingCarrier: "nemo",
                        Origin: "fugit",
                    },
                },
                TicketingCarrier: "id",
            },
            shared.Itinerary{
                BaseFareUSD: 93.199997,
                ID: "animi",
                Segments: []shared.Segment{
                    shared.Segment{
                        BookingClass: "totam",
                        Carrier: "in",
                        Departure: "1980-05-09T10:34:51Z",
                        Destination: "in",
                        Distance: 41.099998,
                        FlightNumber: 4779112429093995240,
                        OperatingCarrier: "labore",
                        Origin: "rerum",
                    },
                },
                TicketingCarrier: "ea",
            },
            shared.Itinerary{
                BaseFareUSD: 3.100000,
                ID: "labore",
                Segments: []shared.Segment{
                    shared.Segment{
                        BookingClass: "sit",
                        Carrier: "est",
                        Departure: "2018-08-04T11:46:36Z",
                        Destination: "iste",
                        Distance: 46.099998,
                        FlightNumber: 7489403947769011558,
                        OperatingCarrier: "aut",
                        Origin: "cupiditate",
                    },
                    shared.Segment{
                        BookingClass: "illo",
                        Carrier: "unde",
                        Departure: "2018-10-26T07:31:11Z",
                        Destination: "exercitationem",
                        Distance: 47.200001,
                        FlightNumber: 2736150856188212619,
                        OperatingCarrier: "dolore",
                        Origin: "porro",
                    },
                    shared.Segment{
                        BookingClass: "voluptas",
                        Carrier: "saepe",
                        Departure: "2011-01-26T21:13:20Z",
                        Destination: "maxime",
                        Distance: 88.199997,
                        FlightNumber: 5106010001859557921,
                        OperatingCarrier: "nihil",
                        Origin: "doloribus",
                    },
                },
                TicketingCarrier: "voluptatem",
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