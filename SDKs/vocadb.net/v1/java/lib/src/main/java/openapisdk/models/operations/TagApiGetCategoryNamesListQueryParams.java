package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagApiGetCategoryNamesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nameMatchMode")
    public TagApiGetCategoryNamesListNameMatchModeEnum nameMatchMode;
    public TagApiGetCategoryNamesListQueryParams withNameMatchMode(TagApiGetCategoryNamesListNameMatchModeEnum nameMatchMode) {
        this.nameMatchMode = nameMatchMode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public TagApiGetCategoryNamesListQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
}