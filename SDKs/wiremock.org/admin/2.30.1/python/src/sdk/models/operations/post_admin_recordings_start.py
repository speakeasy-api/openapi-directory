import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostAdminRecordingsStartRequestBodyCaptureHeaders:
    case_insensitive: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caseInsensitive') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAdminRecordingsStartRequestBodyExtractBodyCriteria:
    r"""PostAdminRecordingsStartRequestBodyExtractBodyCriteria
    Criteria for extracting response bodies to a separate file instead of including it in the stub mapping
    """
    
    binary_size_threshold: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('binarySizeThreshold') }})
    text_size_threshold: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textSizeThreshold') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials:
    r"""PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials
    Pre-emptive basic auth credentials to match against
    """
    
    password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    username: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAdminRecordingsStartRequestBodyFilters:
    basic_auth_credentials: Optional[PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicAuthCredentials') }})
    body_patterns: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bodyPatterns') }})
    cookies: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookies') }})
    headers: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    method: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    query_parameters: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryParameters') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    url_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlPath') }})
    url_path_pattern: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlPathPattern') }})
    url_pattern: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlPattern') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAdminRecordingsStartRequestBody:
    capture_headers: Optional[dict[str, PostAdminRecordingsStartRequestBodyCaptureHeaders]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('captureHeaders') }})
    extract_body_criteria: Optional[PostAdminRecordingsStartRequestBodyExtractBodyCriteria] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extractBodyCriteria') }})
    filters: Optional[PostAdminRecordingsStartRequestBodyFilters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    persist: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('persist') }})
    repeats_as_scenarios: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repeatsAsScenarios') }})
    request_body_pattern: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestBodyPattern') }})
    target_base_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetBaseUrl') }})
    transformer_parameters: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transformerParameters') }})
    transformers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transformers') }})
    

@dataclasses.dataclass
class PostAdminRecordingsStartRequest:
    request: PostAdminRecordingsStartRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostAdminRecordingsStartResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
