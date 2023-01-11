package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SongListApiGetSongsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=listId")
    public Integer listId;
    public SongListApiGetSongsPathParams withListId(Integer listId) {
        this.listId = listId;
        return this;
    }
}