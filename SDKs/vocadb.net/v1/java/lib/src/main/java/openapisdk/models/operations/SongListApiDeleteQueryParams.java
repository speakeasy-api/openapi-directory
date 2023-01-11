package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SongListApiDeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=hardDelete")
    public Boolean hardDelete;
    public SongListApiDeleteQueryParams withHardDelete(Boolean hardDelete) {
        this.hardDelete = hardDelete;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=notes")
    public String notes;
    public SongListApiDeleteQueryParams withNotes(String notes) {
        this.notes = notes;
        return this;
    }
}