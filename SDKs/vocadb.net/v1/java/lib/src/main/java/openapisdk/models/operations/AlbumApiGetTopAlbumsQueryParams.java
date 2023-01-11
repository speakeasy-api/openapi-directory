package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AlbumApiGetTopAlbumsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public AlbumApiGetTopAlbumsFieldsEnum fields;
    public AlbumApiGetTopAlbumsQueryParams withFields(AlbumApiGetTopAlbumsFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ignoreIds")
    public Integer[] ignoreIds;
    public AlbumApiGetTopAlbumsQueryParams withIgnoreIds(Integer[] ignoreIds) {
        this.ignoreIds = ignoreIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=languagePreference")
    public AlbumApiGetTopAlbumsLanguagePreferenceEnum languagePreference;
    public AlbumApiGetTopAlbumsQueryParams withLanguagePreference(AlbumApiGetTopAlbumsLanguagePreferenceEnum languagePreference) {
        this.languagePreference = languagePreference;
        return this;
    }
}