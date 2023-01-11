package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ArtistApiDeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=notes")
    public String notes;
    public ArtistApiDeleteQueryParams withNotes(String notes) {
        this.notes = notes;
        return this;
    }
}