package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AlbumApiGetTracksFieldsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=discNumber")
    public Integer discNumber;
    public AlbumApiGetTracksFieldsQueryParams withDiscNumber(Integer discNumber) {
        this.discNumber = discNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=field")
    public String[] field;
    public AlbumApiGetTracksFieldsQueryParams withField(String[] field) {
        this.field = field;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public AlbumApiGetTracksFieldsLangEnum lang;
    public AlbumApiGetTracksFieldsQueryParams withLang(AlbumApiGetTracksFieldsLangEnum lang) {
        this.lang = lang;
        return this;
    }
}