# policy

### Available Operations

* [policyCreateOrUpdate](#policycreateorupdate) - Create Policy
* [policyDelete](#policydelete) - Delete Policy by ID
* [policyEvaluate](#policyevaluate) - Evaluate Policies
* [policyGet](#policyget) - Get Policy by ID
* [policyList](#policylist) - Get Policy List
* [putApiPolicyEnginePoliciesId](#putapipolicyenginepoliciesid) - Update Policy

## policyCreateOrUpdate

Creates a new policy from scratch.

### Example Usage

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

            PolicyCreateOrUpdateRequest req = new PolicyCreateOrUpdateRequest("quis", "vitae", "laborum") {{
                policySaveRequest = new PolicySaveRequest("animi", "enim",                 new org.openapis.openapi.models.shared.StatementGetResponse[]{{
                                    add(new StatementGetResponse("modi") {{
                                        actions = new Object[]{{
                                            add("sequi"),
                                            add("tenetur"),
                                            add("ipsam"),
                                            add("id"),
                                        }};
                                        condition = new StatementGetResponseCondition() {{
                                            conditions = new org.openapis.openapi.models.shared.StatementGetResponseConditionConditions[]{{
                                                add(new StatementGetResponseConditionConditions() {{
                                                    conditions = new String[]{{
                                                        add("quasi"),
                                                    }};
                                                    key = "error";
                                                    operation = "temporibus";
                                                    values = new String[]{{
                                                        add("quasi"),
                                                        add("reiciendis"),
                                                        add("voluptatibus"),
                                                    }};
                                                }}),
                                                add(new StatementGetResponseConditionConditions() {{
                                                    conditions = new String[]{{
                                                        add("nihil"),
                                                        add("praesentium"),
                                                        add("voluptatibus"),
                                                        add("ipsa"),
                                                    }};
                                                    key = "omnis";
                                                    operation = "voluptate";
                                                    values = new String[]{{
                                                        add("perferendis"),
                                                        add("doloremque"),
                                                        add("reprehenderit"),
                                                    }};
                                                }}),
                                                add(new StatementGetResponseConditionConditions() {{
                                                    conditions = new String[]{{
                                                        add("maiores"),
                                                        add("dicta"),
                                                    }};
                                                    key = "corporis";
                                                    operation = "dolore";
                                                    values = new String[]{{
                                                        add("dicta"),
                                                        add("harum"),
                                                    }};
                                                }}),
                                                add(new StatementGetResponseConditionConditions() {{
                                                    conditions = new String[]{{
                                                        add("accusamus"),
                                                        add("commodi"),
                                                    }};
                                                    key = "repudiandae";
                                                    operation = "quae";
                                                    values = new String[]{{
                                                        add("quidem"),
                                                    }};
                                                }}),
                                            }};
                                        }};
                                        effect = "molestias";
                                        operation = "excepturi";
                                        resource = "pariatur";
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

## policyDelete

Deletes a specific policy of the account by its ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PolicyDeleteRequest;
import org.openapis.openapi.models.operations.PolicyDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PolicyDeleteRequest req = new PolicyDeleteRequest("praesentium", "rem", "voluptates");            

            PolicyDeleteResponse res = sdk.policy.policyDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## policyEvaluate

This endpoint consults all policies and checks the ones that satisfy the request body’s conditions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PolicyEvaluateRequest;
import org.openapis.openapi.models.operations.PolicyEvaluateResponse;
import org.openapis.openapi.models.shared.EvaluatePolicyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PolicyEvaluateRequest req = new PolicyEvaluateRequest("quasi", "repudiandae",                 new EvaluatePolicyRequest(                new java.util.HashMap<String, Object>() {{
                                                put("veritatis", "itaque");
                                                put("incidunt", "enim");
                                                put("consequatur", "est");
                                            }}, "quibusdam"););            

            PolicyEvaluateResponse res = sdk.policy.policyEvaluate(req);

            if (res.policyActionGetResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## policyGet

Retrieves general information of a policy by its ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PolicyGetRequest;
import org.openapis.openapi.models.operations.PolicyGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PolicyGetRequest req = new PolicyGetRequest("explicabo", "deserunt", "distinctio");            

            PolicyGetResponse res = sdk.policy.policyGet(req);

            if (res.policyGetResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## policyList

Retrieves a list of all policies in the account and general information of each policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PolicyListRequest;
import org.openapis.openapi.models.operations.PolicyListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PolicyListRequest req = new PolicyListRequest("quibusdam", "labore");            

            PolicyListResponse res = sdk.policy.policyList(req);

            if (res.policyGetResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putApiPolicyEnginePoliciesId

Updates an existing policy at your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutApiPolicyEnginePoliciesIdRequest;
import org.openapis.openapi.models.operations.PutApiPolicyEnginePoliciesIdResponse;
import org.openapis.openapi.models.shared.PolicySaveRequest;
import org.openapis.openapi.models.shared.StatementGetResponse;
import org.openapis.openapi.models.shared.StatementGetResponseCondition;
import org.openapis.openapi.models.shared.StatementGetResponseConditionConditions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutApiPolicyEnginePoliciesIdRequest req = new PutApiPolicyEnginePoliciesIdRequest("modi", "qui",                 new PolicySaveRequest("aliquid", "cupiditate",                 new org.openapis.openapi.models.shared.StatementGetResponse[]{{
                                                add(new StatementGetResponse("accusamus") {{
                                                    actions = new Object[]{{
                                                        add("magni"),
                                                    }};
                                                    condition = new StatementGetResponseCondition() {{
                                                        conditions = new org.openapis.openapi.models.shared.StatementGetResponseConditionConditions[]{{
                                                            add(new StatementGetResponseConditionConditions() {{
                                                                conditions = new String[]{{
                                                                    add("alias"),
                                                                    add("fugit"),
                                                                }};
                                                                key = "dolorum";
                                                                operation = "excepturi";
                                                                values = new String[]{{
                                                                    add("facilis"),
                                                                    add("tempore"),
                                                                }};
                                                            }}),
                                                            add(new StatementGetResponseConditionConditions() {{
                                                                conditions = new String[]{{
                                                                    add("delectus"),
                                                                    add("eum"),
                                                                }};
                                                                key = "non";
                                                                operation = "eligendi";
                                                                values = new String[]{{
                                                                    add("aliquid"),
                                                                    add("provident"),
                                                                    add("necessitatibus"),
                                                                }};
                                                            }}),
                                                            add(new StatementGetResponseConditionConditions() {{
                                                                conditions = new String[]{{
                                                                    add("officia"),
                                                                    add("dolor"),
                                                                    add("debitis"),
                                                                }};
                                                                key = "a";
                                                                operation = "dolorum";
                                                                values = new String[]{{
                                                                    add("in"),
                                                                    add("illum"),
                                                                }};
                                                            }}),
                                                            add(new StatementGetResponseConditionConditions() {{
                                                                conditions = new String[]{{
                                                                    add("rerum"),
                                                                    add("dicta"),
                                                                    add("magnam"),
                                                                    add("cumque"),
                                                                }};
                                                                key = "facere";
                                                                operation = "ea";
                                                                values = new String[]{{
                                                                    add("laborum"),
                                                                    add("accusamus"),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    effect = "non";
                                                    operation = "occaecati";
                                                    resource = "enim";
                                                }}),
                                                add(new StatementGetResponse("sint") {{
                                                    actions = new Object[]{{
                                                        add("quidem"),
                                                        add("provident"),
                                                        add("nam"),
                                                        add("id"),
                                                    }};
                                                    condition = new StatementGetResponseCondition() {{
                                                        conditions = new org.openapis.openapi.models.shared.StatementGetResponseConditionConditions[]{{
                                                            add(new StatementGetResponseConditionConditions() {{
                                                                conditions = new String[]{{
                                                                    add("sapiente"),
                                                                    add("amet"),
                                                                    add("deserunt"),
                                                                }};
                                                                key = "nisi";
                                                                operation = "vel";
                                                                values = new String[]{{
                                                                    add("omnis"),
                                                                    add("molestiae"),
                                                                    add("perferendis"),
                                                                }};
                                                            }}),
                                                            add(new StatementGetResponseConditionConditions() {{
                                                                conditions = new String[]{{
                                                                    add("magnam"),
                                                                    add("distinctio"),
                                                                }};
                                                                key = "id";
                                                                operation = "labore";
                                                                values = new String[]{{
                                                                    add("suscipit"),
                                                                    add("natus"),
                                                                }};
                                                            }}),
                                                            add(new StatementGetResponseConditionConditions() {{
                                                                conditions = new String[]{{
                                                                    add("eum"),
                                                                    add("vero"),
                                                                    add("aspernatur"),
                                                                }};
                                                                key = "architecto";
                                                                operation = "magnam";
                                                                values = new String[]{{
                                                                    add("excepturi"),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    effect = "ullam";
                                                    operation = "provident";
                                                    resource = "quos";
                                                }}),
                                                add(new StatementGetResponse("quidem") {{
                                                    actions = new Object[]{{
                                                        add("mollitia"),
                                                    }};
                                                    condition = new StatementGetResponseCondition() {{
                                                        conditions = new org.openapis.openapi.models.shared.StatementGetResponseConditionConditions[]{{
                                                            add(new StatementGetResponseConditionConditions() {{
                                                                conditions = new String[]{{
                                                                    add("ad"),
                                                                    add("eum"),
                                                                    add("dolor"),
                                                                }};
                                                                key = "necessitatibus";
                                                                operation = "odit";
                                                                values = new String[]{{
                                                                    add("quasi"),
                                                                    add("iure"),
                                                                }};
                                                            }}),
                                                            add(new StatementGetResponseConditionConditions() {{
                                                                conditions = new String[]{{
                                                                    add("debitis"),
                                                                    add("eius"),
                                                                    add("maxime"),
                                                                    add("deleniti"),
                                                                }};
                                                                key = "facilis";
                                                                operation = "in";
                                                                values = new String[]{{
                                                                    add("architecto"),
                                                                }};
                                                            }}),
                                                            add(new StatementGetResponseConditionConditions() {{
                                                                conditions = new String[]{{
                                                                    add("ullam"),
                                                                    add("expedita"),
                                                                    add("nihil"),
                                                                    add("repellat"),
                                                                }};
                                                                key = "quibusdam";
                                                                operation = "sed";
                                                                values = new String[]{{
                                                                    add("pariatur"),
                                                                    add("accusantium"),
                                                                    add("consequuntur"),
                                                                    add("praesentium"),
                                                                }};
                                                            }}),
                                                            add(new StatementGetResponseConditionConditions() {{
                                                                conditions = new String[]{{
                                                                    add("magni"),
                                                                    add("sunt"),
                                                                    add("quo"),
                                                                }};
                                                                key = "illum";
                                                                operation = "pariatur";
                                                                values = new String[]{{
                                                                    add("ea"),
                                                                    add("excepturi"),
                                                                    add("odit"),
                                                                    add("ea"),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    effect = "accusantium";
                                                    operation = "ab";
                                                    resource = "maiores";
                                                }}),
                                            }});, "ipsam");            

            PutApiPolicyEnginePoliciesIdResponse res = sdk.policy.putApiPolicyEnginePoliciesId(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
