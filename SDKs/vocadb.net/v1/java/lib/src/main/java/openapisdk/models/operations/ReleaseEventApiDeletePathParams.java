package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReleaseEventApiDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public ReleaseEventApiDeletePathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}