import dataclasses



@dataclasses.dataclass
class DeleteAdminRequestsRequestIDPathParams:
    request_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'requestId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAdminRequestsRequestIDRequest:
    path_params: DeleteAdminRequestsRequestIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAdminRequestsRequestIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
