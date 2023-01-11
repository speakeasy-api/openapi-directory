package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReleaseEventApiGetAlbumsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=eventId")
    public Integer eventId;
    public ReleaseEventApiGetAlbumsPathParams withEventId(Integer eventId) {
        this.eventId = eventId;
        return this;
    }
}