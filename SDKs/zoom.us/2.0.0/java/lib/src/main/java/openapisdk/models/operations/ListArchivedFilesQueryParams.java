package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListArchivedFilesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from")
    public String from;
    public ListArchivedFilesQueryParams withFrom(String from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public ListArchivedFilesQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public ListArchivedFilesQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query_data_type")
    public ListArchivedFilesQueryDataTypeEnum queryDataType;
    public ListArchivedFilesQueryParams withQueryDataType(ListArchivedFilesQueryDataTypeEnum queryDataType) {
        this.queryDataType = queryDataType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=to")
    public String to;
    public ListArchivedFilesQueryParams withTo(String to) {
        this.to = to;
        return this;
    }
}