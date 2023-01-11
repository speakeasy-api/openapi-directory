package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AlbumApiGetUserCollectionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public AlbumApiGetUserCollectionsPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}