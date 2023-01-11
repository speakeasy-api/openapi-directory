package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingRegistrantCreateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=occurrence_ids")
    public String occurrenceIds;
    public MeetingRegistrantCreateQueryParams withOccurrenceIds(String occurrenceIds) {
        this.occurrenceIds = occurrenceIds;
        return this;
    }
}