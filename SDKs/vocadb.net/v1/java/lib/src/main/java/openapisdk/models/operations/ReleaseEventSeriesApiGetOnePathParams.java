package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReleaseEventSeriesApiGetOnePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public ReleaseEventSeriesApiGetOnePathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}