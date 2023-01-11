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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectPostImportResponse = exports.ObjectPostImportRequest = exports.ObjectPostImportRequestBody = exports.ObjectPostImportRequestBodyImportTypeEnum = exports.ObjectPostImportRequestBodyFile = exports.ObjectPostImportHeaders = exports.ObjectPostImportQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ObjectPostImportQueryParams = /** @class */ (function (_super) {
    __extends(ObjectPostImportQueryParams, _super);
    function ObjectPostImportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=rejectUnknownFields" }),
        __metadata("design:type", Boolean)
    ], ObjectPostImportQueryParams.prototype, "rejectUnknownFields", void 0);
    return ObjectPostImportQueryParams;
}(utils_1.SpeakeasyBase));
exports.ObjectPostImportQueryParams = ObjectPostImportQueryParams;
var ObjectPostImportHeaders = /** @class */ (function (_super) {
    __extends(ObjectPostImportHeaders, _super);
    function ObjectPostImportHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], ObjectPostImportHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], ObjectPostImportHeaders.prototype, "zuoraTrackId", void 0);
    return ObjectPostImportHeaders;
}(utils_1.SpeakeasyBase));
exports.ObjectPostImportHeaders = ObjectPostImportHeaders;
var ObjectPostImportRequestBodyFile = /** @class */ (function (_super) {
    __extends(ObjectPostImportRequestBodyFile, _super);
    function ObjectPostImportRequestBodyFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=File" }),
        __metadata("design:type", String)
    ], ObjectPostImportRequestBodyFile.prototype, "file", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], ObjectPostImportRequestBodyFile.prototype, "content", void 0);
    return ObjectPostImportRequestBodyFile;
}(utils_1.SpeakeasyBase));
exports.ObjectPostImportRequestBodyFile = ObjectPostImportRequestBodyFile;
var ObjectPostImportRequestBodyImportTypeEnum;
(function (ObjectPostImportRequestBodyImportTypeEnum) {
    ObjectPostImportRequestBodyImportTypeEnum["Usage"] = "Usage";
    ObjectPostImportRequestBodyImportTypeEnum["Payment"] = "Payment";
    ObjectPostImportRequestBodyImportTypeEnum["Quote"] = "Quote";
    ObjectPostImportRequestBodyImportTypeEnum["TaxationDetail"] = "TaxationDetail";
    ObjectPostImportRequestBodyImportTypeEnum["UpdateAccountingCode"] = "UpdateAccountingCode";
    ObjectPostImportRequestBodyImportTypeEnum["CreateRevenueSchedule"] = "CreateRevenueSchedule";
    ObjectPostImportRequestBodyImportTypeEnum["UpdateRevenueSchedule"] = "UpdateRevenueSchedule";
    ObjectPostImportRequestBodyImportTypeEnum["DeleteRevenueSchedule"] = "DeleteRevenueSchedule";
    ObjectPostImportRequestBodyImportTypeEnum["ImportFxRate"] = "ImportFXRate";
})(ObjectPostImportRequestBodyImportTypeEnum = exports.ObjectPostImportRequestBodyImportTypeEnum || (exports.ObjectPostImportRequestBodyImportTypeEnum = {}));
var ObjectPostImportRequestBody = /** @class */ (function (_super) {
    __extends(ObjectPostImportRequestBody, _super);
    function ObjectPostImportRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, file=true" }),
        __metadata("design:type", ObjectPostImportRequestBodyFile)
    ], ObjectPostImportRequestBody.prototype, "file", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=ImportType" }),
        __metadata("design:type", String)
    ], ObjectPostImportRequestBody.prototype, "importType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=Name" }),
        __metadata("design:type", String)
    ], ObjectPostImportRequestBody.prototype, "name", void 0);
    return ObjectPostImportRequestBody;
}(utils_1.SpeakeasyBase));
exports.ObjectPostImportRequestBody = ObjectPostImportRequestBody;
var ObjectPostImportRequest = /** @class */ (function (_super) {
    __extends(ObjectPostImportRequest, _super);
    function ObjectPostImportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ObjectPostImportQueryParams)
    ], ObjectPostImportRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ObjectPostImportHeaders)
    ], ObjectPostImportRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", ObjectPostImportRequestBody)
    ], ObjectPostImportRequest.prototype, "request", void 0);
    return ObjectPostImportRequest;
}(utils_1.SpeakeasyBase));
exports.ObjectPostImportRequest = ObjectPostImportRequest;
var ObjectPostImportResponse = /** @class */ (function (_super) {
    __extends(ObjectPostImportResponse, _super);
    function ObjectPostImportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ObjectPostImportResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ObjectPostImportResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ProxyPostImport)
    ], ObjectPostImportResponse.prototype, "proxyPostImport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ProxyUnauthorizedResponse)
    ], ObjectPostImportResponse.prototype, "proxyUnauthorizedResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ObjectPostImportResponse.prototype, "statusCode", void 0);
    return ObjectPostImportResponse;
}(utils_1.SpeakeasyBase));
exports.ObjectPostImportResponse = ObjectPostImportResponse;
