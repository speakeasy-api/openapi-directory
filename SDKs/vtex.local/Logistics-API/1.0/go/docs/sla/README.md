# SLA

### Available Operations

* [CalculateSLA](#calculatesla) - Calculate SLA

## CalculateSLA

Endpoint used by the checkout to calculate the Service Level Agreement (SLA), a contract between the store and shoppers on the order's fulfillment conditions, such as the shipping estimated date. 

The calculation of the estimated date considers the [shipping policy](https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140) and [loading dock](https://help.vtex.com/en/tutorial/loading-dock--5DY8xHEjOLYDVL41Urd5qj) related to the order.

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
    res, err := s.SLA.CalculateSLA(ctx, operations.CalculateSLARequest{
        Accept: "odio",
        ContentType: "quaerat",
        RequestBody: []CalculateSLACalculateSLARequest{
            operations.CalculateSLACalculateSLARequest{
                Items: []CalculateSLACalculateSLARequestItem3{
                    operations.CalculateSLACalculateSLARequestItem3{
                        AdditionalHandlingTime: "voluptatibus",
                        Dimension: operations.CalculateSLACalculateSLARequestItem3Dimension{
                            Height: 377752,
                            Length: 617658,
                            Weight: 179603,
                            Width: 542499,
                        },
                        GroupItemID: "sit",
                        ID: "d1ba77a8-9ebf-4737-ae42-03ce5e6a95d8",
                        KitItem: []CalculateSLACalculateSLARequestItem3KitItem{
                            operations.CalculateSLACalculateSLARequestItem3KitItem{
                                AdditionalHandlingTime: "alias",
                                Dimension: operations.CalculateSLACalculateSLARequestItem3KitItemDimension{
                                    Height: 872651,
                                    Length: 311860,
                                    Weight: 273542,
                                    Width: 425451,
                                },
                                GroupItemID: "quod",
                                ID: "e2af7a73-cf3b-4e45-bf87-0b326b5a7342",
                                KitItem: []string{
                                    "maxime",
                                    "pariatur",
                                    "soluta",
                                },
                                Price: 117531,
                                Quantity: 674848,
                            },
                            operations.CalculateSLACalculateSLARequestItem3KitItem{
                                AdditionalHandlingTime: "totam",
                                Dimension: operations.CalculateSLACalculateSLARequestItem3KitItemDimension{
                                    Height: 276894,
                                    Length: 132068,
                                    Weight: 174909,
                                    Width: 716860,
                                },
                                GroupItemID: "facilis",
                                ID: "679d2322-715b-4f0c-bb1e-31b8b90f3443",
                                KitItem: []string{
                                    "architecto",
                                    "quae",
                                    "aut",
                                },
                                Price: 555649,
                                Quantity: 929530,
                            },
                            operations.CalculateSLACalculateSLARequestItem3KitItem{
                                AdditionalHandlingTime: "consequatur",
                                Dimension: operations.CalculateSLACalculateSLARequestItem3KitItemDimension{
                                    Height: 669917,
                                    Length: 833038,
                                    Weight: 785153,
                                    Width: 984330,
                                },
                                GroupItemID: "ut",
                                ID: "b921879f-ce95-43f7-bef7-fbc7abd74dd3",
                                KitItem: []string{
                                    "impedit",
                                    "aut",
                                    "voluptatibus",
                                },
                                Price: 347233,
                                Quantity: 862310,
                            },
                        },
                        Price: 148141,
                        Quantity: 780427,
                    },
                    operations.CalculateSLACalculateSLARequestItem3{
                        AdditionalHandlingTime: "maiores",
                        Dimension: operations.CalculateSLACalculateSLARequestItem3Dimension{
                            Height: 985033,
                            Length: 478370,
                            Weight: 753570,
                            Width: 497391,
                        },
                        GroupItemID: "alias",
                        ID: "a45626d4-3681-43f1-ad9f-5fce6c556146",
                        KitItem: []CalculateSLACalculateSLARequestItem3KitItem{
                            operations.CalculateSLACalculateSLARequestItem3KitItem{
                                AdditionalHandlingTime: "consectetur",
                                Dimension: operations.CalculateSLACalculateSLARequestItem3KitItemDimension{
                                    Height: 926213,
                                    Length: 132487,
                                    Weight: 325310,
                                    Width: 53427,
                                },
                                GroupItemID: "a",
                                ID: "b008c42e-141a-4ac3-a6c8-dd6b14429074",
                                KitItem: []string{
                                    "eius",
                                    "esse",
                                },
                                Price: 456141,
                                Quantity: 524593,
                            },
                            operations.CalculateSLACalculateSLARequestItem3KitItem{
                                AdditionalHandlingTime: "fuga",
                                Dimension: operations.CalculateSLACalculateSLARequestItem3KitItemDimension{
                                    Height: 442015,
                                    Length: 695626,
                                    Weight: 852635,
                                    Width: 283519,
                                },
                                GroupItemID: "eum",
                                ID: "6d28c10a-b3cd-4ca4-a519-04e523c7e0bc",
                                KitItem: []string{
                                    "inventore",
                                    "nihil",
                                },
                                Price: 518835,
                                Quantity: 882710,
                            },
                            operations.CalculateSLACalculateSLARequestItem3KitItem{
                                AdditionalHandlingTime: "aliquam",
                                Dimension: operations.CalculateSLACalculateSLARequestItem3KitItemDimension{
                                    Height: 488410,
                                    Length: 577543,
                                    Weight: 414567,
                                    Width: 959434,
                                },
                                GroupItemID: "dolores",
                                ID: "a70c6882-82aa-4482-962f-222e9817ee17",
                                KitItem: []string{
                                    "nam",
                                    "vero",
                                    "aliquid",
                                    "quasi",
                                },
                                Price: 904045,
                                Quantity: 426306,
                            },
                            operations.CalculateSLACalculateSLARequestItem3KitItem{
                                AdditionalHandlingTime: "harum",
                                Dimension: operations.CalculateSLACalculateSLARequestItem3KitItemDimension{
                                    Height: 473221,
                                    Length: 699622,
                                    Weight: 580197,
                                    Width: 327720,
                                },
                                GroupItemID: "distinctio",
                                ID: "c0ab3c20-c4f3-4789-bd87-1f99dd2efd12",
                                KitItem: []string{
                                    "similique",
                                },
                                Price: 633608,
                                Quantity: 398434,
                            },
                        },
                        Price: 949298,
                        Quantity: 62713,
                    },
                    operations.CalculateSLACalculateSLARequestItem3{
                        AdditionalHandlingTime: "earum",
                        Dimension: operations.CalculateSLACalculateSLARequestItem3Dimension{
                            Height: 424032,
                            Length: 447378,
                            Weight: 258684,
                            Width: 727697,
                        },
                        GroupItemID: "illum",
                        ID: "b04f1575-6082-4d68-aa19-f1d17051339d",
                        KitItem: []CalculateSLACalculateSLARequestItem3KitItem{
                            operations.CalculateSLACalculateSLARequestItem3KitItem{
                                AdditionalHandlingTime: "rem",
                                Dimension: operations.CalculateSLACalculateSLARequestItem3KitItemDimension{
                                    Height: 15606,
                                    Length: 513075,
                                    Weight: 428796,
                                    Width: 649832,
                                },
                                GroupItemID: "ab",
                                ID: "840394c2-6071-4f93-b5f0-642dac7af515",
                                KitItem: []string{
                                    "quod",
                                    "labore",
                                    "ab",
                                    "adipisci",
                                },
                                Price: 683573,
                                Quantity: 662505,
                            },
                        },
                        Price: 380729,
                        Quantity: 246063,
                    },
                },
                Location: operations.CalculateSLACalculateSLARequestLocation3{
                    Country: "New Caledonia",
                    Point: []float64{
                        9268.8,
                        5173.09,
                        8539.4,
                    },
                    ZipCode: "45428",
                },
                SalesChannel: "facilis",
            },
            operations.CalculateSLACalculateSLARequest{
                Items: []CalculateSLACalculateSLARequestItem3{
                    operations.CalculateSLACalculateSLARequestItem3{
                        AdditionalHandlingTime: "commodi",
                        Dimension: operations.CalculateSLACalculateSLARequestItem3Dimension{
                            Height: 447144,
                            Length: 360545,
                            Weight: 968904,
                            Width: 828657,
                        },
                        GroupItemID: "nemo",
                        ID: "e60b375e-d4f6-4fbe-a41f-33317fe35b60",
                        KitItem: []CalculateSLACalculateSLARequestItem3KitItem{
                            operations.CalculateSLACalculateSLARequestItem3KitItem{
                                AdditionalHandlingTime: "libero",
                                Dimension: operations.CalculateSLACalculateSLARequestItem3KitItemDimension{
                                    Height: 113816,
                                    Length: 881721,
                                    Weight: 631126,
                                    Width: 272437,
                                },
                                GroupItemID: "aspernatur",
                                ID: "6555ba3c-2874-44ed-93b8-8f3a8d8f5c0b",
                                KitItem: []string{
                                    "reiciendis",
                                },
                                Price: 131852,
                                Quantity: 994401,
                            },
                            operations.CalculateSLACalculateSLARequestItem3KitItem{
                                AdditionalHandlingTime: "facilis",
                                Dimension: operations.CalculateSLACalculateSLARequestItem3KitItemDimension{
                                    Height: 451822,
                                    Length: 709072,
                                    Weight: 70869,
                                    Width: 611749,
                                },
                                GroupItemID: "dolore",
                                ID: "a276b269-16fe-41f0-8f42-94e3698f447f",
                                KitItem: []string{
                                    "sit",
                                    "non",
                                },
                                Price: 888044,
                                Quantity: 505866,
                            },
                            operations.CalculateSLACalculateSLARequestItem3KitItem{
                                AdditionalHandlingTime: "facilis",
                                Dimension: operations.CalculateSLACalculateSLARequestItem3KitItemDimension{
                                    Height: 310381,
                                    Length: 277773,
                                    Weight: 373035,
                                    Width: 894864,
                                },
                                GroupItemID: "rem",
                                ID: "0ca55efd-20e4-457e-9858-b6a89fbe3a5a",
                                KitItem: []string{
                                    "corrupti",
                                    "accusamus",
                                    "tempora",
                                },
                                Price: 543678,
                                Quantity: 148268,
                            },
                            operations.CalculateSLACalculateSLARequestItem3KitItem{
                                AdditionalHandlingTime: "ut",
                                Dimension: operations.CalculateSLACalculateSLARequestItem3KitItemDimension{
                                    Height: 856303,
                                    Length: 30235,
                                    Weight: 635057,
                                    Width: 710337,
                                },
                                GroupItemID: "magnam",
                                ID: "075088e5-1862-4065-a904-f3b1194b8abf",
                                KitItem: []string{
                                    "alias",
                                    "amet",
                                },
                                Price: 647197,
                                Quantity: 454860,
                            },
                        },
                        Price: 600392,
                        Quantity: 972083,
                    },
                    operations.CalculateSLACalculateSLARequestItem3{
                        AdditionalHandlingTime: "provident",
                        Dimension: operations.CalculateSLACalculateSLARequestItem3Dimension{
                            Height: 833819,
                            Length: 962771,
                            Weight: 914791,
                            Width: 16871,
                        },
                        GroupItemID: "est",
                        ID: "b7da8a50-ce18-47f8-abc1-73d689eee952",
                        KitItem: []CalculateSLACalculateSLARequestItem3KitItem{
                            operations.CalculateSLACalculateSLARequestItem3KitItem{
                                AdditionalHandlingTime: "maiores",
                                Dimension: operations.CalculateSLACalculateSLARequestItem3KitItemDimension{
                                    Height: 544647,
                                    Length: 871786,
                                    Weight: 621693,
                                    Width: 502721,
                                },
                                GroupItemID: "suscipit",
                                ID: "e881ead4-f0e1-4012-963f-94e29e973e92",
                                KitItem: []string{
                                    "id",
                                },
                                Price: 335631,
                                Quantity: 440264,
                            },
                            operations.CalculateSLACalculateSLARequestItem3KitItem{
                                AdditionalHandlingTime: "error",
                                Dimension: operations.CalculateSLACalculateSLARequestItem3KitItemDimension{
                                    Height: 76486,
                                    Length: 361306,
                                    Weight: 696463,
                                    Width: 910994,
                                },
                                GroupItemID: "non",
                                ID: "e060807e-2b6e-43ab-8845-f0597a60ff2a",
                                KitItem: []string{
                                    "dolore",
                                    "dolorum",
                                },
                                Price: 200364,
                                Quantity: 63207,
                            },
                        },
                        Price: 925703,
                        Quantity: 607249,
                    },
                    operations.CalculateSLACalculateSLARequestItem3{
                        AdditionalHandlingTime: "quaerat",
                        Dimension: operations.CalculateSLACalculateSLARequestItem3Dimension{
                            Height: 477646,
                            Length: 403218,
                            Weight: 284000,
                            Width: 633062,
                        },
                        GroupItemID: "adipisci",
                        ID: "e865e795-6f92-451a-9a9d-a660ff57bfaa",
                        KitItem: []CalculateSLACalculateSLARequestItem3KitItem{
                            operations.CalculateSLACalculateSLARequestItem3KitItem{
                                AdditionalHandlingTime: "modi",
                                Dimension: operations.CalculateSLACalculateSLARequestItem3KitItemDimension{
                                    Height: 976226,
                                    Length: 564064,
                                    Weight: 889794,
                                    Width: 956933,
                                },
                                GroupItemID: "cumque",
                                ID: "1b4512c1-0326-448d-82f6-15199ebfd0e9",
                                KitItem: []string{
                                    "debitis",
                                    "aliquid",
                                    "porro",
                                    "suscipit",
                                },
                                Price: 211534,
                                Quantity: 147808,
                            },
                            operations.CalculateSLACalculateSLARequestItem3KitItem{
                                AdditionalHandlingTime: "cumque",
                                Dimension: operations.CalculateSLACalculateSLARequestItem3KitItemDimension{
                                    Height: 684935,
                                    Length: 189062,
                                    Weight: 656762,
                                    Width: 898760,
                                },
                                GroupItemID: "nulla",
                                ID: "01179963-12fd-4e04-b717-78ff61d01747",
                                KitItem: []string{
                                    "consectetur",
                                    "aliquid",
                                },
                                Price: 58870,
                                Quantity: 671384,
                            },
                            operations.CalculateSLACalculateSLARequestItem3KitItem{
                                AdditionalHandlingTime: "sunt",
                                Dimension: operations.CalculateSLACalculateSLARequestItem3KitItemDimension{
                                    Height: 344718,
                                    Length: 856756,
                                    Weight: 713767,
                                    Width: 399667,
                                },
                                GroupItemID: "officia",
                                ID: "660659a1-adea-4ab5-851d-6c645b08b618",
                                KitItem: []string{
                                    "veritatis",
                                    "rerum",
                                    "est",
                                },
                                Price: 634786,
                                Quantity: 29634,
                            },
                            operations.CalculateSLACalculateSLARequestItem3KitItem{
                                AdditionalHandlingTime: "sapiente",
                                Dimension: operations.CalculateSLACalculateSLARequestItem3KitItemDimension{
                                    Height: 889288,
                                    Length: 103298,
                                    Weight: 682119,
                                    Width: 867168,
                                },
                                GroupItemID: "debitis",
                                ID: "008e6f8c-5f35-40d8-8db5-a34181430104",
                                KitItem: []string{
                                    "ab",
                                },
                                Price: 513760,
                                Quantity: 65604,
                            },
                        },
                        Price: 222658,
                        Quantity: 856277,
                    },
                },
                Location: operations.CalculateSLACalculateSLARequestLocation3{
                    Country: "Guyana",
                    Point: []float64{
                        551.07,
                    },
                    ZipCode: "97848-1317",
                },
                SalesChannel: "eum",
            },
            operations.CalculateSLACalculateSLARequest{
                Items: []CalculateSLACalculateSLARequestItem3{
                    operations.CalculateSLACalculateSLARequestItem3{
                        AdditionalHandlingTime: "voluptatum",
                        Dimension: operations.CalculateSLACalculateSLARequestItem3Dimension{
                            Height: 301692,
                            Length: 349440,
                            Weight: 70410,
                            Width: 781480,
                        },
                        GroupItemID: "autem",
                        ID: "c6e205e1-6dea-4b3f-ac95-78a64584273a",
                        KitItem: []CalculateSLACalculateSLARequestItem3KitItem{
                            operations.CalculateSLACalculateSLARequestItem3KitItem{
                                AdditionalHandlingTime: "incidunt",
                                Dimension: operations.CalculateSLACalculateSLARequestItem3KitItemDimension{
                                    Height: 97493,
                                    Length: 524380,
                                    Weight: 851854,
                                    Width: 117380,
                                },
                                GroupItemID: "nisi",
                                ID: "2309fb09-2992-41ae-bb9f-58c4d86e68e4",
                                KitItem: []string{
                                    "vero",
                                    "voluptatem",
                                    "ipsam",
                                },
                                Price: 425946,
                                Quantity: 1383,
                            },
                            operations.CalculateSLACalculateSLARequestItem3KitItem{
                                AdditionalHandlingTime: "quasi",
                                Dimension: operations.CalculateSLACalculateSLARequestItem3KitItemDimension{
                                    Height: 247685,
                                    Length: 978548,
                                    Weight: 318233,
                                    Width: 575213,
                                },
                                GroupItemID: "nulla",
                                ID: "a757a59e-cfef-466e-b1ca-a3383c2beb47",
                                KitItem: []string{
                                    "sequi",
                                    "dignissimos",
                                },
                                Price: 205566,
                                Quantity: 778172,
                            },
                            operations.CalculateSLACalculateSLARequestItem3KitItem{
                                AdditionalHandlingTime: "deleniti",
                                Dimension: operations.CalculateSLACalculateSLARequestItem3KitItemDimension{
                                    Height: 844235,
                                    Length: 437814,
                                    Weight: 139072,
                                    Width: 974990,
                                },
                                GroupItemID: "vel",
                                ID: "4d1db1f2-c431-4066-9e96-349e1cf9e06e",
                                KitItem: []string{
                                    "laborum",
                                },
                                Price: 250398,
                                Quantity: 224467,
                            },
                        },
                        Price: 483394,
                        Quantity: 24753,
                    },
                    operations.CalculateSLACalculateSLARequestItem3{
                        AdditionalHandlingTime: "doloremque",
                        Dimension: operations.CalculateSLACalculateSLARequestItem3Dimension{
                            Height: 7468,
                            Length: 639705,
                            Weight: 927403,
                            Width: 408303,
                        },
                        GroupItemID: "quidem",
                        ID: "6bc9b8f7-59ea-4c55-a974-1d311352965b",
                        KitItem: []CalculateSLACalculateSLARequestItem3KitItem{
                            operations.CalculateSLACalculateSLARequestItem3KitItem{
                                AdditionalHandlingTime: "rem",
                                Dimension: operations.CalculateSLACalculateSLARequestItem3KitItemDimension{
                                    Height: 678060,
                                    Length: 487676,
                                    Weight: 144691,
                                    Width: 545,
                                },
                                GroupItemID: "magni",
                                ID: "611435e1-39db-4c22-99b1-abda8c070e10",
                                KitItem: []string{
                                    "dolore",
                                    "eligendi",
                                    "distinctio",
                                },
                                Price: 32273,
                                Quantity: 418109,
                            },
                            operations.CalculateSLACalculateSLARequestItem3KitItem{
                                AdditionalHandlingTime: "esse",
                                Dimension: operations.CalculateSLACalculateSLARequestItem3KitItemDimension{
                                    Height: 172951,
                                    Length: 824798,
                                    Weight: 107210,
                                    Width: 668606,
                                },
                                GroupItemID: "facere",
                                ID: "879eeb96-65b8-45ef-bd02-bae0be2d7822",
                                KitItem: []string{
                                    "error",
                                    "earum",
                                },
                                Price: 239337,
                                Quantity: 923306,
                            },
                            operations.CalculateSLACalculateSLARequestItem3KitItem{
                                AdditionalHandlingTime: "similique",
                                Dimension: operations.CalculateSLACalculateSLARequestItem3KitItemDimension{
                                    Height: 282837,
                                    Length: 693746,
                                    Weight: 339631,
                                    Width: 106255,
                                },
                                GroupItemID: "unde",
                                ID: "7f92443d-a7ce-452b-895c-537c6454efb0",
                                KitItem: []string{
                                    "ratione",
                                    "labore",
                                    "totam",
                                },
                                Price: 577709,
                                Quantity: 375994,
                            },
                        },
                        Price: 779180,
                        Quantity: 242099,
                    },
                },
                Location: operations.CalculateSLACalculateSLARequestLocation3{
                    Country: "Seychelles",
                    Point: []float64{
                        3445.3,
                        6692.37,
                        7708.73,
                    },
                    ZipCode: "78198-3404",
                },
                SalesChannel: "minima",
            },
            operations.CalculateSLACalculateSLARequest{
                Items: []CalculateSLACalculateSLARequestItem3{
                    operations.CalculateSLACalculateSLARequestItem3{
                        AdditionalHandlingTime: "ducimus",
                        Dimension: operations.CalculateSLACalculateSLARequestItem3Dimension{
                            Height: 567846,
                            Length: 172195,
                            Weight: 621169,
                            Width: 85076,
                        },
                        GroupItemID: "ducimus",
                        ID: "7deac646-ecb5-4734-89e3-eb1e5a2b12eb",
                        KitItem: []CalculateSLACalculateSLARequestItem3KitItem{
                            operations.CalculateSLACalculateSLARequestItem3KitItem{
                                AdditionalHandlingTime: "ducimus",
                                Dimension: operations.CalculateSLACalculateSLARequestItem3KitItemDimension{
                                    Height: 980486,
                                    Length: 87382,
                                    Weight: 96450,
                                    Width: 386447,
                                },
                                GroupItemID: "pariatur",
                                ID: "b99545fc-95fa-4889-b0e1-89dbb30fcb33",
                                KitItem: []string{
                                    "deserunt",
                                    "doloremque",
                                    "quis",
                                    "veniam",
                                },
                                Price: 727481,
                                Quantity: 99733,
                            },
                        },
                        Price: 584593,
                        Quantity: 475589,
                    },
                    operations.CalculateSLACalculateSLARequestItem3{
                        AdditionalHandlingTime: "eligendi",
                        Dimension: operations.CalculateSLACalculateSLARequestItem3Dimension{
                            Height: 820023,
                            Length: 251464,
                            Weight: 298187,
                            Width: 932296,
                        },
                        GroupItemID: "sed",
                        ID: "f52d82d3-513b-4b6f-88b6-56bcdb35ff2e",
                        KitItem: []CalculateSLACalculateSLARequestItem3KitItem{
                            operations.CalculateSLACalculateSLARequestItem3KitItem{
                                AdditionalHandlingTime: "rerum",
                                Dimension: operations.CalculateSLACalculateSLARequestItem3KitItemDimension{
                                    Height: 179795,
                                    Length: 440777,
                                    Weight: 345506,
                                    Width: 207296,
                                },
                                GroupItemID: "iusto",
                                ID: "a8cd9e73-19c1-477d-925f-77b114eeb52f",
                                KitItem: []string{
                                    "reprehenderit",
                                    "praesentium",
                                    "nemo",
                                    "repellat",
                                },
                                Price: 789770,
                                Quantity: 197259,
                            },
                            operations.CalculateSLACalculateSLARequestItem3KitItem{
                                AdditionalHandlingTime: "nihil",
                                Dimension: operations.CalculateSLACalculateSLARequestItem3KitItemDimension{
                                    Height: 534908,
                                    Length: 75566,
                                    Weight: 290248,
                                    Width: 828841,
                                },
                                GroupItemID: "aliquam",
                                ID: "c98e0c2b-b89e-4b75-9ad6-36c600503d8b",
                                KitItem: []string{
                                    "amet",
                                    "quasi",
                                    "dicta",
                                },
                                Price: 514922,
                                Quantity: 40710,
                            },
                        },
                        Price: 938412,
                        Quantity: 479707,
                    },
                },
                Location: operations.CalculateSLACalculateSLARequestLocation3{
                    Country: "Czech Republic",
                    Point: []float64{
                        6771.41,
                        8979.56,
                        5928.8,
                    },
                    ZipCode: "03497-5058",
                },
                SalesChannel: "eos",
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CalculateSLA200ApplicationJSONArrays != nil {
        // handle response
    }
}
```
