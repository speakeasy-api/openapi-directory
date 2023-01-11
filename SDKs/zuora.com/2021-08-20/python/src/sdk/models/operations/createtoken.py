import dataclasses
from typing import Optional
from enum import Enum
from ..shared import tokenresponse as shared_tokenresponse


@dataclasses.dataclass
class CreateTokenHeaders:
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    
class CreateTokenRequestBodyGrantTypeEnum(str, Enum):
    CLIENT_CREDENTIALS = "client_credentials"


@dataclasses.dataclass
class CreateTokenRequestBody:
    client_id: str = dataclasses.field(metadata={'form': { 'field_name': 'client_id' }})
    client_secret: str = dataclasses.field(metadata={'form': { 'field_name': 'client_secret' }})
    grant_type: CreateTokenRequestBodyGrantTypeEnum = dataclasses.field(metadata={'form': { 'field_name': 'grant_type' }})
    

@dataclasses.dataclass
class CreateTokenRequest:
    headers: CreateTokenHeaders = dataclasses.field()
    request: CreateTokenRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class CreateTokenResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    token_response: Optional[shared_tokenresponse.TokenResponse] = dataclasses.field(default=None)
    
