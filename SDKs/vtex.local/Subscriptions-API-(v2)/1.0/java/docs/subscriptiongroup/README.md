# subscriptionGroup

### Available Operations

* [additemsubscriptionGroupId](#additemsubscriptiongroupid) - Add Subscription item by groupId
* [cancelSubscriptionbygroupId](#cancelsubscriptionbygroupid) - Cancel Subscription by groupId
* [getAllsubscriptiongroup](#getallsubscriptiongroup) - List All subscription groups
* [getConfigsubscriptionsgroup](#getconfigsubscriptionsgroup) - List Subscription group's Configuration
* [getConversationMessagebygroupId](#getconversationmessagebygroupid) - Get Conversation Message by groupId
* [getNextpurchase](#getnextpurchase) - Get Next purchase
* [getSimulatebysubscriptionGroup](#getsimulatebysubscriptiongroup) - Get Simulation by subscription-group
* [getSubscriptionbygroupId](#getsubscriptionbygroupid) - Get Subscription by groupId
* [getaddressesbygroupId](#getaddressesbygroupid) - Get addresses by groupId
* [getfrequencyoptionsbygroupId](#getfrequencyoptionsbygroupid) - Get frequency options by groupId
* [getpaymentSystembygroupId](#getpaymentsystembygroupid) - Get payment System by groupId
* [getsubscriptiongrouplist](#getsubscriptiongrouplist) - Get subscription group list
* [getwillcreatebygroupId](#getwillcreatebygroupid) - List 'Will create' by groupId
* [insertAddressesbygroupId](#insertaddressesbygroupid) - Insert Addresses by groupId
* [retrysubscriptionbygroupId](#retrysubscriptionbygroupid) - Retry subscription by groupId
* [updateSubscriptionbygroupId](#updatesubscriptionbygroupid) - Update Subscription by groupId

## additemsubscriptionGroupId

Adds an SKU to a given Subscription, filtering by groupId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdditemsubscriptionGroupIdRequest;
import org.openapis.openapi.models.operations.AdditemsubscriptionGroupIdResponse;
import org.openapis.openapi.models.shared.AdditemsubscriptionGroupIdRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Sku;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at", "maiores") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdditemsubscriptionGroupIdRequest req = new AdditemsubscriptionGroupIdRequest("molestiae",                 new AdditemsubscriptionGroupIdRequest("quod", 800911, 461479, 520478,                 new Sku("porro", "dolorum", "dicta", "nam", "officia", "occaecati"););, "fugit", "1");            

            AdditemsubscriptionGroupIdResponse res = sdk.subscriptionGroup.additemsubscriptionGroupId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelSubscriptionbygroupId

Cancels Subscription by `groupId`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelSubscriptionbygroupIdRequest;
import org.openapis.openapi.models.operations.CancelSubscriptionbygroupIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti", "hic") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelSubscriptionbygroupIdRequest req = new CancelSubscriptionbygroupIdRequest("optio", "totam", "1");            

            CancelSubscriptionbygroupIdResponse res = sdk.subscriptionGroup.cancelSubscriptionbygroupId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllsubscriptiongroup

Retrieves all subscription groups in your store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllsubscriptiongroupRequest;
import org.openapis.openapi.models.operations.GetAllsubscriptiongroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae", "commodi") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAllsubscriptiongroupRequest req = new GetAllsubscriptiongroupRequest("molestiae", "modi");            

            GetAllsubscriptiongroupResponse res = sdk.subscriptionGroup.getAllsubscriptiongroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConfigsubscriptionsgroup

Retrieves details about a given subscription group's configuration, filtering by groupId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConfigsubscriptionsgroupRequest;
import org.openapis.openapi.models.operations.GetConfigsubscriptionsgroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui", "impedit") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetConfigsubscriptionsgroupRequest req = new GetConfigsubscriptionsgroupRequest("cum", "esse", "1");            

            GetConfigsubscriptionsgroupResponse res = sdk.subscriptionGroup.getConfigsubscriptionsgroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConversationMessagebygroupId

Retrieves the conversation of a given Subscription group, filtering by groupId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConversationMessagebygroupIdRequest;
import org.openapis.openapi.models.operations.GetConversationMessagebygroupIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum", "excepturi") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetConversationMessagebygroupIdRequest req = new GetConversationMessagebygroupIdRequest("aspernatur", "perferendis", "1");            

            GetConversationMessagebygroupIdResponse res = sdk.subscriptionGroup.getConversationMessagebygroupId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNextpurchase

Lists details of a given subscription group's next purchase, filtering by dateStr.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNextpurchaseRequest;
import org.openapis.openapi.models.operations.GetNextpurchaseResponse;
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

            GetNextpurchaseRequest req = new GetNextpurchaseRequest("sed", "iste", "dolor");            

            GetNextpurchaseResponse res = sdk.subscriptionGroup.getNextpurchase(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSimulatebysubscriptionGroup

Retrieves Subscription simulations, filtering by groupId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSimulatebysubscriptionGroupRequest;
import org.openapis.openapi.models.operations.GetSimulatebysubscriptionGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus", "laboriosam") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSimulatebysubscriptionGroupRequest req = new GetSimulatebysubscriptionGroupRequest("hic", "saepe", "1");            

            GetSimulatebysubscriptionGroupResponse res = sdk.subscriptionGroup.getSimulatebysubscriptionGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSubscriptionbygroupId

Lists Subscription details, filtering by `groupId`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubscriptionbygroupIdRequest;
import org.openapis.openapi.models.operations.GetSubscriptionbygroupIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga", "in") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSubscriptionbygroupIdRequest req = new GetSubscriptionbygroupIdRequest("corporis", "iste", "1");            

            GetSubscriptionbygroupIdResponse res = sdk.subscriptionGroup.getSubscriptionbygroupId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getaddressesbygroupId

Lists addresses linked to a given Subscription group, filtering by groupId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetaddressesbygroupIdRequest;
import org.openapis.openapi.models.operations.GetaddressesbygroupIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure", "saepe") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetaddressesbygroupIdRequest req = new GetaddressesbygroupIdRequest("quidem", "architecto", "ipsa");            

            GetaddressesbygroupIdResponse res = sdk.subscriptionGroup.getaddressesbygroupId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getfrequencyoptionsbygroupId

Lists frequency options of a given Subscription group, filtering by groupId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetfrequencyoptionsbygroupIdRequest;
import org.openapis.openapi.models.operations.GetfrequencyoptionsbygroupIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis", "est") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetfrequencyoptionsbygroupIdRequest req = new GetfrequencyoptionsbygroupIdRequest("mollitia", "laborum", "1");            

            GetfrequencyoptionsbygroupIdResponse res = sdk.subscriptionGroup.getfrequencyoptionsbygroupId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getpaymentSystembygroupId

Retrieves payment system's information of a given Subscription group, filtering by groupId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetpaymentSystembygroupIdRequest;
import org.openapis.openapi.models.operations.GetpaymentSystembygroupIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores", "dolorem") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetpaymentSystembygroupIdRequest req = new GetpaymentSystembygroupIdRequest("corporis", "explicabo", "1");            

            GetpaymentSystembygroupIdResponse res = sdk.subscriptionGroup.getpaymentSystembygroupId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getsubscriptiongrouplist

Retrieves a list of Subscription groups in your store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetsubscriptiongrouplistRequest;
import org.openapis.openapi.models.operations.GetsubscriptiongrouplistResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis", "enim") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetsubscriptiongrouplistRequest req = new GetsubscriptiongrouplistRequest("omnis", "nemo");            

            GetsubscriptiongrouplistResponse res = sdk.subscriptionGroup.getsubscriptiongrouplist(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getwillcreatebygroupId

Retrieves Subscription groups listed as 'will create', filtering by groupId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetwillcreatebygroupIdRequest;
import org.openapis.openapi.models.operations.GetwillcreatebygroupIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima", "excepturi") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetwillcreatebygroupIdRequest req = new GetwillcreatebygroupIdRequest("accusantium", "iure", "1");            

            GetwillcreatebygroupIdResponse res = sdk.subscriptionGroup.getwillcreatebygroupId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## insertAddressesbygroupId

Insert address information of a given Subscription group, filtering by groupId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InsertAddressesbygroupIdRequest;
import org.openapis.openapi.models.operations.InsertAddressesbygroupIdResponse;
import org.openapis.openapi.models.shared.AdditionalComponent;
import org.openapis.openapi.models.shared.InsertAddressesbygroupIdRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa", "doloribus") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            InsertAddressesbygroupIdRequest req = new InsertAddressesbygroupIdRequest("sapiente", "architecto",                 new InsertAddressesbygroupIdRequest(                new org.openapis.openapi.models.shared.AdditionalComponent[]{{
                                                add(new AdditionalComponent("mollitia", "occaecati",                 new String[]{{
                                                                    add("commodi"),
                                                                    add("quam"),
                                                                }}) {{
                                                    longName = "dolorem";
                                                    shortName = "culpa";
                                                    types = new String[]{{
                                                        add("repellat"),
                                                    }};
                                                }}),
                                                add(new AdditionalComponent("laborum", "animi",                 new String[]{{
                                                                    add("odit"),
                                                                    add("quo"),
                                                                }}) {{
                                                    longName = "molestiae";
                                                    shortName = "velit";
                                                    types = new String[]{{
                                                        add("quia"),
                                                        add("quis"),
                                                        add("vitae"),
                                                    }};
                                                }}),
                                                add(new AdditionalComponent("aut", "quasi",                 new String[]{{
                                                                    add("temporibus"),
                                                                    add("laborum"),
                                                                    add("quasi"),
                                                                }}) {{
                                                    longName = "sequi";
                                                    shortName = "tenetur";
                                                    types = new String[]{{
                                                        add("id"),
                                                        add("possimus"),
                                                    }};
                                                }}),
                                            }}, "reiciendis", "voluptatibus", "vero", "nihil", "praesentium", "voluptatibus", "ipsa",                 new Integer[]{{
                                                add(451159),
                                                add(739264),
                                                add(19987),
                                            }}, "doloremque", "reprehenderit", "ut", "maiores", "dicta", "corporis", "dolore");, "1");            

            InsertAddressesbygroupIdResponse res = sdk.subscriptionGroup.insertAddressesbygroupId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrysubscriptionbygroupId

Permits the retry of a Subscription group, via API, filtering by groupId and instanceId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrysubscriptionbygroupIdRequest;
import org.openapis.openapi.models.operations.RetrysubscriptionbygroupIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto", "dicta") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RetrysubscriptionbygroupIdRequest req = new RetrysubscriptionbygroupIdRequest("harum", "enim", "1", "accusamus");            

            RetrysubscriptionbygroupIdResponse res = sdk.subscriptionGroup.retrysubscriptionbygroupId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSubscriptionbygroupId

Updates a Subscription by `groupId`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSubscriptionbygroupIdRequest;
import org.openapis.openapi.models.operations.UpdateSubscriptionbygroupIdResponse;
import org.openapis.openapi.models.shared.AdditionalComponent;
import org.openapis.openapi.models.shared.Frequency;
import org.openapis.openapi.models.shared.Item1;
import org.openapis.openapi.models.shared.Metadatum;
import org.openapis.openapi.models.shared.PaymentMethod;
import org.openapis.openapi.models.shared.Plan;
import org.openapis.openapi.models.shared.Properties;
import org.openapis.openapi.models.shared.PurchaseSettings;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ShippingAddress;
import org.openapis.openapi.models.shared.Sku;
import org.openapis.openapi.models.shared.UpdateSubscriptionbygroupIdRequest;
import org.openapis.openapi.models.shared.Validity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi", "repudiandae") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSubscriptionbygroupIdRequest req = new UpdateSubscriptionbygroupIdRequest(                new UpdateSubscriptionbygroupIdRequest(false,                 new org.openapis.openapi.models.shared.Item1[]{{
                                                add(new Item1("magnam", "distinctio", 660174, "labore", false, "labore",                 new org.openapis.openapi.models.shared.Metadatum[]{{
                                                                    add(new Metadatum("quos",                 new Properties("sint", "accusantium", "mollitia");) {{
                                                                        name = "Robin Keebler";
                                                                        properties = new Properties("excepturi", "ullam", "provident") {{
                                                                            additionalProp1 = "architecto";
                                                                            additionalProp2 = "magnam";
                                                                            additionalProp3 = "et";
                                                                        }};
                                                                    }}),
                                                                    add(new Metadatum("debitis",                 new Properties("eius", "maxime", "deleniti");) {{
                                                                        name = "Shaun Hammes";
                                                                        properties = new Properties("quasi", "iure", "doloribus") {{
                                                                            additionalProp1 = "necessitatibus";
                                                                            additionalProp2 = "odit";
                                                                            additionalProp3 = "nemo";
                                                                        }};
                                                                    }}),
                                                                }}, 703889, "in", 100226, 99569, 919483,                 new Sku("ullam", "expedita", "nihil", "repellat", "quibusdam", "sed");, "saepe") {{
                                                    subscriptionId = "ipsum";
                                                    createdAt = "quidem";
                                                    cycleCount = 565189;
                                                    endpoint = "excepturi";
                                                    isSkipped = false;
                                                    lastUpdate = "pariatur";
                                                    metadata = new org.openapis.openapi.models.shared.Metadatum[]{{
                                                        add(new Metadatum("quibusdam",                 new Properties("explicabo", "deserunt", "distinctio");) {{
                                                            name = "Dr. Jordan Von";
                                                            properties = new Properties("enim", "consequatur", "est") {{
                                                                additionalProp1 = "veritatis";
                                                                additionalProp2 = "itaque";
                                                                additionalProp3 = "incidunt";
                                                            }};
                                                        }}),
                                                        add(new Metadatum("alias",                 new Properties("fugit", "dolorum", "excepturi");) {{
                                                            name = "Francisco Gleason";
                                                            properties = new Properties("magni", "assumenda", "ipsam") {{
                                                                additionalProp1 = "cupiditate";
                                                                additionalProp2 = "quos";
                                                                additionalProp3 = "perferendis";
                                                            }};
                                                        }}),
                                                    }};
                                                    originalItemIndex = 270008;
                                                    originalOrderId = "facilis";
                                                    priceAtSubscriptionDate = 735194;
                                                    quantity = 288476;
                                                    sellingPrice = 962189;
                                                    sku = new Sku("nisi", "vel", "natus", "omnis", "molestiae", "perferendis") {{
                                                        detailUrl = "eum";
                                                        id = "3c969e9a-3efa-477d-bb14-cd66ae395efb";
                                                        imageUrl = "provident";
                                                        name = "Lynn Kuvalis";
                                                        nameComplete = "amet";
                                                        productName = "deserunt";
                                                    }};
                                                    status = "nihil";
                                                }}),
                                            }},                 new org.openapis.openapi.models.shared.Metadatum[]{{
                                                add(new Metadatum("excepturi",                 new Properties("odit", "ea", "accusantium");) {{
                                                    name = "Kathryn Lang";
                                                    properties = new Properties("pariatur", "maxime", "ea") {{
                                                        additionalProp1 = "sunt";
                                                        additionalProp2 = "quo";
                                                        additionalProp3 = "illum";
                                                    }};
                                                }}),
                                                add(new Metadatum("perferendis",                 new Properties("fugiat", "amet", "aut");) {{
                                                    name = "Ebony Predovic";
                                                    properties = new Properties("pariatur", "nemo", "voluptatibus") {{
                                                        additionalProp1 = "autem";
                                                        additionalProp2 = "nam";
                                                        additionalProp3 = "eaque";
                                                    }};
                                                }}),
                                                add(new Metadatum("nesciunt",                 new Properties("eos", "perferendis", "dolores");) {{
                                                    name = "Lewis Welch";
                                                    properties = new Properties("dignissimos", "eaque", "quis") {{
                                                        additionalProp1 = "dolores";
                                                        additionalProp2 = "quis";
                                                        additionalProp3 = "totam";
                                                    }};
                                                }}),
                                                add(new Metadatum("porro",                 new Properties("consequuntur", "blanditiis", "error");) {{
                                                    name = "Darryl Fadel";
                                                    properties = new Properties("facilis", "perspiciatis", "voluptatem") {{
                                                        additionalProp1 = "hic";
                                                        additionalProp2 = "recusandae";
                                                        additionalProp3 = "omnis";
                                                    }};
                                                }}),
                                            }},                 new Plan(                new Frequency(50370, "occaecati");, "rerum",                 new Validity("adipisci", "asperiores"););,                 new PurchaseSettings("earum",                 new PaymentMethod("modi", "iste");, "dolorum", "deleniti", "pariatur", "provident");,                 new ShippingAddress(                new org.openapis.openapi.models.shared.AdditionalComponent[]{{
                                                                add(new AdditionalComponent("dolorem", "dolorem",                 new String[]{{
                                                                                    add("qui"),
                                                                                }}) {{
                                                                    longName = "libero";
                                                                    shortName = "delectus";
                                                                    types = new String[]{{
                                                                        add("quos"),
                                                                        add("aliquid"),
                                                                    }};
                                                                }}),
                                                                add(new AdditionalComponent("reiciendis", "amet",                 new String[]{{
                                                                                    add("numquam"),
                                                                                    add("veritatis"),
                                                                                    add("ipsa"),
                                                                                }}) {{
                                                                    longName = "ipsum";
                                                                    shortName = "hic";
                                                                    types = new String[]{{
                                                                        add("cum"),
                                                                        add("voluptate"),
                                                                        add("dignissimos"),
                                                                    }};
                                                                }}),
                                                                add(new AdditionalComponent("quidem", "voluptatibus",                 new String[]{{
                                                                                    add("natus"),
                                                                                    add("eos"),
                                                                                }}) {{
                                                                    longName = "ipsa";
                                                                    shortName = "iure";
                                                                    types = new String[]{{
                                                                        add("quaerat"),
                                                                        add("accusamus"),
                                                                    }};
                                                                }}),
                                                                add(new AdditionalComponent("voluptate", "dolorum",                 new String[]{{
                                                                                    add("omnis"),
                                                                                    add("necessitatibus"),
                                                                                    add("distinctio"),
                                                                                }}) {{
                                                                    longName = "atque";
                                                                    shortName = "sit";
                                                                    types = new String[]{{
                                                                        add("ab"),
                                                                        add("soluta"),
                                                                        add("dolorum"),
                                                                        add("iusto"),
                                                                    }};
                                                                }}),
                                                            }}, "asperiores", "nihil", "ipsum", "voluptate", "id", "saepe", "eius",                 new Integer[]{{
                                                                add(20651),
                                                            }}, "amet", "optio", "accusamus", "ad", "saepe", "suscipit", "deserunt");, "provident");, "1");            

            UpdateSubscriptionbygroupIdResponse res = sdk.subscriptionGroup.updateSubscriptionbygroupId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
