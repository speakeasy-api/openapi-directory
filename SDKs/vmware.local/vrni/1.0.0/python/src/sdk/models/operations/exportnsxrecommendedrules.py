import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import recommendedrulesrequest as shared_recommendedrulesrequest


@dataclasses.dataclass
class ExportNsxRecommendedRulesSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ExportNsxRecommendedRulesRequest:
    security: ExportNsxRecommendedRulesSecurity = dataclasses.field()
    request: Optional[shared_recommendedrulesrequest.RecommendedRulesRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ExportNsxRecommendedRulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    export_nsx_recommended_rules_200_application_octet_stream_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
