package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReleaseEventApiPostReportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=eventId")
    public Integer eventId;
    public ReleaseEventApiPostReportPathParams withEventId(Integer eventId) {
        this.eventId = eventId;
        return this;
    }
}