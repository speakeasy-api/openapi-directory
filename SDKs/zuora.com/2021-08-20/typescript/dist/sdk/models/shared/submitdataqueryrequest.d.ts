import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies whether Zuora compresses the query results.
 *
 * @remarks
 *
 */
export declare enum SubmitDataQueryRequestCompressionEnum {
    None = "NONE",
    Gzip = "GZIP",
    Zip = "ZIP"
}
/**
 * Set this field to `S3`.
 *
 * @remarks
 *
 */
export declare enum SubmitDataQueryRequestOutputTargetEnum {
    S3 = "S3"
}
/**
 * Additional information about the query results.
 *
 * @remarks
 *
 */
export declare class SubmitDataQueryRequestOutput extends SpeakeasyBase {
    /**
     * Set this field to `S3`.
     *
     * @remarks
     *
     */
    target: SubmitDataQueryRequestOutputTargetEnum;
}
/**
 * Specifies the format of the query results.
 *
 * @remarks
 *
 * * `JSON` - Each row in the query results will be a JSON object. The format of the query result file is [JSON Lines](http://jsonlines.org/).
 * * `CSV` - Each row in the query results will be a comma-separated list of values.
 * * `TSV` - Each row in the query results will be a tab-separated list of values.
 * * `DSV` - Pass any character as your custom delimiter into the `columnSeparator` field.
 *
 */
export declare enum SubmitDataQueryRequestOutputFormatEnum {
    Json = "JSON",
    Csv = "CSV",
    Tsv = "TSV",
    Dsv = "DSV"
}
/**
 * Specifiy that data queries run against the live transactional databases at Zuora (Data Query Live), or run against the optimized, replicated database at 12 hours freshness for high volume extraction (Data Query Unlimited).
 *
 * @remarks
 *
 * **Note**: Data Query Unlimited is an Early Adopter feature.  If you want to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
 *
 * * `DATAHUB` - Data queries run against the optimized, replicated database at 12 hours freshness for high volume extraction (Data Query Unlimited). Data Query Unlimited is an Early Adopter feature.  If you want to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
 * * `LIVE` - Data queries run against the live transactional databases at Zuora (Data Query Live).
 *
 * The default value is `LIVE`.
 *
 */
export declare enum SubmitDataQueryRequestSourceDataEnum {
    Datahub = "DATAHUB",
    Live = "LIVE"
}
export declare class SubmitDataQueryRequest extends SpeakeasyBase {
    /**
     * The column separator. Only applicable if the `outputFormat` is `DSV`.
     *
     * @remarks
     *
     */
    columnSeparator?: string;
    /**
     * Specifies whether Zuora compresses the query results.
     *
     * @remarks
     *
     */
    compression: SubmitDataQueryRequestCompressionEnum;
    /**
     * Base-64 encoded public key of an RSA key-pair.
     *
     * @remarks
     *
     * Note that Data Query only supports 1024-bit RSA keys.
     *
     * If you set this field, Zuora encrypts the query results using the provided public key. You must use the corresponding private key to decrypt the query results.
     *
     */
    encryptionKey?: string;
    /**
     * Additional information about the query results.
     *
     * @remarks
     *
     */
    output: SubmitDataQueryRequestOutput;
    /**
     * Specifies the format of the query results.
     *
     * @remarks
     *
     * * `JSON` - Each row in the query results will be a JSON object. The format of the query result file is [JSON Lines](http://jsonlines.org/).
     * * `CSV` - Each row in the query results will be a comma-separated list of values.
     * * `TSV` - Each row in the query results will be a tab-separated list of values.
     * * `DSV` - Pass any character as your custom delimiter into the `columnSeparator` field.
     *
     */
    outputFormat: SubmitDataQueryRequestOutputFormatEnum;
    /**
     * The query to perform. See [SQL Queries in Data Query](https://knowledgecenter.zuora.com/DC_Developers/BA_Data_Query/BA_SQL_Queries_in_Data_Query) for more information.
     *
     * @remarks
     *
     */
    query: string;
    /**
     * Indicates whether the query will retrieve only the deleted record. If `readDeleted` is set to `false` or it is not included in the request body, the query will retrieve only the non-deleted records. If it is set to `true`, only the deleted records will be retrieved.
     *
     * @remarks
     *
     * Note that Data Query is subject to Zuora Data Retention Policy. The retention period of deleted data is 30 days. You can only retrieve deleted data for 30 days through Data Query.
     *
     */
    readDeleted?: boolean;
    /**
     * Specifiy that data queries run against the live transactional databases at Zuora (Data Query Live), or run against the optimized, replicated database at 12 hours freshness for high volume extraction (Data Query Unlimited).
     *
     * @remarks
     *
     * **Note**: Data Query Unlimited is an Early Adopter feature.  If you want to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     *
     * * `DATAHUB` - Data queries run against the optimized, replicated database at 12 hours freshness for high volume extraction (Data Query Unlimited). Data Query Unlimited is an Early Adopter feature.  If you want to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     * * `LIVE` - Data queries run against the live transactional databases at Zuora (Data Query Live).
     *
     * The default value is `LIVE`.
     *
     */
    sourceData?: SubmitDataQueryRequestSourceDataEnum;
    /**
     * Indicates whether to use Index Join. Index join is useful when you have a specific reference value in your WHERE clause to index another large table by. See [Use Index Join](https://knowledgecenter.zuora.com/DC_Developers/BA_Data_Query/Best_practices_of_Data_Query#Use_Index_Join) for more information.
     */
    useIndexJoin?: boolean;
}
