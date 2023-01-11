import dataclasses



@dataclasses.dataclass
class DeviceDeletePathParams:
    device_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeviceDeleteRequest:
    path_params: DeviceDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeviceDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
