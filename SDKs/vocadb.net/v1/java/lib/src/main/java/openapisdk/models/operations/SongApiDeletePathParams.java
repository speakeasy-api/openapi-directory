package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SongApiDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public SongApiDeletePathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}