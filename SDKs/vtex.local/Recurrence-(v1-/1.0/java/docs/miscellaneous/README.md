# miscellaneous

### Available Operations

* [addrecurrenceitem](#addrecurrenceitem) - Add Subscription item
* [getRecurrencebyemail](#getrecurrencebyemail) - Get Subscriptions
* [getRecurrencebyrecurrenceId](#getrecurrencebyrecurrenceid) - Get Subscription by recurrenceId
* [getpaymentaccounts](#getpaymentaccounts) - Get payment accounts
* [getrecurrenceaddresses](#getrecurrenceaddresses) - Get Subscription addresses
* [getrecurrencesettings](#getrecurrencesettings) - Get Subscription settings
* [getselfrecurrence](#getselfrecurrence) - Get self Subscription
* [reindexrecurrence](#reindexrecurrence) - Reindex Subscription
* [updatepartialrecurrence](#updatepartialrecurrence) - Update partial Subscription
* [updaterecurrence](#updaterecurrence) - Update Subscription
* [updaterecurrencesettings](#updaterecurrencesettings) - Update Subscription settings

## addrecurrenceitem

Adds an item to a Subscription (formerly Recurrence).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddrecurrenceitemRequest;
import org.openapis.openapi.models.operations.AddrecurrenceitemResponse;
import org.openapis.openapi.models.shared.AddrecurrenceitemRequest;
import org.openapis.openapi.models.shared.Frequency;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro", "dolorum") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddrecurrenceitemRequest req = new AddrecurrenceitemRequest("application/json", "application/json",                 new org.openapis.openapi.models.shared.AddrecurrenceitemRequest[]{{
                                add(new AddrecurrenceitemRequest(                new Frequency(105907, "commodi");, 473600, "modi", "qui", "impedit") {{
                                    frequency = new Frequency(582020, "fugit") {{
                                        interval = 720633;
                                        periodicity = "officia";
                                    }};
                                    quantity = 537373;
                                    seller = "hic";
                                    shippingAddressId = "optio";
                                    sku = "totam";
                                }}),
                            }}, "cum");            

            AddrecurrenceitemResponse res = sdk.miscellaneous.addrecurrenceitem(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRecurrencebyemail

Retrieves a given Subscription (formerly recurrence). There are three options of filtering your Subscruptions v1. It's possible to get a list of all Subscriptions v1, by not adding any query params to your request, and simply executing a call to the url. It is also possible to list the Subscriptions by email, filtering by the email query param. And finnally, it is possible to list recurrences with failures on the last execution cycle, filtering by the cycleStatus query param.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRecurrencebyemailRequest;
import org.openapis.openapi.models.operations.GetRecurrencebyemailResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse", "ipsum") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRecurrencebyemailRequest req = new GetRecurrencebyemailRequest("application/json", "application/json") {{
                cycleStatus = "{{cycleStatus}}";
                email = "{{email}}";
            }};            

            GetRecurrencebyemailResponse res = sdk.miscellaneous.getRecurrencebyemail(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRecurrencebyrecurrenceId

Retrieves a given Subscription (formerly recurrence) by recurrenceId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRecurrencebyrecurrenceIdRequest;
import org.openapis.openapi.models.operations.GetRecurrencebyrecurrenceIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi", "aspernatur") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRecurrencebyrecurrenceIdRequest req = new GetRecurrencebyrecurrenceIdRequest("application/json", "application/json", "perferendis");            

            GetRecurrencebyrecurrenceIdResponse res = sdk.miscellaneous.getRecurrencebyrecurrenceId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getpaymentaccounts

Lists payment accounts of a given Subscription (formerly Recurrence) by recurrenceId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetpaymentaccountsRequest;
import org.openapis.openapi.models.operations.GetpaymentaccountsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad", "natus") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetpaymentaccountsRequest req = new GetpaymentaccountsRequest("application/json", "application/json", "sed");            

            GetpaymentaccountsResponse res = sdk.miscellaneous.getpaymentaccounts(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getrecurrenceaddresses

Retrieves the addresses attached to a given subscription (formerly recurrence) by recurrenceId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetrecurrenceaddressesRequest;
import org.openapis.openapi.models.operations.GetrecurrenceaddressesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste", "dolor") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetrecurrenceaddressesRequest req = new GetrecurrenceaddressesRequest("application/json", "application/json", "natus");            

            GetrecurrenceaddressesResponse res = sdk.miscellaneous.getrecurrenceaddresses(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getrecurrencesettings

Retrieves your store's Subscriptions' (formerly recurrence) settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetrecurrencesettingsRequest;
import org.openapis.openapi.models.operations.GetrecurrencesettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam", "hic") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetrecurrencesettingsRequest req = new GetrecurrencesettingsRequest("application/json", "application/json");            

            GetrecurrencesettingsResponse res = sdk.miscellaneous.getrecurrencesettings(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getselfrecurrence

Lists details of your self Subscription (formerly Recurrence).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetselfrecurrenceRequest;
import org.openapis.openapi.models.operations.GetselfrecurrenceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe", "fuga") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetselfrecurrenceRequest req = new GetselfrecurrenceRequest("application/json", "application/json");            

            GetselfrecurrenceResponse res = sdk.miscellaneous.getselfrecurrence(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reindexrecurrence

Alters the frequency of a given Subscription (formerly Recurrence) by changing period and interval.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReindexrecurrenceRequest;
import org.openapis.openapi.models.operations.ReindexrecurrenceResponse;
import org.openapis.openapi.models.shared.Frequency;
import org.openapis.openapi.models.shared.ReindexrecurrenceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in", "corporis") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ReindexrecurrenceRequest req = new ReindexrecurrenceRequest("application/json", "application/json",                 new org.openapis.openapi.models.shared.ReindexrecurrenceRequest[]{{
                                add(new ReindexrecurrenceRequest(                new Frequency(60225, "reiciendis");) {{
                                    frequency = new Frequency(697631, "architecto") {{
                                        interval = 437032;
                                        periodicity = "saepe";
                                    }};
                                }}),
                                add(new ReindexrecurrenceRequest(                new Frequency(210382, "corporis");) {{
                                    frequency = new Frequency(670638, "dolores") {{
                                        interval = 666767;
                                        periodicity = "mollitia";
                                    }};
                                }}),
                                add(new ReindexrecurrenceRequest(                new Frequency(363711, "minima");) {{
                                    frequency = new Frequency(315428, "omnis") {{
                                        interval = 128926;
                                        periodicity = "nobis";
                                    }};
                                }}),
                            }}, "excepturi");            

            ReindexrecurrenceResponse res = sdk.miscellaneous.reindexrecurrence(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatepartialrecurrence

Updates partial information of a given subscription (formerly Recurrence).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatepartialrecurrenceRequest;
import org.openapis.openapi.models.operations.UpdatepartialrecurrenceResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdatepartialrecurrenceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium", "iure") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatepartialrecurrenceRequest req = new UpdatepartialrecurrenceRequest("application/json", "application/json",                 new UpdatepartialrecurrenceRequest(634274, "doloribus", "sapiente");, "architecto");            

            UpdatepartialrecurrenceResponse res = sdk.miscellaneous.updatepartialrecurrence(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updaterecurrence

Updates details of a given Subscription (formerly recurrence).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdaterecurrenceRequest;
import org.openapis.openapi.models.operations.UpdaterecurrenceResponse;
import org.openapis.openapi.models.shared.Frequency;
import org.openapis.openapi.models.shared.Item;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdaterecurrenceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia", "dolorem") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdaterecurrenceRequest req = new UpdaterecurrenceRequest("application/json", "application/json",                 new UpdaterecurrenceRequest(635059, "consequuntur", "repellat",                 new org.openapis.openapi.models.shared.Item[]{{
                                                add(new Item(                new Frequency(338007, "vitae");, 674752, "animi", "enim", "odit") {{
                                                    frequency = new Frequency(414369, "quam") {{
                                                        interval = 581850;
                                                        periodicity = "numquam";
                                                    }};
                                                    quantity = 474697;
                                                    seller = "velit";
                                                    shippingAddressId = "error";
                                                    sku = "quia";
                                                }}),
                                                add(new Item(                new Frequency(622846, "temporibus");, 673660, "quasi", "reiciendis", "voluptatibus") {{
                                                    frequency = new Frequency(949572, "ipsam") {{
                                                        interval = 778346;
                                                        periodicity = "sequi";
                                                    }};
                                                    quantity = 662527;
                                                    seller = "possimus";
                                                    shippingAddressId = "aut";
                                                    sku = "quasi";
                                                }}),
                                                add(new Item(                new Frequency(19987, "doloremque");, 441711, "ut", "maiores", "dicta") {{
                                                    frequency = new Frequency(509624, "voluptatibus") {{
                                                        interval = 878194;
                                                        periodicity = "nihil";
                                                    }};
                                                    quantity = 55714;
                                                    seller = "omnis";
                                                    shippingAddressId = "voluptate";
                                                    sku = "cum";
                                                }}),
                                            }}, "corporis"););            

            UpdaterecurrenceResponse res = sdk.miscellaneous.updaterecurrence(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updaterecurrencesettings

Updates the Subscriptions' (formerly Recurrence) settings of your store by salesChannel and defaultSLA.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdaterecurrencesettingsRequest;
import org.openapis.openapi.models.operations.UpdaterecurrencesettingsResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdaterecurrencesettingsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore", "iusto") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdaterecurrencesettingsRequest req = new UpdaterecurrencesettingsRequest("application/json", "application/json",                 new UpdaterecurrencesettingsRequest("dicta", "harum"););            

            UpdaterecurrencesettingsResponse res = sdk.miscellaneous.updaterecurrencesettings(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
