<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        azure_auth=shared.SchemeAzureAuth(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    )
)
    
req = operations.ApplicationsCreateRequest(
    path_params=operations.ApplicationsCreatePathParams(
        tenant_id="consequatur",
    ),
    query_params=operations.ApplicationsCreateQueryParams(
        api_version="et",
    ),
    request=operations.ApplicationsCreateRequests(
        application_create_parameters=shared.ApplicationCreateParameters(
            allow_guests_sign_in=True,
            allow_passthrough_users=True,
            app_logo_url="enim",
            app_permissions=[
                "ipsam",
                "atque",
                "mollitia",
            ],
            app_roles=[
                shared.AppRole(
                    allowed_member_types=[
                        "velit",
                        "eveniet",
                        "quidem",
                    ],
                    description="unde",
                    display_name="et",
                    id="quasi",
                    is_enabled=False,
                    value="quia",
                ),
                shared.AppRole(
                    allowed_member_types=[
                        "aut",
                        "error",
                        "id",
                    ],
                    description="optio",
                    display_name="voluptates",
                    id="nisi",
                    is_enabled=True,
                    value="omnis",
                ),
            ],
            available_to_other_tenants=False,
            display_name="nesciunt",
            error_url="est",
            group_membership_claims="None",
            homepage="sequi",
            identifier_uris=[
                "quis",
            ],
            informational_urls=shared.InformationalURL(
                marketing="iusto",
                privacy="architecto",
                support="dolorem",
                terms_of_service="recusandae",
            ),
            is_device_only_auth_supported=False,
            key_credentials=[
                {
                    "optio": {
                        "placeat": "sed",
                        "veniam": "nostrum",
                        "dolores": "dicta",
                    },
                },
            ],
            known_client_applications=[
                "dolore",
            ],
            logout_url="natus",
            oauth2_allow_implicit_flow=True,
            oauth2_allow_url_path_matching=True,
            oauth2_permissions=[
                shared.OAuth2Permission(
                    admin_consent_description="sint",
                    admin_consent_display_name="quibusdam",
                    id="modi",
                    is_enabled=False,
                    type="id",
                    user_consent_description="nesciunt",
                    user_consent_display_name="aut",
                    value="itaque",
                ),
                shared.OAuth2Permission(
                    admin_consent_description="quia",
                    admin_consent_display_name="quia",
                    id="dolores",
                    is_enabled=False,
                    type="beatae",
                    user_consent_description="iste",
                    user_consent_display_name="neque",
                    value="tempore",
                ),
            ],
            oauth2_require_post_response=False,
            optional_claims=shared.OptionalClaims(
                access_token=[
                    shared.OptionalClaim(
                        additional_properties={
                            "quia": "sapiente",
                            "iure": "officia",
                            "veritatis": "quia",
                        },
                        essential=True,
                        name="labore",
                        source="nam",
                    ),
                    shared.OptionalClaim(
                        additional_properties={
                            "voluptatum": "quo",
                        },
                        essential=False,
                        name="est",
                        source="corporis",
                    ),
                    shared.OptionalClaim(
                        additional_properties={
                            "cumque": "officiis",
                            "est": "ad",
                        },
                        essential=True,
                        name="omnis",
                        source="cupiditate",
                    ),
                ],
                id_token=[
                    shared.OptionalClaim(
                        additional_properties={
                            "molestias": "rerum",
                        },
                        essential=False,
                        name="optio",
                        source="fugiat",
                    ),
                    shared.OptionalClaim(
                        additional_properties={
                            "voluptas": "unde",
                        },
                        essential=True,
                        name="recusandae",
                        source="quia",
                    ),
                    shared.OptionalClaim(
                        additional_properties={
                            "odio": "sunt",
                            "numquam": "consectetur",
                            "iste": "culpa",
                        },
                        essential=True,
                        name="quis",
                        source="delectus",
                    ),
                ],
                saml_token=[
                    shared.OptionalClaim(
                        additional_properties={
                            "aut": "natus",
                        },
                        essential=False,
                        name="iste",
                        source="facere",
                    ),
                    shared.OptionalClaim(
                        additional_properties={
                            "est": "similique",
                            "iusto": "asperiores",
                            "soluta": "repellendus",
                        },
                        essential=True,
                        name="sequi",
                        source="veniam",
                    ),
                ],
            ),
            org_restrictions=[
                "enim",
                "sint",
            ],
            password_credentials=[
                {
                    "minima": {
                        "similique": "non",
                        "qui": "enim",
                    },
                    "ipsum": {
                        "et": "pariatur",
                        "et": "dolore",
                    },
                },
                {
                    "rerum": {
                        "sed": "consequatur",
                        "laborum": "ratione",
                        "sapiente": "rerum",
                    },
                    "cupiditate": {
                        "odit": "maiores",
                        "laborum": "sunt",
                        "ab": "eum",
                    },
                },
                {
                    "voluptate": {
                        "quaerat": "animi",
                    },
                    "maxime": {
                        "nam": "voluptas",
                    },
                    "veritatis": {
                        "ipsa": "qui",
                        "quo": "illum",
                        "nesciunt": "rerum",
                    },
                },
            ],
            pre_authorized_applications=[
                shared.PreAuthorizedApplication(
                    app_id="nulla",
                    extensions=[
                        shared.PreAuthorizedApplicationExtension(
                            conditions=[
                                "a",
                                "esse",
                                "sint",
                            ],
                        ),
                        shared.PreAuthorizedApplicationExtension(
                            conditions=[
                                "illo",
                                "et",
                                "et",
                            ],
                        ),
                        shared.PreAuthorizedApplicationExtension(
                            conditions=[
                                "accusamus",
                                "quidem",
                            ],
                        ),
                    ],
                    permissions=[
                        shared.PreAuthorizedApplicationPermission(
                            access_grants=[
                                "nihil",
                            ],
                            direct_access_grant=False,
                        ),
                        shared.PreAuthorizedApplicationPermission(
                            access_grants=[
                                "commodi",
                                "voluptates",
                            ],
                            direct_access_grant=False,
                        ),
                        shared.PreAuthorizedApplicationPermission(
                            access_grants=[
                                "quo",
                                "aut",
                                "quibusdam",
                            ],
                            direct_access_grant=False,
                        ),
                    ],
                ),
            ],
            public_client=True,
            publisher_domain="et",
            reply_urls=[
                "facere",
            ],
            required_resource_access=[
                {
                    "occaecati": {
                        "debitis": "non",
                        "eligendi": "consequatur",
                        "reprehenderit": "delectus",
                    },
                    "ut": {
                        "perspiciatis": "porro",
                        "architecto": "officiis",
                        "at": "repudiandae",
                    },
                },
            ],
            saml_metadata_url="vel",
            sign_in_audience="recusandae",
            www_homepage="quo",
        ),
        application_create_parameters1=shared.ApplicationCreateParameters(
            allow_guests_sign_in=False,
            allow_passthrough_users=True,
            app_logo_url="iure",
            app_permissions=[
                "omnis",
                "consequatur",
            ],
            app_roles=[
                shared.AppRole(
                    allowed_member_types=[
                        "iusto",
                        "sed",
                        "laboriosam",
                    ],
                    description="quia",
                    display_name="voluptatum",
                    id="iure",
                    is_enabled=False,
                    value="est",
                ),
                shared.AppRole(
                    allowed_member_types=[
                        "soluta",
                        "voluptatem",
                    ],
                    description="repellat",
                    display_name="ducimus",
                    id="et",
                    is_enabled=False,
                    value="magni",
                ),
                shared.AppRole(
                    allowed_member_types=[
                        "excepturi",
                        "a",
                        "illum",
                    ],
                    description="provident",
                    display_name="dolorum",
                    id="corporis",
                    is_enabled=True,
                    value="iusto",
                ),
            ],
            available_to_other_tenants=True,
            display_name="repellendus",
            error_url="et",
            group_membership_claims="SecurityGroup",
            homepage="omnis",
            identifier_uris=[
                "consequatur",
                "et",
            ],
            informational_urls=shared.InformationalURL(
                marketing="sit",
                privacy="atque",
                support="nemo",
                terms_of_service="ut",
            ),
            is_device_only_auth_supported=False,
            key_credentials=[
                {
                    "omnis": {
                        "numquam": "illo",
                    },
                    "et": {
                        "dolor": "soluta",
                        "maxime": "delectus",
                    },
                    "aut": {
                        "laborum": "suscipit",
                    },
                },
            ],
            known_client_applications=[
                "velit",
                "dolorem",
            ],
            logout_url="delectus",
            oauth2_allow_implicit_flow=True,
            oauth2_allow_url_path_matching=False,
            oauth2_permissions=[
                shared.OAuth2Permission(
                    admin_consent_description="sapiente",
                    admin_consent_display_name="voluptates",
                    id="nam",
                    is_enabled=False,
                    type="eligendi",
                    user_consent_description="est",
                    user_consent_display_name="facilis",
                    value="error",
                ),
                shared.OAuth2Permission(
                    admin_consent_description="aliquam",
                    admin_consent_display_name="sapiente",
                    id="voluptas",
                    is_enabled=False,
                    type="repellendus",
                    user_consent_description="doloribus",
                    user_consent_display_name="voluptatem",
                    value="autem",
                ),
                shared.OAuth2Permission(
                    admin_consent_description="delectus",
                    admin_consent_display_name="labore",
                    id="corrupti",
                    is_enabled=False,
                    type="animi",
                    user_consent_description="repellendus",
                    user_consent_display_name="et",
                    value="excepturi",
                ),
            ],
            oauth2_require_post_response=True,
            optional_claims=shared.OptionalClaims(
                access_token=[
                    shared.OptionalClaim(
                        additional_properties={
                            "sapiente": "quos",
                            "optio": "autem",
                        },
                        essential=False,
                        name="delectus",
                        source="impedit",
                    ),
                    shared.OptionalClaim(
                        additional_properties={
                            "sunt": "itaque",
                        },
                        essential=True,
                        name="tempora",
                        source="repellat",
                    ),
                ],
                id_token=[
                    shared.OptionalClaim(
                        additional_properties={
                            "accusamus": "dolor",
                            "asperiores": "vitae",
                            "numquam": "facilis",
                        },
                        essential=True,
                        name="voluptate",
                        source="ut",
                    ),
                    shared.OptionalClaim(
                        additional_properties={
                            "quos": "ut",
                            "dicta": "provident",
                        },
                        essential=True,
                        name="blanditiis",
                        source="vero",
                    ),
                ],
                saml_token=[
                    shared.OptionalClaim(
                        additional_properties={
                            "vitae": "ducimus",
                        },
                        essential=True,
                        name="repellendus",
                        source="rerum",
                    ),
                    shared.OptionalClaim(
                        additional_properties={
                            "consequatur": "eligendi",
                            "reiciendis": "fugit",
                        },
                        essential=True,
                        name="vero",
                        source="blanditiis",
                    ),
                ],
            ),
            org_restrictions=[
                "dolor",
                "ab",
                "dolores",
            ],
            password_credentials=[
                {
                    "velit": {
                        "et": "voluptas",
                    },
                    "sint": {
                        "aut": "cum",
                        "rem": "saepe",
                    },
                    "fugiat": {
                        "et": "laborum",
                        "molestiae": "sunt",
                        "in": "enim",
                    },
                },
            ],
            pre_authorized_applications=[
                shared.PreAuthorizedApplication(
                    app_id="consectetur",
                    extensions=[
                        shared.PreAuthorizedApplicationExtension(
                            conditions=[
                                "ducimus",
                                "unde",
                            ],
                        ),
                        shared.PreAuthorizedApplicationExtension(
                            conditions=[
                                "nihil",
                                "consequatur",
                            ],
                        ),
                        shared.PreAuthorizedApplicationExtension(
                            conditions=[
                                "necessitatibus",
                                "sit",
                                "nulla",
                            ],
                        ),
                    ],
                    permissions=[
                        shared.PreAuthorizedApplicationPermission(
                            access_grants=[
                                "minima",
                                "dicta",
                                "et",
                            ],
                            direct_access_grant=True,
                        ),
                    ],
                ),
            ],
            public_client=False,
            publisher_domain="ut",
            reply_urls=[
                "eius",
                "necessitatibus",
            ],
            required_resource_access=[
                {
                    "ut": {
                        "eligendi": "aut",
                        "quo": "aut",
                        "rerum": "dolorem",
                    },
                    "veniam": {
                        "placeat": "aut",
                        "aperiam": "vel",
                    },
                },
                {
                    "ex": {
                        "facere": "enim",
                        "et": "sit",
                    },
                    "qui": {
                        "repudiandae": "rerum",
                        "est": "doloremque",
                        "et": "pariatur",
                    },
                    "architecto": {
                        "id": "ipsa",
                        "porro": "pariatur",
                    },
                },
                {
                    "odit": {
                        "perferendis": "consectetur",
                    },
                    "delectus": {
                        "nulla": "aut",
                        "placeat": "est",
                        "officiis": "repellendus",
                    },
                },
            ],
            saml_metadata_url="debitis",
            sign_in_audience="minus",
            www_homepage="et",
        ),
    ),
)
    
res = s.application.applications_create(req)

if res.application is not None:
    # handle response
```
<!-- End SDK Example Usage -->