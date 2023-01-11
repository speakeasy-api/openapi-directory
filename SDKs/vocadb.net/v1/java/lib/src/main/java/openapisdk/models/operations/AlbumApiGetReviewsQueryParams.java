package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AlbumApiGetReviewsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=languageCode")
    public String languageCode;
    public AlbumApiGetReviewsQueryParams withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
}