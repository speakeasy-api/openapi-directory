package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AlbumApiGetOnePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public AlbumApiGetOnePathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}