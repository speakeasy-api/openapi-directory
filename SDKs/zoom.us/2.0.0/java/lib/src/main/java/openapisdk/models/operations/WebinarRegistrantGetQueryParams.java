package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebinarRegistrantGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=occurrence_id")
    public String occurrenceId;
    public WebinarRegistrantGetQueryParams withOccurrenceId(String occurrenceId) {
        this.occurrenceId = occurrenceId;
        return this;
    }
}