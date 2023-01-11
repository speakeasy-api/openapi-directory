import dataclasses
from typing import Optional
from ..shared import getstoredcredentialprofilesresponse as shared_getstoredcredentialprofilesresponse


@dataclasses.dataclass
class GetStoredCredentialProfilesPathParams:
    payment_method_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payment-method-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetStoredCredentialProfilesQueryParams:
    include_all: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeAll', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetStoredCredentialProfilesHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetStoredCredentialProfilesRequest:
    headers: GetStoredCredentialProfilesHeaders = dataclasses.field()
    path_params: GetStoredCredentialProfilesPathParams = dataclasses.field()
    query_params: GetStoredCredentialProfilesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetStoredCredentialProfilesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_stored_credential_profiles_response: Optional[shared_getstoredcredentialprofilesresponse.GetStoredCredentialProfilesResponse] = dataclasses.field(default=None)
    
