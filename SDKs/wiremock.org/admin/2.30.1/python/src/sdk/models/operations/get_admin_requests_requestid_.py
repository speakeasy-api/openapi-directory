import dataclasses



@dataclasses.dataclass
class GetAdminRequestsRequestIDPathParams:
    request_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'requestId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAdminRequestsRequestIDRequest:
    path_params: GetAdminRequestsRequestIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAdminRequestsRequestIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
