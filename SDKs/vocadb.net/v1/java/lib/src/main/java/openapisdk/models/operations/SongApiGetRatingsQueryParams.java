package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SongApiGetRatingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public SongApiGetRatingsLangEnum lang;
    public SongApiGetRatingsQueryParams withLang(SongApiGetRatingsLangEnum lang) {
        this.lang = lang;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userFields")
    public SongApiGetRatingsUserFieldsEnum userFields;
    public SongApiGetRatingsQueryParams withUserFields(SongApiGetRatingsUserFieldsEnum userFields) {
        this.userFields = userFields;
        return this;
    }
}