# reservations

### Available Operations

* [acknowledgmentReservation](#acknowledgmentreservation) - Acknowledgment reservation
* [cancelReservation](#cancelreservation) - Cancel reservation
* [confirmReservation](#confirmreservation) - Confirm reservation
* [createReservation](#createreservation) - Create reservation
* [reservationById](#reservationbyid) - List reservation by ID
* [reservationbyWarehouseandSku](#reservationbywarehouseandsku) - List reservation by warehouse and SKU

## acknowledgmentReservation

Acknowledges reservations made by reservation ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcknowledgmentReservationRequest;
import org.openapis.openapi.models.operations.AcknowledgmentReservationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis", "nihil") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcknowledgmentReservationRequest req = new AcknowledgmentReservationRequest("magnam", "distinctio", "id");            

            AcknowledgmentReservationResponse res = sdk.reservations.acknowledgmentReservation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelReservation

Cancels reservation by reservation ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelReservationRequest;
import org.openapis.openapi.models.operations.CancelReservationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore", "labore") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelReservationRequest req = new CancelReservationRequest("suscipit", "natus", "nobis");            

            CancelReservationResponse res = sdk.reservations.cancelReservation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## confirmReservation

Confirms reservation by reservation ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfirmReservationRequest;
import org.openapis.openapi.models.operations.ConfirmReservationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum", "vero") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConfirmReservationRequest req = new ConfirmReservationRequest("aspernatur", "architecto", "magnam");            

            ConfirmReservationResponse res = sdk.reservations.confirmReservation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createReservation

Creates [reservation](https://help.vtex.com/en/tutorial/how-does-reservation-work--tutorials_92).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateReservationCreateReservationRequest;
import org.openapis.openapi.models.operations.CreateReservationCreateReservationRequestDeliveryItemOption;
import org.openapis.openapi.models.operations.CreateReservationCreateReservationRequestDeliveryItemOptionItem;
import org.openapis.openapi.models.operations.CreateReservationCreateReservationRequestDeliveryItemOptionItemDimension;
import org.openapis.openapi.models.operations.CreateReservationCreateReservationRequestDeliveryItemOptionLocation;
import org.openapis.openapi.models.operations.CreateReservationCreateReservationRequestDeliveryItemOptionLocationInStore;
import org.openapis.openapi.models.operations.CreateReservationRequest;
import org.openapis.openapi.models.operations.CreateReservationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et", "excepturi") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateReservationRequest req = new CreateReservationRequest("ullam", "provident",                 new CreateReservationCreateReservationRequest("quos",                 new org.openapis.openapi.models.operations.CreateReservationCreateReservationRequestDeliveryItemOption[]{{
                                                add(new CreateReservationCreateReservationRequestDeliveryItemOption("consequuntur",                 new String[]{{
                                                                    add("error"),
                                                                    add("eaque"),
                                                                    add("occaecati"),
                                                                }}, "rerum", "adipisci",                 new CreateReservationCreateReservationRequestDeliveryItemOptionItem("asperiores",                 new CreateReservationCreateReservationRequestDeliveryItemOptionItemDimension(934214, 267262, 613966, 679091);, "deleniti", "pariatur",                 new String[]{{
                                                                                    add("nobis"),
                                                                                    add("libero"),
                                                                                    add("delectus"),
                                                                                }}, 311945, 554242);, 3982.21,                 new CreateReservationCreateReservationRequestDeliveryItemOptionLocation("dolorem",                 new CreateReservationCreateReservationRequestDeliveryItemOptionLocationInStore(false, "dolorem");, "dolor");, 1861.93, "ipsum", "hic", "excepturi", "cum", "voluptate", "dignissimos") {{
                                                    aditionalTimeBlockedDays = "accusantium";
                                                    deliveryWindows = new String[]{{
                                                        add("reiciendis"),
                                                        add("mollitia"),
                                                        add("ad"),
                                                    }};
                                                    dockId = "eum";
                                                    dockTime = "dolor";
                                                    item = new CreateReservationCreateReservationRequestDeliveryItemOptionItem("pariatur",                 new CreateReservationCreateReservationRequestDeliveryItemOptionItemDimension(365496, 975522, 16627, 855804);, "amet", "aut",                 new String[]{{
                                                                        add("corporis"),
                                                                        add("hic"),
                                                                        add("libero"),
                                                                        add("nobis"),
                                                                    }}, 171629, 339404) {{
                                                        additionalHandlingTime = "necessitatibus";
                                                        dimension = new CreateReservationCreateReservationRequestDeliveryItemOptionItemDimension(984043, 891924, 260341, 806194) {{
                                                            height = 141264;
                                                            length = 367562;
                                                            weight = 97260;
                                                            width = 435865;
                                                        }};
                                                        groupItemId = "deleniti";
                                                        id = "b711e5b7-fd2e-4d02-8921-cddc692601fb";
                                                        kitItem = new String[]{{
                                                            add("voluptate"),
                                                            add("autem"),
                                                        }};
                                                        price = 722056;
                                                        quantity = 50588;
                                                    }};
                                                    listPrice = 5210.37;
                                                    location = new CreateReservationCreateReservationRequestDeliveryItemOptionLocation("dolor",                 new CreateReservationCreateReservationRequestDeliveryItemOptionLocationInStore(false, "vero");, "nostrum") {{
                                                        country = "Lebanon";
                                                        inStore = new CreateReservationCreateReservationRequestDeliveryItemOptionLocationInStore(false, "quis") {{
                                                            isCheckedIn = false;
                                                            storeId = "eaque";
                                                        }};
                                                        zipCode = "10174";
                                                    }};
                                                    promotionalPrice = 9441.2;
                                                    slaType = "recusandae";
                                                    slaTypeName = "omnis";
                                                    timeToDockPlusDockTime = "facilis";
                                                    totalTime = "perspiciatis";
                                                    transitTime = "voluptatem";
                                                    wareHouseId = "porro";
                                                }}),
                                                add(new CreateReservationCreateReservationRequestDeliveryItemOption("maxime",                 new String[]{{
                                                                    add("soluta"),
                                                                    add("dicta"),
                                                                    add("laborum"),
                                                                    add("totam"),
                                                                }}, "incidunt", "aspernatur",                 new CreateReservationCreateReservationRequestDeliveryItemOptionItem("dolores",                 new CreateReservationCreateReservationRequestDeliveryItemOptionItemDimension(716860, 704474, 396060, 463150);, "molestias", "temporibus",                 new String[]{{
                                                                                    add("neque"),
                                                                                }}, 144847, 164959);, 4880.56,                 new CreateReservationCreateReservationRequestDeliveryItemOptionLocation("sunt",                 new CreateReservationCreateReservationRequestDeliveryItemOptionLocationInStore(false, "ullam");, "nam");, 9404.32, "voluptatem", "cumque", "soluta", "nobis", "et", "saepe") {{
                                                    aditionalTimeBlockedDays = "reiciendis";
                                                    deliveryWindows = new String[]{{
                                                        add("dolorum"),
                                                    }};
                                                    dockId = "numquam";
                                                    dockTime = "veritatis";
                                                    item = new CreateReservationCreateReservationRequestDeliveryItemOptionItem("at",                 new CreateReservationCreateReservationRequestDeliveryItemOptionItemDimension(311860, 273542, 425451, 798047);, "officiis", "qui",                 new String[]{{
                                                                        add("a"),
                                                                        add("esse"),
                                                                        add("harum"),
                                                                    }}, 483409, 215507) {{
                                                        additionalHandlingTime = "ipsa";
                                                        dimension = new CreateReservationCreateReservationRequestDeliveryItemOptionItemDimension(881005, 696344, 976405, 377752) {{
                                                            height = 56418;
                                                            length = 434417;
                                                            weight = 487838;
                                                            width = 311796;
                                                        }};
                                                        groupItemId = "natus";
                                                        id = "280d1ba7-7a89-4ebf-b37a-e4203ce5e6a9";
                                                        kitItem = new String[]{{
                                                            add("repellendus"),
                                                            add("totam"),
                                                        }};
                                                        price = 628982;
                                                        quantity = 55;
                                                    }};
                                                    listPrice = 7887.4;
                                                    location = new CreateReservationCreateReservationRequestDeliveryItemOptionLocation("sed",                 new CreateReservationCreateReservationRequestDeliveryItemOptionLocationInStore(false, "vel");, "libero") {{
                                                        country = "United States Minor Outlying Islands";
                                                        inStore = new CreateReservationCreateReservationRequestDeliveryItemOptionLocationInStore(false, "tempore") {{
                                                            isCheckedIn = false;
                                                            storeId = "amet";
                                                        }};
                                                        zipCode = "23295-4072";
                                                    }};
                                                    promotionalPrice = 3741.7;
                                                    slaType = "deserunt";
                                                    slaTypeName = "quam";
                                                    timeToDockPlusDockTime = "ipsum";
                                                    totalTime = "incidunt";
                                                    transitTime = "qui";
                                                    wareHouseId = "cupiditate";
                                                }}),
                                                add(new CreateReservationCreateReservationRequestDeliveryItemOption("sapiente",                 new String[]{{
                                                                    add("saepe"),
                                                                    add("ea"),
                                                                    add("impedit"),
                                                                    add("corporis"),
                                                                }}, "veniam", "aliquid",                 new CreateReservationCreateReservationRequestDeliveryItemOptionItem("inventore",                 new CreateReservationCreateReservationRequestDeliveryItemOptionItemDimension(301831, 407241, 775220, 232234);, "recusandae", "aspernatur",                 new String[]{{
                                                                                    add("eaque"),
                                                                                    add("a"),
                                                                                }}, 725595, 13948);, 114.27,                 new CreateReservationCreateReservationRequestDeliveryItemOptionLocation("deleniti",                 new CreateReservationCreateReservationRequestDeliveryItemOptionLocationInStore(false, "impedit");, "aliquam");, 1469.46, "accusamus", "inventore", "non", "et", "dolorum", "laborum") {{
                                                    aditionalTimeBlockedDays = "ipsum";
                                                    deliveryWindows = new String[]{{
                                                        add("nobis"),
                                                    }};
                                                    dockId = "quos";
                                                    dockTime = "tempore";
                                                    item = new CreateReservationCreateReservationRequestDeliveryItemOptionItem("dolore",                 new CreateReservationCreateReservationRequestDeliveryItemOptionItemDimension(844550, 848944, 194342, 617877);, "impedit", "aut",                 new String[]{{
                                                                        add("exercitationem"),
                                                                        add("nulla"),
                                                                        add("fugit"),
                                                                        add("porro"),
                                                                    }}, 981830, 985033) {{
                                                        additionalHandlingTime = "cupiditate";
                                                        dimension = new CreateReservationCreateReservationRequestDeliveryItemOptionItemDimension(286915, 240829, 677263, 100294) {{
                                                            height = 45614;
                                                            length = 961937;
                                                            weight = 209157;
                                                            width = 292147;
                                                        }};
                                                        groupItemId = "quae";
                                                        id = "08e0adcf-4b92-4187-9fce-953f73ef7fbc";
                                                        kitItem = new String[]{{
                                                            add("similique"),
                                                            add("facilis"),
                                                        }};
                                                        price = 874288;
                                                        quantity = 498140;
                                                    }};
                                                    listPrice = 4783.7;
                                                    location = new CreateReservationCreateReservationRequestDeliveryItemOptionLocation("laudantium",                 new CreateReservationCreateReservationRequestDeliveryItemOptionLocationInStore(false, "dicta");, "dolor") {{
                                                        country = "Saint Kitts and Nevis";
                                                        inStore = new CreateReservationCreateReservationRequestDeliveryItemOptionLocationInStore(false, "alias") {{
                                                            isCheckedIn = false;
                                                            storeId = "ducimus";
                                                        }};
                                                        zipCode = "23414-8214";
                                                    }};
                                                    promotionalPrice = 9807;
                                                    slaType = "quasi";
                                                    slaTypeName = "ex";
                                                    timeToDockPlusDockTime = "nulla";
                                                    totalTime = "excepturi";
                                                    transitTime = "voluptatibus";
                                                    wareHouseId = "nostrum";
                                                }}),
                                            }}, "placeat", "velit"););            

            CreateReservationResponse res = sdk.reservations.createReservation(req);

            if (res.createReservation200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reservationById

Lists reservation's information by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReservationByIdRequest;
import org.openapis.openapi.models.operations.ReservationByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum", "autem") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ReservationByIdRequest req = new ReservationByIdRequest("nobis", "quas", "assumenda");            

            ReservationByIdResponse res = sdk.reservations.reservationById(req);

            if (res.reservationById200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reservationbyWarehouseandSku

Lists reservations in your store, by searching through warehouse and SKU.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReservationbyWarehouseandSkuRequest;
import org.openapis.openapi.models.operations.ReservationbyWarehouseandSkuResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla", "voluptas") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ReservationbyWarehouseandSkuRequest req = new ReservationbyWarehouseandSkuRequest("libero", "quasi", "tempora", "numquam");            

            ReservationbyWarehouseandSkuResponse res = sdk.reservations.reservationbyWarehouseandSku(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
