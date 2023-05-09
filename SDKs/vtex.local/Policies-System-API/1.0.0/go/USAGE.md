<!-- Start SDK Example Usage -->
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
        Accept: "corrupti",
        ContentType: "provident",
        PolicySaveRequest: &shared.PolicySaveRequest{
            Description: "distinctio",
            Name: "Stuart Stiedemann",
            Statements: []shared.StatementGetResponse{
                shared.StatementGetResponse{
                    Actions: []interface{}{
                        "deserunt",
                        "suscipit",
                        "iure",
                    },
                    Condition: &shared.StatementGetResponseCondition{
                        Conditions: []shared.StatementGetResponseConditionConditions{
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "ipsa",
                                    "delectus",
                                    "tempora",
                                    "suscipit",
                                },
                                Key: sdk.String("molestiae"),
                                Operation: sdk.String("minus"),
                                Values: []string{
                                    "voluptatum",
                                    "iusto",
                                    "excepturi",
                                    "nisi",
                                },
                            },
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "temporibus",
                                    "ab",
                                    "quis",
                                    "veritatis",
                                },
                                Key: sdk.String("deserunt"),
                                Operation: sdk.String("perferendis"),
                                Values: []string{
                                    "repellendus",
                                    "sapiente",
                                },
                            },
                        },
                    },
                    Effect: "quo",
                    Operation: sdk.String("odit"),
                    Resource: sdk.String("at"),
                },
                shared.StatementGetResponse{
                    Actions: []interface{}{
                        "maiores",
                        "molestiae",
                        "quod",
                        "quod",
                    },
                    Condition: &shared.StatementGetResponseCondition{
                        Conditions: []shared.StatementGetResponseConditionConditions{
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "porro",
                                    "dolorum",
                                    "dicta",
                                },
                                Key: sdk.String("nam"),
                                Operation: sdk.String("officia"),
                                Values: []string{
                                    "fugit",
                                    "deleniti",
                                    "hic",
                                },
                            },
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "totam",
                                    "beatae",
                                    "commodi",
                                    "molestiae",
                                },
                                Key: sdk.String("modi"),
                                Operation: sdk.String("qui"),
                                Values: []string{
                                    "cum",
                                    "esse",
                                    "ipsum",
                                    "excepturi",
                                },
                            },
                        },
                    },
                    Effect: "aspernatur",
                    Operation: sdk.String("perferendis"),
                    Resource: sdk.String("ad"),
                },
            },
        },
        ID: "929396fe-a759-46eb-90fa-aa2352c59559",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->