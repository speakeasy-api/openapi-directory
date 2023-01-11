import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class CreateSinglePaymentIntentHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateSinglePaymentIntentSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class CreateSinglePaymentIntentRequest:
    headers: CreateSinglePaymentIntentHeaders = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateSinglePaymentIntentSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateSinglePaymentIntentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_single_payment_intent_201_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_single_payment_intent_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_single_payment_intent_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_single_payment_intent_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_single_payment_intent_409_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_single_payment_intent_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_single_payment_intent_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
