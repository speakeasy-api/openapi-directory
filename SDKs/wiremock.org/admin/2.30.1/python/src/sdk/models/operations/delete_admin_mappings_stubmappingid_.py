import dataclasses



@dataclasses.dataclass
class DeleteAdminMappingsStubMappingIDPathParams:
    stub_mapping_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'stubMappingId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAdminMappingsStubMappingIDRequest:
    path_params: DeleteAdminMappingsStubMappingIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAdminMappingsStubMappingIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
