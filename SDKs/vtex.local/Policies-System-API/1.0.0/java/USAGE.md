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