package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebinarQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=occurrence_id")
    public String occurrenceId;
    public WebinarQueryParams withOccurrenceId(String occurrenceId) {
        this.occurrenceId = occurrenceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=show_previous_occurrences")
    public Boolean showPreviousOccurrences;
    public WebinarQueryParams withShowPreviousOccurrences(Boolean showPreviousOccurrences) {
        this.showPreviousOccurrences = showPreviousOccurrences;
        return this;
    }
}