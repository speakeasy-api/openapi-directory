package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserApiGetArtistForUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=artistId")
    public Integer artistId;
    public UserApiGetArtistForUserPathParams withArtistId(Integer artistId) {
        this.artistId = artistId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public UserApiGetArtistForUserPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}