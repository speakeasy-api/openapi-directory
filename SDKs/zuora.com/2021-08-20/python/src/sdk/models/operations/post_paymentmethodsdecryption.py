import dataclasses
from typing import Optional
from ..shared import postpaymentmethoddecryption as shared_postpaymentmethoddecryption
from ..shared import postpaymentmethodresponsedecryption as shared_postpaymentmethodresponsedecryption


@dataclasses.dataclass
class PostPaymentMethodsDecryptionHeaders:
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostPaymentMethodsDecryptionRequest:
    headers: PostPaymentMethodsDecryptionHeaders = dataclasses.field()
    request: shared_postpaymentmethoddecryption.PostPaymentMethodDecryption = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostPaymentMethodsDecryptionResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_payment_method_response_decryption: Optional[shared_postpaymentmethodresponsedecryption.PostPaymentMethodResponseDecryption] = dataclasses.field(default=None)
    
