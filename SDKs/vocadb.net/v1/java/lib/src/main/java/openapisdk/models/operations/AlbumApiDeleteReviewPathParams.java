package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AlbumApiDeleteReviewPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public AlbumApiDeleteReviewPathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=reviewId")
    public Integer reviewId;
    public AlbumApiDeleteReviewPathParams withReviewId(Integer reviewId) {
        this.reviewId = reviewId;
        return this;
    }
}