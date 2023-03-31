# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PolicyCreateOrUpdatePathParams;
import org.openapis.openapi.models.operations.PolicyCreateOrUpdateHeaders;
import org.openapis.openapi.models.operations.PolicyCreateOrUpdateRequest;
import org.openapis.openapi.models.operations.PolicyCreateOrUpdateResponse;
import org.openapis.openapi.models.shared.PolicySaveRequest;
import org.openapis.openapi.models.shared.StatementGetResponseConditionConditions;
import org.openapis.openapi.models.shared.StatementGetResponseCondition;
import org.openapis.openapi.models.shared.StatementGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PolicyCreateOrUpdateRequest req = new PolicyCreateOrUpdateRequest() {{
                pathParams = new PolicyCreateOrUpdatePathParams() {{
                    id = "corrupti";
                }};
                headers = new PolicyCreateOrUpdateHeaders() {{
                    accept = "provident";
                    contentType = "distinctio";
                }};
                request = new PolicySaveRequest() {{
                    description = "quibusdam";
                    name = "unde";
                    statements = new org.openapis.openapi.models.shared.StatementGetResponse[]{{
                        add(new StatementGetResponse() {{
                            actions = new Object[]{{
                                add("illum"),
                                add("vel"),
                                add("error"),
                            }};
                            condition = new StatementGetResponseCondition() {{
                                conditions = new org.openapis.openapi.models.shared.StatementGetResponseConditionConditions[]{{
                                    add(new StatementGetResponseConditionConditions() {{
                                        conditions = new String[]{{
                                            add("iure"),
                                            add("magnam"),
                                        }};
                                        key = "debitis";
                                        operation = "ipsa";
                                        values = new String[]{{
                                            add("tempora"),
                                            add("suscipit"),
                                            add("molestiae"),
                                            add("minus"),
                                        }};
                                    }}),
                                    add(new StatementGetResponseConditionConditions() {{
                                        conditions = new String[]{{
                                            add("voluptatum"),
                                            add("iusto"),
                                            add("excepturi"),
                                            add("nisi"),
                                        }};
                                        key = "recusandae";
                                        operation = "temporibus";
                                        values = new String[]{{
                                            add("quis"),
                                        }};
                                    }}),
                                    add(new StatementGetResponseConditionConditions() {{
                                        conditions = new String[]{{
                                            add("deserunt"),
                                        }};
                                        key = "perferendis";
                                        operation = "ipsam";
                                        values = new String[]{{
                                            add("sapiente"),
                                            add("quo"),
                                            add("odit"),
                                            add("at"),
                                        }};
                                    }}),
                                }};
                            }};
                            effect = "at";
                            operation = "maiores";
                            resource = "molestiae";
                        }}),
                        add(new StatementGetResponse() {{
                            actions = new Object[]{{
                                add("quod"),
                                add("esse"),
                                add("totam"),
                                add("porro"),
                            }};
                            condition = new StatementGetResponseCondition() {{
                                conditions = new org.openapis.openapi.models.shared.StatementGetResponseConditionConditions[]{{
                                    add(new StatementGetResponseConditionConditions() {{
                                        conditions = new String[]{{
                                            add("nam"),
                                        }};
                                        key = "officia";
                                        operation = "occaecati";
                                        values = new String[]{{
                                            add("deleniti"),
                                        }};
                                    }}),
                                    add(new StatementGetResponseConditionConditions() {{
                                        conditions = new String[]{{
                                            add("optio"),
                                            add("totam"),
                                            add("beatae"),
                                            add("commodi"),
                                        }};
                                        key = "molestiae";
                                        operation = "modi";
                                        values = new String[]{{
                                            add("impedit"),
                                        }};
                                    }}),
                                    add(new StatementGetResponseConditionConditions() {{
                                        conditions = new String[]{{
                                            add("esse"),
                                            add("ipsum"),
                                            add("excepturi"),
                                        }};
                                        key = "aspernatur";
                                        operation = "perferendis";
                                        values = new String[]{{
                                            add("natus"),
                                            add("sed"),
                                        }};
                                    }}),
                                }};
                            }};
                            effect = "iste";
                            operation = "dolor";
                            resource = "natus";
                        }}),
                        add(new StatementGetResponse() {{
                            actions = new Object[]{{
                                add("hic"),
                                add("saepe"),
                            }};
                            condition = new StatementGetResponseCondition() {{
                                conditions = new org.openapis.openapi.models.shared.StatementGetResponseConditionConditions[]{{
                                    add(new StatementGetResponseConditionConditions() {{
                                        conditions = new String[]{{
                                            add("corporis"),
                                            add("iste"),
                                        }};
                                        key = "iure";
                                        operation = "saepe";
                                        values = new String[]{{
                                            add("architecto"),
                                            add("ipsa"),
                                            add("reiciendis"),
                                        }};
                                    }}),
                                    add(new StatementGetResponseConditionConditions() {{
                                        conditions = new String[]{{
                                            add("mollitia"),
                                            add("laborum"),
                                            add("dolores"),
                                        }};
                                        key = "dolorem";
                                        operation = "corporis";
                                        values = new String[]{{
                                            add("nobis"),
                                        }};
                                    }}),
                                    add(new StatementGetResponseConditionConditions() {{
                                        conditions = new String[]{{
                                            add("omnis"),
                                            add("nemo"),
                                        }};
                                        key = "minima";
                                        operation = "excepturi";
                                        values = new String[]{{
                                            add("iure"),
                                        }};
                                    }}),
                                }};
                            }};
                            effect = "culpa";
                            operation = "doloribus";
                            resource = "sapiente";
                        }}),
                        add(new StatementGetResponse() {{
                            actions = new Object[]{{
                                add("mollitia"),
                            }};
                            condition = new StatementGetResponseCondition() {{
                                conditions = new org.openapis.openapi.models.shared.StatementGetResponseConditionConditions[]{{
                                    add(new StatementGetResponseConditionConditions() {{
                                        conditions = new String[]{{
                                            add("consequuntur"),
                                            add("repellat"),
                                            add("mollitia"),
                                        }};
                                        key = "occaecati";
                                        operation = "numquam";
                                        values = new String[]{{
                                            add("quam"),
                                            add("molestiae"),
                                        }};
                                    }}),
                                }};
                            }};
                            effect = "velit";
                            operation = "error";
                            resource = "quia";
                        }}),
                    }};
                }};
            }};            

            PolicyCreateOrUpdateResponse res = sdk.policy.policyCreateOrUpdate(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### policy

* `policyCreateOrUpdate` - Create Policy
* `policyDelete` - Delete Policy by ID
* `policyEvaluate` - Evaluate Policies
* `policyGet` - Get Policy by ID
* `policyList` - Get Policy List
* `putApiPolicyEnginePoliciesId` - Update Policy
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
