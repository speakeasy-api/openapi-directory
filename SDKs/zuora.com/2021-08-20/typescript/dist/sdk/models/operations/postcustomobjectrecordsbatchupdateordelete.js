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
exports.PostCustomObjectRecordsBatchUpdateOrDeleteResponse = exports.PostCustomObjectRecordsBatchUpdateOrDeleteRequest = exports.PostCustomObjectRecordsBatchUpdateOrDeleteHeaders = exports.PostCustomObjectRecordsBatchUpdateOrDeletePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostCustomObjectRecordsBatchUpdateOrDeletePathParams = /** @class */ (function (_super) {
    __extends(PostCustomObjectRecordsBatchUpdateOrDeletePathParams, _super);
    function PostCustomObjectRecordsBatchUpdateOrDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=object" }),
        __metadata("design:type", String)
    ], PostCustomObjectRecordsBatchUpdateOrDeletePathParams.prototype, "object", void 0);
    return PostCustomObjectRecordsBatchUpdateOrDeletePathParams;
}(utils_1.SpeakeasyBase));
exports.PostCustomObjectRecordsBatchUpdateOrDeletePathParams = PostCustomObjectRecordsBatchUpdateOrDeletePathParams;
var PostCustomObjectRecordsBatchUpdateOrDeleteHeaders = /** @class */ (function (_super) {
    __extends(PostCustomObjectRecordsBatchUpdateOrDeleteHeaders, _super);
    function PostCustomObjectRecordsBatchUpdateOrDeleteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostCustomObjectRecordsBatchUpdateOrDeleteHeaders.prototype, "authorization", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" }),
        __metadata("design:type", String)
    ], PostCustomObjectRecordsBatchUpdateOrDeleteHeaders.prototype, "zuoraEntityIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" }),
        __metadata("design:type", String)
    ], PostCustomObjectRecordsBatchUpdateOrDeleteHeaders.prototype, "zuoraTrackId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Zuora-Version" }),
        __metadata("design:type", Date)
    ], PostCustomObjectRecordsBatchUpdateOrDeleteHeaders.prototype, "zuoraVersion", void 0);
    return PostCustomObjectRecordsBatchUpdateOrDeleteHeaders;
}(utils_1.SpeakeasyBase));
exports.PostCustomObjectRecordsBatchUpdateOrDeleteHeaders = PostCustomObjectRecordsBatchUpdateOrDeleteHeaders;
var PostCustomObjectRecordsBatchUpdateOrDeleteRequest = /** @class */ (function (_super) {
    __extends(PostCustomObjectRecordsBatchUpdateOrDeleteRequest, _super);
    function PostCustomObjectRecordsBatchUpdateOrDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCustomObjectRecordsBatchUpdateOrDeletePathParams)
    ], PostCustomObjectRecordsBatchUpdateOrDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCustomObjectRecordsBatchUpdateOrDeleteHeaders)
    ], PostCustomObjectRecordsBatchUpdateOrDeleteRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CustomObjectRecordBatchRequest)
    ], PostCustomObjectRecordsBatchUpdateOrDeleteRequest.prototype, "request", void 0);
    return PostCustomObjectRecordsBatchUpdateOrDeleteRequest;
}(utils_1.SpeakeasyBase));
exports.PostCustomObjectRecordsBatchUpdateOrDeleteRequest = PostCustomObjectRecordsBatchUpdateOrDeleteRequest;
var PostCustomObjectRecordsBatchUpdateOrDeleteResponse = /** @class */ (function (_super) {
    __extends(PostCustomObjectRecordsBatchUpdateOrDeleteResponse, _super);
    function PostCustomObjectRecordsBatchUpdateOrDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostCustomObjectRecordsBatchUpdateOrDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CustomObjectRecordsBatchUpdatePartialSuccessResponse)
    ], PostCustomObjectRecordsBatchUpdateOrDeleteResponse.prototype, "customObjectRecordsBatchUpdatePartialSuccessResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CustomObjectRecordsErrorResponse)
    ], PostCustomObjectRecordsBatchUpdateOrDeleteResponse.prototype, "customObjectRecordsErrorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CustomObjectRecordsThrottledResponse)
    ], PostCustomObjectRecordsBatchUpdateOrDeleteResponse.prototype, "customObjectRecordsThrottledResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponse401Record)
    ], PostCustomObjectRecordsBatchUpdateOrDeleteResponse.prototype, "errorResponse401Record", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostCustomObjectRecordsBatchUpdateOrDeleteResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostCustomObjectRecordsBatchUpdateOrDeleteResponse.prototype, "statusCode", void 0);
    return PostCustomObjectRecordsBatchUpdateOrDeleteResponse;
}(utils_1.SpeakeasyBase));
exports.PostCustomObjectRecordsBatchUpdateOrDeleteResponse = PostCustomObjectRecordsBatchUpdateOrDeleteResponse;
