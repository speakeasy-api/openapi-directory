import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetRebalanceDetailsPathParams:
    rebalance_request_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'rebalance_request_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRebalanceDetailsHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRebalanceDetailsSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetRebalanceDetailsRequest:
    headers: GetRebalanceDetailsHeaders = dataclasses.field()
    path_params: GetRebalanceDetailsPathParams = dataclasses.field()
    security: GetRebalanceDetailsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetRebalanceDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_rebalance_details_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_rebalance_details_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_rebalance_details_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_rebalance_details_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_rebalance_details_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_rebalance_details_409_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_rebalance_details_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_rebalance_details_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
