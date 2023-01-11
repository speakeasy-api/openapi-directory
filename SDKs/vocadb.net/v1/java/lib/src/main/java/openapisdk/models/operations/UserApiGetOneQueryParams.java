package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserApiGetOneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public UserApiGetOneFieldsEnum fields;
    public UserApiGetOneQueryParams withFields(UserApiGetOneFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
}