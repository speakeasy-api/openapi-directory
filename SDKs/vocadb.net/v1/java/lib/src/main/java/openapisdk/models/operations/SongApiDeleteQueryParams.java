package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SongApiDeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=notes")
    public String notes;
    public SongApiDeleteQueryParams withNotes(String notes) {
        this.notes = notes;
        return this;
    }
}