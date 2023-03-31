<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        azure_auth="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
)


req = operations.ApplicationsCreateRequest(
    application_create_parameters=shared.ApplicationCreateParameters(
        allow_guests_sign_in=False,
        allow_passthrough_users=False,
        app_logo_url="corrupti",
        app_permissions=[
            "distinctio",
            "quibusdam",
            "unde",
        ],
        app_roles=[
            shared.AppRole(
                allowed_member_types=[
                    "illum",
                    "vel",
                    "error",
                ],
                description="deserunt",
                display_name="suscipit",
                id="iure",
                is_enabled=False,
                value="magnam",
            ),
            shared.AppRole(
                allowed_member_types=[
                    "ipsa",
                    "delectus",
                    "tempora",
                    "suscipit",
                ],
                description="molestiae",
                display_name="minus",
                id="placeat",
                is_enabled=False,
                value="voluptatum",
            ),
            shared.AppRole(
                allowed_member_types=[
                    "excepturi",
                    "nisi",
                ],
                description="recusandae",
                display_name="temporibus",
                id="ab",
                is_enabled=False,
                value="quis",
            ),
            shared.AppRole(
                allowed_member_types=[
                    "deserunt",
                ],
                description="perferendis",
                display_name="ipsam",
                id="repellendus",
                is_enabled=False,
                value="sapiente",
            ),
        ],
        available_to_other_tenants=False,
        display_name="quo",
        error_url="odit",
        group_membership_claims="All",
        homepage="at",
        identifier_uris=[
            "molestiae",
            "quod",
            "quod",
            "esse",
        ],
        informational_urls=shared.InformationalURL(
            marketing="totam",
            privacy="porro",
            support="dolorum",
            terms_of_service="dicta",
        ),
        is_device_only_auth_supported=False,
        key_credentials=[
            {
                "occaecati": {
                    "deleniti": "hic",
                },
                "optio": {
                    "beatae": "commodi",
                    "molestiae": "modi",
                    "qui": "impedit",
                },
                "cum": {
                    "ipsum": "excepturi",
                    "aspernatur": "perferendis",
                },
            },
            {
                "natus": {
                    "iste": "dolor",
                },
                "natus": {
                    "hic": "saepe",
                    "fuga": "in",
                },
            },
            {
                "iste": {
                    "saepe": "quidem",
                    "architecto": "ipsa",
                },
                "reiciendis": {
                    "mollitia": "laborum",
                    "dolores": "dolorem",
                    "corporis": "explicabo",
                },
            },
        ],
        known_client_applications=[
            "enim",
            "omnis",
            "nemo",
            "minima",
        ],
        logout_url="excepturi",
        oauth2_allow_implicit_flow=False,
        oauth2_allow_url_path_matching=False,
        oauth2_permissions=[
            shared.OAuth2Permission(
                admin_consent_description="iure",
                admin_consent_display_name="culpa",
                id="doloribus",
                is_enabled=False,
                type="sapiente",
                user_consent_description="architecto",
                user_consent_display_name="mollitia",
                value="dolorem",
            ),
        ],
        oauth2_require_post_response=False,
        optional_claims=shared.OptionalClaims(
            access_token=[
                shared.OptionalClaim(
                    additional_properties={
                        "repellat": "mollitia",
                    },
                    essential=False,
                    name="occaecati",
                    source="numquam",
                ),
                shared.OptionalClaim(
                    additional_properties={
                        "quam": "molestiae",
                        "velit": "error",
                    },
                    essential=False,
                    name="quia",
                    source="quis",
                ),
                shared.OptionalClaim(
                    additional_properties={
                        "laborum": "animi",
                    },
                    essential=False,
                    name="enim",
                    source="odit",
                ),
            ],
            id_token=[
                shared.OptionalClaim(
                    additional_properties={
                        "tenetur": "ipsam",
                    },
                    essential=False,
                    name="id",
                    source="possimus",
                ),
                shared.OptionalClaim(
                    additional_properties={
                        "quasi": "error",
                    },
                    essential=False,
                    name="temporibus",
                    source="laborum",
                ),
                shared.OptionalClaim(
                    additional_properties={
                        "reiciendis": "voluptatibus",
                    },
                    essential=False,
                    name="vero",
                    source="nihil",
                ),
                shared.OptionalClaim(
                    additional_properties={
                        "voluptatibus": "ipsa",
                        "omnis": "voluptate",
                        "cum": "perferendis",
                    },
                    essential=False,
                    name="doloremque",
                    source="reprehenderit",
                ),
            ],
            saml_token=[
                shared.OptionalClaim(
                    additional_properties={
                        "dicta": "corporis",
                        "dolore": "iusto",
                        "dicta": "harum",
                        "enim": "accusamus",
                    },
                    essential=False,
                    name="commodi",
                    source="repudiandae",
                ),
                shared.OptionalClaim(
                    additional_properties={
                        "ipsum": "quidem",
                    },
                    essential=False,
                    name="molestias",
                    source="excepturi",
                ),
            ],
        ),
        org_restrictions=[
            "modi",
            "praesentium",
            "rem",
            "voluptates",
        ],
        password_credentials=[
            {
                "sint": {
                    "itaque": "incidunt",
                },
                "enim": {
                    "est": "quibusdam",
                },
                "explicabo": {
                    "distinctio": "quibusdam",
                    "labore": "modi",
                    "qui": "aliquid",
                },
                "cupiditate": {
                    "perferendis": "magni",
                    "assumenda": "ipsam",
                    "alias": "fugit",
                },
            },
        ],
        pre_authorized_applications=[
            shared.PreAuthorizedApplication(
                app_id="excepturi",
                extensions=[
                    shared.PreAuthorizedApplicationExtension(
                        conditions=[
                            "tempore",
                            "labore",
                            "delectus",
                        ],
                    ),
                    shared.PreAuthorizedApplicationExtension(
                        conditions=[
                            "non",
                            "eligendi",
                        ],
                    ),
                ],
                permissions=[
                    shared.PreAuthorizedApplicationPermission(
                        access_grants=[
                            "provident",
                            "necessitatibus",
                        ],
                        direct_access_grant=False,
                    ),
                    shared.PreAuthorizedApplicationPermission(
                        access_grants=[
                            "officia",
                            "dolor",
                            "debitis",
                        ],
                        direct_access_grant=False,
                    ),
                    shared.PreAuthorizedApplicationPermission(
                        access_grants=[
                            "dolorum",
                            "in",
                            "in",
                            "illum",
                        ],
                        direct_access_grant=False,
                    ),
                ],
            ),
            shared.PreAuthorizedApplication(
                app_id="maiores",
                extensions=[
                    shared.PreAuthorizedApplicationExtension(
                        conditions=[
                            "magnam",
                        ],
                    ),
                    shared.PreAuthorizedApplicationExtension(
                        conditions=[
                            "facere",
                            "ea",
                            "aliquid",
                            "laborum",
                        ],
                    ),
                    shared.PreAuthorizedApplicationExtension(
                        conditions=[
                            "non",
                            "occaecati",
                            "enim",
                            "accusamus",
                        ],
                    ),
                ],
                permissions=[
                    shared.PreAuthorizedApplicationPermission(
                        access_grants=[
                            "provident",
                            "nam",
                            "id",
                        ],
                        direct_access_grant=False,
                    ),
                    shared.PreAuthorizedApplicationPermission(
                        access_grants=[
                            "deleniti",
                            "sapiente",
                            "amet",
                        ],
                        direct_access_grant=False,
                    ),
                    shared.PreAuthorizedApplicationPermission(
                        access_grants=[
                            "nisi",
                            "vel",
                            "natus",
                        ],
                        direct_access_grant=False,
                    ),
                    shared.PreAuthorizedApplicationPermission(
                        access_grants=[
                            "molestiae",
                            "perferendis",
                            "nihil",
                        ],
                        direct_access_grant=False,
                    ),
                ],
            ),
            shared.PreAuthorizedApplication(
                app_id="magnam",
                extensions=[
                    shared.PreAuthorizedApplicationExtension(
                        conditions=[
                            "labore",
                            "labore",
                            "suscipit",
                        ],
                    ),
                    shared.PreAuthorizedApplicationExtension(
                        conditions=[
                            "nobis",
                            "eum",
                            "vero",
                        ],
                    ),
                    shared.PreAuthorizedApplicationExtension(
                        conditions=[
                            "architecto",
                        ],
                    ),
                ],
                permissions=[
                    shared.PreAuthorizedApplicationPermission(
                        access_grants=[
                            "excepturi",
                        ],
                        direct_access_grant=False,
                    ),
                    shared.PreAuthorizedApplicationPermission(
                        access_grants=[
                            "provident",
                            "quos",
                        ],
                        direct_access_grant=False,
                    ),
                ],
            ),
        ],
        public_client=False,
        publisher_domain="sint",
        reply_urls=[
            "mollitia",
        ],
        required_resource_access=[
            {
                "ad": {
                    "dolor": "necessitatibus",
                    "odit": "nemo",
                },
                "quasi": {
                    "doloribus": "debitis",
                    "eius": "maxime",
                },
                "deleniti": {
                    "in": "architecto",
                    "architecto": "repudiandae",
                    "ullam": "expedita",
                },
            },
            {
                "repellat": {
                    "sed": "saepe",
                    "pariatur": "accusantium",
                    "consequuntur": "praesentium",
                    "natus": "magni",
                },
                "sunt": {
                    "illum": "pariatur",
                    "maxime": "ea",
                    "excepturi": "odit",
                    "ea": "accusantium",
                },
            },
            {
                "maiores": {
                    "ipsam": "voluptate",
                    "autem": "nam",
                    "eaque": "pariatur",
                },
            },
            {
                "voluptatibus": {
                    "fugiat": "amet",
                },
                "aut": {
                    "corporis": "hic",
                    "libero": "nobis",
                    "dolores": "quis",
                    "totam": "dignissimos",
                },
            },
        ],
        saml_metadata_url="eaque",
        sign_in_audience="quis",
        www_homepage="nesciunt",
    ),
    api_version="eos",
    tenant_id="perferendis",
)
    
res = s.application.applications_create(req)

if res.application is not None:
    # handle response
```
<!-- End SDK Example Usage -->