package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReleaseEventApiGetPublishedSongsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=eventId")
    public Integer eventId;
    public ReleaseEventApiGetPublishedSongsPathParams withEventId(Integer eventId) {
        this.eventId = eventId;
        return this;
    }
}