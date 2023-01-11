import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteInternalCallOutCountryPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    country_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'countryId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteInternalCallOutCountryRequest:
    path_params: DeleteInternalCallOutCountryPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteInternalCallOutCountryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    delete_internal_call_out_country_204_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
