package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SubmitDataQueryRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columnSeparator")
    public String columnSeparator;
    public SubmitDataQueryRequest withColumnSeparator(String columnSeparator) {
        this.columnSeparator = columnSeparator;
        return this;
    }
    @JsonProperty("compression")
    public SubmitDataQueryRequestCompressionEnum compression;
    public SubmitDataQueryRequest withCompression(SubmitDataQueryRequestCompressionEnum compression) {
        this.compression = compression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionKey")
    public String encryptionKey;
    public SubmitDataQueryRequest withEncryptionKey(String encryptionKey) {
        this.encryptionKey = encryptionKey;
        return this;
    }
    @JsonProperty("output")
    public SubmitDataQueryRequestOutput output;
    public SubmitDataQueryRequest withOutput(SubmitDataQueryRequestOutput output) {
        this.output = output;
        return this;
    }
    @JsonProperty("outputFormat")
    public SubmitDataQueryRequestOutputFormatEnum outputFormat;
    public SubmitDataQueryRequest withOutputFormat(SubmitDataQueryRequestOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
    @JsonProperty("query")
    public String query;
    public SubmitDataQueryRequest withQuery(String query) {
        this.query = query;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readDeleted")
    public Boolean readDeleted;
    public SubmitDataQueryRequest withReadDeleted(Boolean readDeleted) {
        this.readDeleted = readDeleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceData")
    public SubmitDataQueryRequestSourceDataEnum sourceData;
    public SubmitDataQueryRequest withSourceData(SubmitDataQueryRequestSourceDataEnum sourceData) {
        this.sourceData = sourceData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useIndexJoin")
    public Boolean useIndexJoin;
    public SubmitDataQueryRequest withUseIndexJoin(Boolean useIndexJoin) {
        this.useIndexJoin = useIndexJoin;
        return this;
    }
}