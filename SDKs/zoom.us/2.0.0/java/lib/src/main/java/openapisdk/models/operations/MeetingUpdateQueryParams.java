package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=occurrence_id")
    public String occurrenceId;
    public MeetingUpdateQueryParams withOccurrenceId(String occurrenceId) {
        this.occurrenceId = occurrenceId;
        return this;
    }
}