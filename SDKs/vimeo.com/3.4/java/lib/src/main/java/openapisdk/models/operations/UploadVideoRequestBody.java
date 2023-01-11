package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UploadVideoRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content_rating")
    public String[] contentRating;
    public UploadVideoRequestBody withContentRating(String[] contentRating) {
        this.contentRating = contentRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UploadVideoRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embed")
    public UploadVideoRequestBodyEmbed embed;
    public UploadVideoRequestBody withEmbed(UploadVideoRequestBodyEmbed embed) {
        this.embed = embed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license")
    public UploadVideoRequestBodyLicenseEnum license;
    public UploadVideoRequestBody withLicense(UploadVideoRequestBodyLicenseEnum license) {
        this.license = license;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locale")
    public String locale;
    public UploadVideoRequestBody withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UploadVideoRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public UploadVideoRequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacy")
    public UploadVideoRequestBodyPrivacy privacy;
    public UploadVideoRequestBody withPrivacy(UploadVideoRequestBodyPrivacy privacy) {
        this.privacy = privacy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ratings")
    public UploadVideoRequestBodyRatings ratings;
    public UploadVideoRequestBody withRatings(UploadVideoRequestBodyRatings ratings) {
        this.ratings = ratings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("review_page")
    public UploadVideoRequestBodyReviewPage reviewPage;
    public UploadVideoRequestBody withReviewPage(UploadVideoRequestBodyReviewPage reviewPage) {
        this.reviewPage = reviewPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spatial")
    public UploadVideoRequestBodySpatial spatial;
    public UploadVideoRequestBody withSpatial(UploadVideoRequestBodySpatial spatial) {
        this.spatial = spatial;
        return this;
    }
    @JsonProperty("upload")
    public UploadVideoRequestBodyUpload upload;
    public UploadVideoRequestBody withUpload(UploadVideoRequestBodyUpload upload) {
        this.upload = upload;
        return this;
    }
}