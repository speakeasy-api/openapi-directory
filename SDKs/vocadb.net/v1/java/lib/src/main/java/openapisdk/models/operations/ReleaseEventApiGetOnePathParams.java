package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReleaseEventApiGetOnePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public ReleaseEventApiGetOnePathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}