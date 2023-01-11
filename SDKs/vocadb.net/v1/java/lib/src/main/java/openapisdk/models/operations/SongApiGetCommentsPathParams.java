package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SongApiGetCommentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public SongApiGetCommentsPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}