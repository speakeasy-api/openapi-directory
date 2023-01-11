import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import recommendedrulesrequest as shared_recommendedrulesrequest
from ..shared import apierror as shared_apierror
from ..shared import recommendedrules as shared_recommendedrules


@dataclasses.dataclass
class ListRecommendedRulesSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ListRecommendedRulesRequest:
    security: ListRecommendedRulesSecurity = dataclasses.field()
    request: Optional[shared_recommendedrulesrequest.RecommendedRulesRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListRecommendedRulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    recommended_rules: Optional[shared_recommendedrules.RecommendedRules] = dataclasses.field(default=None)
    
