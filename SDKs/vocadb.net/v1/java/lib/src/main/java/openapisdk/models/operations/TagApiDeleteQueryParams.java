package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagApiDeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=hardDelete")
    public Boolean hardDelete;
    public TagApiDeleteQueryParams withHardDelete(Boolean hardDelete) {
        this.hardDelete = hardDelete;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=notes")
    public String notes;
    public TagApiDeleteQueryParams withNotes(String notes) {
        this.notes = notes;
        return this;
    }
}