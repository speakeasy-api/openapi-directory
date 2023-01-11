import dataclasses
from typing import Optional
from ..shared import modifiedstoredcredentialprofileresponse as shared_modifiedstoredcredentialprofileresponse


@dataclasses.dataclass
class PostExpireStoredCredentialProfilePathParams:
    payment_method_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payment-method-id', 'style': 'simple', 'explode': False }})
    profile_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'profile-number', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostExpireStoredCredentialProfileHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostExpireStoredCredentialProfileRequest:
    headers: PostExpireStoredCredentialProfileHeaders = dataclasses.field()
    path_params: PostExpireStoredCredentialProfilePathParams = dataclasses.field()
    

@dataclasses.dataclass
class PostExpireStoredCredentialProfileResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    modified_stored_credential_profile_response: Optional[shared_modifiedstoredcredentialprofileresponse.ModifiedStoredCredentialProfileResponse] = dataclasses.field(default=None)
    
