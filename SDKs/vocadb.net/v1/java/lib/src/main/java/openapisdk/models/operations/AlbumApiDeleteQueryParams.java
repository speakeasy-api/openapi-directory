package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AlbumApiDeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=notes")
    public String notes;
    public AlbumApiDeleteQueryParams withNotes(String notes) {
        this.notes = notes;
        return this;
    }
}