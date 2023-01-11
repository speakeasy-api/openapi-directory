package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserApiGetCurrentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public UserApiGetCurrentFieldsEnum fields;
    public UserApiGetCurrentQueryParams withFields(UserApiGetCurrentFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
}