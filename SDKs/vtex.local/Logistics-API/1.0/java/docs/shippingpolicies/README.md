# shippingPolicies

### Available Operations

* [deleteApiLogisticsPvtShippingPoliciesId](#deleteapilogisticspvtshippingpoliciesid) - Delete shipping policies by ID
* [getApiLogisticsPvtShippingPolicies](#getapilogisticspvtshippingpolicies) - List shipping policies
* [getApiLogisticsPvtShippingPoliciesId](#getapilogisticspvtshippingpoliciesid) - Retrieve shipping policy by ID
* [postApiLogisticsPvtShippingPolicies](#postapilogisticspvtshippingpolicies) - Create shipping policy
* [putApiLogisticsPvtShippingPoliciesId](#putapilogisticspvtshippingpoliciesid) - Update shipping policy

## deleteApiLogisticsPvtShippingPoliciesId

This endpoint deletes existing shipping policies from carriers in your store, searching by their IDs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApiLogisticsPvtShippingPoliciesIdRequest;
import org.openapis.openapi.models.operations.DeleteApiLogisticsPvtShippingPoliciesIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem", "magnam") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteApiLogisticsPvtShippingPoliciesIdRequest req = new DeleteApiLogisticsPvtShippingPoliciesIdRequest("doloremque", "accusamus", "id");            

            DeleteApiLogisticsPvtShippingPoliciesIdResponse res = sdk.shippingPolicies.deleteApiLogisticsPvtShippingPoliciesId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiLogisticsPvtShippingPolicies

This endpoint lists existing shipping policies from carriers in your store.

> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiLogisticsPvtShippingPoliciesRequest;
import org.openapis.openapi.models.operations.GetApiLogisticsPvtShippingPoliciesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod", "sunt") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetApiLogisticsPvtShippingPoliciesRequest req = new GetApiLogisticsPvtShippingPoliciesRequest("voluptas", "earum", "page", "perPage");            

            GetApiLogisticsPvtShippingPoliciesResponse res = sdk.shippingPolicies.getApiLogisticsPvtShippingPolicies(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiLogisticsPvtShippingPoliciesId

This endpoint lists existing [shipping policies](https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140) from carriers in your store, searching by their IDs.

> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiLogisticsPvtShippingPoliciesIdRequest;
import org.openapis.openapi.models.operations.GetApiLogisticsPvtShippingPoliciesIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est", "earum") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetApiLogisticsPvtShippingPoliciesIdRequest req = new GetApiLogisticsPvtShippingPoliciesIdRequest("nihil", "nostrum", "id");            

            GetApiLogisticsPvtShippingPoliciesIdResponse res = sdk.shippingPolicies.getApiLogisticsPvtShippingPoliciesId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiLogisticsPvtShippingPolicies

This endpoint creates new shipping policies from carriers in your store.

> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiLogisticsPvtShippingPoliciesRequest;
import org.openapis.openapi.models.operations.PostApiLogisticsPvtShippingPoliciesRequestBody;
import org.openapis.openapi.models.operations.PostApiLogisticsPvtShippingPoliciesRequestBodyBusinessHourSettings;
import org.openapis.openapi.models.operations.PostApiLogisticsPvtShippingPoliciesRequestBodyBusinessHourSettingsCarrierBusinessHours;
import org.openapis.openapi.models.operations.PostApiLogisticsPvtShippingPoliciesRequestBodyCarrierSchedule;
import org.openapis.openapi.models.operations.PostApiLogisticsPvtShippingPoliciesRequestBodyCubicWeightSettings;
import org.openapis.openapi.models.operations.PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettings;
import org.openapis.openapi.models.operations.PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDelivery;
import org.openapis.openapi.models.operations.PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges;
import org.openapis.openapi.models.operations.PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity;
import org.openapis.openapi.models.operations.PostApiLogisticsPvtShippingPoliciesRequestBodyMaxDimension;
import org.openapis.openapi.models.operations.PostApiLogisticsPvtShippingPoliciesRequestBodyModalSettings;
import org.openapis.openapi.models.operations.PostApiLogisticsPvtShippingPoliciesRequestBodyPickupPointsSettings;
import org.openapis.openapi.models.operations.PostApiLogisticsPvtShippingPoliciesRequestBodyWeekendAndHolidays;
import org.openapis.openapi.models.operations.PostApiLogisticsPvtShippingPoliciesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum", "perferendis") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostApiLogisticsPvtShippingPoliciesRequest req = new PostApiLogisticsPvtShippingPoliciesRequest("nam", "ullam") {{
                requestBody = new PostApiLogisticsPvtShippingPoliciesRequestBody(                new PostApiLogisticsPvtShippingPoliciesRequestBodyBusinessHourSettings(                new org.openapis.openapi.models.operations.PostApiLogisticsPvtShippingPoliciesRequestBodyBusinessHourSettingsCarrierBusinessHours[]{{
                                                    add(new PostApiLogisticsPvtShippingPoliciesRequestBodyBusinessHourSettingsCarrierBusinessHours("23:59:59", 1L, "00:00:00") {{
                                                        closingTime = "23:59:59";
                                                        dayOfWeek = 1L;
                                                        openingTime = "00:00:00";
                                                    }}),
                                                }}, true);,                 new PostApiLogisticsPvtShippingPoliciesRequestBodyCubicWeightSettings(1808.11, 6621.74);,                 new PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettings(                new org.openapis.openapi.models.operations.PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDelivery[]{{
                                                    add(new PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDelivery(2L,                 new org.openapis.openapi.models.operations.PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges[]{{
                                                                        add(new PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges("12:30:00", 3134.2, "11:00:00") {{
                                                                            deliveryCapacity = new org.openapis.openapi.models.operations.PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity[]{{
                                                                                add(new PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 5006.92) {{
                                                                                    capacityType = "ORDERS_QUANTITY";
                                                                                    maxValue = 5302.32;
                                                                                }}),
                                                                                add(new PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 2835.57) {{
                                                                                    capacityType = "ORDERS_QUANTITY";
                                                                                    maxValue = 9580.91;
                                                                                }}),
                                                                                add(new PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 2861.47) {{
                                                                                    capacityType = "ORDERS_QUANTITY";
                                                                                    maxValue = 2779.43;
                                                                                }}),
                                                                            }};
                                                                            endTime = "12:30:00";
                                                                            listPrice = 2810.68;
                                                                            startTime = "11:00:00";
                                                                        }}),
                                                                    }}) {{
                                                        dayOfWeek = 2L;
                                                        deliveryRanges = new org.openapis.openapi.models.operations.PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges[]{{
                                                            add(new PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges("12:30:00", 3005.57, "11:00:00") {{
                                                                deliveryCapacity = new org.openapis.openapi.models.operations.PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity[]{{
                                                                    add(new PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 4430.98) {{
                                                                        capacityType = "ORDERS_QUANTITY";
                                                                        maxValue = 2355.67;
                                                                    }}),
                                                                    add(new PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 7363.13) {{
                                                                        capacityType = "ORDERS_QUANTITY";
                                                                        maxValue = 7581.84;
                                                                    }}),
                                                                    add(new PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 6370.37) {{
                                                                        capacityType = "ORDERS_QUANTITY";
                                                                        maxValue = 6338.25;
                                                                    }}),
                                                                }};
                                                                endTime = "12:30:00";
                                                                listPrice = 9551.26;
                                                                startTime = "11:00:00";
                                                            }}),
                                                            add(new PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges("12:30:00", 2579.59, "11:00:00") {{
                                                                deliveryCapacity = new org.openapis.openapi.models.operations.PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity[]{{
                                                                    add(new PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 1542.77) {{
                                                                        capacityType = "ORDERS_QUANTITY";
                                                                        maxValue = 3238.76;
                                                                    }}),
                                                                    add(new PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 3121.21) {{
                                                                        capacityType = "ORDERS_QUANTITY";
                                                                        maxValue = 7981.47;
                                                                    }}),
                                                                }};
                                                                endTime = "12:30:00";
                                                                listPrice = 5321.63;
                                                                startTime = "11:00:00";
                                                            }}),
                                                            add(new PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges("12:30:00", 1379.79, "11:00:00") {{
                                                                deliveryCapacity = new org.openapis.openapi.models.operations.PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity[]{{
                                                                    add(new PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 5867.23) {{
                                                                        capacityType = "ORDERS_QUANTITY";
                                                                        maxValue = 7568.33;
                                                                    }}),
                                                                }};
                                                                endTime = "12:30:00";
                                                                listPrice = 7331.1;
                                                                startTime = "11:00:00";
                                                            }}),
                                                            add(new PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges("12:30:00", 5316.06, "11:00:00") {{
                                                                deliveryCapacity = new org.openapis.openapi.models.operations.PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity[]{{
                                                                    add(new PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 2163.79) {{
                                                                        capacityType = "ORDERS_QUANTITY";
                                                                        maxValue = 8687.09;
                                                                    }}),
                                                                    add(new PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 8618.07) {{
                                                                        capacityType = "ORDERS_QUANTITY";
                                                                        maxValue = 1292.7;
                                                                    }}),
                                                                    add(new PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 9565.72) {{
                                                                        capacityType = "ORDERS_QUANTITY";
                                                                        maxValue = 6694.08;
                                                                    }}),
                                                                }};
                                                                endTime = "12:30:00";
                                                                listPrice = 8968.11;
                                                                startTime = "11:00:00";
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDelivery(2L,                 new org.openapis.openapi.models.operations.PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges[]{{
                                                                        add(new PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges("12:30:00", 4034.85, "11:00:00") {{
                                                                            deliveryCapacity = new org.openapis.openapi.models.operations.PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity[]{{
                                                                                add(new PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 1523.02) {{
                                                                                    capacityType = "ORDERS_QUANTITY";
                                                                                    maxValue = 5535.42;
                                                                                }}),
                                                                                add(new PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 6170.6) {{
                                                                                    capacityType = "ORDERS_QUANTITY";
                                                                                    maxValue = 544.98;
                                                                                }}),
                                                                                add(new PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 4722.9) {{
                                                                                    capacityType = "ORDERS_QUANTITY";
                                                                                    maxValue = 1912.02;
                                                                                }}),
                                                                                add(new PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 6463.21) {{
                                                                                    capacityType = "ORDERS_QUANTITY";
                                                                                    maxValue = 6040.27;
                                                                                }}),
                                                                            }};
                                                                            endTime = "12:30:00";
                                                                            listPrice = 6621.84;
                                                                            startTime = "11:00:00";
                                                                        }}),
                                                                    }}) {{
                                                        dayOfWeek = 2L;
                                                        deliveryRanges = new org.openapis.openapi.models.operations.PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges[]{{
                                                            add(new PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges("12:30:00", 8583.98, "11:00:00") {{
                                                                deliveryCapacity = new org.openapis.openapi.models.operations.PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity[]{{
                                                                    add(new PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 9019.24) {{
                                                                        capacityType = "ORDERS_QUANTITY";
                                                                        maxValue = 9477.04;
                                                                    }}),
                                                                }};
                                                                endTime = "12:30:00";
                                                                listPrice = 8010.14;
                                                                startTime = "11:00:00";
                                                            }}),
                                                            add(new PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges("12:30:00", 4297.25, "11:00:00") {{
                                                                deliveryCapacity = new org.openapis.openapi.models.operations.PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity[]{{
                                                                    add(new PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 2315.85) {{
                                                                        capacityType = "ORDERS_QUANTITY";
                                                                        maxValue = 4616.39;
                                                                    }}),
                                                                    add(new PostApiLogisticsPvtShippingPoliciesRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 1986.16) {{
                                                                        capacityType = "ORDERS_QUANTITY";
                                                                        maxValue = 3672.51;
                                                                    }}),
                                                                }};
                                                                endTime = "12:30:00";
                                                                listPrice = 9390.79;
                                                                startTime = "11:00:00";
                                                            }}),
                                                        }};
                                                    }}),
                                                }}, 5809.96, true);, "123", false,                 new PostApiLogisticsPvtShippingPoliciesRequestBodyMaxDimension(7598.22, 8696.02);, 3210.07, 9934.06,                 new PostApiLogisticsPvtShippingPoliciesRequestBodyModalSettings(                new Object[]{{
                                                    add("cumque"),
                                                    add("sapiente"),
                                                    add("quam"),
                                                }}, false);, "Normal", 5L,                 new PostApiLogisticsPvtShippingPoliciesRequestBodyPickupPointsSettings(                new Object[]{{
                                                    add("repellendus"),
                                                    add("culpa"),
                                                    add("dicta"),
                                                }},                 new Object[]{{
                                                    add("fuga"),
                                                    add("odio"),
                                                    add("totam"),
                                                }},                 new Object[]{{
                                                    add("eos"),
                                                }});, "Normal",                 new PostApiLogisticsPvtShippingPoliciesRequestBodyWeekendAndHolidays(false, false, false);) {{
                    carrierSchedule = new org.openapis.openapi.models.operations.PostApiLogisticsPvtShippingPoliciesRequestBodyCarrierSchedule[]{{
                        add(new PostApiLogisticsPvtShippingPoliciesRequestBodyCarrierSchedule() {{
                            dayOfWeek = 972934L;
                            timeLimit = "time_limit";
                        }}),
                        add(new PostApiLogisticsPvtShippingPoliciesRequestBodyCarrierSchedule() {{
                            dayOfWeek = 606172L;
                            timeLimit = "time_limit";
                        }}),
                        add(new PostApiLogisticsPvtShippingPoliciesRequestBodyCarrierSchedule() {{
                            dayOfWeek = 338437L;
                            timeLimit = "time_limit";
                        }}),
                    }};
                }};;
            }};            

            PostApiLogisticsPvtShippingPoliciesResponse res = sdk.shippingPolicies.postApiLogisticsPvtShippingPolicies(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putApiLogisticsPvtShippingPoliciesId

This endpoint updates information on existing Shipping Policies from carriers.

> Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutApiLogisticsPvtShippingPoliciesIdRequest;
import org.openapis.openapi.models.operations.PutApiLogisticsPvtShippingPoliciesIdRequestBody;
import org.openapis.openapi.models.operations.PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettings;
import org.openapis.openapi.models.operations.PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDelivery;
import org.openapis.openapi.models.operations.PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges;
import org.openapis.openapi.models.operations.PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity;
import org.openapis.openapi.models.operations.PutApiLogisticsPvtShippingPoliciesIdRequestBodyMaxDimension;
import org.openapis.openapi.models.operations.PutApiLogisticsPvtShippingPoliciesIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos", "natus") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutApiLogisticsPvtShippingPoliciesIdRequest req = new PutApiLogisticsPvtShippingPoliciesIdRequest("aliquam", "vero", "shippingpolicyid1") {{
                requestBody = new PutApiLogisticsPvtShippingPoliciesIdRequestBody(false, true,                 new PutApiLogisticsPvtShippingPoliciesIdRequestBodyMaxDimension(3944.91, 5066.89);, "Correios PAC", "Normal") {{
                    deliveryScheduleSettings = new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettings(                new org.openapis.openapi.models.operations.PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDelivery[]{{
                                        add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDelivery(2L,                 new org.openapis.openapi.models.operations.PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges[]{{
                                                            add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges("12:30:00", 8964.43, "11:00:00") {{
                                                                deliveryCapacity = new org.openapis.openapi.models.operations.PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity[]{{
                                                                    add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 819.17) {{
                                                                        capacityType = "ORDERS_QUANTITY";
                                                                        maxValue = 3562.53;
                                                                    }}),
                                                                    add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 5786.78) {{
                                                                        capacityType = "ORDERS_QUANTITY";
                                                                        maxValue = 7571.3;
                                                                    }}),
                                                                }};
                                                                endTime = "12:30:00";
                                                                listPrice = 9863.3;
                                                                startTime = "11:00:00";
                                                            }}),
                                                            add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges("12:30:00", 8584.78, "11:00:00") {{
                                                                deliveryCapacity = new org.openapis.openapi.models.operations.PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity[]{{
                                                                    add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 4707.32) {{
                                                                        capacityType = "ORDERS_QUANTITY";
                                                                        maxValue = 9534.06;
                                                                    }}),
                                                                    add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 146.65) {{
                                                                        capacityType = "ORDERS_QUANTITY";
                                                                        maxValue = 3346.35;
                                                                    }}),
                                                                    add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 7002.04) {{
                                                                        capacityType = "ORDERS_QUANTITY";
                                                                        maxValue = 1701.26;
                                                                    }}),
                                                                }};
                                                                endTime = "12:30:00";
                                                                listPrice = 9766.41;
                                                                startTime = "11:00:00";
                                                            }}),
                                                            add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges("12:30:00", 4742.67, "11:00:00") {{
                                                                deliveryCapacity = new org.openapis.openapi.models.operations.PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity[]{{
                                                                    add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 2931.76) {{
                                                                        capacityType = "ORDERS_QUANTITY";
                                                                        maxValue = 2474.57;
                                                                    }}),
                                                                    add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 44.9) {{
                                                                        capacityType = "ORDERS_QUANTITY";
                                                                        maxValue = 3150.24;
                                                                    }}),
                                                                    add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 2642.04) {{
                                                                        capacityType = "ORDERS_QUANTITY";
                                                                        maxValue = 5006.77;
                                                                    }}),
                                                                    add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 9549.46) {{
                                                                        capacityType = "ORDERS_QUANTITY";
                                                                        maxValue = 720.8;
                                                                    }}),
                                                                }};
                                                                endTime = "12:30:00";
                                                                listPrice = 896.42;
                                                                startTime = "11:00:00";
                                                            }}),
                                                            add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges("12:30:00", 4543.86, "11:00:00") {{
                                                                deliveryCapacity = new org.openapis.openapi.models.operations.PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity[]{{
                                                                    add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 2612.19) {{
                                                                        capacityType = "ORDERS_QUANTITY";
                                                                        maxValue = 2943.14;
                                                                    }}),
                                                                    add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 4060.37) {{
                                                                        capacityType = "ORDERS_QUANTITY";
                                                                        maxValue = 3423.93;
                                                                    }}),
                                                                }};
                                                                endTime = "12:30:00";
                                                                listPrice = 2291.97;
                                                                startTime = "11:00:00";
                                                            }}),
                                                        }}) {{
                                            dayOfWeek = 2L;
                                            deliveryRanges = new org.openapis.openapi.models.operations.PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges[]{{
                                                add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges("12:30:00", 3703.74, "11:00:00") {{
                                                    deliveryCapacity = new org.openapis.openapi.models.operations.PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity[]{{
                                                        add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 7258.94) {{
                                                            capacityType = "ORDERS_QUANTITY";
                                                            maxValue = 8187.39;
                                                        }}),
                                                        add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 3129.53) {{
                                                            capacityType = "ORDERS_QUANTITY";
                                                            maxValue = 3532.14;
                                                        }}),
                                                        add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 6147.37) {{
                                                            capacityType = "ORDERS_QUANTITY";
                                                            maxValue = 9830.67;
                                                        }}),
                                                    }};
                                                    endTime = "12:30:00";
                                                    listPrice = 8838.26;
                                                    startTime = "11:00:00";
                                                }}),
                                            }};
                                        }}),
                                        add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDelivery(2L,                 new org.openapis.openapi.models.operations.PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges[]{{
                                                            add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges("12:30:00", 4005.1, "11:00:00") {{
                                                                deliveryCapacity = new org.openapis.openapi.models.operations.PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity[]{{
                                                                    add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 8021.48) {{
                                                                        capacityType = "ORDERS_QUANTITY";
                                                                        maxValue = 4805.58;
                                                                    }}),
                                                                    add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 3229.07) {{
                                                                        capacityType = "ORDERS_QUANTITY";
                                                                        maxValue = 9040.91;
                                                                    }}),
                                                                    add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 3457.46) {{
                                                                        capacityType = "ORDERS_QUANTITY";
                                                                        maxValue = 1676.13;
                                                                    }}),
                                                                }};
                                                                endTime = "12:30:00";
                                                                listPrice = 7934.02;
                                                                startTime = "11:00:00";
                                                            }}),
                                                            add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges("12:30:00", 2443.32, "11:00:00") {{
                                                                deliveryCapacity = new org.openapis.openapi.models.operations.PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity[]{{
                                                                    add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 2569.41) {{
                                                                        capacityType = "ORDERS_QUANTITY";
                                                                        maxValue = 4109.16;
                                                                    }}),
                                                                    add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 6864.7) {{
                                                                        capacityType = "ORDERS_QUANTITY";
                                                                        maxValue = 1032.53;
                                                                    }}),
                                                                }};
                                                                endTime = "12:30:00";
                                                                listPrice = 5190.99;
                                                                startTime = "11:00:00";
                                                            }}),
                                                        }}) {{
                                            dayOfWeek = 2L;
                                            deliveryRanges = new org.openapis.openapi.models.operations.PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges[]{{
                                                add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges("12:30:00", 5076.35, "11:00:00") {{
                                                    deliveryCapacity = new org.openapis.openapi.models.operations.PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity[]{{
                                                        add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 9442.6) {{
                                                            capacityType = "ORDERS_QUANTITY";
                                                            maxValue = 2171.67;
                                                        }}),
                                                        add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 1397.3) {{
                                                            capacityType = "ORDERS_QUANTITY";
                                                            maxValue = 6958.92;
                                                        }}),
                                                        add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 8825.86) {{
                                                            capacityType = "ORDERS_QUANTITY";
                                                            maxValue = 4727.63;
                                                        }}),
                                                        add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 802.06) {{
                                                            capacityType = "ORDERS_QUANTITY";
                                                            maxValue = 1590.09;
                                                        }}),
                                                    }};
                                                    endTime = "12:30:00";
                                                    listPrice = 9884.07;
                                                    startTime = "11:00:00";
                                                }}),
                                                add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges("12:30:00", 2175.71, "11:00:00") {{
                                                    deliveryCapacity = new org.openapis.openapi.models.operations.PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity[]{{
                                                        add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 3894.4) {{
                                                            capacityType = "ORDERS_QUANTITY";
                                                            maxValue = 1639.1;
                                                        }}),
                                                        add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 4428.53) {{
                                                            capacityType = "ORDERS_QUANTITY";
                                                            maxValue = 3658.92;
                                                        }}),
                                                    }};
                                                    endTime = "12:30:00";
                                                    listPrice = 7433.4;
                                                    startTime = "11:00:00";
                                                }}),
                                                add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges("12:30:00", 9428.4, "11:00:00") {{
                                                    deliveryCapacity = new org.openapis.openapi.models.operations.PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity[]{{
                                                        add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 8069.52) {{
                                                            capacityType = "ORDERS_QUANTITY";
                                                            maxValue = 9628.28;
                                                        }}),
                                                        add(new PutApiLogisticsPvtShippingPoliciesIdRequestBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity("ORDERS_QUANTITY", 7188.16) {{
                                                            capacityType = "ORDERS_QUANTITY";
                                                            maxValue = 4244.99;
                                                        }}),
                                                    }};
                                                    endTime = "12:30:00";
                                                    listPrice = 5861.63;
                                                    startTime = "11:00:00";
                                                }}),
                                            }};
                                        }}),
                                    }}, 968.03, true);;
                }};;
            }};            

            PutApiLogisticsPvtShippingPoliciesIdResponse res = sdk.shippingPolicies.putApiLogisticsPvtShippingPoliciesId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
