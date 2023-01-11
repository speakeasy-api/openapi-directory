import dataclasses
from typing import Optional
from ..shared import postgeneratebillingdocumenttype as shared_postgeneratebillingdocumenttype
from ..shared import generatebillingdocumentresponsetype as shared_generatebillingdocumentresponsetype


@dataclasses.dataclass
class PostGenerateBillingDocumentsPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostGenerateBillingDocumentsHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostGenerateBillingDocumentsRequest:
    headers: PostGenerateBillingDocumentsHeaders = dataclasses.field()
    path_params: PostGenerateBillingDocumentsPathParams = dataclasses.field()
    request: shared_postgeneratebillingdocumenttype.PostGenerateBillingDocumentType = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostGenerateBillingDocumentsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    generate_billing_document_response_type: Optional[shared_generatebillingdocumentresponsetype.GenerateBillingDocumentResponseType] = dataclasses.field(default=None)
    
