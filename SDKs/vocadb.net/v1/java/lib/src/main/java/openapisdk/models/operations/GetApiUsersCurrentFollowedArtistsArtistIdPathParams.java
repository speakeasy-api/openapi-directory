package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiUsersCurrentFollowedArtistsArtistIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=artistId")
    public Integer artistId;
    public GetApiUsersCurrentFollowedArtistsArtistIdPathParams withArtistId(Integer artistId) {
        this.artistId = artistId;
        return this;
    }
}