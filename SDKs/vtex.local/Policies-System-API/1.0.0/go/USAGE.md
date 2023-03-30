<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.PolicyCreateOrUpdateRequest{
        PathParams: operations.PolicyCreateOrUpdatePathParams{
            ID: "corrupti",
        },
        Headers: operations.PolicyCreateOrUpdateHeaders{
            Accept: "provident",
            ContentType: "distinctio",
        },
        Request: &shared.PolicySaveRequest{
            Description: "quibusdam",
            Name: "unde",
            Statements: []shared.StatementGetResponse{
                shared.StatementGetResponse{
                    Actions: []interface{}{
                        "illum",
                        "vel",
                        "error",
                    },
                    Condition: &shared.StatementGetResponseCondition{
                        Conditions: []shared.StatementGetResponseConditionConditions{
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "iure",
                                    "magnam",
                                },
                                Key: "debitis",
                                Operation: "ipsa",
                                Values: []string{
                                    "tempora",
                                    "suscipit",
                                    "molestiae",
                                    "minus",
                                },
                            },
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "voluptatum",
                                    "iusto",
                                    "excepturi",
                                    "nisi",
                                },
                                Key: "recusandae",
                                Operation: "temporibus",
                                Values: []string{
                                    "quis",
                                },
                            },
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "deserunt",
                                },
                                Key: "perferendis",
                                Operation: "ipsam",
                                Values: []string{
                                    "sapiente",
                                    "quo",
                                    "odit",
                                    "at",
                                },
                            },
                        },
                    },
                    Effect: "at",
                    Operation: "maiores",
                    Resource: "molestiae",
                },
                shared.StatementGetResponse{
                    Actions: []interface{}{
                        "quod",
                        "esse",
                        "totam",
                        "porro",
                    },
                    Condition: &shared.StatementGetResponseCondition{
                        Conditions: []shared.StatementGetResponseConditionConditions{
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "nam",
                                },
                                Key: "officia",
                                Operation: "occaecati",
                                Values: []string{
                                    "deleniti",
                                },
                            },
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "optio",
                                    "totam",
                                    "beatae",
                                    "commodi",
                                },
                                Key: "molestiae",
                                Operation: "modi",
                                Values: []string{
                                    "impedit",
                                },
                            },
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "esse",
                                    "ipsum",
                                    "excepturi",
                                },
                                Key: "aspernatur",
                                Operation: "perferendis",
                                Values: []string{
                                    "natus",
                                    "sed",
                                },
                            },
                        },
                    },
                    Effect: "iste",
                    Operation: "dolor",
                    Resource: "natus",
                },
                shared.StatementGetResponse{
                    Actions: []interface{}{
                        "hic",
                        "saepe",
                    },
                    Condition: &shared.StatementGetResponseCondition{
                        Conditions: []shared.StatementGetResponseConditionConditions{
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "corporis",
                                    "iste",
                                },
                                Key: "iure",
                                Operation: "saepe",
                                Values: []string{
                                    "architecto",
                                    "ipsa",
                                    "reiciendis",
                                },
                            },
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "mollitia",
                                    "laborum",
                                    "dolores",
                                },
                                Key: "dolorem",
                                Operation: "corporis",
                                Values: []string{
                                    "nobis",
                                },
                            },
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "omnis",
                                    "nemo",
                                },
                                Key: "minima",
                                Operation: "excepturi",
                                Values: []string{
                                    "iure",
                                },
                            },
                        },
                    },
                    Effect: "culpa",
                    Operation: "doloribus",
                    Resource: "sapiente",
                },
                shared.StatementGetResponse{
                    Actions: []interface{}{
                        "mollitia",
                    },
                    Condition: &shared.StatementGetResponseCondition{
                        Conditions: []shared.StatementGetResponseConditionConditions{
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "consequuntur",
                                    "repellat",
                                    "mollitia",
                                },
                                Key: "occaecati",
                                Operation: "numquam",
                                Values: []string{
                                    "quam",
                                    "molestiae",
                                },
                            },
                        },
                    },
                    Effect: "velit",
                    Operation: "error",
                    Resource: "quia",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Policy.PolicyCreateOrUpdate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->