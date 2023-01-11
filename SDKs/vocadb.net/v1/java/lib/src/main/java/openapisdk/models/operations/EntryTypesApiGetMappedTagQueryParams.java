package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EntryTypesApiGetMappedTagQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public EntryTypesApiGetMappedTagFieldsEnum fields;
    public EntryTypesApiGetMappedTagQueryParams withFields(EntryTypesApiGetMappedTagFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
}