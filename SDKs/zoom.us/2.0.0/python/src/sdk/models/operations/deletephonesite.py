import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class DeletePhoneSitePathParams:
    site_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'siteId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeletePhoneSiteQueryParams:
    transfer_site_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'transfer_site_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeletePhoneSiteSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeletePhoneSiteRequest:
    path_params: DeletePhoneSitePathParams = dataclasses.field()
    query_params: DeletePhoneSiteQueryParams = dataclasses.field()
    security: DeletePhoneSiteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeletePhoneSiteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    delete_phone_site_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
