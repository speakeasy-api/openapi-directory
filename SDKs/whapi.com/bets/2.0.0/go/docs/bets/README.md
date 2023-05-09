# Bets

### Available Operations

* [Cashin](#cashin) - Allows a trusted application to cash in a bet (take a return on a bet) on behalf of the customer
* [GetBetHistory](#getbethistory) - Retrieves the customer’s bet history.
* [GetFreeBets](#getfreebets) - Returns available free bets
* [PlaceComplexBet](#placecomplexbet) - Places a multiple or a complex bet.
* [PlaceSingleBet](#placesinglebet) - Places a single bet
* [ValidateBetslip](#validatebetslip) - Organises the betslip when one or more selections are made. It returns a bet slip structure organised by betting opportunities.

## Cashin

Allows a trusted application to cash in a bet (take a return on a bet) on behalf of the customer. If the customers monitor bets they can cash in a bet at any point before the event ends.

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
    res, err := s.Bets.Cashin(ctx, operations.CashinRequest{
        APIKey: "corrupti",
        APISecret: "illum",
        APITicket: "vel",
        BetID: "error",
        CashInValue: 6458.94,
        CashinBetDelayID: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CashInResponse != nil {
        // handle response
    }
}
```

## GetBetHistory

Retrieves the customer’s bet history. Options are available to organise the history in terms of date, bet type and settled and unsettled bets. The maximum number of bets and bet history pages retrieved can also be set.

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
    res, err := s.Bets.GetBetHistory(ctx, operations.GetBetHistoryRequest{
        APIKey: "iure",
        APISecret: "magnam",
        APITicket: "debitis",
        DateFrom: "ipsa",
        DateTo: "delectus",
        Exclude: []string{
            "suscipit",
            "molestiae",
        },
        Fields: []string{
            "placeat",
            "voluptatum",
            "iusto",
            "excepturi",
        },
        Include: []string{
            "recusandae",
            "temporibus",
        },
        Page: sdk.Float64(710.36),
        PageSize: sdk.Float64(3373.96),
        Settled: sdk.Bool(false),
        Sort: sdk.String("veritatis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BetHistoryResponse != nil {
        // handle response
    }
}
```

## GetFreeBets

Retrieves the current free bets available for a customer.

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
    res, err := s.Bets.GetFreeBets(ctx, operations.GetFreeBetsRequest{
        APIKey: "deserunt",
        APISecret: "perferendis",
        APITicket: "ipsam",
        Exclude: []string{
            "sapiente",
            "quo",
            "odit",
            "at",
        },
        Fields: []string{
            "maiores",
            "molestiae",
            "quod",
            "quod",
        },
        Include: []string{
            "totam",
            "porro",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FreeBet != nil {
        // handle response
    }
}
```

## PlaceComplexBet

Places a multiple or a complex bet.

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
    res, err := s.Bets.PlaceComplexBet(ctx, operations.PlaceComplexBetRequest{
        APIKey: "dolorum",
        APISecret: "dicta",
        APITicket: "nam",
        ComplexBetRequestBody: shared.ComplexBetRequestBody{
            Bets: []shared.Bet{
                shared.Bet{
                    DelayedBetID: sdk.String("occaecati"),
                    FreeBetID: sdk.String("fugit"),
                    Legs: []shared.Leg{
                        shared.Leg{
                            Parts: []shared.Part{
                                shared.Part{
                                    IncludeInMultiple: false,
                                    PriceDen: 758616,
                                    PriceNum: 521848,
                                    PriceType: 105907,
                                    SelectionID: 414662,
                                },
                                shared.Part{
                                    IncludeInMultiple: false,
                                    PriceDen: 473600,
                                    PriceNum: 264555,
                                    PriceType: 186332,
                                    SelectionID: 774234,
                                },
                                shared.Part{
                                    IncludeInMultiple: false,
                                    PriceDen: 736918,
                                    PriceNum: 456150,
                                    PriceType: 216550,
                                    SelectionID: 568434,
                                },
                                shared.Part{
                                    IncludeInMultiple: false,
                                    PriceDen: 135218,
                                    PriceNum: 18789,
                                    PriceType: 324141,
                                    SelectionID: 617636,
                                },
                            },
                            Sort: sdk.String("sed"),
                            Type: "iste",
                        },
                        shared.Leg{
                            Parts: []shared.Part{
                                shared.Part{
                                    IncludeInMultiple: false,
                                    PriceDen: 616934,
                                    PriceNum: 386489,
                                    PriceType: 943749,
                                    SelectionID: 902599,
                                },
                            },
                            Sort: sdk.String("fuga"),
                            Type: "in",
                        },
                        shared.Leg{
                            Parts: []shared.Part{
                                shared.Part{
                                    IncludeInMultiple: false,
                                    PriceDen: 613064,
                                    PriceNum: 437032,
                                    PriceType: 902349,
                                    SelectionID: 697631,
                                },
                                shared.Part{
                                    IncludeInMultiple: false,
                                    PriceDen: 99280,
                                    PriceNum: 60225,
                                    PriceType: 969810,
                                    SelectionID: 666767,
                                },
                            },
                            Sort: sdk.String("mollitia"),
                            Type: "laborum",
                        },
                    },
                    Number: 170909,
                    Stake: 2103.82,
                    TypeCode: "corporis",
                },
                shared.Bet{
                    DelayedBetID: sdk.String("explicabo"),
                    FreeBetID: sdk.String("nobis"),
                    Legs: []shared.Leg{
                        shared.Leg{
                            Parts: []shared.Part{
                                shared.Part{
                                    IncludeInMultiple: false,
                                    PriceDen: 363711,
                                    PriceNum: 325047,
                                    PriceType: 570197,
                                    SelectionID: 38425,
                                },
                                shared.Part{
                                    IncludeInMultiple: false,
                                    PriceDen: 438601,
                                    PriceNum: 634274,
                                    PriceType: 988374,
                                    SelectionID: 958950,
                                },
                                shared.Part{
                                    IncludeInMultiple: false,
                                    PriceDen: 102044,
                                    PriceNum: 652790,
                                    PriceType: 208876,
                                    SelectionID: 635059,
                                },
                            },
                            Sort: sdk.String("consequuntur"),
                            Type: "repellat",
                        },
                        shared.Leg{
                            Parts: []shared.Part{
                                shared.Part{
                                    IncludeInMultiple: false,
                                    PriceDen: 581850,
                                    PriceNum: 253291,
                                    PriceType: 414369,
                                    SelectionID: 466311,
                                },
                                shared.Part{
                                    IncludeInMultiple: false,
                                    PriceDen: 474697,
                                    PriceNum: 244425,
                                    PriceType: 623510,
                                    SelectionID: 158969,
                                },
                                shared.Part{
                                    IncludeInMultiple: false,
                                    PriceDen: 338007,
                                    PriceNum: 110375,
                                    PriceType: 674752,
                                    SelectionID: 656330,
                                },
                            },
                            Sort: sdk.String("enim"),
                            Type: "odit",
                        },
                    },
                    Number: 778346,
                    Stake: 1965.82,
                    TypeCode: "tenetur",
                },
                shared.Bet{
                    DelayedBetID: sdk.String("ipsam"),
                    FreeBetID: sdk.String("id"),
                    Legs: []shared.Leg{
                        shared.Leg{
                            Parts: []shared.Part{
                                shared.Part{
                                    IncludeInMultiple: false,
                                    PriceDen: 97101,
                                    PriceNum: 622846,
                                    PriceType: 837945,
                                    SelectionID: 673660,
                                },
                            },
                            Sort: sdk.String("quasi"),
                            Type: "reiciendis",
                        },
                        shared.Leg{
                            Parts: []shared.Part{
                                shared.Part{
                                    IncludeInMultiple: false,
                                    PriceDen: 878194,
                                    PriceNum: 468651,
                                    PriceType: 509624,
                                    SelectionID: 976762,
                                },
                                shared.Part{
                                    IncludeInMultiple: false,
                                    PriceDen: 55714,
                                    PriceNum: 604846,
                                    PriceType: 451159,
                                    SelectionID: 739264,
                                },
                                shared.Part{
                                    IncludeInMultiple: false,
                                    PriceDen: 19987,
                                    PriceNum: 39187,
                                    PriceType: 441711,
                                    SelectionID: 282807,
                                },
                                shared.Part{
                                    IncludeInMultiple: false,
                                    PriceDen: 979587,
                                    PriceNum: 120196,
                                    PriceType: 359444,
                                    SelectionID: 296140,
                                },
                            },
                            Sort: sdk.String("iusto"),
                            Type: "dicta",
                        },
                        shared.Leg{
                            Parts: []shared.Part{
                                shared.Part{
                                    IncludeInMultiple: false,
                                    PriceDen: 317983,
                                    PriceNum: 880476,
                                    PriceType: 414263,
                                    SelectionID: 918236,
                                },
                                shared.Part{
                                    IncludeInMultiple: false,
                                    PriceDen: 64147,
                                    PriceNum: 216822,
                                    PriceType: 692472,
                                    SelectionID: 565189,
                                },
                                shared.Part{
                                    IncludeInMultiple: false,
                                    PriceDen: 566602,
                                    PriceNum: 865103,
                                    PriceType: 265389,
                                    SelectionID: 508969,
                                },
                            },
                            Sort: sdk.String("rem"),
                            Type: "voluptates",
                        },
                        shared.Leg{
                            Parts: []shared.Part{
                                shared.Part{
                                    IncludeInMultiple: false,
                                    PriceDen: 921158,
                                    PriceNum: 575947,
                                    PriceType: 83112,
                                    SelectionID: 929297,
                                },
                            },
                            Sort: sdk.String("incidunt"),
                            Type: "enim",
                        },
                    },
                    Number: 9356,
                    Stake: 6674.11,
                    TypeCode: "quibusdam",
                },
            },
        },
        Exclude: []string{
            "deserunt",
        },
        Fields: []string{
            "quibusdam",
            "labore",
            "modi",
        },
        Include: []string{
            "aliquid",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BetPlacedResponse != nil {
        // handle response
    }
}
```

## PlaceSingleBet

Places a single bet. When placing a single bet using live inplay bets, the system might generate a bet delay to allow a time margin to negate the effects of major changes (for example, goals) to the market. Note that the amount of bet delay will vary by category and event type. A delayedBetId will be recieved that can be used to resubmit the bet.

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
    res, err := s.Bets.PlaceSingleBet(ctx, operations.PlaceSingleBetRequest{
        APIKey: "cupiditate",
        APISecret: "quos",
        APITicket: "perferendis",
        Exclude: []string{
            "assumenda",
        },
        Fields: []string{
            "alias",
            "fugit",
        },
        Include: []string{
            "excepturi",
            "tempora",
            "facilis",
        },
        SingleBetRequestBody: shared.SingleBetRequestBody{
            DelayedBetID: sdk.String("tempore"),
            FreeBetID: sdk.String("labore"),
            PriceDen: sdk.Int64(962189),
            PriceNum: sdk.Int64(433288),
            PriceType: "non",
            SelectionID: "eligendi",
            Stake: 5761.57,
            Type: "aliquid",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BetPlacedResponse != nil {
        // handle response
    }
}
```

## ValidateBetslip

Organises the betslip when one or more selections are made. It returns a bet slip structure organised by betting opportunities.

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
    res, err := s.Bets.ValidateBetslip(ctx, operations.ValidateBetslipRequest{
        APIKey: "provident",
        APISecret: "necessitatibus",
        BetSlipRequest: shared.BetSlipRequest{
            Legs: []shared.Leg{
                shared.Leg{
                    Parts: []shared.Part{
                        shared.Part{
                            IncludeInMultiple: false,
                            PriceDen: 223081,
                            PriceNum: 891555,
                            PriceType: 952749,
                            SelectionID: 680056,
                        },
                        shared.Part{
                            IncludeInMultiple: false,
                            PriceDen: 447125,
                            PriceNum: 449198,
                            PriceType: 846409,
                            SelectionID: 978571,
                        },
                        shared.Part{
                            IncludeInMultiple: false,
                            PriceDen: 699479,
                            PriceNum: 116202,
                            PriceType: 297437,
                            SelectionID: 767024,
                        },
                    },
                    Sort: sdk.String("facere"),
                    Type: "ea",
                },
                shared.Leg{
                    Parts: []shared.Part{
                        shared.Part{
                            IncludeInMultiple: false,
                            PriceDen: 675439,
                            PriceNum: 881104,
                            PriceType: 249796,
                            SelectionID: 581273,
                        },
                        shared.Part{
                            IncludeInMultiple: false,
                            PriceDen: 313218,
                            PriceNum: 881736,
                            PriceType: 965417,
                            SelectionID: 692532,
                        },
                    },
                    Sort: sdk.String("provident"),
                    Type: "nam",
                },
                shared.Leg{
                    Parts: []shared.Part{
                        shared.Part{
                            IncludeInMultiple: false,
                            PriceDen: 501324,
                            PriceNum: 533206,
                            PriceType: 956084,
                            SelectionID: 230533,
                        },
                        shared.Part{
                            IncludeInMultiple: false,
                            PriceDen: 643990,
                            PriceNum: 394869,
                            PriceType: 423855,
                            SelectionID: 618809,
                        },
                        shared.Part{
                            IncludeInMultiple: false,
                            PriceDen: 606393,
                            PriceNum: 474867,
                            PriceType: 19193,
                            SelectionID: 470132,
                        },
                    },
                    Sort: sdk.String("magnam"),
                    Type: "distinctio",
                },
            },
        },
        Expanded: sdk.String("id"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BetSlipResponse != nil {
        // handle response
    }
}
```
