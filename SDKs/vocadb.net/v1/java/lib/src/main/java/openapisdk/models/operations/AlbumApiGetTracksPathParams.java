package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AlbumApiGetTracksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public AlbumApiGetTracksPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}