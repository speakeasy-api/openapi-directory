package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SongApiGetDerivedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public SongApiGetDerivedPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}