# Policy

### Available Operations

* [PolicyCreateOrUpdate](#policycreateorupdate) - Create Policy
* [PolicyDelete](#policydelete) - Delete Policy by ID
* [PolicyEvaluate](#policyevaluate) - Evaluate Policies
* [PolicyGet](#policyget) - Get Policy by ID
* [PolicyList](#policylist) - Get Policy List
* [PutAPIPolicyEnginePoliciesID](#putapipolicyenginepoliciesid) - Update Policy

## PolicyCreateOrUpdate

Creates a new policy from scratch.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Policy.PolicyCreateOrUpdate(ctx, operations.PolicyCreateOrUpdateRequest{
        Accept: "accusantium",
        ContentType: "iure",
        PolicySaveRequest: &shared.PolicySaveRequest{
            Description: "culpa",
            Name: "Darrin Brakus",
            Statements: []shared.StatementGetResponse{
                shared.StatementGetResponse{
                    Actions: []interface{}{
                        "repellat",
                    },
                    Condition: &shared.StatementGetResponseCondition{
                        Conditions: []shared.StatementGetResponseConditionConditions{
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "numquam",
                                    "commodi",
                                    "quam",
                                },
                                Key: sdk.String("molestiae"),
                                Operation: sdk.String("velit"),
                                Values: []string{
                                    "quia",
                                    "quis",
                                    "vitae",
                                },
                            },
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "animi",
                                    "enim",
                                    "odit",
                                },
                                Key: sdk.String("quo"),
                                Operation: sdk.String("sequi"),
                                Values: []string{
                                    "ipsam",
                                    "id",
                                    "possimus",
                                    "aut",
                                },
                            },
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "error",
                                },
                                Key: sdk.String("temporibus"),
                                Operation: sdk.String("laborum"),
                                Values: []string{
                                    "reiciendis",
                                },
                            },
                        },
                    },
                    Effect: "voluptatibus",
                    Operation: sdk.String("vero"),
                    Resource: sdk.String("nihil"),
                },
                shared.StatementGetResponse{
                    Actions: []interface{}{
                        "voluptatibus",
                        "ipsa",
                        "omnis",
                    },
                    Condition: &shared.StatementGetResponseCondition{
                        Conditions: []shared.StatementGetResponseConditionConditions{
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "perferendis",
                                    "doloremque",
                                    "reprehenderit",
                                },
                                Key: sdk.String("ut"),
                                Operation: sdk.String("maiores"),
                                Values: []string{
                                    "corporis",
                                },
                            },
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "iusto",
                                    "dicta",
                                },
                                Key: sdk.String("harum"),
                                Operation: sdk.String("enim"),
                                Values: []string{
                                    "commodi",
                                    "repudiandae",
                                    "quae",
                                    "ipsum",
                                },
                            },
                        },
                    },
                    Effect: "quidem",
                    Operation: sdk.String("molestias"),
                    Resource: sdk.String("excepturi"),
                },
                shared.StatementGetResponse{
                    Actions: []interface{}{
                        "modi",
                        "praesentium",
                        "rem",
                        "voluptates",
                    },
                    Condition: &shared.StatementGetResponseCondition{
                        Conditions: []shared.StatementGetResponseConditionConditions{
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "sint",
                                    "veritatis",
                                    "itaque",
                                    "incidunt",
                                },
                                Key: sdk.String("enim"),
                                Operation: sdk.String("consequatur"),
                                Values: []string{
                                    "quibusdam",
                                    "explicabo",
                                    "deserunt",
                                },
                            },
                        },
                    },
                    Effect: "distinctio",
                    Operation: sdk.String("quibusdam"),
                    Resource: sdk.String("labore"),
                },
            },
        },
        ID: "4269802d-502a-494b-b4f6-3c969e9a3efa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PolicyDelete

