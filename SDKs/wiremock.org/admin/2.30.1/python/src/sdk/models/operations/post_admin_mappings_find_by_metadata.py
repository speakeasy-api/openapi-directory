import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostAdminMappingsFindByMetadataRequestBodyStringEquals:
    equal_to: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('equalTo') }})
    case_insensitive: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caseInsensitive') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAdminMappingsFindByMetadataRequestBodyStringContains:
    contains: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contains') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAdminMappingsFindByMetadataRequestBodyRegularExpressionMatch:
    matches: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('matches') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAdminMappingsFindByMetadataRequestBodyNegativeRegularExpressionMatch:
    does_not_match: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('doesNotMatch') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAdminMappingsFindByMetadataRequestBodyJSONEquals:
    equal_to_json: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('equalToJson') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAdminMappingsFindByMetadataRequestBodyJSONPathMatch:
    matches_json_path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchesJsonPath') }})
    ignore_array_order: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreArrayOrder') }})
    ignore_extra_elements: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreExtraElements') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAdminMappingsFindByMetadataRequestBodyXMLEquality:
    equal_to_xml: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('equalToXml') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAdminMappingsFindByMetadataRequestBodyXPathMatch:
    matches_xpath: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchesXpath') }})
    namespaces: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaces') }})
    value_pattern: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valuePattern') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAdminMappingsFindByMetadata200ApplicationJSONMappingsRequestBasicAuthCredentials:
    r"""PostAdminMappingsFindByMetadata200ApplicationJSONMappingsRequestBasicAuthCredentials
    Pre-emptive basic auth credentials to match against
    """
    
    password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    username: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAdminMappingsFindByMetadata200ApplicationJSONMappingsRequest:
    basic_auth_credentials: Optional[PostAdminMappingsFindByMetadata200ApplicationJSONMappingsRequestBasicAuthCredentials] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicAuthCredentials') }})
    body_patterns: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bodyPatterns') }})
    cookies: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookies') }})
    headers: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    method: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    query_parameters: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryParameters') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    url_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlPath') }})
    url_path_pattern: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlPathPattern') }})
    url_pattern: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlPattern') }})
    
class PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponseFaultEnum(str, Enum):
    CONNECTION_RESET_BY_PEER = "CONNECTION_RESET_BY_PEER"
    EMPTY_RESPONSE = "EMPTY_RESPONSE"
    MALFORMED_RESPONSE_CHUNK = "MALFORMED_RESPONSE_CHUNK"
    RANDOM_DATA_THEN_CLOSE = "RANDOM_DATA_THEN_CLOSE"


@dataclass_json
@dataclasses.dataclass
class PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponse:
    additional_proxy_request_headers: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalProxyRequestHeaders') }})
    base64_body: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('base64Body') }})
    body: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    body_file_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bodyFileName') }})
    fault: Optional[PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponseFaultEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fault') }})
    fixed_delay_milliseconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedDelayMilliseconds') }})
    from_configured_stub: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromConfiguredStub') }})
    headers: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    json_body: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jsonBody') }})
    proxy_base_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxyBaseUrl') }})
    status: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusMessage') }})
    transformer_parameters: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transformerParameters') }})
    transformers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transformers') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAdminMappingsFindByMetadata200ApplicationJSONMappings:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    metadata: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    new_scenario_state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newScenarioState') }})
    persistent: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('persistent') }})
    post_serve_actions: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postServeActions') }})
    priority: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    request: Optional[PostAdminMappingsFindByMetadata200ApplicationJSONMappingsRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request') }})
    required_scenario_state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requiredScenarioState') }})
    response: Optional[PostAdminMappingsFindByMetadata200ApplicationJSONMappingsResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    scenario_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scenarioName') }})
    uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAdminMappingsFindByMetadata200ApplicationJSONMeta:
    total: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAdminMappingsFindByMetadata200ApplicationJSON:
    mappings: Optional[list[PostAdminMappingsFindByMetadata200ApplicationJSONMappings]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mappings') }})
    meta: Optional[PostAdminMappingsFindByMetadata200ApplicationJSONMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class PostAdminMappingsFindByMetadataRequest:
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostAdminMappingsFindByMetadataResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_admin_mappings_find_by_metadata_200_application_json_object: Optional[PostAdminMappingsFindByMetadata200ApplicationJSON] = dataclasses.field(default=None)
    
