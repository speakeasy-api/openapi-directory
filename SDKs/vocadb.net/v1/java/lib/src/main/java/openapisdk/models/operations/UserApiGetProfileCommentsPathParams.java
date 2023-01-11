package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserApiGetProfileCommentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public UserApiGetProfileCommentsPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}