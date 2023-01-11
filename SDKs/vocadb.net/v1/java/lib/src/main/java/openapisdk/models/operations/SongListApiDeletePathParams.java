package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SongListApiDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public SongListApiDeletePathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}