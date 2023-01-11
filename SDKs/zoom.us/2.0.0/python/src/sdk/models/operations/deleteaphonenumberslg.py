import dataclasses



@dataclasses.dataclass
class DeleteAPhoneNumberSlgPathParams:
    phone_number_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'phoneNumberId', 'style': 'simple', 'explode': False }})
    shared_line_group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sharedLineGroupId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAPhoneNumberSlgRequest:
    path_params: DeleteAPhoneNumberSlgPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAPhoneNumberSlgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
