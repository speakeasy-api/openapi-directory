# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/vtex.local/Policies-System-API/1.0.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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
            ID: "unde",
        },
        Headers: operations.PolicyCreateOrUpdateHeaders{
            Accept: "deserunt",
            ContentType: "porro",
        },
        Request: &shared.PolicySaveRequest{
            Description: "nulla",
            Name: "id",
            Statements: []shared.StatementGetResponse{
                shared.StatementGetResponse{
                    Actions: []interface{}{
                        "nulla",
                        "nihil",
                        "fuga",
                    },
                    Condition: &shared.StatementGetResponseCondition{
                        Conditions: []shared.StatementGetResponseConditionConditions{
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "iusto",
                                    "ullam",
                                },
                                Key: "saepe",
                                Operation: "inventore",
                                Values: []string{
                                    "enim",
                                    "eum",
                                    "voluptatum",
                                    "autem",
                                },
                            },
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "non",
                                    "deleniti",
                                    "similique",
                                    "reprehenderit",
                                },
                                Key: "molestiae",
                                Operation: "quo",
                                Values: []string{
                                    "laboriosam",
                                },
                            },
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "est",
                                },
                                Key: "voluptatem",
                                Operation: "consequatur",
                                Values: []string{
                                    "a",
                                    "omnis",
                                    "eos",
                                    "accusamus",
                                },
                            },
                        },
                    },
                    Effect: "accusamus",
                    Operation: "reiciendis",
                    Resource: "rem",
                },
                shared.StatementGetResponse{
                    Actions: []interface{}{
                        "et",
                        "praesentium",
                        "occaecati",
                        "dolor",
                    },
                    Condition: &shared.StatementGetResponseCondition{
                        Conditions: []shared.StatementGetResponseConditionConditions{
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "quisquam",
                                },
                                Key: "rerum",
                                Operation: "culpa",
                                Values: []string{
                                    "sed",
                                },
                            },
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "possimus",
                                    "occaecati",
                                    "odit",
                                    "esse",
                                },
                                Key: "rem",
                                Operation: "voluptatem",
                                Values: []string{
                                    "est",
                                },
                            },
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "blanditiis",
                                    "numquam",
                                    "similique",
                                },
                                Key: "dolores",
                                Operation: "sit",
                                Values: []string{
                                    "et",
                                    "voluptatem",
                                },
                            },
                        },
                    },
                    Effect: "laborum",
                    Operation: "modi",
                    Resource: "et",
                },
                shared.StatementGetResponse{
                    Actions: []interface{}{
                        "earum",
                        "ut",
                    },
                    Condition: &shared.StatementGetResponseCondition{
                        Conditions: []shared.StatementGetResponseConditionConditions{
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "ea",
                                    "laborum",
                                },
                                Key: "iusto",
                                Operation: "ut",
                                Values: []string{
                                    "aspernatur",
                                    "inventore",
                                    "ut",
                                },
                            },
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "et",
                                    "libero",
                                    "ipsum",
                                },
                                Key: "non",
                                Operation: "ea",
                                Values: []string{
                                    "placeat",
                                },
                            },
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "est",
                                    "commodi",
                                },
                                Key: "quia",
                                Operation: "similique",
                                Values: []string{
                                    "odio",
                                },
                            },
                        },
                    },
                    Effect: "harum",
                    Operation: "doloribus",
                    Resource: "a",
                },
                shared.StatementGetResponse{
                    Actions: []interface{}{
                        "et",
                    },
                    Condition: &shared.StatementGetResponseCondition{
                        Conditions: []shared.StatementGetResponseConditionConditions{
                            shared.StatementGetResponseConditionConditions{
                                Conditions: []string{
                                    "neque",
                                    "asperiores",
                                    "et",
                                },
                                Key: "culpa",
                                Operation: "aliquam",
                                Values: []string{
                                    "totam",
                                    "voluptatum",
                                },
                            },
                        },
                    },
                    Effect: "et",
                    Operation: "fuga",
                    Resource: "nesciunt",
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### Policy

* `PolicyCreateOrUpdate` - Create Policy
* `PolicyDelete` - Delete Policy by ID
* `PolicyEvaluate` - Evaluate Policies
* `PolicyGet` - Get Policy by ID
* `PolicyList` - Get Policy List
* `PutAPIPolicyEnginePoliciesID` - Update Policy
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
