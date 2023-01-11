package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SongApiGetLyricsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=lyricsId")
    public Integer lyricsId;
    public SongApiGetLyricsPathParams withLyricsId(Integer lyricsId) {
        this.lyricsId = lyricsId;
        return this;
    }
}