"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitDataQueryRequest = exports.SubmitDataQueryRequestSourceDataEnum = exports.SubmitDataQueryRequestOutputFormatEnum = exports.SubmitDataQueryRequestOutput = exports.SubmitDataQueryRequestOutputTargetEnum = exports.SubmitDataQueryRequestCompressionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var class_transformer_1 = require("class-transformer");
/**
 * Specifies whether Zuora compresses the query results.
 *
 * @remarks
 *
 */
var SubmitDataQueryRequestCompressionEnum;
(function (SubmitDataQueryRequestCompressionEnum) {
    SubmitDataQueryRequestCompressionEnum["None"] = "NONE";
    SubmitDataQueryRequestCompressionEnum["Gzip"] = "GZIP";
    SubmitDataQueryRequestCompressionEnum["Zip"] = "ZIP";
})(SubmitDataQueryRequestCompressionEnum = exports.SubmitDataQueryRequestCompressionEnum || (exports.SubmitDataQueryRequestCompressionEnum = {}));
/**
 * Set this field to `S3`.
 *
 * @remarks
 *
 */
var SubmitDataQueryRequestOutputTargetEnum;
(function (SubmitDataQueryRequestOutputTargetEnum) {
    SubmitDataQueryRequestOutputTargetEnum["S3"] = "S3";
})(SubmitDataQueryRequestOutputTargetEnum = exports.SubmitDataQueryRequestOutputTargetEnum || (exports.SubmitDataQueryRequestOutputTargetEnum = {}));
/**
 * Additional information about the query results.
 *
 * @remarks
 *
 */
var SubmitDataQueryRequestOutput = /** @class */ (function (_super) {
    __extends(SubmitDataQueryRequestOutput, _super);
    function SubmitDataQueryRequestOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "target" }),
        __metadata("design:type", String)
    ], SubmitDataQueryRequestOutput.prototype, "target", void 0);
    return SubmitDataQueryRequestOutput;
}(utils_1.SpeakeasyBase));
exports.SubmitDataQueryRequestOutput = SubmitDataQueryRequestOutput;
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
var SubmitDataQueryRequestOutputFormatEnum;
(function (SubmitDataQueryRequestOutputFormatEnum) {
    SubmitDataQueryRequestOutputFormatEnum["Json"] = "JSON";
    SubmitDataQueryRequestOutputFormatEnum["Csv"] = "CSV";
    SubmitDataQueryRequestOutputFormatEnum["Tsv"] = "TSV";
    SubmitDataQueryRequestOutputFormatEnum["Dsv"] = "DSV";
})(SubmitDataQueryRequestOutputFormatEnum = exports.SubmitDataQueryRequestOutputFormatEnum || (exports.SubmitDataQueryRequestOutputFormatEnum = {}));
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
var SubmitDataQueryRequestSourceDataEnum;
(function (SubmitDataQueryRequestSourceDataEnum) {
    SubmitDataQueryRequestSourceDataEnum["Datahub"] = "DATAHUB";
    SubmitDataQueryRequestSourceDataEnum["Live"] = "LIVE";
})(SubmitDataQueryRequestSourceDataEnum = exports.SubmitDataQueryRequestSourceDataEnum || (exports.SubmitDataQueryRequestSourceDataEnum = {}));
var SubmitDataQueryRequest = /** @class */ (function (_super) {
    __extends(SubmitDataQueryRequest, _super);
    function SubmitDataQueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "columnSeparator" }),
        __metadata("design:type", String)
    ], SubmitDataQueryRequest.prototype, "columnSeparator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "compression" }),
        __metadata("design:type", String)
    ], SubmitDataQueryRequest.prototype, "compression", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "encryptionKey" }),
        __metadata("design:type", String)
    ], SubmitDataQueryRequest.prototype, "encryptionKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "output" }),
        (0, class_transformer_1.Type)(function () { return SubmitDataQueryRequestOutput; }),
        __metadata("design:type", SubmitDataQueryRequestOutput)
    ], SubmitDataQueryRequest.prototype, "output", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "outputFormat" }),
        __metadata("design:type", String)
    ], SubmitDataQueryRequest.prototype, "outputFormat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "query" }),
        __metadata("design:type", String)
    ], SubmitDataQueryRequest.prototype, "query", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "readDeleted" }),
        __metadata("design:type", Boolean)
    ], SubmitDataQueryRequest.prototype, "readDeleted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "sourceData" }),
        __metadata("design:type", String)
    ], SubmitDataQueryRequest.prototype, "sourceData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "useIndexJoin" }),
        __metadata("design:type", Boolean)
    ], SubmitDataQueryRequest.prototype, "useIndexJoin", void 0);
    return SubmitDataQueryRequest;
}(utils_1.SpeakeasyBase));
exports.SubmitDataQueryRequest = SubmitDataQueryRequest;
