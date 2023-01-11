package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReleaseEventSeriesApiDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public ReleaseEventSeriesApiDeletePathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}