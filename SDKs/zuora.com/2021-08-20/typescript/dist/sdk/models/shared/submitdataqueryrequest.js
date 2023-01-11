"use strict";
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
var SubmitDataQueryRequestCompressionEnum;
(function (SubmitDataQueryRequestCompressionEnum) {
    SubmitDataQueryRequestCompressionEnum["None"] = "NONE";
    SubmitDataQueryRequestCompressionEnum["Gzip"] = "GZIP";
    SubmitDataQueryRequestCompressionEnum["Zip"] = "ZIP";
})(SubmitDataQueryRequestCompressionEnum = exports.SubmitDataQueryRequestCompressionEnum || (exports.SubmitDataQueryRequestCompressionEnum = {}));
var SubmitDataQueryRequestOutputTargetEnum;
(function (SubmitDataQueryRequestOutputTargetEnum) {
    SubmitDataQueryRequestOutputTargetEnum["S3"] = "S3";
})(SubmitDataQueryRequestOutputTargetEnum = exports.SubmitDataQueryRequestOutputTargetEnum || (exports.SubmitDataQueryRequestOutputTargetEnum = {}));
// SubmitDataQueryRequestOutput
/**
 * Additional information about the query results.
 *
**/
var SubmitDataQueryRequestOutput = /** @class */ (function (_super) {
    __extends(SubmitDataQueryRequestOutput, _super);
    function SubmitDataQueryRequestOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=target" }),
        __metadata("design:type", String)
    ], SubmitDataQueryRequestOutput.prototype, "target", void 0);
    return SubmitDataQueryRequestOutput;
}(utils_1.SpeakeasyBase));
exports.SubmitDataQueryRequestOutput = SubmitDataQueryRequestOutput;
var SubmitDataQueryRequestOutputFormatEnum;
(function (SubmitDataQueryRequestOutputFormatEnum) {
    SubmitDataQueryRequestOutputFormatEnum["Json"] = "JSON";
    SubmitDataQueryRequestOutputFormatEnum["Csv"] = "CSV";
    SubmitDataQueryRequestOutputFormatEnum["Tsv"] = "TSV";
    SubmitDataQueryRequestOutputFormatEnum["Dsv"] = "DSV";
})(SubmitDataQueryRequestOutputFormatEnum = exports.SubmitDataQueryRequestOutputFormatEnum || (exports.SubmitDataQueryRequestOutputFormatEnum = {}));
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
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=columnSeparator" }),
        __metadata("design:type", String)
    ], SubmitDataQueryRequest.prototype, "columnSeparator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=compression" }),
        __metadata("design:type", String)
    ], SubmitDataQueryRequest.prototype, "compression", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encryptionKey" }),
        __metadata("design:type", String)
    ], SubmitDataQueryRequest.prototype, "encryptionKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=output" }),
        __metadata("design:type", SubmitDataQueryRequestOutput)
    ], SubmitDataQueryRequest.prototype, "output", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=outputFormat" }),
        __metadata("design:type", String)
    ], SubmitDataQueryRequest.prototype, "outputFormat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=query" }),
        __metadata("design:type", String)
    ], SubmitDataQueryRequest.prototype, "query", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=readDeleted" }),
        __metadata("design:type", Boolean)
    ], SubmitDataQueryRequest.prototype, "readDeleted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sourceData" }),
        __metadata("design:type", String)
    ], SubmitDataQueryRequest.prototype, "sourceData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=useIndexJoin" }),
        __metadata("design:type", Boolean)
    ], SubmitDataQueryRequest.prototype, "useIndexJoin", void 0);
    return SubmitDataQueryRequest;
}(utils_1.SpeakeasyBase));
exports.SubmitDataQueryRequest = SubmitDataQueryRequest;
