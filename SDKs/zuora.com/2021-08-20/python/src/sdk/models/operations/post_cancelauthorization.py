import dataclasses
from typing import Optional
from ..shared import postvoidauthorize as shared_postvoidauthorize
from ..shared import postvoidauthorizeresponse as shared_postvoidauthorizeresponse


@dataclasses.dataclass
class PostCancelAuthorizationPathParams:
    payment_method_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payment-method-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostCancelAuthorizationHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostCancelAuthorizationRequest:
    headers: PostCancelAuthorizationHeaders = dataclasses.field()
    path_params: PostCancelAuthorizationPathParams = dataclasses.field()
    request: shared_postvoidauthorize.PostVoidAuthorize = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCancelAuthorizationResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_void_authorize_response: Optional[shared_postvoidauthorizeresponse.PostVoidAuthorizeResponse] = dataclasses.field(default=None)
    
