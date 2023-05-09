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
import org.openapis.openapi.models.operations.PolicyCreateOrUpdateRequest;
import org.openapis.openapi.models.operations.PolicyCreateOrUpdateResponse;
import org.openapis.openapi.models.shared.PolicySaveRequest;
import org.openapis.openapi.models.shared.StatementGetResponse;
import org.openapis.openapi.models.shared.StatementGetResponseCondition;
import org.openapis.openapi.models.shared.StatementGetResponseConditionConditions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PolicyCreateOrUpdateRequest req = new PolicyCreateOrUpdateRequest("corrupti", "provident", "distinctio") {{
                policySaveRequest = new PolicySaveRequest("quibusdam", "unde",                 new org.openapis.openapi.models.shared.StatementGetResponse[]{{
                                    add(new StatementGetResponse("quod") {{
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
                                    add(new StatementGetResponse("cum") {{
                                        actions = new Object[]{{
                                            add("esse"),
                                            add("totam"),
                                            add("porro"),
                                            add("dolorum"),
                                        }};
                                        condition = new StatementGetResponseCondition() {{
                                            conditions = new org.openapis.openapi.models.shared.StatementGetResponseConditionConditions[]{{
                                                add(new StatementGetResponseConditionConditions() {{
                                                    conditions = new String[]{{
                                                        add("officia"),
                                                        add("occaecati"),
                                                        add("fugit"),
                                                    }};
                                                    key = "deleniti";
                                                    operation = "hic";
                                                    values = new String[]{{
                                                        add("totam"),
                                                        add("beatae"),
                                                        add("commodi"),
                                                        add("molestiae"),
                                                    }};
                                                }}),
                                            }};
                                        }};
                                        effect = "modi";
                                        operation = "qui";
                                        resource = "impedit";
                                    }}),
                                    add(new StatementGetResponse("in") {{
                                        actions = new Object[]{{
                                            add("ipsum"),
                                            add("excepturi"),
                                        }};
                                        condition = new StatementGetResponseCondition() {{
                                            conditions = new org.openapis.openapi.models.shared.StatementGetResponseConditionConditions[]{{
                                                add(new StatementGetResponseConditionConditions() {{
                                                    conditions = new String[]{{
                                                        add("ad"),
                                                    }};
                                                    key = "natus";
                                                    operation = "sed";
                                                    values = new String[]{{
                                                        add("dolor"),
                                                        add("natus"),
                                                        add("laboriosam"),
                                                    }};
                                                }}),
                                            }};
                                        }};
                                        effect = "hic";
                                        operation = "saepe";
                                        resource = "fuga";
                                    }}),
                                    add(new StatementGetResponse("quia") {{
                                        actions = new Object[]{{
                                            add("iste"),
                                            add("iure"),
                                        }};
                                        condition = new StatementGetResponseCondition() {{
                                            conditions = new org.openapis.openapi.models.shared.StatementGetResponseConditionConditions[]{{
                                                add(new StatementGetResponseConditionConditions() {{
                                                    conditions = new String[]{{
                                                        add("architecto"),
                                                        add("ipsa"),
                                                        add("reiciendis"),
                                                    }};
                                                    key = "est";
                                                    operation = "mollitia";
                                                    values = new String[]{{
                                                        add("dolores"),
                                                        add("dolorem"),
                                                        add("corporis"),
                                                    }};
                                                }}),
                                                add(new StatementGetResponseConditionConditions() {{
                                                    conditions = new String[]{{
                                                        add("nobis"),
                                                    }};
                                                    key = "enim";
                                                    operation = "omnis";
                                                    values = new String[]{{
                                                        add("minima"),
                                                        add("excepturi"),
                                                    }};
                                                }}),
                                                add(new StatementGetResponseConditionConditions() {{
                                                    conditions = new String[]{{
                                                        add("iure"),
                                                    }};
                                                    key = "culpa";
                                                    operation = "doloribus";
                                                    values = new String[]{{
                                                        add("architecto"),
                                                        add("mollitia"),
                                                        add("dolorem"),
                                                        add("culpa"),
                                                    }};
                                                }}),
                                                add(new StatementGetResponseConditionConditions() {{
                                                    conditions = new String[]{{
                                                        add("repellat"),
                                                    }};
                                                    key = "mollitia";
                                                    operation = "occaecati";
                                                    values = new String[]{{
                                                        add("commodi"),
                                                        add("quam"),
                                                    }};
                                                }}),
                                            }};
                                        }};
                                        effect = "molestiae";
                                        operation = "velit";
                                        resource = "error";
                                    }}),
                                }});;
            }};            

            PolicyCreateOrUpdateResponse res = sdk.policy.policyCreateOrUpdate(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [policy](docs/policy/README.md)

* [policyCreateOrUpdate](docs/policy/README.md#policycreateorupdate) - Create Policy
* [policyDelete](docs/policy/README.md#policydelete) - Delete Policy by ID
* [policyEvaluate](docs/policy/README.md#policyevaluate) - Evaluate Policies
* [policyGet](docs/policy/README.md#policyget) - Get Policy by ID
* [policyList](docs/policy/README.md#policylist) - Get Policy List
* [putApiPolicyEnginePoliciesId](docs/policy/README.md#putapipolicyenginepoliciesid) - Update Policy
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
