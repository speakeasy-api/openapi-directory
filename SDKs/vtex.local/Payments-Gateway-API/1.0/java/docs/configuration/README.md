# configuration

### Available Operations

* [affiliationById](#affiliationbyid) - Affiliation By Id
* [affiliations](#affiliations) - Affiliations
* [availablePaymentMethods](#availablepaymentmethods) - Available Payment Methods
* [insertAffiliation](#insertaffiliation) - Insert Affiliation
* [insertRule](#insertrule) - Insert Rule
* [putRuleById](#putrulebyid) - Rule By Id
* [rule](#rule) - Delete Rule
* [ruleById](#rulebyid) - Rule By Id
* [rules](#rules) - Rules
* [updateAffiliation](#updateaffiliation) - Update Affiliation

## affiliationById

Returns associated data for the specified affiliation Id, like name and implementation, for example.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AffiliationByIdRequest;
import org.openapis.openapi.models.operations.AffiliationByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio", "quibusdam") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AffiliationByIdRequest req = new AffiliationByIdRequest("application/json", "application/json", "{{X-PROVIDER-API-AppKey}}", "{{X-PROVIDER-API-AppToken}}", "e046d326-5421-45ab-95ae-f13d37f260b5");            

            AffiliationByIdResponse res = sdk.configuration.affiliationById(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## affiliations

Returns all affiliations that your provider can handle.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AffiliationsRequest;
import org.openapis.openapi.models.operations.AffiliationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde", "nulla") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AffiliationsRequest req = new AffiliationsRequest("application/json", "application/json", "{{X-PROVIDER-API-AppKey}}", "{{X-PROVIDER-API-AppToken}}");            

            AffiliationsResponse res = sdk.configuration.affiliations(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## availablePaymentMethods

Returns enabled payment methods, like visa, master, bankissueinvoice that are shown for the final user and enabled to receive payment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AvailablePaymentMethodsRequest;
import org.openapis.openapi.models.operations.AvailablePaymentMethodsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti", "illum") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AvailablePaymentMethodsRequest req = new AvailablePaymentMethodsRequest("application/json", "application/json", "{{X-PROVIDER-API-AppKey}}", "{{X-PROVIDER-API-AppToken}}");            

            AvailablePaymentMethodsResponse res = sdk.configuration.availablePaymentMethods(req);

            if (res.paymentSystemsResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## insertAffiliation

Creates a new affiliation and returns a successful response.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InsertAffiliationRequest;
import org.openapis.openapi.models.operations.InsertAffiliationResponse;
import org.openapis.openapi.models.shared.Configuration;
import org.openapis.openapi.models.shared.InsertAffiliationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel", "error") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            InsertAffiliationRequest req = new InsertAffiliationRequest("application/json", "application/json",                 new InsertAffiliationRequest(                new org.openapis.openapi.models.shared.Configuration[]{{
                                                add(new Configuration("suscipit", "molestiae") {{
                                                    name = "Willie Gulgowski DVM";
                                                    value = "tempora";
                                                }}),
                                                add(new Configuration("recusandae", "temporibus") {{
                                                    name = "Irving Lehner";
                                                    value = "nisi";
                                                }}),
                                                add(new Configuration("sapiente", "quo") {{
                                                    name = "Erica Bogisich III";
                                                    value = "repellendus";
                                                }}),
                                            }}, "odit", false, false, "at");, "{{X-PROVIDER-API-AppKey}}", "{{X-PROVIDER-API-AppToken}}");            

            InsertAffiliationResponse res = sdk.configuration.insertAffiliation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## insertRule

Creates a new rule and returns a successful response.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InsertRuleRequest;
import org.openapis.openapi.models.operations.InsertRuleResponse;
import org.openapis.openapi.models.shared.Antifraud;
import org.openapis.openapi.models.shared.Connector;
import org.openapis.openapi.models.shared.InsertRuleRequest;
import org.openapis.openapi.models.shared.Issuer;
import org.openapis.openapi.models.shared.PaymentSystem;
import org.openapis.openapi.models.shared.SalesChannel;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at", "maiores") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            InsertRuleRequest req = new InsertRuleRequest("application/json", "application/json",                 new InsertRuleRequest(                new Antifraud("molestiae", "quod");, "quod", "esse",                 new Connector("totam", "porro");, "dolorum", "dicta", false, "nam", "officia", "occaecati", false, "fugit",                 new Issuer("deleniti");, "hic", "optio",                 new PaymentSystem(521848, "beatae", "commodi");, "molestiae",                 new org.openapis.openapi.models.shared.SalesChannel[]{{
                                                add(new SalesChannel("dolorem") {{
                                                    id = "2cb73920-5929-4396-bea7-596eb10faaa2";
                                                }}),
                                                add(new SalesChannel("animi") {{
                                                    id = "52c59559-07af-4f1a-ba2f-a9467739251a";
                                                }}),
                                            }});, "{{X-PROVIDER-API-AppKey}}", "{{X-PROVIDER-API-AppToken}}");            

            InsertRuleResponse res = sdk.configuration.insertRule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putRuleById

Update Rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutRuleByIdRequest;
import org.openapis.openapi.models.operations.PutRuleByIdResponse;
import org.openapis.openapi.models.shared.Antifraud1;
import org.openapis.openapi.models.shared.Connector;
import org.openapis.openapi.models.shared.InstallmentOptions;
import org.openapis.openapi.models.shared.Issuer;
import org.openapis.openapi.models.shared.PaymentSystem;
import org.openapis.openapi.models.shared.RuleByIdRequest;
import org.openapis.openapi.models.shared.SalesChannel;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim", "odit") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutRuleByIdRequest req = new PutRuleByIdRequest("application/json", "application/json",                 new RuleByIdRequest(                new Antifraud1("quo");, "sequi", "tenetur",                 new Connector("ipsam", "id");, "possimus", "aut", false, "quasi", "error",                 new InstallmentOptions("temporibus");, "laborum", "quasi",                 new Issuer("reiciendis");, "voluptatibus", "vero",                 new PaymentSystem(468651, "praesentium", "voluptatibus");,                 new org.openapis.openapi.models.shared.SalesChannel[]{{
                                                add(new SalesChannel("veritatis") {{
                                                    id = "97b0074f-1547-41b5-a6e1-3b99d488e1e9";
                                                }}),
                                            }});, "{{X-PROVIDER-API-AppKey}}", "{{X-PROVIDER-API-AppToken}}", "itaque");            

            PutRuleByIdResponse res = sdk.configuration.putRuleById(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rule

Deletes rules by specified Id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RuleRequest;
import org.openapis.openapi.models.operations.RuleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt", "enim") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RuleRequest req = new RuleRequest("application/json", "application/json", "{{X-PROVIDER-API-AppKey}}", "{{X-PROVIDER-API-AppToken}}", "consequatur");            

            RuleResponse res = sdk.configuration.rule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ruleById

Returns rule by specified RuleId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RuleByIdRequest;
import org.openapis.openapi.models.operations.RuleByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est", "quibusdam") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RuleByIdRequest req = new RuleByIdRequest("application/json", "application/json", "{{X-PROVIDER-API-AppKey}}", "{{X-PROVIDER-API-AppToken}}", "explicabo");            

            RuleByIdResponse res = sdk.configuration.ruleById(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rules

Returns all rules conditions your provider can handle.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RulesRequest;
import org.openapis.openapi.models.operations.RulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt", "distinctio") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            RulesRequest req = new RulesRequest("application/json", "application/json", "{{X-PROVIDER-API-AppKey}}", "{{X-PROVIDER-API-AppToken}}");            

            RulesResponse res = sdk.configuration.rules(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAffiliation

Returns all affiliations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAffiliationRequest;
import org.openapis.openapi.models.operations.UpdateAffiliationResponse;
import org.openapis.openapi.models.shared.Configuration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateAffiliationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam", "labore") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAffiliationRequest req = new UpdateAffiliationRequest("application/json", "application/json",                 new UpdateAffiliationRequest(                new org.openapis.openapi.models.shared.Configuration[]{{
                                                add(new Configuration("ipsam", "alias") {{
                                                    name = "Beth McGlynn Sr.";
                                                    value = "assumenda";
                                                }}),
                                                add(new Configuration("labore", "delectus") {{
                                                    name = "Sonya Marks";
                                                    value = "tempore";
                                                }}),
                                            }}, "eum", "non", false, false, "eligendi");, "{{X-PROVIDER-API-AppKey}}", "{{X-PROVIDER-API-AppToken}}", "e046d326-5421-45ab-95ae-f13d37f260b5");            

            UpdateAffiliationResponse res = sdk.configuration.updateAffiliation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
