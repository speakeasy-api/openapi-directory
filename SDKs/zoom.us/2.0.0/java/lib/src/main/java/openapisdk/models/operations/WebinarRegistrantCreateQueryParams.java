package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebinarRegistrantCreateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=occurrence_ids")
    public String occurrenceIds;
    public WebinarRegistrantCreateQueryParams withOccurrenceIds(String occurrenceIds) {
        this.occurrenceIds = occurrenceIds;
        return this;
    }
}