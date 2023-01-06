package shared

type SubmitDataQueryRequestCompressionEnum string

const (
	SubmitDataQueryRequestCompressionEnumNone SubmitDataQueryRequestCompressionEnum = "NONE"
	SubmitDataQueryRequestCompressionEnumGzip SubmitDataQueryRequestCompressionEnum = "GZIP"
	SubmitDataQueryRequestCompressionEnumZip  SubmitDataQueryRequestCompressionEnum = "ZIP"
)

type SubmitDataQueryRequestOutputTargetEnum string

const (
	SubmitDataQueryRequestOutputTargetEnumS3 SubmitDataQueryRequestOutputTargetEnum = "S3"
)

// SubmitDataQueryRequestOutput
// Additional information about the query results.
type SubmitDataQueryRequestOutput struct {
	Target SubmitDataQueryRequestOutputTargetEnum `json:"target"`
}

type SubmitDataQueryRequestOutputFormatEnum string

const (
	SubmitDataQueryRequestOutputFormatEnumJSON SubmitDataQueryRequestOutputFormatEnum = "JSON"
	SubmitDataQueryRequestOutputFormatEnumCsv  SubmitDataQueryRequestOutputFormatEnum = "CSV"
	SubmitDataQueryRequestOutputFormatEnumTsv  SubmitDataQueryRequestOutputFormatEnum = "TSV"
	SubmitDataQueryRequestOutputFormatEnumDsv  SubmitDataQueryRequestOutputFormatEnum = "DSV"
)

type SubmitDataQueryRequestSourceDataEnum string

const (
	SubmitDataQueryRequestSourceDataEnumDatahub SubmitDataQueryRequestSourceDataEnum = "DATAHUB"
	SubmitDataQueryRequestSourceDataEnumLive    SubmitDataQueryRequestSourceDataEnum = "LIVE"
)

type SubmitDataQueryRequest struct {
	ColumnSeparator *string                                `json:"columnSeparator,omitempty"`
	Compression     SubmitDataQueryRequestCompressionEnum  `json:"compression"`
	EncryptionKey   *string                                `json:"encryptionKey,omitempty"`
	Output          SubmitDataQueryRequestOutput           `json:"output"`
	OutputFormat    SubmitDataQueryRequestOutputFormatEnum `json:"outputFormat"`
	Query           string                                 `json:"query"`
	ReadDeleted     *bool                                  `json:"readDeleted,omitempty"`
	SourceData      *SubmitDataQueryRequestSourceDataEnum  `json:"sourceData,omitempty"`
	UseIndexJoin    *bool                                  `json:"useIndexJoin,omitempty"`
}
