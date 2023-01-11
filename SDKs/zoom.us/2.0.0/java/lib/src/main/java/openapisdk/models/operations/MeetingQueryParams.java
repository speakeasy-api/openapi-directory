package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=occurrence_id")
    public String occurrenceId;
    public MeetingQueryParams withOccurrenceId(String occurrenceId) {
        this.occurrenceId = occurrenceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=show_previous_occurrences")
    public Boolean showPreviousOccurrences;
    public MeetingQueryParams withShowPreviousOccurrences(Boolean showPreviousOccurrences) {
        this.showPreviousOccurrences = showPreviousOccurrences;
        return this;
    }
}