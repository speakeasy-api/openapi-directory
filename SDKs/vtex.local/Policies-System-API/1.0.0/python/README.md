# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/vtex.local/Policies-System-API/1.0.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.PolicyCreateOrUpdateRequest(
    accept="corrupti",
    content_type="provident",
    policy_save_request=shared.PolicySaveRequest(
        description="distinctio",
        name="quibusdam",
        statements=[
            shared.StatementGetResponse(
                actions=[
                    "corrupti",
                    "illum",
                    "vel",
                    "error",
                ],
                condition=shared.StatementGetResponseCondition(
                    conditions=[
                        shared.StatementGetResponseConditionConditions(
                            conditions=[
                                "iure",
                                "magnam",
                            ],
                            key="debitis",
                            operation="ipsa",
                            values=[
                                "tempora",
                                "suscipit",
                                "molestiae",
                                "minus",
                            ],
                        ),
                        shared.StatementGetResponseConditionConditions(
                            conditions=[
                                "voluptatum",
                                "iusto",
                                "excepturi",
                                "nisi",
                            ],
                            key="recusandae",
                            operation="temporibus",
                            values=[
                                "quis",
                            ],
                        ),
                        shared.StatementGetResponseConditionConditions(
                            conditions=[
                                "deserunt",
                            ],
                            key="perferendis",
                            operation="ipsam",
                            values=[
                                "sapiente",
                                "quo",
                                "odit",
                                "at",
                            ],
                        ),
                    ],
                ),
                effect="at",
                operation="maiores",
                resource="molestiae",
            ),
            shared.StatementGetResponse(
                actions=[
                    "quod",
                    "esse",
                    "totam",
                    "porro",
                ],
                condition=shared.StatementGetResponseCondition(
                    conditions=[
                        shared.StatementGetResponseConditionConditions(
                            conditions=[
                                "nam",
                            ],
                            key="officia",
                            operation="occaecati",
                            values=[
                                "deleniti",
                            ],
                        ),
                        shared.StatementGetResponseConditionConditions(
                            conditions=[
                                "optio",
                                "totam",
                                "beatae",
                                "commodi",
                            ],
                            key="molestiae",
                            operation="modi",
                            values=[
                                "impedit",
                            ],
                        ),
                        shared.StatementGetResponseConditionConditions(
                            conditions=[
                                "esse",
                                "ipsum",
                                "excepturi",
                            ],
                            key="aspernatur",
                            operation="perferendis",
                            values=[
                                "natus",
                                "sed",
                            ],
                        ),
                    ],
                ),
                effect="iste",
                operation="dolor",
                resource="natus",
            ),
            shared.StatementGetResponse(
                actions=[
                    "hic",
                    "saepe",
                ],
                condition=shared.StatementGetResponseCondition(
                    conditions=[
                        shared.StatementGetResponseConditionConditions(
                            conditions=[
                                "corporis",
                                "iste",
                            ],
                            key="iure",
                            operation="saepe",
                            values=[
                                "architecto",
                                "ipsa",
                                "reiciendis",
                            ],
                        ),
                        shared.StatementGetResponseConditionConditions(
                            conditions=[
                                "mollitia",
                                "laborum",
                                "dolores",
                            ],
                            key="dolorem",
                            operation="corporis",
                            values=[
                                "nobis",
                            ],
                        ),
                        shared.StatementGetResponseConditionConditions(
                            conditions=[
                                "omnis",
                                "nemo",
                            ],
                            key="minima",
                            operation="excepturi",
                            values=[
                                "iure",
                            ],
                        ),
                    ],
                ),
                effect="culpa",
                operation="doloribus",
                resource="sapiente",
            ),
        ],
    ),
    id="architecto",
)
    
res = s.policy.policy_create_or_update(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### policy

* `policy_create_or_update` - Create Policy
* `policy_delete` - Delete Policy by ID
* `policy_evaluate` - Evaluate Policies
* `policy_get` - Get Policy by ID
* `policy_list` - Get Policy List
* `put_api_policy_engine_policies_id_` - Update Policy
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
