import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class ExecuteSellTrasactionHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ExecuteSellTrasactionSellTransactionRequestInstructionBuySell:
    r"""ExecuteSellTrasactionSellTransactionRequestInstructionBuySell
    Definition of an single instruction(buy|sell)
    """
    
    investment_product_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('investment_product_id') }})
    client_order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_order_id') }})
    quantity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class ExecuteSellTrasactionSellTransactionRequest:
    r"""ExecuteSellTrasactionSellTransactionRequest
    Definition of an sell transaction request
    """
    
    pot_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pot_id') }})
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    sell_instructions: list[ExecuteSellTrasactionSellTransactionRequestInstructionBuySell] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sell_instructions') }})
    

@dataclasses.dataclass
class ExecuteSellTrasactionSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ExecuteSellTrasactionRequest:
    headers: ExecuteSellTrasactionHeaders = dataclasses.field()
    security: ExecuteSellTrasactionSecurity = dataclasses.field()
    request: Optional[ExecuteSellTrasactionSellTransactionRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ExecuteSellTrasactionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    execute_sell_trasaction_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    execute_sell_trasaction_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    execute_sell_trasaction_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    execute_sell_trasaction_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    execute_sell_trasaction_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    execute_sell_trasaction_409_application_json_any: Optional[Any] = dataclasses.field(default=None)
    execute_sell_trasaction_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    execute_sell_trasaction_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
