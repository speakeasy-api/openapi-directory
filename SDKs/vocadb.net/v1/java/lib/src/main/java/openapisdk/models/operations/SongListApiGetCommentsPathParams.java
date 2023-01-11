package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SongListApiGetCommentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=listId")
    public Integer listId;
    public SongListApiGetCommentsPathParams withListId(Integer listId) {
        this.listId = listId;
        return this;
    }
}