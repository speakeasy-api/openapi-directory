package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebinarUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=occurrence_id")
    public String occurrenceId;
    public WebinarUpdateQueryParams withOccurrenceId(String occurrenceId) {
        this.occurrenceId = occurrenceId;
        return this;
    }
}