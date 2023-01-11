package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ArtistApiGetOnePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public ArtistApiGetOnePathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}