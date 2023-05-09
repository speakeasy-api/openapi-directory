# bets

### Available Operations

* [cashin](#cashin) - Allows a trusted application to cash in a bet (take a return on a bet) on behalf of the customer
* [getBetHistory](#getbethistory) - Retrieves the customer’s bet history.
* [getFreeBets](#getfreebets) - Returns available free bets
* [placeComplexBet](#placecomplexbet) - Places a multiple or a complex bet.
* [placeSingleBet](#placesinglebet) - Places a single bet
* [validateBetslip](#validatebetslip) - Organises the betslip when one or more selections are made. It returns a bet slip structure organised by betting opportunities.

## cashin

Allows a trusted application to cash in a bet (take a return on a bet) on behalf of the customer. If the customers monitor bets they can cash in a bet at any point before the event ends.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CashinRequest;
import org.openapis.openapi.models.operations.CashinResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CashinRequest req = new CashinRequest("corrupti", "illum", "vel", "error", 6458.94, "suscipit");            

            CashinResponse res = sdk.bets.cashin(req);

            if (res.cashInResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBetHistory

Retrieves the customer’s bet history. Options are available to organise the history in terms of date, bet type and settled and unsettled bets. The maximum number of bets and bet history pages retrieved can also be set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBetHistoryRequest;
import org.openapis.openapi.models.operations.GetBetHistoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBetHistoryRequest req = new GetBetHistoryRequest("iure", "magnam", "debitis", "ipsa", "delectus") {{
                exclude = new String[]{{
                    add("suscipit"),
                    add("molestiae"),
                }};
                fields = new String[]{{
                    add("placeat"),
                    add("voluptatum"),
                    add("iusto"),
                    add("excepturi"),
                }};
                include = new String[]{{
                    add("recusandae"),
                    add("temporibus"),
                }};
                page = 710.36;
                pageSize = 3373.96;
                settled = false;
                sort = "veritatis";
            }};            

            GetBetHistoryResponse res = sdk.bets.getBetHistory(req);

            if (res.betHistoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFreeBets

Retrieves the current free bets available for a customer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFreeBetsRequest;
import org.openapis.openapi.models.operations.GetFreeBetsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFreeBetsRequest req = new GetFreeBetsRequest("deserunt", "perferendis", "ipsam") {{
                exclude = new String[]{{
                    add("sapiente"),
                    add("quo"),
                    add("odit"),
                    add("at"),
                }};
                fields = new String[]{{
                    add("maiores"),
                    add("molestiae"),
                    add("quod"),
                    add("quod"),
                }};
                include = new String[]{{
                    add("totam"),
                    add("porro"),
                }};
            }};            

            GetFreeBetsResponse res = sdk.bets.getFreeBets(req);

            if (res.freeBet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## placeComplexBet

Places a multiple or a complex bet.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlaceComplexBetRequest;
import org.openapis.openapi.models.operations.PlaceComplexBetResponse;
import org.openapis.openapi.models.shared.Bet;
import org.openapis.openapi.models.shared.ComplexBetRequestBody;
import org.openapis.openapi.models.shared.Leg;
import org.openapis.openapi.models.shared.Part;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlaceComplexBetRequest req = new PlaceComplexBetRequest("dolorum", "dicta", "nam",                 new ComplexBetRequestBody() {{
                                bets = new org.openapis.openapi.models.shared.Bet[]{{
                                    add(new Bet(                new org.openapis.openapi.models.shared.Leg[]{{
                                                        add(new Leg(                new org.openapis.openapi.models.shared.Part[]{{
                                                                            add(new Part(false, 249796L, 581273L, 313218L, 881736L) {{
                                                                                includeInMultiple = false;
                                                                                priceDen = 411820L;
                                                                                priceNum = 396506L;
                                                                                priceType = 675439L;
                                                                                selectionId = 881104L;
                                                                            }}),
                                                                            add(new Part(false, 659669L, 501324L, 533206L, 956084L) {{
                                                                                includeInMultiple = false;
                                                                                priceDen = 965417L;
                                                                                priceNum = 692532L;
                                                                                priceType = 588465L;
                                                                                selectionId = 725255L;
                                                                            }}),
                                                                            add(new Part(false, 618809L, 606393L, 474867L, 19193L) {{
                                                                                includeInMultiple = false;
                                                                                priceDen = 230533L;
                                                                                priceNum = 643990L;
                                                                                priceType = 394869L;
                                                                                selectionId = 423855L;
                                                                            }}),
                                                                            add(new Part(false, 287991L, 290077L, 383462L, 618016L) {{
                                                                                includeInMultiple = false;
                                                                                priceDen = 470132L;
                                                                                priceNum = 301575L;
                                                                                priceType = 716075L;
                                                                                selectionId = 660174L;
                                                                            }}),
                                                                        }}, "nobis") {{
                                                            parts = new org.openapis.openapi.models.shared.Part[]{{
                                                                add(new Part(false, 962189L, 433288L, 248753L, 756107L) {{
                                                                    includeInMultiple = false;
                                                                    priceDen = 270008L;
                                                                    priceNum = 703737L;
                                                                    priceType = 735194L;
                                                                    selectionId = 288476L;
                                                                }}),
                                                                add(new Part(false, 572252L, 638921L, 223081L, 891555L) {{
                                                                    includeInMultiple = false;
                                                                    priceDen = 576157L;
                                                                    priceNum = 396098L;
                                                                    priceType = 592042L;
                                                                    selectionId = 896039L;
                                                                }}),
                                                                add(new Part(false, 846409L, 978571L, 699479L, 116202L) {{
                                                                    includeInMultiple = false;
                                                                    priceDen = 952749L;
                                                                    priceNum = 680056L;
                                                                    priceType = 447125L;
                                                                    selectionId = 449198L;
                                                                }}),
                                                            }};
                                                            sort = "magnam";
                                                            type = "cumque";
                                                        }}),
                                                        add(new Leg(                new org.openapis.openapi.models.shared.Part[]{{
                                                                            add(new Part(false, 891924L, 260341L, 806194L, 537023L) {{
                                                                                includeInMultiple = false;
                                                                                priceDen = 367562L;
                                                                                priceNum = 97260L;
                                                                                priceType = 435865L;
                                                                                selectionId = 984043L;
                                                                            }}),
                                                                        }}, "facilis") {{
                                                            parts = new org.openapis.openapi.models.shared.Part[]{{
                                                                add(new Part(false, 92373L, 569965L, 354047L, 590873L) {{
                                                                    includeInMultiple = false;
                                                                    priceDen = 878453L;
                                                                    priceNum = 135474L;
                                                                    priceType = 102863L;
                                                                    selectionId = 298282L;
                                                                }}),
                                                                add(new Part(false, 968962L, 652103L, 320997L, 431418L) {{
                                                                    includeInMultiple = false;
                                                                    priceDen = 551816L;
                                                                    priceNum = 574325L;
                                                                    priceType = 33625L;
                                                                    selectionId = 653201L;
                                                                }}),
                                                            }};
                                                            sort = "dolor";
                                                            type = "necessitatibus";
                                                        }}),
                                                        add(new Leg(                new org.openapis.openapi.models.shared.Part[]{{
                                                                            add(new Part(false, 139972L, 407183L, 33222L, 69167L) {{
                                                                                includeInMultiple = false;
                                                                                priceDen = 864934L;
                                                                                priceNum = 807319L;
                                                                                priceType = 411397L;
                                                                                selectionId = 569101L;
                                                                            }}),
                                                                            add(new Part(false, 420075L, 722056L, 50588L, 866383L) {{
                                                                                includeInMultiple = false;
                                                                                priceDen = 982575L;
                                                                                priceNum = 697429L;
                                                                                priceType = 373291L;
                                                                                selectionId = 453543L;
                                                                            }}),
                                                                            add(new Part(false, 230742L, 11714L, 764912L, 359978L) {{
                                                                                includeInMultiple = false;
                                                                                priceDen = 365496L;
                                                                                priceNum = 975522L;
                                                                                priceType = 16627L;
                                                                                selectionId = 855804L;
                                                                            }}),
                                                                            add(new Part(false, 339404L, 521037L, 489549L, 54338L) {{
                                                                                includeInMultiple = false;
                                                                                priceDen = 944124L;
                                                                                priceNum = 729991L;
                                                                                priceType = 749999L;
                                                                                selectionId = 171629L;
                                                                            }}),
                                                                        }}, "quis") {{
                                                            parts = new org.openapis.openapi.models.shared.Part[]{{
                                                                add(new Part(false, 714242L, 469249L, 998848L, 841140L) {{
                                                                    includeInMultiple = false;
                                                                    priceDen = 100226L;
                                                                    priceNum = 99569L;
                                                                    priceType = 919483L;
                                                                    selectionId = 352312L;
                                                                }}),
                                                                add(new Part(false, 162493L, 508315L, 615560L, 166847L) {{
                                                                    includeInMultiple = false;
                                                                    priceDen = 149448L;
                                                                    priceNum = 904648L;
                                                                    priceType = 868126L;
                                                                    selectionId = 37559L;
                                                                }}),
                                                            }};
                                                            sort = "sunt";
                                                            type = "quo";
                                                        }}),
                                                    }}, 199996L, 1794.9, "perferendis") {{
                                        delayedBetId = "occaecati";
                                        freeBetId = "fugit";
                                        legs = new org.openapis.openapi.models.shared.Leg[]{{
                                            add(new Leg(                new org.openapis.openapi.models.shared.Part[]{{
                                                                add(new Part(false, 128926L, 750686L, 315428L, 607831L) {{
                                                                    includeInMultiple = false;
                                                                    priceDen = 670638L;
                                                                    priceNum = 170909L;
                                                                    priceType = 210382L;
                                                                    selectionId = 358152L;
                                                                }}),
                                                                add(new Part(false, 438601L, 634274L, 988374L, 958950L) {{
                                                                    includeInMultiple = false;
                                                                    priceDen = 363711L;
                                                                    priceNum = 325047L;
                                                                    priceType = 570197L;
                                                                    selectionId = 38425L;
                                                                }}),
                                                                add(new Part(false, 161309L, 995300L, 653108L, 581850L) {{
                                                                    includeInMultiple = false;
                                                                    priceDen = 102044L;
                                                                    priceNum = 652790L;
                                                                    priceType = 208876L;
                                                                    selectionId = 635059L;
                                                                }}),
                                                            }}, "numquam") {{
                                                parts = new org.openapis.openapi.models.shared.Part[]{{
                                                    add(new Part(false, 473600L, 264555L, 186332L, 774234L) {{
                                                        includeInMultiple = false;
                                                        priceDen = 758616L;
                                                        priceNum = 521848L;
                                                        priceType = 105907L;
                                                        selectionId = 414662L;
                                                    }}),
                                                    add(new Part(false, 135218L, 18789L, 324141L, 617636L) {{
                                                        includeInMultiple = false;
                                                        priceDen = 736918L;
                                                        priceNum = 456150L;
                                                        priceType = 216550L;
                                                        selectionId = 568434L;
                                                    }}),
                                                    add(new Part(false, 386489L, 943749L, 902599L, 681820L) {{
                                                        includeInMultiple = false;
                                                        priceDen = 149675L;
                                                        priceNum = 612096L;
                                                        priceType = 222321L;
                                                        selectionId = 616934L;
                                                    }}),
                                                    add(new Part(false, 902349L, 697631L, 99280L, 60225L) {{
                                                        includeInMultiple = false;
                                                        priceDen = 449950L;
                                                        priceNum = 359508L;
                                                        priceType = 613064L;
                                                        selectionId = 437032L;
                                                    }}),
                                                }};
                                                sort = "reiciendis";
                                                type = "est";
                                            }}),
                                            add(new Leg(                new org.openapis.openapi.models.shared.Part[]{{
                                                                add(new Part(false, 971945L, 976460L, 878194L, 468651L) {{
                                                                    includeInMultiple = false;
                                                                    priceDen = 622846L;
                                                                    priceNum = 837945L;
                                                                    priceType = 673660L;
                                                                    selectionId = 96098L;
                                                                }}),
                                                            }}, "praesentium") {{
                                                parts = new org.openapis.openapi.models.shared.Part[]{{
                                                    add(new Part(false, 158969L, 338007L, 110375L, 674752L) {{
                                                        includeInMultiple = false;
                                                        priceDen = 466311L;
                                                        priceNum = 474697L;
                                                        priceType = 244425L;
                                                        selectionId = 623510L;
                                                    }}),
                                                    add(new Part(false, 196582L, 949572L, 368725L, 662527L) {{
                                                        includeInMultiple = false;
                                                        priceDen = 656330L;
                                                        priceNum = 317202L;
                                                        priceType = 138183L;
                                                        selectionId = 778346L;
                                                    }}),
                                                }};
                                                sort = "possimus";
                                                type = "aut";
                                            }}),
                                            add(new Leg(                new org.openapis.openapi.models.shared.Part[]{{
                                                                add(new Part(false, 131797L, 647174L, 716327L, 841386L) {{
                                                                    includeInMultiple = false;
                                                                    priceDen = 318569L;
                                                                    priceNum = 9356L;
                                                                    priceType = 667411L;
                                                                    selectionId = 842342L;
                                                                }}),
                                                                add(new Part(false, 586513L, 552822L, 20107L, 164940L) {{
                                                                    includeInMultiple = false;
                                                                    priceDen = 289406L;
                                                                    priceNum = 264730L;
                                                                    priceType = 183191L;
                                                                    selectionId = 397821L;
                                                                }}),
                                                            }}, "assumenda") {{
                                                parts = new org.openapis.openapi.models.shared.Part[]{{
                                                    add(new Part(false, 19987L, 39187L, 441711L, 282807L) {{
                                                        includeInMultiple = false;
                                                        priceDen = 55714L;
                                                        priceNum = 604846L;
                                                        priceType = 451159L;
                                                        selectionId = 739264L;
                                                    }}),
                                                    add(new Part(false, 480894L, 118727L, 688661L, 317983L) {{
                                                        includeInMultiple = false;
                                                        priceDen = 979587L;
                                                        priceNum = 120196L;
                                                        priceType = 359444L;
                                                        selectionId = 296140L;
                                                    }}),
                                                    add(new Part(false, 216822L, 692472L, 565189L, 566602L) {{
                                                        includeInMultiple = false;
                                                        priceDen = 880476L;
                                                        priceNum = 414263L;
                                                        priceType = 918236L;
                                                        selectionId = 64147L;
                                                    }}),
                                                    add(new Part(false, 916723L, 93940L, 921158L, 575947L) {{
                                                        includeInMultiple = false;
                                                        priceDen = 865103L;
                                                        priceNum = 265389L;
                                                        priceType = 508969L;
                                                        selectionId = 523248L;
                                                    }}),
                                                }};
                                                sort = "veritatis";
                                                type = "itaque";
                                            }}),
                                        }};
                                        number = 369808L;
                                        stake = 46.95;
                                        typeCode = "fugit";
                                    }}),
                                    add(new Bet(                new org.openapis.openapi.models.shared.Leg[]{{
                                                        add(new Leg(                new org.openapis.openapi.models.shared.Part[]{{
                                                                            add(new Part(false, 207470L, 153694L, 424685L, 730442L) {{
                                                                                includeInMultiple = false;
                                                                                priceDen = 518201L;
                                                                                priceNum = 471752L;
                                                                                priceType = 25662L;
                                                                                selectionId = 711584L;
                                                                            }}),
                                                                            add(new Part(false, 277628L, 186458L, 586784L, 807581L) {{
                                                                                includeInMultiple = false;
                                                                                priceDen = 374170L;
                                                                                priceNum = 646265L;
                                                                                priceType = 463575L;
                                                                                selectionId = 214880L;
                                                                            }}),
                                                                            add(new Part(false, 517379L, 276894L, 132068L, 174909L) {{
                                                                                includeInMultiple = false;
                                                                                priceDen = 863856L;
                                                                                priceNum = 747080L;
                                                                                priceType = 117531L;
                                                                                selectionId = 674848L;
                                                                            }}),
                                                                            add(new Part(false, 565421L, 840429L, 183280L, 204865L) {{
                                                                                includeInMultiple = false;
                                                                                priceDen = 716860L;
                                                                                priceNum = 704474L;
                                                                                priceType = 396060L;
                                                                                selectionId = 463150L;
                                                                            }}),
                                                                        }}, "fugit") {{
                                                            parts = new org.openapis.openapi.models.shared.Part[]{{
                                                                add(new Part(false, 55L, 872651L, 311860L, 273542L) {{
                                                                    includeInMultiple = false;
                                                                    priceDen = 324683L;
                                                                    priceNum = 831049L;
                                                                    priceType = 519711L;
                                                                    selectionId = 628982L;
                                                                }}),
                                                                add(new Part(false, 679880L, 952792L, 456130L, 687488L) {{
                                                                    includeInMultiple = false;
                                                                    priceDen = 425451L;
                                                                    priceNum = 798047L;
                                                                    priceType = 885338L;
                                                                    selectionId = 185636L;
                                                                }}),
                                                                add(new Part(false, 229442L, 730856L, 880298L, 253941L) {{
                                                                    includeInMultiple = false;
                                                                    priceDen = 483409L;
                                                                    priceNum = 215507L;
                                                                    priceType = 788740L;
                                                                    selectionId = 947371L;
                                                                }}),
                                                            }};
                                                            sort = "enim";
                                                            type = "dolorem";
                                                        }}),
                                                        add(new Leg(                new org.openapis.openapi.models.shared.Part[]{{
                                                                            add(new Part(false, 731694L, 584476L, 45614L, 961937L) {{
                                                                                includeInMultiple = false;
                                                                                priceDen = 217450L;
                                                                                priceNum = 83422L;
                                                                                priceType = 749255L;
                                                                                selectionId = 552193L;
                                                                            }}),
                                                                            add(new Part(false, 677263L, 100294L, 63038L, 16429L) {{
                                                                                includeInMultiple = false;
                                                                                priceDen = 209157L;
                                                                                priceNum = 292147L;
                                                                                priceType = 286915L;
                                                                                selectionId = 240829L;
                                                                            }}),
                                                                            add(new Part(false, 833038L, 785153L, 984330L, 281730L) {{
                                                                                includeInMultiple = false;
                                                                                priceDen = 555649L;
                                                                                priceNum = 929530L;
                                                                                priceType = 9240L;
                                                                                selectionId = 669917L;
                                                                            }}),
                                                                            add(new Part(false, 512393L, 485628L, 580447L, 977496L) {{
                                                                                includeInMultiple = false;
                                                                                priceDen = 703495L;
                                                                                priceNum = 586410L;
                                                                                priceType = 181631L;
                                                                                selectionId = 63955L;
                                                                            }}),
                                                                        }}, "quisquam") {{
                                                            parts = new org.openapis.openapi.models.shared.Part[]{{
                                                                add(new Part(false, 940432L, 30452L, 765326L, 746994L) {{
                                                                    includeInMultiple = false;
                                                                    priceDen = 488056L;
                                                                    priceNum = 124833L;
                                                                    priceType = 355613L;
                                                                    selectionId = 722081L;
                                                                }}),
                                                            }};
                                                            sort = "nobis";
                                                            type = "et";
                                                        }}),
                                                        add(new Leg(                new org.openapis.openapi.models.shared.Part[]{{
                                                                            add(new Part(false, 136900L, 428224L, 822118L, 297842L) {{
                                                                                includeInMultiple = false;
                                                                                priceDen = 639473L;
                                                                                priceNum = 269479L;
                                                                                priceType = 368584L;
                                                                                selectionId = 410492L;
                                                                            }}),
                                                                        }}, "ratione") {{
                                                            parts = new org.openapis.openapi.models.shared.Part[]{{
                                                                add(new Part(false, 455169L, 231701L, 878870L, 949319L) {{
                                                                    includeInMultiple = false;
                                                                    priceDen = 606476L;
                                                                    priceNum = 338159L;
                                                                    priceType = 218403L;
                                                                    selectionId = 961571L;
                                                                }}),
                                                                add(new Part(false, 486160L, 630448L, 708548L, 874288L) {{
                                                                    includeInMultiple = false;
                                                                    priceDen = 492268L;
                                                                    priceNum = 941378L;
                                                                    priceType = 715561L;
                                                                    selectionId = 799203L;
                                                                }}),
                                                                add(new Part(false, 194342L, 617877L, 773326L, 13236L) {{
                                                                    includeInMultiple = false;
                                                                    priceDen = 498140L;
                                                                    priceNum = 293020L;
                                                                    priceType = 844550L;
                                                                    selectionId = 848944L;
                                                                }}),
                                                                add(new Part(false, 780427L, 981830L, 985033L, 478370L) {{
                                                                    includeInMultiple = false;
                                                                    priceDen = 974259L;
                                                                    priceNum = 347233L;
                                                                    priceType = 862310L;
                                                                    selectionId = 148141L;
                                                                }}),
                                                            }};
                                                            sort = "eligendi";
                                                            type = "ducimus";
                                                        }}),
                                                    }}, 401132L, 5113.19, "dicta") {{
                                        delayedBetId = "dolores";
                                        freeBetId = "minus";
                                        legs = new org.openapis.openapi.models.shared.Leg[]{{
                                            add(new Leg(                new org.openapis.openapi.models.shared.Part[]{{
                                                                add(new Part(false, 237893L, 992397L, 934214L, 267262L) {{
                                                                    includeInMultiple = false;
                                                                    priceDen = 621479L;
                                                                    priceNum = 50370L;
                                                                    priceType = 577229L;
                                                                    selectionId = 699098L;
                                                                }}),
                                                                add(new Part(false, 589910L, 750844L, 730122L, 964490L) {{
                                                                    includeInMultiple = false;
                                                                    priceDen = 613966L;
                                                                    priceNum = 679091L;
                                                                    priceType = 535633L;
                                                                    selectionId = 864282L;
                                                                }}),
                                                                add(new Part(false, 209843L, 222443L, 186193L, 218749L) {{
                                                                    includeInMultiple = false;
                                                                    priceDen = 311945L;
                                                                    priceNum = 554242L;
                                                                    priceType = 398221L;
                                                                    selectionId = 212390L;
                                                                }}),
                                                            }}, "hic") {{
                                                parts = new org.openapis.openapi.models.shared.Part[]{{
                                                    add(new Part(false, 608253L, 704415L, 596656L, 31838L) {{
                                                        includeInMultiple = false;
                                                        priceDen = 874573L;
                                                        priceNum = 345352L;
                                                        priceType = 944120L;
                                                        selectionId = 928082L;
                                                    }}),
                                                }};
                                                sort = "porro";
                                                type = "consequuntur";
                                            }}),
                                            add(new Leg(                new org.openapis.openapi.models.shared.Part[]{{
                                                                add(new Part(false, 714697L, 990339L, 469497L, 216897L) {{
                                                                    includeInMultiple = false;
                                                                    priceDen = 677082L;
                                                                    priceNum = 536579L;
                                                                    priceType = 607045L;
                                                                    selectionId = 896672L;
                                                                }}),
                                                                add(new Part(false, 137220L, 20651L, 229219L, 758379L) {{
                                                                    includeInMultiple = false;
                                                                    priceDen = 456015L;
                                                                    priceNum = 663078L;
                                                                    priceType = 906418L;
                                                                    selectionId = 263322L;
                                                                }}),
                                                            }}, "accusamus") {{
                                                parts = new org.openapis.openapi.models.shared.Part[]{{
                                                    add(new Part(false, 227414L, 680545L, 254356L, 85295L) {{
                                                        includeInMultiple = false;
                                                        priceDen = 739551L;
                                                        priceNum = 452109L;
                                                        priceType = 490459L;
                                                        selectionId = 970237L;
                                                    }}),
                                                    add(new Part(false, 311796L, 881005L, 696344L, 976405L) {{
                                                        includeInMultiple = false;
                                                        priceDen = 58029L;
                                                        priceNum = 56418L;
                                                        priceType = 434417L;
                                                        selectionId = 487838L;
                                                    }}),
                                                    add(new Part(false, 24678L, 854614L, 67249L, 743835L) {{
                                                        includeInMultiple = false;
                                                        priceDen = 377752L;
                                                        priceNum = 617658L;
                                                        priceType = 179603L;
                                                        selectionId = 542499L;
                                                    }}),
                                                }};
                                                sort = "dolorum";
                                                type = "iusto";
                                            }}),
                                        }};
                                        number = 320017L;
                                        stake = 9044.25;
                                        typeCode = "suscipit";
                                    }}),
                                    add(new Bet(                new org.openapis.openapi.models.shared.Leg[]{{
                                                        add(new Leg(                new org.openapis.openapi.models.shared.Part[]{{
                                                                            add(new Part(false, 131482L, 591935L, 55374L, 476477L) {{
                                                                                includeInMultiple = false;
                                                                                priceDen = 727044L;
                                                                                priceNum = 96549L;
                                                                                priceType = 270328L;
                                                                                selectionId = 256139L;
                                                                            }}),
                                                                            add(new Part(false, 456141L, 524593L, 683282L, 442015L) {{
                                                                                includeInMultiple = false;
                                                                                priceDen = 301598L;
                                                                                priceNum = 487935L;
                                                                                priceType = 262118L;
                                                                                selectionId = 458515L;
                                                                            }}),
                                                                        }}, "quidem") {{
                                                            parts = new org.openapis.openapi.models.shared.Part[]{{
                                                                add(new Part(false, 432148L, 420539L, 752135L, 557369L) {{
                                                                    includeInMultiple = false;
                                                                    priceDen = 677412L;
                                                                    priceNum = 672048L;
                                                                    priceType = 810424L;
                                                                    selectionId = 245367L;
                                                                }}),
                                                            }};
                                                            sort = "assumenda";
                                                            type = "nulla";
                                                        }}),
                                                        add(new Leg(                new org.openapis.openapi.models.shared.Part[]{{
                                                                            add(new Part(false, 488410L, 577543L, 414567L, 959434L) {{
                                                                                includeInMultiple = false;
                                                                                priceDen = 469498L;
                                                                                priceNum = 518835L;
                                                                                priceType = 882710L;
                                                                                selectionId = 306810L;
                                                                            }}),
                                                                        }}, "dolores") {{
                                                            parts = new org.openapis.openapi.models.shared.Part[]{{
                                                                add(new Part(false, 181151L, 509342L, 788546L, 86377L) {{
                                                                    includeInMultiple = false;
                                                                    priceDen = 283519L;
                                                                    priceNum = 433439L;
                                                                    priceType = 379927L;
                                                                    selectionId = 826871L;
                                                                }}),
                                                                add(new Part(false, 778696L, 847276L, 777408L, 681359L) {{
                                                                    includeInMultiple = false;
                                                                    priceDen = 56848L;
                                                                    priceNum = 660040L;
                                                                    priceType = 696997L;
                                                                    selectionId = 206594L;
                                                                }}),
                                                                add(new Part(false, 587600L, 9688L, 272822L, 892050L) {{
                                                                    includeInMultiple = false;
                                                                    priceDen = 259422L;
                                                                    priceNum = 178367L;
                                                                    priceType = 373813L;
                                                                    selectionId = 69859L;
                                                                }}),
                                                                add(new Part(false, 459856L, 925164L, 44612L, 715179L) {{
                                                                    includeInMultiple = false;
                                                                    priceDen = 370853L;
                                                                    priceNum = 133465L;
                                                                    priceType = 197054L;
                                                                    selectionId = 779192L;
                                                                }}),
                                                            }};
                                                            sort = "quod";
                                                            type = "dignissimos";
                                                        }}),
                                                    }}, 645570L, 4752.89, "accusantium") {{
                                        delayedBetId = "dolor";
                                        freeBetId = "maiores";
                                        legs = new org.openapis.openapi.models.shared.Leg[]{{
                                            add(new Leg(                new org.openapis.openapi.models.shared.Part[]{{
                                                                add(new Part(false, 13948L, 11427L, 533466L, 770581L) {{
                                                                    includeInMultiple = false;
                                                                    priceDen = 325310L;
                                                                    priceNum = 53427L;
                                                                    priceType = 952871L;
                                                                    selectionId = 725595L;
                                                                }}),
                                                            }}, "aliquam") {{
                                                parts = new org.openapis.openapi.models.shared.Part[]{{
                                                    add(new Part(false, 960835L, 788873L, 906556L, 411372L) {{
                                                        includeInMultiple = false;
                                                        priceDen = 862192L;
                                                        priceNum = 569211L;
                                                        priceType = 972920L;
                                                        selectionId = 343605L;
                                                    }}),
                                                    add(new Part(false, 81101L, 301831L, 407241L, 775220L) {{
                                                        includeInMultiple = false;
                                                        priceDen = 774048L;
                                                        priceNum = 359271L;
                                                        priceType = 333145L;
                                                        selectionId = 399499L;
                                                    }}),
                                                }};
                                                sort = "consectetur";
                                                type = "recusandae";
                                            }}),
                                        }};
                                        number = 146946L;
                                        stake = 8828.6;
                                        typeCode = "inventore";
                                    }}),
                                }};
                            }};) {{
                exclude = new String[]{{
                    add("eum"),
                    add("quas"),
                    add("praesentium"),
                    add("consequuntur"),
                }};
                fields = new String[]{{
                    add("fugit"),
                    add("fuga"),
                    add("mollitia"),
                }};
                include = new String[]{{
                    add("atque"),
                    add("explicabo"),
                }};
            }};            

            PlaceComplexBetResponse res = sdk.bets.placeComplexBet(req);

            if (res.betPlacedResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## placeSingleBet

Places a single bet. When placing a single bet using live inplay bets, the system might generate a bet delay to allow a time margin to negate the effects of major changes (for example, goals) to the market. Note that the amount of bet delay will vary by category and event type. A delayedBetId will be recieved that can be used to resubmit the bet.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlaceSingleBetRequest;
import org.openapis.openapi.models.operations.PlaceSingleBetResponse;
import org.openapis.openapi.models.shared.SingleBetRequestBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlaceSingleBetRequest req = new PlaceSingleBetRequest("minima", "nisi", "fugit",                 new SingleBetRequestBody("sapiente", "consequuntur", 1871.31, "explicabo") {{
                                delayedBetId = "saepe";
                                freeBetId = "occaecati";
                                priceDen = 543806L;
                                priceNum = 92260L;
                            }};) {{
                exclude = new String[]{{
                    add("eveniet"),
                    add("accusamus"),
                }};
                fields = new String[]{{
                    add("esse"),
                }};
                include = new String[]{{
                    add("nam"),
                    add("vero"),
                    add("aliquid"),
                    add("quasi"),
                }};
            }};            

            PlaceSingleBetResponse res = sdk.bets.placeSingleBet(req);

            if (res.betPlacedResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## validateBetslip

Organises the betslip when one or more selections are made. It returns a bet slip structure organised by betting opportunities.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ValidateBetslipRequest;
import org.openapis.openapi.models.operations.ValidateBetslipResponse;
import org.openapis.openapi.models.shared.BetSlipRequest;
import org.openapis.openapi.models.shared.Leg;
import org.openapis.openapi.models.shared.Part;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ValidateBetslipRequest req = new ValidateBetslipRequest("saepe", "vel",                 new BetSlipRequest() {{
                                legs = new org.openapis.openapi.models.shared.Leg[]{{
                                    add(new Leg(                new org.openapis.openapi.models.shared.Part[]{{
                                                        add(new Part(false, 97468L, 951875L, 621679L, 575751L) {{
                                                            includeInMultiple = false;
                                                            priceDen = 953722L;
                                                            priceNum = 857723L;
                                                            priceType = 557811L;
                                                            selectionId = 457223L;
                                                        }}),
                                                        add(new Part(false, 992430L, 815524L, 85001L, 159414L) {{
                                                            includeInMultiple = false;
                                                            priceDen = 863023L;
                                                            priceNum = 820767L;
                                                            priceType = 157632L;
                                                            selectionId = 908844L;
                                                        }}),
                                                        add(new Part(false, 949298L, 62713L, 936747L, 424032L) {{
                                                            includeInMultiple = false;
                                                            priceDen = 94458L;
                                                            priceNum = 628899L;
                                                            priceType = 633608L;
                                                            selectionId = 398434L;
                                                        }}),
                                                    }}, "in") {{
                                        parts = new org.openapis.openapi.models.shared.Part[]{{
                                            add(new Part(false, 756779L, 27069L, 636061L, 731398L) {{
                                                includeInMultiple = false;
                                                priceDen = 699622L;
                                                priceNum = 580197L;
                                                priceType = 327720L;
                                                selectionId = 716244L;
                                            }}),
                                            add(new Part(false, 796392L, 308286L, 959167L, 232865L) {{
                                                includeInMultiple = false;
                                                priceDen = 240020L;
                                                priceNum = 766964L;
                                                priceType = 160538L;
                                                selectionId = 9766L;
                                            }}),
                                        }};
                                        sort = "esse";
                                        type = "blanditiis";
                                    }}),
                                    add(new Leg(                new org.openapis.openapi.models.shared.Part[]{{
                                                        add(new Part(false, 869489L, 92027L, 454162L, 55965L) {{
                                                            includeInMultiple = false;
                                                            priceDen = 99615L;
                                                            priceNum = 609178L;
                                                            priceType = 945302L;
                                                            selectionId = 98478L;
                                                        }}),
                                                        add(new Part(false, 614465L, 839513L, 33074L, 522371L) {{
                                                            includeInMultiple = false;
                                                            priceDen = 326701L;
                                                            priceNum = 86532L;
                                                            priceType = 232744L;
                                                            selectionId = 237173L;
                                                        }}),
                                                        add(new Part(false, 68074L, 544591L, 251941L, 32465L) {{
                                                            includeInMultiple = false;
                                                            priceDen = 15606L;
                                                            priceNum = 513075L;
                                                            priceType = 428796L;
                                                            selectionId = 649832L;
                                                        }}),
                                                    }}, "dolor") {{
                                        parts = new org.openapis.openapi.models.shared.Part[]{{
                                            add(new Part(false, 306986L, 958983L, 119771L, 355369L) {{
                                                includeInMultiple = false;
                                                priceDen = 727697L;
                                                priceNum = 849039L;
                                                priceType = 742238L;
                                                selectionId = 33304L;
                                            }}),
                                            add(new Part(false, 531849L, 185232L, 845358L, 401259L) {{
                                                includeInMultiple = false;
                                                priceDen = 443879L;
                                                priceNum = 356707L;
                                                priceType = 391774L;
                                                selectionId = 16328L;
                                            }}),
                                        }};
                                        sort = "deleniti";
                                        type = "itaque";
                                    }}),
                                    add(new Leg(                new org.openapis.openapi.models.shared.Part[]{{
                                                        add(new Part(false, 683573L, 662505L, 380729L, 246063L) {{
                                                            includeInMultiple = false;
                                                            priceDen = 801836L;
                                                            priceNum = 288398L;
                                                            priceType = 70447L;
                                                            selectionId = 241418L;
                                                        }}),
                                                        add(new Part(false, 853940L, 424089L, 497678L, 554688L) {{
                                                            includeInMultiple = false;
                                                            priceDen = 633931L;
                                                            priceNum = 665859L;
                                                            priceType = 926880L;
                                                            selectionId = 517309L;
                                                        }}),
                                                        add(new Part(false, 738227L, 414857L, 447144L, 360545L) {{
                                                            includeInMultiple = false;
                                                            priceDen = 427834L;
                                                            priceNum = 287051L;
                                                            priceType = 822560L;
                                                            selectionId = 706575L;
                                                        }}),
                                                        add(new Part(false, 397533L, 46007L, 738683L, 232627L) {{
                                                            includeInMultiple = false;
                                                            priceDen = 968904L;
                                                            priceNum = 828657L;
                                                            priceType = 363161L;
                                                            selectionId = 924967L;
                                                        }}),
                                                    }}, "in") {{
                                        parts = new org.openapis.openapi.models.shared.Part[]{{
                                            add(new Part(false, 12036L, 491025L, 115484L, 981640L) {{
                                                includeInMultiple = false;
                                                priceDen = 253191L;
                                                priceNum = 771089L;
                                                priceType = 131055L;
                                                selectionId = 376226L;
                                            }}),
                                            add(new Part(false, 990345L, 45659L, 409054L, 310067L) {{
                                                includeInMultiple = false;
                                                priceDen = 618480L;
                                                priceNum = 244651L;
                                                priceType = 974257L;
                                                selectionId = 374323L;
                                            }}),
                                            add(new Part(false, 490305L, 640024L, 989410L, 368102L) {{
                                                includeInMultiple = false;
                                                priceDen = 162954L;
                                                priceNum = 831520L;
                                                priceType = 638762L;
                                                selectionId = 807023L;
                                            }}),
                                        }};
                                        sort = "quae";
                                        type = "quaerat";
                                    }}),
                                }};
                            }};) {{
                expanded = "exercitationem";
            }};            

            ValidateBetslipResponse res = sdk.bets.validateBetslip(req);

            if (res.betSlipResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
