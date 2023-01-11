package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AlbumForUserForApiContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("album")
    public AlbumForApiContract album;
    public AlbumForUserForApiContract withAlbum(AlbumForApiContract album) {
        this.album = album;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mediaType")
    public AlbumForUserForApiContractMediaTypeEnum mediaType;
    public AlbumForUserForApiContract withMediaType(AlbumForUserForApiContractMediaTypeEnum mediaType) {
        this.mediaType = mediaType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchaseStatus")
    public AlbumForUserForApiContractPurchaseStatusEnum purchaseStatus;
    public AlbumForUserForApiContract withPurchaseStatus(AlbumForUserForApiContractPurchaseStatusEnum purchaseStatus) {
        this.purchaseStatus = purchaseStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rating")
    public Integer rating;
    public AlbumForUserForApiContract withRating(Integer rating) {
        this.rating = rating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public UserForApiContract user;
    public AlbumForUserForApiContract withUser(UserForApiContract user) {
        this.user = user;
        return this;
    }
}