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
        Accept: "corrupti",
        ContentType: "provident",
        PolicySaveRequest: &shared.PolicySaveRequest{
            Description: "distinctio",
            Name: "quibusdam",
            Statements: []shared.StatementGetResponse{
                shared.StatementGetResponse{
                    Actions: []interface{}{
                        "corrupti",
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
            },
        },
        ID: "architecto",
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
## Available Resources and Operations


### Policy

* `PolicyCreateOrUpdate` - Create Policy
* `PolicyDelete` - Delete Policy by ID
* `PolicyEvaluate` - Evaluate Policies
* `PolicyGet` - Get Policy by ID
* `PolicyList` - Get Policy List
* `PutAPIPolicyEnginePoliciesID` - Update Policy
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
