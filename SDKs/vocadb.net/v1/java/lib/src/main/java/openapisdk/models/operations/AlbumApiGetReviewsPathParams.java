package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AlbumApiGetReviewsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public AlbumApiGetReviewsPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}