package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ArtistApiDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public ArtistApiDeletePathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}