package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFoldersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetFoldersSortEnum sort;
    public GetFoldersQueryParams withSort(GetFoldersSortEnum sort) {
        this.sort = sort;
        return this;
    }
}