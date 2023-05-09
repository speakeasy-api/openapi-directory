# sla

### Available Operations

* [calculateSLA](#calculatesla) - Calculate SLA

## calculateSLA

Endpoint used by the checkout to calculate the Service Level Agreement (SLA), a contract between the store and shoppers on the order's fulfillment conditions, such as the shipping estimated date. 

The calculation of the estimated date considers the [shipping policy](https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140) and [loading dock](https://help.vtex.com/en/tutorial/loading-dock--5DY8xHEjOLYDVL41Urd5qj) related to the order.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalculateSLACalculateSLARequest;
import org.openapis.openapi.models.operations.CalculateSLACalculateSLARequestItem3;
import org.openapis.openapi.models.operations.CalculateSLACalculateSLARequestItem3Dimension;
import org.openapis.openapi.models.operations.CalculateSLACalculateSLARequestItem3KitItem;
import org.openapis.openapi.models.operations.CalculateSLACalculateSLARequestItem3KitItemDimension;
import org.openapis.openapi.models.operations.CalculateSLACalculateSLARequestLocation3;
import org.openapis.openapi.models.operations.CalculateSLARequest;
import org.openapis.openapi.models.operations.CalculateSLAResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo", "provident") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CalculateSLARequest req = new CalculateSLARequest("ipsa", "molestiae",                 new org.openapis.openapi.models.operations.CalculateSLACalculateSLARequest[]{{
                                add(new CalculateSLACalculateSLARequest(                new org.openapis.openapi.models.operations.CalculateSLACalculateSLARequestItem3[]{{
                                                    add(new CalculateSLACalculateSLARequestItem3("officiis",                 new CalculateSLACalculateSLARequestItem3Dimension(972912, 737279, 872303, 5152);, "quia", "quidem",                 new org.openapis.openapi.models.operations.CalculateSLACalculateSLARequestItem3KitItem[]{{
                                                                        add(new CalculateSLACalculateSLARequestItem3KitItem("modi",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(357347, 298264, 914971, 978173);, "tempore", "aperiam",                 new String[]{{
                                                                                            add("ratione"),
                                                                                            add("labore"),
                                                                                            add("totam"),
                                                                                        }}, 577709, 375994) {{
                                                                            additionalHandlingTime = "repudiandae";
                                                                            dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(844854, 483518, 510128, 140316) {{
                                                                                height = 34070;
                                                                                length = 710456;
                                                                                weight = 885208;
                                                                                width = 177005;
                                                                            }};
                                                                            groupItemId = "explicabo";
                                                                            id = "59e3ea4b-5197-4f92-843d-a7ce52b895c5";
                                                                            kitItem = new String[]{{
                                                                                add("in"),
                                                                            }};
                                                                            price = 796397;
                                                                            quantity = 433077;
                                                                        }}),
                                                                        add(new CalculateSLACalculateSLARequestItem3KitItem("earum",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(334474, 659268, 175372, 724994);, "dicta", "consequuntur",                 new String[]{{
                                                                                            add("nobis"),
                                                                                            add("ipsa"),
                                                                                            add("ducimus"),
                                                                                            add("maiores"),
                                                                                        }}, 87382, 96450) {{
                                                                            additionalHandlingTime = "quo";
                                                                            dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(669237, 770873, 963741, 735894) {{
                                                                                height = 242099;
                                                                                length = 795591;
                                                                                weight = 684553;
                                                                                width = 344530;
                                                                            }};
                                                                            groupItemId = "vero";
                                                                            id = "2fd57075-7792-4917-bdea-c646ecb57340";
                                                                            kitItem = new String[]{{
                                                                                add("vero"),
                                                                                add("sequi"),
                                                                                add("repudiandae"),
                                                                            }};
                                                                            price = 741232;
                                                                            quantity = 120120;
                                                                        }}),
                                                                        add(new CalculateSLACalculateSLARequestItem3KitItem("itaque",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(150935, 993002, 330267, 164532);, "facere", "laudantium",                 new String[]{{
                                                                                            add("pariatur"),
                                                                                        }}, 227362, 347698) {{
                                                                            additionalHandlingTime = "laboriosam";
                                                                            dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(367917, 306382, 342342, 988749) {{
                                                                                height = 863471;
                                                                                length = 729448;
                                                                                weight = 566506;
                                                                                width = 578210;
                                                                            }};
                                                                            groupItemId = "eligendi";
                                                                            id = "95fa8897-0e18-49db-b30f-cb33ea055b19";
                                                                            kitItem = new String[]{{
                                                                                add("eligendi"),
                                                                                add("possimus"),
                                                                            }};
                                                                            price = 251464;
                                                                            quantity = 298187;
                                                                        }}),
                                                                    }}, 68852, 242637) {{
                                                        additionalHandlingTime = "consequuntur";
                                                        dimension = new CalculateSLACalculateSLARequestItem3Dimension(746837, 3860, 608989, 178580) {{
                                                            height = 233078;
                                                            length = 46806;
                                                            weight = 585432;
                                                            width = 970732;
                                                        }};
                                                        groupItemId = "occaecati";
                                                        id = "921aefb9-f58c-44d8-ae68-e4be056013f5";
                                                        kitItem = new org.openapis.openapi.models.operations.CalculateSLACalculateSLARequestItem3KitItem[]{{
                                                            add(new CalculateSLACalculateSLARequestItem3KitItem("architecto",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(975425, 156383, 782090, 304198);, "velit", "illo",                 new String[]{{
                                                                                add("vel"),
                                                                            }}, 406922, 107617) {{
                                                                additionalHandlingTime = "nulla";
                                                                dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(667715, 336102, 571844, 880679) {{
                                                                    height = 643678;
                                                                    length = 458503;
                                                                    weight = 364463;
                                                                    width = 444587;
                                                                }};
                                                                groupItemId = "impedit";
                                                                id = "fef66ef1-caa3-4383-82be-b477373c8d72";
                                                                kitItem = new String[]{{
                                                                    add("vel"),
                                                                    add("magnam"),
                                                                    add("quibusdam"),
                                                                    add("inventore"),
                                                                }};
                                                                price = 818034;
                                                                quantity = 726878;
                                                            }}),
                                                            add(new CalculateSLACalculateSLARequestItem3KitItem("veritatis",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(874400, 233173, 112427, 81371);, "dolorem", "ad",                 new String[]{{
                                                                                add("iste"),
                                                                            }}, 403026, 367626) {{
                                                                additionalHandlingTime = "vero";
                                                                dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(596433, 935302, 117525, 772266) {{
                                                                    height = 568218;
                                                                    length = 431994;
                                                                    weight = 246557;
                                                                    width = 284086;
                                                                }};
                                                                groupItemId = "voluptatibus";
                                                                id = "9e06e3a4-3700-40ae-ab6b-c9b8f759eac5";
                                                                kitItem = new String[]{{
                                                                    add("est"),
                                                                    add("error"),
                                                                }};
                                                                price = 456885;
                                                                quantity = 288570;
                                                            }}),
                                                            add(new CalculateSLACalculateSLARequestItem3KitItem("beatae",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(668606, 817339, 545918, 473143);, "provident", "accusamus",                 new String[]{{
                                                                                add("tempore"),
                                                                                add("sint"),
                                                                                add("ea"),
                                                                                add("autem"),
                                                                            }}, 373511, 702952) {{
                                                                additionalHandlingTime = "soluta";
                                                                dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(144691, 545, 168042, 425402) {{
                                                                    height = 726227;
                                                                    length = 526907;
                                                                    weight = 678060;
                                                                    width = 487676;
                                                                }};
                                                                groupItemId = "quae";
                                                                id = "1435e139-dbc2-4259-b1ab-da8c070e1084";
                                                                kitItem = new String[]{{
                                                                    add("distinctio"),
                                                                    add("voluptatem"),
                                                                    add("autem"),
                                                                    add("esse"),
                                                                }};
                                                                price = 172951;
                                                                quantity = 824798;
                                                            }}),
                                                        }};
                                                        price = 515638;
                                                        quantity = 357207;
                                                    }}),
                                                    add(new CalculateSLACalculateSLARequestItem3("ducimus",                 new CalculateSLACalculateSLARequestItem3Dimension(140957, 243623, 967338, 997918);, "nulla", "laborum",                 new org.openapis.openapi.models.operations.CalculateSLACalculateSLARequestItem3KitItem[]{{
                                                                        add(new CalculateSLACalculateSLARequestItem3KitItem("iure",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(485031, 202796, 895513, 423588);, "neque", "corporis",                 new String[]{{
                                                                                            add("consequuntur"),
                                                                                            add("officia"),
                                                                                        }}, 441374, 716033) {{
                                                                            additionalHandlingTime = "accusamus";
                                                                            dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(913285, 251627, 524577, 157884) {{
                                                                                height = 42906;
                                                                                length = 392967;
                                                                                weight = 700856;
                                                                                width = 924840;
                                                                            }};
                                                                            groupItemId = "ullam";
                                                                            id = "c1fc0e11-5c80-4bff-9185-44ec42defcce";
                                                                            kitItem = new String[]{{
                                                                                add("reiciendis"),
                                                                                add("ab"),
                                                                                add("sint"),
                                                                            }};
                                                                            price = 472414;
                                                                            quantity = 458412;
                                                                        }}),
                                                                        add(new CalculateSLACalculateSLARequestItem3KitItem("minima",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(403147, 791762, 68880, 108165);, "hic", "nisi",                 new String[]{{
                                                                                            add("dolor"),
                                                                                            add("ducimus"),
                                                                                            add("fuga"),
                                                                                            add("minima"),
                                                                                        }}, 102446, 181476) {{
                                                                            additionalHandlingTime = "eius";
                                                                            dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(331452, 906232, 206063, 816365) {{
                                                                                height = 56372;
                                                                                length = 522062;
                                                                                weight = 978154;
                                                                                width = 35160;
                                                                            }};
                                                                            groupItemId = "aliquam";
                                                                            id = "8fdaf313-a1f5-4fd9-8259-c0b36f25ea94";
                                                                            kitItem = new String[]{{
                                                                                add("tenetur"),
                                                                                add("adipisci"),
                                                                            }};
                                                                            price = 728559;
                                                                            quantity = 448386;
                                                                        }}),
                                                                        add(new CalculateSLACalculateSLARequestItem3KitItem("quibusdam",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(798690, 363224, 923456, 246772);, "magnam", "dignissimos",                 new String[]{{
                                                                                            add("sed"),
                                                                                            add("odio"),
                                                                                        }}, 616941, 588152) {{
                                                                            additionalHandlingTime = "aliquid";
                                                                            dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(220528, 349898, 709701, 706411) {{
                                                                                height = 166289;
                                                                                length = 276650;
                                                                                weight = 240490;
                                                                                width = 506343;
                                                                            }};
                                                                            groupItemId = "impedit";
                                                                            id = "05a23a45-cefc-45fd-a10a-0ce2169e5100";
                                                                            kitItem = new String[]{{
                                                                                add("provident"),
                                                                            }};
                                                                            price = 765833;
                                                                            quantity = 435531;
                                                                        }}),
                                                                    }}, 739508, 983854) {{
                                                        additionalHandlingTime = "facilis";
                                                        dimension = new CalculateSLACalculateSLARequestItem3Dimension(503748, 718627, 392430, 335977) {{
                                                            height = 731065;
                                                            length = 395233;
                                                            weight = 977518;
                                                            width = 310840;
                                                        }};
                                                        groupItemId = "nisi";
                                                        id = "bcdb35ff-2e4b-4275-b7a8-cd9e7319c177";
                                                        kitItem = new org.openapis.openapi.models.operations.CalculateSLACalculateSLARequestItem3KitItem[]{{
                                                            add(new CalculateSLACalculateSLARequestItem3KitItem("iure",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(213835, 413801, 771226, 415033);, "aut", "voluptatem",                 new String[]{{
                                                                                add("quae"),
                                                                                add("amet"),
                                                                            }}, 849320, 506863) {{
                                                                additionalHandlingTime = "ad";
                                                                dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(491201, 729828, 72350, 69182) {{
                                                                    height = 134818;
                                                                    length = 316501;
                                                                    weight = 965090;
                                                                    width = 482584;
                                                                }};
                                                                groupItemId = "incidunt";
                                                                id = "eeb52ff7-85fc-4378-94d4-c98e0c2bb89e";
                                                                kitItem = new String[]{{
                                                                    add("dignissimos"),
                                                                    add("corporis"),
                                                                    add("vero"),
                                                                }};
                                                                price = 629377;
                                                                quantity = 833982;
                                                            }}),
                                                            add(new CalculateSLACalculateSLARequestItem3KitItem("dignissimos",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(998026, 243678, 784115, 588639);, "consectetur", "eligendi",                 new String[]{{
                                                                                add("consectetur"),
                                                                                add("soluta"),
                                                                            }}, 620500, 839807) {{
                                                                additionalHandlingTime = "quidem";
                                                                dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(514922, 40710, 938412, 479707) {{
                                                                    height = 736853;
                                                                    length = 230411;
                                                                    weight = 97676;
                                                                    width = 118126;
                                                                }};
                                                                groupItemId = "amet";
                                                                id = "9ae9e057-eb80-49e2-8103-31f3981d4c70";
                                                                kitItem = new String[]{{
                                                                    add("rerum"),
                                                                }};
                                                                price = 411615;
                                                                quantity = 46791;
                                                            }}),
                                                            add(new CalculateSLACalculateSLARequestItem3KitItem("eum",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(199529, 652125, 492632, 853246);, "nostrum", "molestiae",                 new String[]{{
                                                                                add("reiciendis"),
                                                                                add("ab"),
                                                                            }}, 265632, 13865) {{
                                                                additionalHandlingTime = "officia";
                                                                dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(931077, 848346, 670762, 490420) {{
                                                                    height = 228857;
                                                                    length = 948541;
                                                                    weight = 133949;
                                                                    width = 778276;
                                                                }};
                                                                groupItemId = "vero";
                                                                id = "23f22574-11fa-4f4b-b544-e472e802857a";
                                                                kitItem = new String[]{{
                                                                    add("libero"),
                                                                    add("magnam"),
                                                                }};
                                                                price = 24272;
                                                                quantity = 266788;
                                                            }}),
                                                            add(new CalculateSLACalculateSLARequestItem3KitItem("necessitatibus",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(691508, 126727, 108903, 397988);, "modi", "optio",                 new String[]{{
                                                                                add("molestias"),
                                                                                add("officia"),
                                                                                add("libero"),
                                                                                add("totam"),
                                                                            }}, 192846, 397919) {{
                                                                additionalHandlingTime = "aut";
                                                                dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(677045, 823718, 452399, 232772) {{
                                                                    height = 911657;
                                                                    length = 483753;
                                                                    weight = 413758;
                                                                    width = 256114;
                                                                }};
                                                                groupItemId = "nesciunt";
                                                                id = "4ec1b781-b36a-4080-88d1-00efada200ef";
                                                                kitItem = new String[]{{
                                                                    add("incidunt"),
                                                                }};
                                                                price = 185448;
                                                                quantity = 185897;
                                                            }}),
                                                        }};
                                                        price = 412052;
                                                        quantity = 774501;
                                                    }}),
                                                }},                 new CalculateSLACalculateSLARequestLocation3("facilis",                 new Double[]{{
                                                                    add(9320.8),
                                                                    add(3895.48),
                                                                    add(6017.14),
                                                                }}, "modi");, "perspiciatis") {{
                                    items = new org.openapis.openapi.models.operations.CalculateSLACalculateSLARequestItem3[]{{
                                        add(new CalculateSLACalculateSLARequestItem3("voluptate",                 new CalculateSLACalculateSLARequestItem3Dimension(55965, 326701, 86532, 232744);, "adipisci", "iste",                 new org.openapis.openapi.models.operations.CalculateSLACalculateSLARequestItem3KitItem[]{{
                                                            add(new CalculateSLACalculateSLARequestItem3KitItem("suscipit",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(246063, 633931, 665859, 926880);, "totam", "fugiat",                 new String[]{{
                                                                                add("ducimus"),
                                                                                add("quos"),
                                                                            }}, 427834, 287051) {{
                                                                additionalHandlingTime = "accusantium";
                                                                dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(649832, 68074, 544591, 251941) {{
                                                                    height = 522371;
                                                                    length = 15606;
                                                                    weight = 513075;
                                                                    width = 428796;
                                                                }};
                                                                groupItemId = "voluptatem";
                                                                id = "394c2607-1f93-4f5f-8642-dac7af515cc4";
                                                                kitItem = new String[]{{
                                                                    add("adipisci"),
                                                                }};
                                                                price = 683573;
                                                                quantity = 662505;
                                                            }}),
                                                            add(new CalculateSLACalculateSLARequestItem3KitItem("voluptas",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(374244, 374296, 324405, 748789);, "dolorum", "adipisci",                 new String[]{{
                                                                                add("dolores"),
                                                                                add("blanditiis"),
                                                                                add("in"),
                                                                                add("dolore"),
                                                                            }}, 304468, 885963) {{
                                                                additionalHandlingTime = "possimus";
                                                                dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(360545, 968904, 828657, 363161) {{
                                                                    height = 706575;
                                                                    length = 738227;
                                                                    weight = 414857;
                                                                    width = 447144;
                                                                }};
                                                                groupItemId = "recusandae";
                                                                id = "60b375ed-4f6f-4bee-81f3-3317fe35b60e";
                                                                kitItem = new String[]{{
                                                                    add("vitae"),
                                                                    add("accusamus"),
                                                                    add("similique"),
                                                                }};
                                                                price = 272437;
                                                                quantity = 132815;
                                                            }}),
                                                            add(new CalculateSLACalculateSLARequestItem3KitItem("sed",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(592231, 258702, 896762, 215529);, "ea", "occaecati",                 new String[]{{
                                                                                add("voluptatibus"),
                                                                                add("tempora"),
                                                                                add("tempora"),
                                                                            }}, 455444, 970076) {{
                                                                additionalHandlingTime = "temporibus";
                                                                dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(555361, 942584, 201517, 633998) {{
                                                                    height = 351870;
                                                                    length = 237742;
                                                                    weight = 738391;
                                                                    width = 502389;
                                                                }};
                                                                groupItemId = "corrupti";
                                                                id = "d8f5c0b2-f2fb-47b1-94a2-76b26916fe1f";
                                                                kitItem = new String[]{{
                                                                    add("corrupti"),
                                                                }};
                                                                price = 979574;
                                                                quantity = 274823;
                                                            }}),
                                                            add(new CalculateSLACalculateSLARequestItem3KitItem("fugit",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(282699, 856303, 30235, 635057);, "expedita", "magnam",                 new String[]{{
                                                                                add("esse"),
                                                                            }}, 372679, 24527) {{
                                                                additionalHandlingTime = "ex";
                                                                dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(708609, 310381, 277773, 373035) {{
                                                                    height = 25497;
                                                                    length = 248413;
                                                                    weight = 888044;
                                                                    width = 505866;
                                                                }};
                                                                groupItemId = "debitis";
                                                                id = "80ca55ef-d20e-4457-a185-8b6a89fbe3a5";
                                                                kitItem = new String[]{{
                                                                    add("dolorum"),
                                                                    add("corrupti"),
                                                                    add("accusamus"),
                                                                }};
                                                                price = 272683;
                                                                quantity = 543678;
                                                            }}),
                                                        }}, 530537, 558065) {{
                                            additionalHandlingTime = "eius";
                                            dimension = new CalculateSLACalculateSLARequestItem3Dimension(442015, 695626, 852635, 283519) {{
                                                height = 458515;
                                                length = 456141;
                                                weight = 524593;
                                                width = 683282;
                                            }};
                                            groupItemId = "eum";
                                            id = "6d28c10a-b3cd-4ca4-a519-04e523c7e0bc";
                                            kitItem = new org.openapis.openapi.models.operations.CalculateSLACalculateSLARequestItem3KitItem[]{{
                                                add(new CalculateSLACalculateSLARequestItem3KitItem("harum",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(473221, 699622, 580197, 327720);, "distinctio", "eligendi",                 new String[]{{
                                                                    add("culpa"),
                                                                }}, 731398, 240020) {{
                                                    additionalHandlingTime = "inventore";
                                                    dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(488410, 577543, 414567, 959434) {{
                                                        height = 469498;
                                                        length = 518835;
                                                        weight = 882710;
                                                        width = 306810;
                                                    }};
                                                    groupItemId = "dolores";
                                                    id = "a70c6882-82aa-4482-962f-222e9817ee17";
                                                    kitItem = new String[]{{
                                                        add("nam"),
                                                        add("vero"),
                                                        add("aliquid"),
                                                        add("quasi"),
                                                    }};
                                                    price = 904045;
                                                    quantity = 426306;
                                                }}),
                                                add(new CalculateSLACalculateSLARequestItem3KitItem("voluptatum",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(185232, 845358, 401259, 536275);, "itaque", "dolorum",                 new String[]{{
                                                                    add("omnis"),
                                                                }}, 945302, 98478) {{
                                                    additionalHandlingTime = "cumque";
                                                    dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(959167, 232865, 458139, 503427) {{
                                                        height = 160538;
                                                        length = 9766;
                                                        weight = 796392;
                                                        width = 308286;
                                                    }};
                                                    groupItemId = "provident";
                                                    id = "fd871f99-dd2e-4fd1-a1aa-6f1e674bdb04";
                                                    kitItem = new String[]{{
                                                        add("dicta"),
                                                        add("ullam"),
                                                        add("reprehenderit"),
                                                        add("ullam"),
                                                    }};
                                                    price = 391774;
                                                    quantity = 16328;
                                                }}),
                                            }};
                                            price = 869489;
                                            quantity = 92027;
                                        }}),
                                        add(new CalculateSLACalculateSLARequestItem3("provident",                 new CalculateSLACalculateSLARequestItem3Dimension(936469, 745398, 940782, 848151);, "eaque", "earum",                 new org.openapis.openapi.models.operations.CalculateSLACalculateSLARequestItem3KitItem[]{{
                                                            add(new CalculateSLACalculateSLARequestItem3KitItem("aliquid",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(58870, 671384, 123844, 344718);, "fugiat", "expedita",                 new String[]{{
                                                                                add("officia"),
                                                                                add("suscipit"),
                                                                            }}, 399161, 21973) {{
                                                                additionalHandlingTime = "maiores";
                                                                dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(211534, 147808, 764995, 684935) {{
                                                                    height = 891801;
                                                                    length = 399802;
                                                                    weight = 780931;
                                                                    width = 380335;
                                                                }};
                                                                groupItemId = "ratione";
                                                                id = "aed01179-9631-42fd-a047-71778ff61d01";
                                                                kitItem = new String[]{{
                                                                    add("tempora"),
                                                                    add("esse"),
                                                                }};
                                                                price = 403793;
                                                                quantity = 235263;
                                                            }}),
                                                            add(new CalculateSLACalculateSLARequestItem3KitItem("sapiente",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(524184, 796320, 365100, 992074);, "ratione", "ullam",                 new String[]{{
                                                                                add("illum"),
                                                                            }}, 518150, 770675) {{
                                                                additionalHandlingTime = "eum";
                                                                dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(625358, 822407, 913992, 653421) {{
                                                                    height = 374753;
                                                                    length = 614528;
                                                                    weight = 661607;
                                                                    width = 70042;
                                                                }};
                                                                groupItemId = "laborum";
                                                                id = "b5851d6c-645b-408b-a189-1baa0fe1ade0";
                                                                kitItem = new String[]{{
                                                                    add("deleniti"),
                                                                }};
                                                                price = 937219;
                                                                quantity = 404244;
                                                            }}),
                                                            add(new CalculateSLACalculateSLARequestItem3KitItem("voluptatem",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(350207, 895692, 95619, 392569);, "at", "vero",                 new String[]{{
                                                                                add("harum"),
                                                                                add("sequi"),
                                                                                add("doloribus"),
                                                                            }}, 918092, 759283) {{
                                                                additionalHandlingTime = "quibusdam";
                                                                dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(307376, 80532, 537279, 85311) {{
                                                                    height = 720528;
                                                                    length = 373216;
                                                                    weight = 633415;
                                                                    width = 222864;
                                                                }};
                                                                groupItemId = "tempora";
                                                                id = "30104218-13d5-4208-ace7-e253b668451c";
                                                                kitItem = new String[]{{
                                                                    add("nobis"),
                                                                    add("laboriosam"),
                                                                }};
                                                                price = 927212;
                                                                quantity = 160393;
                                                            }}),
                                                        }}, 579681, 364544) {{
                                            additionalHandlingTime = "repudiandae";
                                            dimension = new CalculateSLACalculateSLARequestItem3Dimension(153627, 24313, 425508, 342611) {{
                                                height = 361151;
                                                length = 89494;
                                                weight = 502710;
                                                width = 405942;
                                            }};
                                            groupItemId = "saepe";
                                            id = "904f3b11-94b8-4abf-a03a-79f9dfe0ab7d";
                                            kitItem = new org.openapis.openapi.models.operations.CalculateSLACalculateSLARequestItem3KitItem[]{{
                                                add(new CalculateSLACalculateSLARequestItem3KitItem("accusantium",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(106429, 174772, 316488, 389135);, "velit", "a",                 new String[]{{
                                                                    add("magnam"),
                                                                    add("saepe"),
                                                                    add("consequuntur"),
                                                                }}, 580107, 886305) {{
                                                    additionalHandlingTime = "praesentium";
                                                    dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(919532, 97243, 542457, 442036) {{
                                                        height = 648598;
                                                        length = 333965;
                                                        weight = 29100;
                                                        width = 790840;
                                                    }};
                                                    groupItemId = "asperiores";
                                                    id = "86bc173d-689e-4ee9-926f-8d986e881ead";
                                                    kitItem = new String[]{{
                                                        add("reiciendis"),
                                                        add("doloremque"),
                                                    }};
                                                    price = 919783;
                                                    quantity = 116098;
                                                }}),
                                                add(new CalculateSLACalculateSLARequestItem3KitItem("id",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(327988, 293144, 680349, 200364);, "quae", "recusandae",                 new String[]{{
                                                                    add("quaerat"),
                                                                    add("molestiae"),
                                                                    add("ex"),
                                                                }}, 284000, 633062) {{
                                                    additionalHandlingTime = "perspiciatis";
                                                    dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(160230, 145870, 661118, 335631) {{
                                                        height = 446394;
                                                        length = 238043;
                                                        weight = 907876;
                                                        width = 580887;
                                                    }};
                                                    groupItemId = "reprehenderit";
                                                    id = "a15be3e0-6080-47e2-b6e3-ab8845f0597a";
                                                    kitItem = new String[]{{
                                                        add("alias"),
                                                        add("maiores"),
                                                    }};
                                                    price = 970222;
                                                    quantity = 174658;
                                                }}),
                                                add(new CalculateSLACalculateSLARequestItem3KitItem("quae",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(21688, 241901, 137251, 432281);, "eius", "rem",                 new String[]{{
                                                                    add("impedit"),
                                                                    add("eos"),
                                                                    add("sapiente"),
                                                                    add("eum"),
                                                                }}, 117320, 325118) {{
                                                    additionalHandlingTime = "adipisci";
                                                    dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(928219, 456520, 592081, 337477) {{
                                                        height = 890653;
                                                        length = 514513;
                                                        weight = 432606;
                                                        width = 367927;
                                                    }};
                                                    groupItemId = "eum";
                                                    id = "f9251a5a-9da6-460f-b57b-faad4f9efc1b";
                                                    kitItem = new String[]{{
                                                        add("quis"),
                                                        add("inventore"),
                                                    }};
                                                    price = 147685;
                                                    quantity = 765271;
                                                }}),
                                            }};
                                            price = 107004;
                                            quantity = 583404;
                                        }}),
                                    }};
                                    location = new CalculateSLACalculateSLARequestLocation3("fuga",                 new Double[]{{
                                                        add(2773.4),
                                                        add(974.93),
                                                        add(5243.8),
                                                    }}, "fugiat") {{
                                        country = "Kenya";
                                        point = new Double[]{{
                                            add(6423.52),
                                            add(3763.89),
                                            add(2540.25),
                                        }};
                                        zipCode = "52142";
                                    }};
                                    salesChannel = "dicta";
                                }}),
                                add(new CalculateSLACalculateSLARequest(                new org.openapis.openapi.models.operations.CalculateSLACalculateSLARequestItem3[]{{
                                                    add(new CalculateSLACalculateSLARequestItem3("quos",                 new CalculateSLACalculateSLARequestItem3Dimension(256310, 113894, 980376, 722025);, "architecto", "rerum",                 new org.openapis.openapi.models.operations.CalculateSLACalculateSLARequestItem3KitItem[]{{
                                                                        add(new CalculateSLACalculateSLARequestItem3KitItem("nemo",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(250520, 926142, 605043, 58567);, "aliquam", "dolor",                 new String[]{{
                                                                                            add("quibusdam"),
                                                                                            add("magni"),
                                                                                            add("consequuntur"),
                                                                                        }}, 159469, 260252) {{
                                                                            additionalHandlingTime = "eos";
                                                                            dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(69184, 297970, 866703, 709234) {{
                                                                                height = 211518;
                                                                                length = 941743;
                                                                                weight = 830948;
                                                                                width = 721044;
                                                                            }};
                                                                            groupItemId = "autem";
                                                                            id = "be5a6859-98e2-42ae-a0da-16fc2b271a28";
                                                                            kitItem = new String[]{{
                                                                                add("placeat"),
                                                                                add("ullam"),
                                                                                add("molestiae"),
                                                                            }};
                                                                            price = 933840;
                                                                            quantity = 523156;
                                                                        }}),
                                                                        add(new CalculateSLACalculateSLARequestItem3KitItem("alias",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(643644, 145450, 421882, 779111);, "molestiae", "maxime",                 new String[]{{
                                                                                            add("impedit"),
                                                                                            add("cupiditate"),
                                                                                            add("deleniti"),
                                                                                            add("quasi"),
                                                                                        }}, 978857, 29853) {{
                                                                            additionalHandlingTime = "commodi";
                                                                            dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(392311, 131596, 268173, 39210) {{
                                                                                height = 371217;
                                                                                length = 426819;
                                                                                weight = 584199;
                                                                                width = 268109;
                                                                            }};
                                                                            groupItemId = "odio";
                                                                            id = "084f7ab3-7cef-4022-a519-4db55410adc6";
                                                                            kitItem = new String[]{{
                                                                                add("sint"),
                                                                                add("est"),
                                                                            }};
                                                                            price = 983556;
                                                                            quantity = 589031;
                                                                        }}),
                                                                        add(new CalculateSLACalculateSLARequestItem3KitItem("excepturi",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(549348, 667977, 21701, 840831);, "impedit", "ducimus",                 new String[]{{
                                                                                            add("nisi"),
                                                                                            add("dolor"),
                                                                                        }}, 143976, 291596) {{
                                                                            additionalHandlingTime = "aliquid";
                                                                            dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(816168, 409857, 730437, 722500) {{
                                                                                height = 511252;
                                                                                length = 601944;
                                                                                weight = 544660;
                                                                                width = 63369;
                                                                            }};
                                                                            groupItemId = "amet";
                                                                            id = "3cfaa348-c31b-4f40-bee4-fcf0c42b78f1";
                                                                            kitItem = new String[]{{
                                                                                add("nisi"),
                                                                                add("consequuntur"),
                                                                            }};
                                                                            price = 375549;
                                                                            quantity = 191312;
                                                                        }}),
                                                                        add(new CalculateSLACalculateSLARequestItem3KitItem("dolor",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(344010, 184738, 948297, 477352);, "dolore", "ullam",                 new String[]{{
                                                                                            add("adipisci"),
                                                                                        }}, 583138, 581269) {{
                                                                            additionalHandlingTime = "maxime";
                                                                            dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(771321, 518432, 762297, 665183) {{
                                                                                height = 803144;
                                                                                length = 713371;
                                                                                weight = 37181;
                                                                                width = 408677;
                                                                            }};
                                                                            groupItemId = "inventore";
                                                                            id = "2d025292-70b8-4d57-a2dd-895b8bcf24db";
                                                                            kitItem = new String[]{{
                                                                                add("nemo"),
                                                                                add("natus"),
                                                                                add("nisi"),
                                                                            }};
                                                                            price = 588542;
                                                                            quantity = 230594;
                                                                        }}),
                                                                    }}, 258036, 856185) {{
                                                        additionalHandlingTime = "officiis";
                                                        dimension = new CalculateSLACalculateSLARequestItem3Dimension(558410, 55407, 718187, 811903) {{
                                                            height = 708883;
                                                            length = 156843;
                                                            weight = 112751;
                                                            width = 487839;
                                                        }};
                                                        groupItemId = "quod";
                                                        id = "c0dbbddb-4847-408f-b4e3-91e6bc158c4c";
                                                        kitItem = new org.openapis.openapi.models.operations.CalculateSLACalculateSLARequestItem3KitItem[]{{
                                                            add(new CalculateSLACalculateSLARequestItem3KitItem("aut",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(620534, 457389, 963908, 644397);, "ratione", "ipsa",                 new String[]{{
                                                                                add("iste"),
                                                                                add("deserunt"),
                                                                                add("hic"),
                                                                                add("ducimus"),
                                                                            }}, 160260, 370195) {{
                                                                additionalHandlingTime = "earum";
                                                                dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(578610, 929443, 683602, 234845) {{
                                                                    height = 355927;
                                                                    length = 256813;
                                                                    weight = 314733;
                                                                    width = 585046;
                                                                }};
                                                                groupItemId = "modi";
                                                                id = "2260e9b2-00ce-478a-9bd8-fb7a0a116ce7";
                                                                kitItem = new String[]{{
                                                                    add("ratione"),
                                                                }};
                                                                price = 823990;
                                                                quantity = 311548;
                                                            }}),
                                                            add(new CalculateSLACalculateSLARequestItem3KitItem("consequuntur",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(820900, 963470, 690871, 304964);, "eligendi", "hic",                 new String[]{{
                                                                                add("illo"),
                                                                                add("nobis"),
                                                                                add("esse"),
                                                                                add("nisi"),
                                                                            }}, 129619, 197441) {{
                                                                additionalHandlingTime = "libero";
                                                                dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(130934, 6203, 228133, 9284) {{
                                                                    height = 153942;
                                                                    length = 609094;
                                                                    weight = 120646;
                                                                    width = 185116;
                                                                }};
                                                                groupItemId = "fugiat";
                                                                id = "83f5aeb7-799d-422e-8c1f-8493825fdc42";
                                                                kitItem = new String[]{{
                                                                    add("quos"),
                                                                    add("in"),
                                                                    add("commodi"),
                                                                    add("maxime"),
                                                                }};
                                                                price = 151486;
                                                                quantity = 791538;
                                                            }}),
                                                        }};
                                                        price = 4787;
                                                        quantity = 970131;
                                                    }}),
                                                    add(new CalculateSLACalculateSLARequestItem3("voluptas",                 new CalculateSLACalculateSLARequestItem3Dimension(981865, 412024, 428199, 965726);, "accusamus", "reiciendis",                 new org.openapis.openapi.models.operations.CalculateSLACalculateSLARequestItem3KitItem[]{{
                                                                        add(new CalculateSLACalculateSLARequestItem3KitItem("voluptatibus",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(466862, 859537, 211637, 915653);, "a", "perferendis",                 new String[]{{
                                                                                            add("excepturi"),
                                                                                            add("aliquid"),
                                                                                        }}, 294650, 29789) {{
                                                                            additionalHandlingTime = "sed";
                                                                            dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(311449, 256647, 248276, 741024) {{
                                                                                height = 33407;
                                                                                length = 913433;
                                                                                weight = 590280;
                                                                                width = 978460;
                                                                            }};
                                                                            groupItemId = "incidunt";
                                                                            id = "257b992c-8dbd-4a6a-a1ef-a2198258fd0a";
                                                                            kitItem = new String[]{{
                                                                                add("eveniet"),
                                                                                add("nam"),
                                                                                add("animi"),
                                                                            }};
                                                                            price = 288907;
                                                                            quantity = 455400;
                                                                        }}),
                                                                    }}, 849029, 388006) {{
                                                        additionalHandlingTime = "molestiae";
                                                        dimension = new CalculateSLACalculateSLARequestItem3Dimension(716795, 426691, 900438, 610490) {{
                                                            height = 556898;
                                                            length = 834177;
                                                            weight = 906524;
                                                            width = 230400;
                                                        }};
                                                        groupItemId = "nesciunt";
                                                        id = "89f5abb7-f662-4550-a283-82ac483afd23";
                                                        kitItem = new org.openapis.openapi.models.operations.CalculateSLACalculateSLARequestItem3KitItem[]{{
                                                            add(new CalculateSLACalculateSLARequestItem3KitItem("quam",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(264073, 683980, 435931, 538368);, "officia", "sint",                 new String[]{{
                                                                                add("dolor"),
                                                                                add("ad"),
                                                                                add("illum"),
                                                                            }}, 22966, 561399) {{
                                                                additionalHandlingTime = "minima";
                                                                dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(370973, 29270, 76786, 434955) {{
                                                                    height = 703651;
                                                                    length = 708360;
                                                                    weight = 647125;
                                                                    width = 392759;
                                                                }};
                                                                groupItemId = "incidunt";
                                                                id = "e06f5bf6-ae59-41bc-8bde-f3612b63c205";
                                                                kitItem = new String[]{{
                                                                    add("facere"),
                                                                    add("id"),
                                                                    add("atque"),
                                                                    add("quaerat"),
                                                                }};
                                                                price = 45850;
                                                                quantity = 489821;
                                                            }}),
                                                        }};
                                                        price = 377194;
                                                        quantity = 713246;
                                                    }}),
                                                    add(new CalculateSLACalculateSLARequestItem3("ex",                 new CalculateSLACalculateSLARequestItem3Dimension(483626, 963094, 794927, 283514);, "distinctio", "eius",                 new org.openapis.openapi.models.operations.CalculateSLACalculateSLARequestItem3KitItem[]{{
                                                                        add(new CalculateSLACalculateSLARequestItem3KitItem("numquam",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(488433, 342772, 980160, 83997);, "autem", "earum",                 new String[]{{
                                                                                            add("ex"),
                                                                                            add("possimus"),
                                                                                        }}, 200501, 547907) {{
                                                                            additionalHandlingTime = "veniam";
                                                                            dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(385726, 176281, 227706, 279679) {{
                                                                                height = 918720;
                                                                                length = 572317;
                                                                                weight = 577707;
                                                                                width = 894870;
                                                                            }};
                                                                            groupItemId = "porro";
                                                                            id = "9f7b79df-eb77-4a5c-b8d4-baf91e506ef8";
                                                                            kitItem = new String[]{{
                                                                                add("aut"),
                                                                                add("dolorum"),
                                                                                add("nostrum"),
                                                                            }};
                                                                            price = 270862;
                                                                            quantity = 724334;
                                                                        }}),
                                                                    }}, 343814, 682327) {{
                                                        additionalHandlingTime = "culpa";
                                                        dimension = new CalculateSLACalculateSLARequestItem3Dimension(789539, 540223, 472190, 631904) {{
                                                            height = 116705;
                                                            length = 538877;
                                                            weight = 191425;
                                                            width = 114588;
                                                        }};
                                                        groupItemId = "temporibus";
                                                        id = "f596fdf1-ad83-47ae-80c1-c19c95ba9986";
                                                        kitItem = new org.openapis.openapi.models.operations.CalculateSLACalculateSLARequestItem3KitItem[]{{
                                                            add(new CalculateSLACalculateSLARequestItem3KitItem("itaque",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(910396, 999208, 584663, 237208);, "aliquam", "illo",                 new String[]{{
                                                                                add("sed"),
                                                                                add("necessitatibus"),
                                                                            }}, 820866, 491784) {{
                                                                additionalHandlingTime = "voluptatum";
                                                                dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(437094, 575634, 418787, 614368) {{
                                                                    height = 957510;
                                                                    length = 645139;
                                                                    weight = 221240;
                                                                    width = 940951;
                                                                }};
                                                                groupItemId = "cupiditate";
                                                                id = "1af388ce-0361-4444-8c79-77a0ef2f5360";
                                                                kitItem = new String[]{{
                                                                    add("voluptatum"),
                                                                }};
                                                                price = 890505;
                                                                quantity = 951411;
                                                            }}),
                                                            add(new CalculateSLACalculateSLARequestItem3KitItem("delectus",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(366324, 763934, 529174, 196892);, "atque", "maiores",                 new String[]{{
                                                                                add("rerum"),
                                                                                add("totam"),
                                                                                add("quod"),
                                                                            }}, 133076, 53869) {{
                                                                additionalHandlingTime = "itaque";
                                                                dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(276795, 796952, 123546, 353493) {{
                                                                    height = 131116;
                                                                    length = 355898;
                                                                    weight = 248425;
                                                                    width = 962497;
                                                                }};
                                                                groupItemId = "quam";
                                                                id = "deaa7170-f445-4acc-b667-aaf9bbad185f";
                                                                kitItem = new String[]{{
                                                                    add("ut"),
                                                                    add("nesciunt"),
                                                                    add("ab"),
                                                                    add("quibusdam"),
                                                                }};
                                                                price = 384354;
                                                                quantity = 696324;
                                                            }}),
                                                        }};
                                                        price = 773455;
                                                        quantity = 722658;
                                                    }}),
                                                    add(new CalculateSLACalculateSLARequestItem3("corrupti",                 new CalculateSLACalculateSLARequestItem3Dimension(251522, 457330, 876682, 752919);, "minima", "omnis",                 new org.openapis.openapi.models.operations.CalculateSLACalculateSLARequestItem3KitItem[]{{
                                                                        add(new CalculateSLACalculateSLARequestItem3KitItem("sunt",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(605089, 464490, 887219, 118236);, "excepturi", "consectetur",                 new String[]{{
                                                                                            add("odit"),
                                                                                            add("incidunt"),
                                                                                            add("corporis"),
                                                                                        }}, 308866, 381639) {{
                                                                            additionalHandlingTime = "architecto";
                                                                            dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(227129, 767555, 291666, 762581) {{
                                                                                height = 974788;
                                                                                length = 419156;
                                                                                weight = 449861;
                                                                                width = 995671;
                                                                            }};
                                                                            groupItemId = "quo";
                                                                            id = "e4b6d769-6ff3-4c57-8750-1357e44f51f8";
                                                                            kitItem = new String[]{{
                                                                                add("consequatur"),
                                                                                add("totam"),
                                                                                add("tempora"),
                                                                            }};
                                                                            price = 777193;
                                                                            quantity = 224431;
                                                                        }}),
                                                                        add(new CalculateSLACalculateSLARequestItem3KitItem("cupiditate",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(15563, 772604, 801781, 774866);, "architecto", "voluptatem",                 new String[]{{
                                                                                            add("ea"),
                                                                                            add("eius"),
                                                                                            add("aperiam"),
                                                                                        }}, 30015, 247838) {{
                                                                            additionalHandlingTime = "ducimus";
                                                                            dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(472429, 260046, 811380, 145973) {{
                                                                                height = 947309;
                                                                                length = 568560;
                                                                                weight = 264125;
                                                                                width = 546329;
                                                                            }};
                                                                            groupItemId = "facere";
                                                                            id = "5cc49722-33e6-46bd-8fe5-d00b979ef203";
                                                                            kitItem = new String[]{{
                                                                                add("nihil"),
                                                                                add("neque"),
                                                                                add("aspernatur"),
                                                                            }};
                                                                            price = 53662;
                                                                            quantity = 360334;
                                                                        }}),
                                                                        add(new CalculateSLACalculateSLARequestItem3KitItem("necessitatibus",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(29600, 980705, 484905, 332429);, "fuga", "itaque",                 new String[]{{
                                                                                            add("tenetur"),
                                                                                            add("sed"),
                                                                                            add("deserunt"),
                                                                                            add("eligendi"),
                                                                                        }}, 664591, 719077) {{
                                                                            additionalHandlingTime = "beatae";
                                                                            dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(339118, 54677, 277418, 281436) {{
                                                                                height = 192880;
                                                                                length = 699215;
                                                                                weight = 215182;
                                                                                width = 891063;
                                                                            }};
                                                                            groupItemId = "delectus";
                                                                            id = "65fe72dc-4077-4d0c-83f4-08efc15ceb4d";
                                                                            kitItem = new String[]{{
                                                                                add("officiis"),
                                                                                add("quasi"),
                                                                            }};
                                                                            price = 883426;
                                                                            quantity = 656939;
                                                                        }}),
                                                                        add(new CalculateSLACalculateSLARequestItem3KitItem("cumque",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(160988, 981067, 460597, 128594);, "delectus", "quos",                 new String[]{{
                                                                                            add("enim"),
                                                                                            add("sit"),
                                                                                            add("voluptatem"),
                                                                                        }}, 619772, 29346) {{
                                                                            additionalHandlingTime = "corporis";
                                                                            dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(91270, 786319, 600471, 153513) {{
                                                                                height = 559571;
                                                                                length = 745304;
                                                                                weight = 584645;
                                                                                width = 602561;
                                                                            }};
                                                                            groupItemId = "suscipit";
                                                                            id = "ddb58946-1e74-421c-be6d-9502f0ea930b";
                                                                            kitItem = new String[]{{
                                                                                add("sint"),
                                                                                add("maiores"),
                                                                            }};
                                                                            price = 470017;
                                                                            quantity = 681331;
                                                                        }}),
                                                                    }}, 271216, 577622) {{
                                                        additionalHandlingTime = "sequi";
                                                        dimension = new CalculateSLACalculateSLARequestItem3Dimension(422407, 238022, 124796, 698844) {{
                                                            height = 805703;
                                                            length = 255839;
                                                            weight = 671428;
                                                            width = 757596;
                                                        }};
                                                        groupItemId = "occaecati";
                                                        id = "9e26ced8-f9fd-4b94-90f6-3bbf817837b0";
                                                        kitItem = new org.openapis.openapi.models.operations.CalculateSLACalculateSLARequestItem3KitItem[]{{
                                                            add(new CalculateSLACalculateSLARequestItem3KitItem("earum",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(327263, 141986, 138306, 259374);, "error", "vel",                 new String[]{{
                                                                                add("alias"),
                                                                                add("itaque"),
                                                                                add("ab"),
                                                                            }}, 125154, 226491) {{
                                                                additionalHandlingTime = "mollitia";
                                                                dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(534509, 523266, 424553, 177790) {{
                                                                    height = 990454;
                                                                    length = 872580;
                                                                    weight = 845374;
                                                                    width = 461853;
                                                                }};
                                                                groupItemId = "labore";
                                                                id = "189eb448-73f5-4033-b19d-bf125ce4152e";
                                                                kitItem = new String[]{{
                                                                    add("expedita"),
                                                                    add("error"),
                                                                    add("placeat"),
                                                                }};
                                                                price = 838227;
                                                                quantity = 454761;
                                                            }}),
                                                        }};
                                                        price = 737061;
                                                        quantity = 481102;
                                                    }}),
                                                }},                 new CalculateSLACalculateSLARequestLocation3("quasi",                 new Double[]{{
                                                                    add(4029.08),
                                                                }}, "doloremque");, "quas") {{
                                    items = new org.openapis.openapi.models.operations.CalculateSLACalculateSLARequestItem3[]{{
                                        add(new CalculateSLACalculateSLARequestItem3("asperiores",                 new CalculateSLACalculateSLARequestItem3Dimension(459875, 500021, 573610, 996541);, "a", "animi",                 new org.openapis.openapi.models.operations.CalculateSLACalculateSLARequestItem3KitItem[]{{
                                                            add(new CalculateSLACalculateSLARequestItem3KitItem("eaque",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(350387, 331269, 469994, 320326);, "nisi", "tenetur",                 new String[]{{
                                                                                add("quibusdam"),
                                                                                add("nemo"),
                                                                            }}, 382764, 866459) {{
                                                                additionalHandlingTime = "itaque";
                                                                dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(887701, 315022, 638609, 902979) {{
                                                                    height = 861591;
                                                                    length = 643419;
                                                                    weight = 359097;
                                                                    width = 246577;
                                                                }};
                                                                groupItemId = "eum";
                                                                id = "e0ac184c-2b9c-4247-8883-73a40e1942f3";
                                                                kitItem = new String[]{{
                                                                    add("earum"),
                                                                }};
                                                                price = 330596;
                                                                quantity = 373106;
                                                            }}),
                                                            add(new CalculateSLACalculateSLARequestItem3KitItem("optio",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(966576, 792719, 774748, 550338);, "asperiores", "voluptatum",                 new String[]{{
                                                                                add("corporis"),
                                                                                add("accusantium"),
                                                                                add("illo"),
                                                                            }}, 14251, 984031) {{
                                                                additionalHandlingTime = "sit";
                                                                dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(958146, 152364, 823572, 996072) {{
                                                                    height = 694728;
                                                                    length = 831031;
                                                                    weight = 17768;
                                                                    width = 660536;
                                                                }};
                                                                groupItemId = "repudiandae";
                                                                id = "13db4f62-cba3-4f89-81ae-bc0b80a6924d";
                                                                kitItem = new String[]{{
                                                                    add("rerum"),
                                                                }};
                                                                price = 153582;
                                                                quantity = 883078;
                                                            }}),
                                                            add(new CalculateSLACalculateSLARequestItem3KitItem("magni",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(471207, 374062, 658199, 413780);, "alias", "fuga",                 new String[]{{
                                                                                add("dolore"),
                                                                            }}, 802734, 303292) {{
                                                                additionalHandlingTime = "nostrum";
                                                                dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(424853, 960813, 652515, 65121) {{
                                                                    height = 869848;
                                                                    length = 823472;
                                                                    weight = 205499;
                                                                    width = 866135;
                                                                }};
                                                                groupItemId = "quos";
                                                                id = "04e54c82-f168-4a36-bc88-73e484380b1f";
                                                                kitItem = new String[]{{
                                                                    add("quidem"),
                                                                    add("totam"),
                                                                }};
                                                                price = 781193;
                                                                quantity = 646491;
                                                            }}),
                                                            add(new CalculateSLACalculateSLARequestItem3KitItem("recusandae",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(83791, 13637, 516124, 480421);, "dolor", "voluptates",                 new String[]{{
                                                                                add("magni"),
                                                                                add("rerum"),
                                                                            }}, 39222, 30192) {{
                                                                additionalHandlingTime = "iste";
                                                                dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(577590, 600934, 75277, 469170) {{
                                                                    height = 355889;
                                                                    length = 755738;
                                                                    weight = 810302;
                                                                    width = 378403;
                                                                }};
                                                                groupItemId = "inventore";
                                                                id = "b51c1bdb-1cf4-4b88-8ebd-fc4ccca99bc7";
                                                                kitItem = new String[]{{
                                                                    add("maxime"),
                                                                    add("accusantium"),
                                                                    add("soluta"),
                                                                    add("fugit"),
                                                                }};
                                                                price = 866292;
                                                                quantity = 756287;
                                                            }}),
                                                        }}, 430146, 873320) {{
                                            additionalHandlingTime = "cum";
                                            dimension = new CalculateSLACalculateSLARequestItem3Dimension(925395, 797254, 664666, 904440) {{
                                                height = 135548;
                                                length = 725784;
                                                weight = 720266;
                                                width = 279172;
                                            }};
                                            groupItemId = "autem";
                                            id = "c3d5db3a-debd-45da-aa4c-506a8aa94c02";
                                            kitItem = new org.openapis.openapi.models.operations.CalculateSLACalculateSLARequestItem3KitItem[]{{
                                                add(new CalculateSLACalculateSLARequestItem3KitItem("suscipit",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(938257, 985360, 244569, 260588);, "esse", "in",                 new String[]{{
                                                                    add("quasi"),
                                                                    add("neque"),
                                                                    add("vero"),
                                                                    add("excepturi"),
                                                                }}, 37534, 185816) {{
                                                    additionalHandlingTime = "magnam";
                                                    dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(888265, 603650, 860311, 621393) {{
                                                        height = 308528;
                                                        length = 755868;
                                                        weight = 942185;
                                                        width = 342921;
                                                    }};
                                                    groupItemId = "mollitia";
                                                    id = "4578adc1-ac60-40de-8001-ac802e2ec09f";
                                                    kitItem = new String[]{{
                                                        add("laudantium"),
                                                        add("maiores"),
                                                        add("alias"),
                                                        add("asperiores"),
                                                    }};
                                                    price = 523365;
                                                    quantity = 118615;
                                                }}),
                                                add(new CalculateSLACalculateSLARequestItem3KitItem("perspiciatis",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(34245, 118917, 795546, 417539);, "eveniet", "porro",                 new String[]{{
                                                                    add("quidem"),
                                                                    add("modi"),
                                                                    add("voluptates"),
                                                                }}, 145435, 259377) {{
                                                    additionalHandlingTime = "impedit";
                                                    dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(357639, 701441, 4654, 624498) {{
                                                        height = 104736;
                                                        length = 278329;
                                                        weight = 116558;
                                                        width = 139133;
                                                    }};
                                                    groupItemId = "vel";
                                                    id = "0a668151-a472-4af9-a3c5-949f83f350cf";
                                                    kitItem = new String[]{{
                                                        add("molestiae"),
                                                        add("aliquid"),
                                                        add("asperiores"),
                                                    }};
                                                    price = 955466;
                                                    quantity = 749702;
                                                }}),
                                            }};
                                            price = 194058;
                                            quantity = 758194;
                                        }}),
                                        add(new CalculateSLACalculateSLARequestItem3("aliquam",                 new CalculateSLACalculateSLARequestItem3Dimension(677895, 644827, 319834, 970411);, "sequi", "porro",                 new org.openapis.openapi.models.operations.CalculateSLACalculateSLARequestItem3KitItem[]{{
                                                            add(new CalculateSLACalculateSLARequestItem3KitItem("recusandae",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(359453, 252567, 900368, 719469);, "maiores", "laboriosam",                 new String[]{{
                                                                                add("optio"),
                                                                            }}, 193623, 125707) {{
                                                                additionalHandlingTime = "nobis";
                                                                dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(642804, 584640, 442873, 157281) {{
                                                                    height = 842974;
                                                                    length = 607624;
                                                                    weight = 16252;
                                                                    width = 369941;
                                                                }};
                                                                groupItemId = "necessitatibus";
                                                                id = "05672822-7b2d-4309-870b-f7a4fa87cf53";
                                                                kitItem = new String[]{{
                                                                    add("laborum"),
                                                                    add("voluptas"),
                                                                }};
                                                                price = 987371;
                                                                quantity = 657862;
                                                            }}),
                                                            add(new CalculateSLACalculateSLARequestItem3KitItem("distinctio",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(649657, 770997, 880998, 91120);, "quas", "blanditiis",                 new String[]{{
                                                                                add("dicta"),
                                                                                add("impedit"),
                                                                                add("tempora"),
                                                                            }}, 908249, 920548) {{
                                                                additionalHandlingTime = "vitae";
                                                                dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(699536, 446793, 345514, 836991) {{
                                                                    height = 973096;
                                                                    length = 42364;
                                                                    weight = 149498;
                                                                    width = 227741;
                                                                }};
                                                                groupItemId = "ratione";
                                                                id = "367fe1a0-cc8d-4f79-b0a3-96d90c364b7c";
                                                                kitItem = new String[]{{
                                                                    add("enim"),
                                                                }};
                                                                price = 859725;
                                                                quantity = 979271;
                                                            }}),
                                                            add(new CalculateSLACalculateSLARequestItem3KitItem("maxime",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(681115, 998355, 341983, 847308);, "quibusdam", "commodi",                 new String[]{{
                                                                                add("explicabo"),
                                                                                add("consectetur"),
                                                                            }}, 840641, 762525) {{
                                                                additionalHandlingTime = "sed";
                                                                dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(753087, 923159, 404643, 105094) {{
                                                                    height = 772628;
                                                                    length = 558283;
                                                                    weight = 772057;
                                                                    width = 428378;
                                                                }};
                                                                groupItemId = "veritatis";
                                                                id = "feeb1c7c-bdb6-4eec-b437-8ba25317747d";
                                                                kitItem = new String[]{{
                                                                    add("cupiditate"),
                                                                    add("illo"),
                                                                    add("exercitationem"),
                                                                    add("laborum"),
                                                                }};
                                                                price = 848833;
                                                                quantity = 147989;
                                                            }}),
                                                        }}, 59757, 978655) {{
                                            additionalHandlingTime = "eum";
                                            dimension = new CalculateSLACalculateSLARequestItem3Dimension(540048, 697994, 645544, 541822) {{
                                                height = 444479;
                                                length = 531195;
                                                weight = 502393;
                                                width = 470647;
                                            }};
                                            groupItemId = "nostrum";
                                            id = "81a58208-c54f-4efa-9c95-f2eac5565d30";
                                            kitItem = new org.openapis.openapi.models.operations.CalculateSLACalculateSLARequestItem3KitItem[]{{
                                                add(new CalculateSLACalculateSLARequestItem3KitItem("ex",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(998023, 65118, 533978, 711615);, "hic", "excepturi",                 new String[]{{
                                                                    add("sed"),
                                                                    add("beatae"),
                                                                }}, 627341, 408774) {{
                                                    additionalHandlingTime = "minus";
                                                    dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(118349, 144179, 25190, 396234) {{
                                                        height = 990369;
                                                        length = 924293;
                                                        weight = 912151;
                                                        width = 506250;
                                                    }};
                                                    groupItemId = "necessitatibus";
                                                    id = "2813fa4a-41c4-480d-bf21-32af03102d51";
                                                    kitItem = new String[]{{
                                                        add("delectus"),
                                                        add("numquam"),
                                                    }};
                                                    price = 760279;
                                                    quantity = 750537;
                                                }}),
                                                add(new CalculateSLACalculateSLARequestItem3KitItem("tenetur",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(537946, 264958, 937664, 101374);, "aliquam", "labore",                 new String[]{{
                                                                    add("sequi"),
                                                                    add("saepe"),
                                                                    add("consequatur"),
                                                                    add("esse"),
                                                                }}, 891302, 817454) {{
                                                    additionalHandlingTime = "animi";
                                                    dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(657044, 512488, 461050, 908539) {{
                                                        height = 296128;
                                                        length = 945419;
                                                        weight = 493407;
                                                        width = 457835;
                                                    }};
                                                    groupItemId = "earum";
                                                    id = "3e4be752-c65b-4344-98e3-bb91c8d975e0";
                                                    kitItem = new String[]{{
                                                        add("laudantium"),
                                                        add("tempora"),
                                                        add("quae"),
                                                        add("omnis"),
                                                    }};
                                                    price = 848063;
                                                    quantity = 526584;
                                                }}),
                                            }};
                                            price = 789016;
                                            quantity = 769047;
                                        }}),
                                        add(new CalculateSLACalculateSLARequestItem3("impedit",                 new CalculateSLACalculateSLARequestItem3Dimension(550799, 849690, 717853, 32945);, "non", "quaerat",                 new org.openapis.openapi.models.operations.CalculateSLACalculateSLARequestItem3KitItem[]{{
                                                            add(new CalculateSLACalculateSLARequestItem3KitItem("iusto",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(168976, 109683, 396884, 321697);, "voluptate", "vel",                 new String[]{{
                                                                                add("sit"),
                                                                                add("vel"),
                                                                            }}, 388333, 311247) {{
                                                                additionalHandlingTime = "laudantium";
                                                                dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(377680, 307874, 938244, 945431) {{
                                                                    height = 831067;
                                                                    length = 415953;
                                                                    weight = 843679;
                                                                    width = 231255;
                                                                }};
                                                                groupItemId = "assumenda";
                                                                id = "455906d1-263d-448e-935c-2c9e81f30be3";
                                                                kitItem = new String[]{{
                                                                    add("labore"),
                                                                    add("adipisci"),
                                                                    add("magni"),
                                                                    add("aperiam"),
                                                                }};
                                                                price = 172696;
                                                                quantity = 848860;
                                                            }}),
                                                        }}, 94122, 525223) {{
                                            additionalHandlingTime = "exercitationem";
                                            dimension = new CalculateSLACalculateSLARequestItem3Dimension(204373, 640565, 379661, 688649) {{
                                                height = 633643;
                                                length = 919738;
                                                weight = 134428;
                                                width = 960767;
                                            }};
                                            groupItemId = "ducimus";
                                            id = "00878756-143f-45a6-898b-55554080d40b";
                                            kitItem = new org.openapis.openapi.models.operations.CalculateSLACalculateSLARequestItem3KitItem[]{{
                                                add(new CalculateSLACalculateSLARequestItem3KitItem("aliquam",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(501768, 943063, 980649, 990652);, "autem", "nesciunt",                 new String[]{{
                                                                    add("animi"),
                                                                    add("provident"),
                                                                    add("beatae"),
                                                                }}, 56998, 650914) {{
                                                    additionalHandlingTime = "similique";
                                                    dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(743795, 856568, 389287, 720319) {{
                                                        height = 783764;
                                                        length = 769789;
                                                        weight = 394724;
                                                        width = 768920;
                                                    }};
                                                    groupItemId = "enim";
                                                    id = "f3ec9093-04f9-426b-ad25-53819b474b0e";
                                                    kitItem = new String[]{{
                                                        add("fugit"),
                                                        add("voluptatem"),
                                                        add("repudiandae"),
                                                        add("corporis"),
                                                    }};
                                                    price = 411626;
                                                    quantity = 179906;
                                                }}),
                                                add(new CalculateSLACalculateSLARequestItem3KitItem("ipsum",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(367, 43715, 273732, 595986);, "quam", "atque",                 new String[]{{
                                                                    add("ex"),
                                                                    add("architecto"),
                                                                    add("a"),
                                                                }}, 673010, 84288) {{
                                                    additionalHandlingTime = "nam";
                                                    dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(417333, 146742, 383066, 453880) {{
                                                        height = 827314;
                                                        length = 776421;
                                                        weight = 684499;
                                                        width = 733763;
                                                    }};
                                                    groupItemId = "nisi";
                                                    id = "696e1ec0-0221-4b33-9d89-acb3ecfda8d0";
                                                    kitItem = new String[]{{
                                                        add("veniam"),
                                                        add("aliquam"),
                                                        add("provident"),
                                                        add("vero"),
                                                    }};
                                                    price = 938094;
                                                    quantity = 42763;
                                                }}),
                                                add(new CalculateSLACalculateSLARequestItem3KitItem("eum",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(95123, 555194, 484942, 416934);, "porro", "aliquid",                 new String[]{{
                                                                    add("quidem"),
                                                                    add("explicabo"),
                                                                    add("et"),
                                                                }}, 860027, 166542) {{
                                                    additionalHandlingTime = "quod";
                                                    dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(538944, 519985, 945637, 451807) {{
                                                        height = 951103;
                                                        length = 185313;
                                                        weight = 34989;
                                                        width = 415125;
                                                    }};
                                                    groupItemId = "quam";
                                                    id = "c1ffc71d-ca16-43f2-a3c8-0a97ff334cdd";
                                                    kitItem = new String[]{{
                                                        add("molestias"),
                                                        add("ipsam"),
                                                        add("esse"),
                                                        add("laborum"),
                                                    }};
                                                    price = 596185;
                                                    quantity = 915647;
                                                }}),
                                                add(new CalculateSLACalculateSLARequestItem3KitItem("ipsam",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(163181, 765271, 696219, 247615);, "beatae", "sunt",                 new String[]{{
                                                                    add("beatae"),
                                                                    add("autem"),
                                                                    add("ducimus"),
                                                                }}, 728474, 562065) {{
                                                    additionalHandlingTime = "natus";
                                                    dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(281454, 814585, 377269, 987384) {{
                                                        height = 851199;
                                                        length = 950661;
                                                        weight = 771078;
                                                        width = 601803;
                                                    }};
                                                    groupItemId = "recusandae";
                                                    id = "cd799390-066a-46d2-9000-355338cec086";
                                                    kitItem = new String[]{{
                                                        add("est"),
                                                        add("fugit"),
                                                        add("veritatis"),
                                                        add("necessitatibus"),
                                                    }};
                                                    price = 611970;
                                                    quantity = 116463;
                                                }}),
                                            }};
                                            price = 900676;
                                            quantity = 218783;
                                        }}),
                                        add(new CalculateSLACalculateSLARequestItem3("asperiores",                 new CalculateSLACalculateSLARequestItem3Dimension(266289, 818101, 208639, 340604);, "in", "sed",                 new org.openapis.openapi.models.operations.CalculateSLACalculateSLARequestItem3KitItem[]{{
                                                            add(new CalculateSLACalculateSLARequestItem3KitItem("laudantium",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(490549, 606989, 609687, 144397);, "dolorem", "quidem",                 new String[]{{
                                                                                add("debitis"),
                                                                                add("vitae"),
                                                                            }}, 223717, 321422) {{
                                                                additionalHandlingTime = "porro";
                                                                dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(289153, 874843, 177651, 555663) {{
                                                                    height = 852610;
                                                                    length = 743938;
                                                                    weight = 58463;
                                                                    width = 967047;
                                                                }};
                                                                groupItemId = "quasi";
                                                                id = "187d5684-4ede-4d85-a906-5e628bdfc203";
                                                                kitItem = new String[]{{
                                                                    add("quidem"),
                                                                }};
                                                                price = 377161;
                                                                quantity = 779154;
                                                            }}),
                                                            add(new CalculateSLACalculateSLARequestItem3KitItem("vel",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(522824, 397268, 44443, 596820);, "fugit", "itaque",                 new String[]{{
                                                                                add("cumque"),
                                                                                add("dolor"),
                                                                                add("repellendus"),
                                                                            }}, 837327, 792106) {{
                                                                additionalHandlingTime = "atque";
                                                                dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(930127, 93254, 181267, 773355) {{
                                                                    height = 284779;
                                                                    length = 989765;
                                                                    weight = 444625;
                                                                    width = 644129;
                                                                }};
                                                                groupItemId = "ex";
                                                                id = "891f82ce-1157-4172-b053-77dcfa89df97";
                                                                kitItem = new String[]{{
                                                                    add("voluptates"),
                                                                    add("sequi"),
                                                                }};
                                                                price = 336640;
                                                                quantity = 413135;
                                                            }}),
                                                        }}, 326942, 951901) {{
                                            additionalHandlingTime = "dignissimos";
                                            dimension = new CalculateSLACalculateSLARequestItem3Dimension(152887, 80448, 976403, 601228) {{
                                                height = 40017;
                                                length = 825739;
                                                weight = 590969;
                                                width = 818422;
                                            }};
                                            groupItemId = "deserunt";
                                            id = "d030c4ec-c11a-4083-a429-068b8502a55e";
                                            kitItem = new org.openapis.openapi.models.operations.CalculateSLACalculateSLARequestItem3KitItem[]{{
                                                add(new CalculateSLACalculateSLARequestItem3KitItem("culpa",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(543922, 913909, 979325, 366275);, "illo", "doloribus",                 new String[]{{
                                                                    add("expedita"),
                                                                    add("modi"),
                                                                    add("cumque"),
                                                                    add("ipsam"),
                                                                }}, 578081, 219279) {{
                                                    additionalHandlingTime = "sapiente";
                                                    dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(506245, 273349, 370052, 887132) {{
                                                        height = 459086;
                                                        length = 207512;
                                                        weight = 697591;
                                                        width = 788469;
                                                    }};
                                                    groupItemId = "sequi";
                                                    id = "20a319f4-badf-4947-89a8-67bc42426665";
                                                    kitItem = new String[]{{
                                                        add("illo"),
                                                        add("suscipit"),
                                                        add("quibusdam"),
                                                    }};
                                                    price = 855484;
                                                    quantity = 771603;
                                                }}),
                                                add(new CalculateSLACalculateSLARequestItem3KitItem("error",                 new CalculateSLACalculateSLARequestItem3KitItemDimension(926119, 955962, 234964, 958280);, "voluptatibus", "assumenda",                 new String[]{{
                                                                    add("omnis"),
                                                                    add("delectus"),
                                                                    add("odio"),
                                                                    add("voluptatibus"),
                                                                }}, 13316, 465732) {{
                                                    additionalHandlingTime = "accusamus";
                                                    dimension = new CalculateSLACalculateSLARequestItem3KitItemDimension(840017, 652092, 661578, 840992) {{
                                                        height = 789038;
                                                        length = 97922;
                                                        weight = 144240;
                                                        width = 779823;
                                                    }};
                                                    groupItemId = "ipsa";
                                                    id = "ec7afedb-d80d-4f44-8a47-f9390c588809";
                                                    kitItem = new String[]{{
                                                        add("ipsum"),
                                                        add("vero"),
                                                        add("fuga"),
                                                    }};
                                                    price = 704732;
                                                    quantity = 983060;
                                                }}),
                                            }};
                                            price = 606262;
                                            quantity = 626676;
                                        }}),
                                    }};
                                    location = new CalculateSLACalculateSLARequestLocation3("architecto",                 new Double[]{{
                                                        add(3098.52),
                                                        add(8167.26),
                                                        add(1123.91),
                                                    }}, "omnis") {{
                                        country = "Bolivia";
                                        point = new Double[]{{
                                            add(835.3),
                                        }};
                                        zipCode = "96101-3832";
                                    }};
                                    salesChannel = "alias";
                                }}),
                            }});            

            CalculateSLAResponse res = sdk.sla.calculateSLA(req);

            if (res.calculateSLA200ApplicationJSONArrays != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
