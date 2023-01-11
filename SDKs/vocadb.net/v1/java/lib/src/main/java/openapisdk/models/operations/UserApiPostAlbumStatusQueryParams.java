package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserApiPostAlbumStatusQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=collectionStatus")
    public UserApiPostAlbumStatusCollectionStatusEnum collectionStatus;
    public UserApiPostAlbumStatusQueryParams withCollectionStatus(UserApiPostAlbumStatusCollectionStatusEnum collectionStatus) {
        this.collectionStatus = collectionStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mediaType")
    public UserApiPostAlbumStatusMediaTypeEnum mediaType;
    public UserApiPostAlbumStatusQueryParams withMediaType(UserApiPostAlbumStatusMediaTypeEnum mediaType) {
        this.mediaType = mediaType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rating")
    public Integer rating;
    public UserApiPostAlbumStatusQueryParams withRating(Integer rating) {
        this.rating = rating;
        return this;
    }
}