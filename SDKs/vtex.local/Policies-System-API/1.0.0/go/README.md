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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Policy](docs/policy/README.md)

* [PolicyCreateOrUpdate](docs/policy/README.md#policycreateorupdate) - Create Policy
* [PolicyDelete](docs/policy/README.md#policydelete) - Delete Policy by ID
* [PolicyEvaluate](docs/policy/README.md#policyevaluate) - Evaluate Policies
* [PolicyGet](docs/policy/README.md#policyget) - Get Policy by ID
* [PolicyList](docs/policy/README.md#policylist) - Get Policy List
* [PutAPIPolicyEnginePoliciesID](docs/policy/README.md#putapipolicyenginepoliciesid) - Update Policy
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
