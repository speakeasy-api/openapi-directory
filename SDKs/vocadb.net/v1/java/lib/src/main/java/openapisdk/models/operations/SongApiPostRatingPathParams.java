package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SongApiPostRatingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public SongApiPostRatingPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}