package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveVideosFromProjectAlt1QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=should_delete_clips")
    public Boolean shouldDeleteClips;
    public RemoveVideosFromProjectAlt1QueryParams withShouldDeleteClips(Boolean shouldDeleteClips) {
        this.shouldDeleteClips = shouldDeleteClips;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uris")
    public String uris;
    public RemoveVideosFromProjectAlt1QueryParams withUris(String uris) {
        this.uris = uris;
        return this;
    }
}