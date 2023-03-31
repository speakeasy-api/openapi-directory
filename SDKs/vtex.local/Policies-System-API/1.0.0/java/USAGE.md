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