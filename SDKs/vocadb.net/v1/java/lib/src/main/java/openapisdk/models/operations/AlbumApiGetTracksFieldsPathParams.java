package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AlbumApiGetTracksFieldsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public AlbumApiGetTracksFieldsPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}