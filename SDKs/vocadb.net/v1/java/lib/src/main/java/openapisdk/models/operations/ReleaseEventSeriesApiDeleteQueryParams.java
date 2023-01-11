package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReleaseEventSeriesApiDeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=hardDelete")
    public Boolean hardDelete;
    public ReleaseEventSeriesApiDeleteQueryParams withHardDelete(Boolean hardDelete) {
        this.hardDelete = hardDelete;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=notes")
    public String notes;
    public ReleaseEventSeriesApiDeleteQueryParams withNotes(String notes) {
        this.notes = notes;
        return this;
    }
}