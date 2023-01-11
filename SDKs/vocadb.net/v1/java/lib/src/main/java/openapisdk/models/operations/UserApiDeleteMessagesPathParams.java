package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserApiDeleteMessagesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public UserApiDeleteMessagesPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}