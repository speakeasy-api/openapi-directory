package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDigitalSignageContentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=folder_id")
    public String folderId;
    public ListDigitalSignageContentQueryParams withFolderId(String folderId) {
        this.folderId = folderId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public ListDigitalSignageContentQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public ListDigitalSignageContentQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public String type;
    public ListDigitalSignageContentQueryParams withType(String type) {
        this.type = type;
        return this;
    }
}