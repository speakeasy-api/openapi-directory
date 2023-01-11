package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingRegistrantStatusQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=occurrence_id")
    public String occurrenceId;
    public MeetingRegistrantStatusQueryParams withOccurrenceId(String occurrenceId) {
        this.occurrenceId = occurrenceId;
        return this;
    }
}