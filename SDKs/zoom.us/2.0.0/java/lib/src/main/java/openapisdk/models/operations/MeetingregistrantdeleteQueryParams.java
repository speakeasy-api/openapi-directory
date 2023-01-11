package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingregistrantdeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=occurrence_id")
    public String occurrenceId;
    public MeetingregistrantdeleteQueryParams withOccurrenceId(String occurrenceId) {
        this.occurrenceId = occurrenceId;
        return this;
    }
}