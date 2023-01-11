package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveVideosFromProjectQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=should_delete_clips")
    public Boolean shouldDeleteClips;
    public RemoveVideosFromProjectQueryParams withShouldDeleteClips(Boolean shouldDeleteClips) {
        this.shouldDeleteClips = shouldDeleteClips;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uris")
    public String uris;
    public RemoveVideosFromProjectQueryParams withUris(String uris) {
        this.uris = uris;
        return this;
    }
}