Deletes a specific policy of the account by its ID.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Policy.PolicyDelete(ctx, operations.PolicyDeleteRequest{
        Accept: "in",
        ContentType: "in",
        ID: "dfb14cd6-6ae3-495e-bb9b-a88f3a669970",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PolicyEvaluate

This endpoint consults all policies and checks the ones that satisfy the request body’s conditions.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Policy.PolicyEvaluate(ctx, operations.PolicyEvaluateRequest{
        Accept: "nihil",
        ContentType: "magnam",
        EvaluatePolicyRequest: shared.EvaluatePolicyRequest{
            Context: map[string]interface{}{
                "id": "labore",
                "labore": "suscipit",
                "natus": "nobis",
            },
            Resource: "eum",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PolicyActionGetResponses != nil {
        // handle response
    }
}
```

## PolicyGet

Retrieves general information of a policy by its ID.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Policy.PolicyGet(ctx, operations.PolicyGetRequest{
        Accept: "vero",
        ContentType: "aspernatur",
        ID: "14195989-0afa-4563-a251-6fe4c8b711e5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PolicyGetResponses != nil {
        // handle response
    }
}
```

## PolicyList

Retrieves a list of all policies in the account and general information of each policy.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Policy.PolicyList(ctx, operations.PolicyListRequest{
        Accept: "expedita",
        ContentType: "nihil",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PolicyGetResponses != nil {
        // handle response
    }
}
```

## PutAPIPolicyEnginePoliciesID

Updates an existing policy at your account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Policy.PutAPIPolicyEnginePoliciesID(ctx, operations.PutAPIPolicyEnginePoliciesIDRequest{
        Accept: "repellat",
        ContentType: "quibusdam",
        PolicySaveRequest: shared.PolicySaveRequest{
            Description: "sed",
            Name: "Al Bashirian",
            Statements: []shared.StatementGetResponse{
                shared.StatementGetResponse{
                    Actions: []interface{}{
                        "sunt",
                    },
                    Condition: &shared.StatementGetResponseCondition{
                        Conditions: []shared.StatementGetResponseConditionConditions{
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "pariatur",
                                    "maxime",
                                    "ea",
                                    "excepturi",
                                },
                                Key: sdk.String("odit"),
                                Operation: sdk.String("ea"),
                                Values: []string{
                                    "ab",
                                },
                            },
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "quidem",
                                    "ipsam",
                                    "voluptate",
                                    "autem",
                                },
                                Key: sdk.String("nam"),
                                Operation: sdk.String("eaque"),
                                Values: []string{
                                    "nemo",
                                    "voluptatibus",
                                    "perferendis",
                                    "fugiat",
                                },
                            },
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "aut",
                                },
                                Key: sdk.String("cumque"),
                                Operation: sdk.String("corporis"),
                                Values: []string{
                                    "libero",
                                    "nobis",
                                    "dolores",
                                    "quis",
                                },
                            },
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "dignissimos",
                                    "eaque",
                                    "quis",
                                },
                                Key: sdk.String("nesciunt"),
                                Operation: sdk.String("eos"),
                                Values: []string{
                                    "dolores",
                                },
                            },
                        },
                    },
                    Effect: "minus",
                    Operation: sdk.String("quam"),
                    Resource: sdk.String("dolor"),
                },
                shared.StatementGetResponse{
                    Actions: []interface{}{
                        "nostrum",
                        "hic",
                        "recusandae",
                        "omnis",
                    },
                    Condition: &shared.StatementGetResponseCondition{
                        Conditions: []shared.StatementGetResponseConditionConditions{
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "voluptatem",
                                    "porro",
                                    "consequuntur",
                                },
                                Key: sdk.String("blanditiis"),
                                Operation: sdk.String("error"),
                                Values: []string{
                                    "occaecati",
                                },
                            },
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "adipisci",
                                    "asperiores",
                                    "earum",
                                },
                                Key: sdk.String("modi"),
                                Operation: sdk.String("iste"),
                                Values: []string{
                                    "deleniti",
                                    "pariatur",
                                    "provident",
                                },
                            },
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "libero",
                                    "delectus",
                                    "quaerat",
                                    "quos",
                                },
                                Key: sdk.String("aliquid"),
                                Operation: sdk.String("dolorem"),
                                Values: []string{
                                    "dolor",
                                },
                            },
                        },
                    },
                    Effect: "qui",
                    Operation: sdk.String("ipsum"),
                    Resource: sdk.String("hic"),
                },
                shared.StatementGetResponse{
                    Actions: []interface{}{
                        "cum",
                        "voluptate",
                        "dignissimos",
                    },
                    Condition: &shared.StatementGetResponseCondition{
                        Conditions: []shared.StatementGetResponseConditionConditions{
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "dolorum",
                                },
                                Key: sdk.String("numquam"),
                                Operation: sdk.String("veritatis"),
                                Values: []string{
                                    "ipsa",
                                },
                            },
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "odio",
                                    "quaerat",
                                },
                                Key: sdk.String("accusamus"),
                                Operation: sdk.String("quidem"),
                                Values: []string{
                                    "voluptas",
                                    "natus",
                                    "eos",
                                    "atque",
                                },
                            },
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "fugiat",
                                },
                                Key: sdk.String("ab"),
                                Operation: sdk.String("soluta"),
                                Values: []string{
                                    "iusto",
                                    "voluptate",
                                    "dolorum",
                                },
                            },
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "omnis",
                                    "necessitatibus",
                                    "distinctio",
                                },
                                Key: sdk.String("asperiores"),
                                Operation: sdk.String("nihil"),
                                Values: []string{
                                    "voluptate",
                                },
                            },
                        },
                    },
                    Effect: "id",
                    Operation: sdk.String("saepe"),
                    Resource: sdk.String("eius"),
                },
            },
        },
        ID: "203ce5e6-a95d-48a0-9446-ce2af7a73cf3",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
