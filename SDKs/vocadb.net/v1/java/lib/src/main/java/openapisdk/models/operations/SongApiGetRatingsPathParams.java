package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SongApiGetRatingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public SongApiGetRatingsPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}