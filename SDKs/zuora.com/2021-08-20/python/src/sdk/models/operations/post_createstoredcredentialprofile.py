import dataclasses
from typing import Optional
from ..shared import createstoredcredentialprofilerequest as shared_createstoredcredentialprofilerequest
from ..shared import modifiedstoredcredentialprofileresponse as shared_modifiedstoredcredentialprofileresponse


@dataclasses.dataclass
class PostCreateStoredCredentialProfilePathParams:
    payment_method_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payment-method-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostCreateStoredCredentialProfileHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostCreateStoredCredentialProfileRequest:
    headers: PostCreateStoredCredentialProfileHeaders = dataclasses.field()
    path_params: PostCreateStoredCredentialProfilePathParams = dataclasses.field()
    request: shared_createstoredcredentialprofilerequest.CreateStoredCredentialProfileRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCreateStoredCredentialProfileResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    modified_stored_credential_profile_response: Optional[shared_modifiedstoredcredentialprofileresponse.ModifiedStoredCredentialProfileResponse] = dataclasses.field(default=None)
    
